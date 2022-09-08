import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import TextArea from 'react-textarea-autosize';

import styled from 'styled-components';
import { UPDATE_POST_REQUEST } from '../reducers/post';

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

const ContentInput = styled(TextArea)`
  width: 90%;
  border: none;
  font-size: 16px;
  min-height: 90px;
  max-height: 400px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: #f8f9fa;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 93%;
`;

const SubmitButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 30px; 
  background-color: #1864ab;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  outline: none;
  opacity: ${props => (props.isAvailablePosting ? 1 : 0.6)};
  transition: all 0.2s linear;
`;

const CancelButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 30px; 
  margin-left: 5px;
  background-color: #e8537c;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  outline: none;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
  transition: all 0.2s linear;
`;

const PostUpdateForm = ({ postId, postContent, setEditMode }) => {
  const dispatch = useDispatch();

  const [contentInput, setContentInput] = useState(postContent);
  const [isAvailablePosting, setIsAvailablePosting] = useState(false);

  const onChangeEditContent = useCallback((e) => {
    const {target: {value}} = e;
    setContentInput(e.target.value);
    if (value.trim()) {
      setIsAvailablePosting(true);
    } else if (value.length === 0 || value.length > 500) {
      setIsAvailablePosting(false);
    };
  }, [contentInput]);

  const onCancelUpdate = useCallback(() => {
    setEditMode(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (!contentInput || !contentInput.trim() ) {
      return alert('글을 작성해주세요.')
    };
    
    if (contentInput.length > 500) {
      return alert('글자수가 너무 많습니다.');
    };

    dispatch({
      type: UPDATE_POST_REQUEST,
      data: {
        postId: postId,
        content: contentInput,
      }
    });

    setEditMode(prev => !prev);
  }, [contentInput]);

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <ContentInput
          value={contentInput}
          onChange={onChangeEditContent}
          style={{
            resize: "none",
            outline: "none",
            overflow: "hidden",
          }}
        />
        <ButtonContainer>
          <SubmitButton type="submit" isAvailablePosting={isAvailablePosting}>수정</SubmitButton>
          <CancelButton onClick={onCancelUpdate}>취소</CancelButton>
        </ButtonContainer>
      </Form>
    </Container>
  )
};

PostUpdateForm.propTypes = {
  postId: PropTypes.number.isRequired,
  postContent: PropTypes.string.isRequired,
  setEditMode: PropTypes.func.isRequired,
};

export default PostUpdateForm;

