import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';
import TextArea from 'react-textarea-autosize';

import styled from 'styled-components';
import device from '../utils/device';

const Container = styled.div`
  width: 100%;
  margin-left: 20px;
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 80%;
  border: none;
  padding: 8px;
  font-size: 16px;
  font-family: 'Noto Sans', sans-serif;
  font-family: 'Noto Sans KR', sans-serif;
  min-height: 40px;
  max-height: 300px;
  border-radius: 10px;
  background-color: #f8f9fa;

  @media ${device.mobileL} {
    width: 72%;
  }
`;

const SubmitButton = styled.button`
  all: unset;
  position: absolute;
  background-color: #1864ab;
  color: white;
  letter-spacing: 2px;
  font-weight: 400;
  font-size: 15px;
  width: 70px;
  height: 30px;
  border-radius: 6px;
  bottom: 22px;
  right: 45px;
  cursor: pointer;
  opacity: ${props => (props.isAvailableUpload ? 1 : 0.6)};
  transition: opacity 0.3s linear;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobileL} {
    font-size: 12px;
    width: 50px;
    height: 30px;
    right: 30px;
  }
`;

const CommentForm = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);
  const { addCommentDone } = useSelector((state) => state.post);
  
  const [content, setContent] = useState('');
  const [isAvailablePosting, setIsAvailablePosting] = useState(false);

  useEffect(() => {
    if (addCommentDone) {
      setContent('');
    }
  }, [addCommentDone])

  const onChangeContent = useCallback((e) => {
    const {target: {value}} = e;
    setContent(e.target.value);
    if (value.trim()) {
      setIsAvailablePosting(true);
    } else if (value.length === 0 || value.length > 200) {
      setIsAvailablePosting(false);
    };
  }, [content]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (content.length > 200) {
      alert("글자수가 너무 많습니다.");
      return;
    };

    if (!content || !content.trim()) {
      return alert("댓글을 작성해주세요.");
    };

    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { 
        content: content, 
        postId: post.id, 
        userId: id 
      }
    });
  }, [content])

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <ContentInput
          placeholder={id ? "댓글을 남겨주세요." : "로그인 후 이용해주세요."}
          disabled={id ? false : true}
          value={content}
          onChange={onChangeContent}
          style={{
            resize: "none",
            outline: "none",
            overflow: "hidden",
          }}
        />
        <SubmitButton type="submit" isAvailableUpload={isAvailablePosting}>입력</SubmitButton>
      </Form>
    </Container>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;