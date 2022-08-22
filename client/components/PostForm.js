import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import TextArea from 'react-textarea-autosize';
import { FaRegImage } from 'react-icons/fa';
import { IoMdRemove } from "react-icons/io";
import { addPost } from "../reducers/post";
import ProfileImage from "./ProfileImage";

const Container = styled.div`
  width: 100%;
  max-height: 500px;
`;

const FormContainer = styled.form`
  width: 100%;
  min-height: 120px;
  border-bottom: 5px solid #e6ecf0;
  padding: 10px;
  position: relative;
`;

const FormUpSideContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ProfileImageContainer = styled.div`
  width: 55px;
  height: 55px;
  margin-right: 15px;
  border-radius: 50px;
  overflow: hidden;
`;

const ContentInput = styled(TextArea)`
  width: 80%;
  border: none;
  font-size: 16px;
  min-height: 50px;
  max-height: 300px;
  margin-bottom: 50px;
  :disabled {
    background-color: white;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  bottom: -3.5px;
  right: 107px;
  color: #1864ab;
  font-size: 38px;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transform: scale(0.98);
  }
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
  bottom: 10px;
  right: 30px;
  cursor: pointer;
  opacity: ${props => (props.isAvailablePosting ? 1 : 0.5)};
  transition: all 0.3s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
`;

const ImageUploadContainer = styled.div`
  display: flex;
  width: 50%;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 150px;
  margin-top: 5px;
`;

const ImageDeleteContainer = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  color: red;
  font-size: 2px;
  border: 1px solid red;
  border-radius: 50%;
  padding: 1px;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transform: scale(0.98);
  }
`;

const PostForm = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { imagePaths } = useSelector((state) => state.post);
  const dispatch = useDispatch();

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

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  
  const onChangeImages = useCallback((e) => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append("image", f);
    });

    console.log(imageFormData);
  });

  const [isAvailablePosting, setIsAvailablePosting] = useState(false);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(addPost);
    setContent('');
  }, []);

  return (
    <Container>
      <FormContainer onSubmit={onSubmit} encType="multipart/form-data">
        <FormUpSideContainer>
          <ProfileImageContainer>
            <ProfileImage src={require('../image/user.png')} />
          </ProfileImageContainer>
          <ContentInput 
            placeholder={isLoggedIn ? "오늘은 어떤 일이 있었나요?" : "로그인 후 사용해주세요."}
            disabled={isLoggedIn ? false : true}
            value={content}
            onChange={onChangeContent}
            style={{
              resize: "none",
              outline: "none",
              overflow: "hidden",
            }}
          />
          <input
            type="file"
            multiple
            hidden
            ref={imageInput}
            onChange={onChangeImages}
          />
          <IconContainer onClick={onClickImageUpload}>
            <FaRegImage />
          </IconContainer>
          <SubmitButton type="submit" isAvailablePosting={isAvailablePosting}>
            게시
          </SubmitButton>
        </FormUpSideContainer>
        <ImageUploadContainer>
          {imagePaths && imagePaths.map((path, i) => (
            <ImageContainer key={path}>
              <Image 
                src={`${path}`} 
                alt={path}
                style={{ width: "50px" }}
              />
              <ImageDeleteContainer onClick={onClickDeleteImage(i)}>
                <IoMdRemove />
              </ImageDeleteContainer>
            </ImageContainer>
          ))}
        </ImageUploadContainer>
      </FormContainer>
    </Container>
  );
};

export default PostForm;