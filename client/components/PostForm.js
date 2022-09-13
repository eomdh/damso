import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from "../reducers/post";
import TextArea from 'react-textarea-autosize';
import ProfileImage from "./ProfileImage";

import styled from 'styled-components';
import { FaRegImage } from 'react-icons/fa';
import { MdCancel } from "react-icons/md";
import device from '../utils/device';

const Container = styled.div`
  width: 100%;
  max-height: 500px;
  background-color: white;
`;

const Form = styled.form`
  width: 100%;
  min-height: 120px;
  border-bottom: 10px solid #e6ecf0;
  padding: 10px;
  position: relative;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ProfileImageContainer = styled.div`
  width: 55px;
  height: 55px;
  margin: 0px 20px 0px 10px;
  border-radius: 50px;
  overflow: hidden;
`;

const ContentInput = styled(TextArea)`
  width: 80%;
  height: 200px;
  border: none;
  font-size: 16px;
  font-family: 'Noto Sans', sans-serif;
  font-family: 'Noto Sans KR', sans-serif;
  min-height: 50px;
  max-height: 300px;
  margin-bottom: 50px;
  :disabled {
    background-color: white;
  }
`;

const ImageUploadIcon = styled.div`
  position: absolute;
  bottom: -3.5px;
  right: 107px;
  color: #1864ab;
  font-size: 38px;
  opacity: 0.5;
  cursor: pointer;
  pointer-events: ${props => (props.me ? null : "none")};
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
  font-weight: 500;
  font-size: 16px;
  width: 70px;
  height: 30px;
  border-radius: 6px;
  bottom: 12px;
  right: 30px;
  cursor: pointer;
  pointer-events: ${props => (props.me ? null : "none")};
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
  display: inline-block;
  margin-right: 15px;
  position: relative;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 5px;

  @media ${device.mobileL} {
    width: 40px;
    height: 40px;
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
  const { me } = useSelector((state) => state.user);
  const { addPostImagePaths, addPostDone } = useSelector((state) => state.post);
  const dispatch = useDispatch();

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
          <input
            type="file"
            name="image"
            multiple
            hidden
            ref={imageInput}
            onChange={onChangeImages}
          />
          <ImageUploadIcon me={me} onClick={onClickImageUpload}>
            <FaRegImage />
          </ImageUploadIcon>
          <SubmitButton type="submit" me={me} isAvailablePosting={isAvailablePosting}>
            게시
          </SubmitButton>
        </InputContainer>
        <ImageUploadContainer>
          {addPostImagePaths && addPostImagePaths.map((v, i) => (
            <ImageContainer key={v}>
              <Image 
                src={`http://localhost:3065/postImages/${v}`} 
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