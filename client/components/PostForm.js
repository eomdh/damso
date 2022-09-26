import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from "../reducers/post";
import TextArea from 'react-textarea-autosize';
import ProfileImage from "./ProfileImage";

import styled from 'styled-components';
import { FaRegImage } from 'react-icons/fa';
import { MdCancel } from "react-icons/md";
import device from '../utils/device';
import { serverURL } from "../config/config";

const Container = styled.div`
  width: 100%;
  max-height: 500px;
  background-color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 120px;
  border-bottom: 10px solid #e6ecf0;
  padding: 10px;
`;

const InputContainer = styled.div`
  display: flex;
`;

const ProfileImageContainer = styled.div`
  width: 55px;
  height: 55px;
  margin-left: 5px;
  margin-right: 15px;
  border-radius: 50px;
  overflow: hidden;
`;

const TextAreaContainer = styled.div`
  padding-right: 25px;
  width: 80%;

  @media ${device.mobile} {
    width: 100%;
  }
`;

const ContentInput = styled(TextArea)`
  width: 100%;
  border: none;
  font-size: 16px;
  font-family: 'Noto Sans KR', sans-serif;
  min-height: 75px;
  max-height: 300px;
  :disabled {
    background-color: white;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 35px;
  align-items: center;
  margin-right: 25px;
`;

const ImageUploadIcon = styled.div`
  margin-top: 4px;
  margin-right: 6px;
  color: #1864ab;
  font-size: 39px;
  opacity: 0.5;
  cursor: pointer;
  pointer-events: ${props => (props.me ? null : "none")};
  &:hover {
    opacity: 1;
    transform: scale(0.98);
  }
`;

const SubmitButton = styled.button`
  width: 70px;
  height: 30px;
  background-color: #1864ab;
  color: white;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  pointer-events: ${props => (props.me ? null : "none")};
  opacity: ${props => (props.isAvailablePosting ? 1 : 0.5)};
  transition: all 0.3s linear;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageUploadContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  margin-left: 10px;
  margin-right: 15px;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 5px;

  @media ${device.mobileL} {
    width: 45px;
    height: 45px;
  }
`;

const ImageDeleteIcon = styled.div`
  position: absolute;
  top: 4px;
  right: 1px;
  color: red;
  font-size: 20px;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transform: scale(0.98);
  }
`;

const PostForm = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { addPostImagePaths, addPostDone } = useSelector((state) => state.post);

  const [content, setContent] = useState('');
  const [isAvailablePosting, setIsAvailablePosting] = useState(false);

  useEffect(() => {
    if (addPostDone) {
      setContent('');
    };
  }, [addPostDone]);

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
    console.log('image', e.target.files);
    const imageFormData = new FormData();

    [].forEach.call(e.target.files, (file) => {
      imageFormData.append('image', file);
    });
    imageFormData.append('type', 'addPost');

    return dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  }, []);

  const onRemoveImage = useCallback((index) => () => {
    dispatch({
      type: REMOVE_IMAGE,
      data: {
        type: "addPost",
        index: index,
      }
    })
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    if (!content || !content.trim() ) {
      return alert('글을 작성해주세요.')
    };
    
    if (content.length > 500) {
      return alert('글자수가 너무 많습니다.');
    };

    const formData = new FormData();
    addPostImagePaths.forEach((path) => {
      formData.append('postImages', path);
    });
    formData.append('content', content);

    return dispatch({
      type: ADD_POST_REQUEST,
      data: formData
    });
  }, [content, addPostImagePaths]);

  return (
    <Container>
      <Form onSubmit={onSubmit} encType="multipart/form-data">
        <InputContainer>
          <ProfileImageContainer>
            <ProfileImage path={ me ? me.profileImagePath : null } />
          </ProfileImageContainer>
          <TextAreaContainer>
            <ContentInput 
              placeholder={me ? "오늘은 어떤 일이 있었나요?" : "로그인 후 이용해주세요."}
              disabled={me ? false : true}
              value={content}
              onChange={onChangeContent}
              style={{
                resize: "none",
                outline: "none",
                overflow: "hidden",
              }}
            />
          </TextAreaContainer>
          <input
            type="file"
            name="image"
            multiple
            hidden
            ref={imageInput}
            onChange={onChangeImages}
          />
        </InputContainer>
        <ButtonContainer>
          <ImageUploadIcon me={me} onClick={onClickImageUpload}>
            <FaRegImage />
          </ImageUploadIcon>
          <SubmitButton type="submit" me={me} isAvailablePosting={isAvailablePosting}>
            게시
          </SubmitButton>
        </ButtonContainer>
        <ImageUploadContainer>
          {addPostImagePaths && addPostImagePaths.map((v, i) => (
            <ImageContainer key={v}>
              <Image 
                src={`${serverURL}/postImages/${v}`} 
                alt={v}
              />
              <ImageDeleteIcon onClick={onRemoveImage(i)}>  
                <MdCancel />
              </ImageDeleteIcon>
            </ImageContainer>
          ))}
        </ImageUploadContainer>
      </Form>
    </Container>
  );
};

export default PostForm;