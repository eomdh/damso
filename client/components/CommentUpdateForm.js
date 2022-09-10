import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { UPDATE_COMMENT_REQUEST } from '../reducers/post';
import TextArea from 'react-textarea-autosize';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-top: 15px;
`;

const Form = styled.form`
  width: 100%;
  min-height: 50px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ContentInput = styled(TextArea)`
  border: none;
  padding: 8px;
  margin-right: 13px;
  font-size: 16px;
  min-height: 40px;
  max-height: 300px;
  border-radius: 10px;
  background-color: #f8f9fa;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 13px;
  margin-top: 7px;
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


const CommentUpdateForm = ({ postId, commentId, commentContent, setEditMode }) => {
  const dispatch = useDispatch();
  const [commentInput, setCommentInput] = useState(commentContent);
  const [isAvailablePosting, setIsAvailablePosting] = useState(false);

  const onChangeComment = useCallback((e) => {
    const {target: {value}} = e;
    setCommentInput(e.target.value);
    if (value.trim()) {
      setIsAvailablePosting(true);
    } else if (value.length === 0 || value.length > 500) {
      setIsAvailablePosting(false);
    };
  }, [commentInput]);

  const onCancelUpdate = useCallback(() => {
    setEditMode(false);
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (commentInput.length > 200) {
      alert("글자수가 너무 많습니다.");
      return;
    };
    
    if (!commentInput || !commentInput.trim()) {
      return alert("댓글을 작성해주세요.");
    };

    dispatch ({
      type: UPDATE_COMMENT_REQUEST,
      data: {
        postId: postId,
        commentId: commentId,
        content: commentInput,
      }
    });

    setEditMode(false);
  }, [commentInput]);

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <ContentInput 
          value={commentInput}
          onChange={onChangeComment}
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
  );
};

CommentUpdateForm.propTypes = {
  postId: PropTypes.number.isRequired,
  commentId: PropTypes.number.isRequired,
  commentContent: PropTypes.string.isRequired,
  setEditMode: PropTypes.func.isRequired,
};

export default CommentUpdateForm;