import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TextArea from 'react-textarea-autosize';

const Container = styled.div`
  width: 100%;
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
  width: 83%;
  border: none;
  padding: 8px;
  font-size: 16px;
  min-height: 40px;
  max-height: 300px;
  border-radius: 10px;
  background-color: #f8f9fa;
`;

const SubmitButton = styled.button`
  all: unset;
  position: absolute;
  background-color: #1864ab;
  color: white;
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 14px;
  width: 70px;
  height: 30px;
  border-radius: 6px;
  bottom: 22px;
  right: 20px;
  cursor: pointer;
  opacity: ${props => (props.isAvailableUpload ? 1 : 0.6)};
  transition: opacity 0.3s linear;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const CommentForm = ({ post }) => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const id = useSelector((state) => state.user.me?.id);

  const [content, setContent] = useState('');
  const onChangeContent = useCallback((e) => {
    const {target: {value}} = e;
    setContent(e.target.value);
    if (value.trim()) {
      setIsAvailablePosting(true);
    } else if (value.length === 0 || value.length > 500) {
      setIsAvailablePosting(false);
    };
  }, [content]);

  const [isAvailablePosting, setIsAvailablePosting] = useState(false);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (content.length > 500) {
      alert("글자수가 너무 많습니다.");
      return;
    }
    if (!content || !content.trim()) {
      return alert("댓글을 작성해주세요.");
    }
    console.log(post.id, content);
  }, [content])

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <ContentInput
          placeholder={isLoggedIn ? "댓글을 남겨주세요." : "로그인 후 이용해주세요."}
          disabled={isLoggedIn ? false : true}
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
  )
}

export default CommentForm;