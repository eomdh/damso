import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_EDIT_MODE, LOAD_IMAGE_PATHS, REMOVE_IMAGE, UPDATE_POST_REQUEST, UPLOAD_IMAGES_REQUEST } from '../reducers/post';
import TextArea from 'react-textarea-autosize';

import styled from 'styled-components';
import { FaRegImage } from 'react-icons/fa';
import { MdCancel } from "react-icons/md";
import device from '../utils/device';

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

const ImageUploadContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 93%;
`;

const ImageContainer = styled.div`
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

const ImageDeleteContainer = styled.div`
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 93%;
`;

const ImageUploadIcon = styled.div`
  color: #1864ab;
  font-size: 37px;
  margin: -10px 5px 0px 0px;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transform: scale(0.98);
  }
`;

const SubmitButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 28px;
  font-size: 14px;
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
  width: 58px;
  height: 28px; 
  font-size: 14px;
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

const PostUpdateForm = ({ post, editMode, setEditMode }) => {
  const dispatch = useDispatch();

  const { updatePostImagePaths } = useSelector((state) => state.post);
  const [content, setContent] = useState(post.content);
  const [isAvailablePosting, setIsAvailablePosting] = useState(false);

  useEffect(() => {
    if (editMode && post.Images) {
      const images = post.Images.map((v) => v.src);
      dispatch({
        type: LOAD_IMAGE_PATHS,
        data: images,
      })
    };
  }, [editMode]);

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
    imageFormData.append('type', 'updatePost');

    return dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  });

  const onRemoveImage = useCallback((index) => () => {
    dispatch({
      type: REMOVE_IMAGE,
      data: {
        type: 'updatePost',
        index: index,
      }
    })
  });

  const onCancelUpdate = useCallback(() => {
    dispatch({
      type: CLOSE_EDIT_MODE,
    })

    setEditMode(false);
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
    updatePostImagePaths.forEach((path) => {
      formData.append('postImages', path);
    });
    formData.append('content', content);

    dispatch({
      type: UPDATE_POST_REQUEST,
      postId: post.id,
      data: formData,
    });

    setEditMode(false);
  }, [updatePostImagePaths, content]);

  return (
    <Container>
      <Form onSubmit={onSubmit} encType="multipart/form-data">
        <ContentInput
          value={content}
          onChange={onChangeContent}
          style={{
            height: "93px",
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
        <ButtonContainer>
          <ImageUploadIcon onClick={onClickImageUpload}>
            <FaRegImage />
          </ImageUploadIcon>
          <SubmitButton type="submit" isAvailablePosting={isAvailablePosting}>수정</SubmitButton>
          <CancelButton type="button" onClick={onCancelUpdate}>취소</CancelButton>
        </ButtonContainer>
        <ImageUploadContainer>
          {updatePostImagePaths && updatePostImagePaths.map((v, i) => (
            <ImageContainer key={v}>
              <Image 
                src={`http://localhost:3065/postImages/${v}`} 
                alt={v}
              />
              <ImageDeleteContainer onClick={onRemoveImage(i)}>
                <MdCancel />
              </ImageDeleteContainer>
            </ImageContainer>
          ))}
        </ImageUploadContainer>
      </Form>
    </Container>
  )
};

PostUpdateForm.propTypes = {
  post: PropTypes.object.isRequired,
  editMode: PropTypes.bool.isRequired,
  setEditMode: PropTypes.func.isRequired,
};

export default PostUpdateForm;

