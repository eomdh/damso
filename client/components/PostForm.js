import React, { useCallback, useState } from "react";
import styled from 'styled-components';
import TextArea from 'react-textarea-autosize';

const Container = styled.div`
  width: 100%;
  max-height: 500px;
`;

const FormContainer = styled.form`
  width: 93%;
  min-height: 120px;
  border-bottom: 1px solid #e6ecf0;
  padding: 10px;
  display: flex;
  position: relative;
`;

const ProfileImageContainer = styled.div`
  margin-top: 50px;
  width: 70px;
  height: 70px;
  border-radius: 50px;
  overflow: hidden;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
`;

const ContentInput = styled(TextArea)`
  width: 95%;
  border: none;
  font-size: 16px;
  min-height: 50px;
  max-height: 300px;
  margin-bottom: 50px;
`;

const SubmitButton = styled.button`
  all: unset;
  position: absolute;
  background-color: #1864ab;
  color: white;
  -webkit-text-fill-color: white;
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 14px;
  width: 70px;
  height: 30px;
  border-radius: 6px;
  bottom: 5px;
  right: 5px;
  cursor: pointer;
  opacity: ${props => (props.isAvailablePosting ? 1 : 0.8)};
  transition: all 0.3s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  &:focus {
    outline: none;
  }
`;

const PostForm = () => {
  const [content, setContent] = useState('');
  const onChangeContent = useCallback((e) => {
    const value = e.target.value;
    setContent(e.target.value);
    if (!value.trim()) {
      setIsAvailablePosting(true);
    } else if (value.length === 0 || value.length > 500) {
      setIsAvailablePosting(false);
    };
  }, [content]);
  
  const [isAvailablePosting, setIsAvailablePosting] = useState(false);

  return (
    <Container>
      <FormContainer encType="multipart/form-data">
        <ProfileImageContainer>
          <ProfileImage src={require('../image/user.png')} />
        </ProfileImageContainer>
        <ContentInput 
          placeholder="오늘은 어떤 일이 있었나요?"
          value={content}
          onChange={onChangeContent}
          style={{
            resize: "none",
            outline: "none",
            overflow: "hidden",
           }}
        />
        <SubmitButton type="submit" isAvailablePosting={isAvailablePosting}>
          업로드
        </SubmitButton>
      </FormContainer>
    </Container>
  )
};

export default PostForm;