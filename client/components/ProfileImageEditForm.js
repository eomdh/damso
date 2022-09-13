import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { CHANGE_PROFILE_IMAGE_REQUEST } from '../reducers/user';

import styled from 'styled-components';
import { BsPlusCircleFill } from 'react-icons/bs';

const Form = styled.form`
  margin-top: -10px;
  margin-left: 100px;
`;

const PlusIconContainer = styled.div`
  font-size: 27px;
  color: #1864ab;
  opacity: 0.8;
  cursor: pointer;
  :hover {
    opacity: 1;
  };
`;

const ProfileImageEditForm = () => {
  const dispatch = useDispatch();

  const formData = new FormData();

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImage = useCallback((e) => {
    console.log('image', e.target.files);
    [].forEach.call(e.target.files, (file) => {
      formData.append('image', file);
    });

    dispatch({
      type: CHANGE_PROFILE_IMAGE_REQUEST,
      data: formData,
    });
  });

  return (
    <Form encType="multipart/form-data">
      <input
        type="file"
        name="image"
        hidden
        ref={imageInput}
        onChange={onChangeImage}
      />
      <PlusIconContainer onClick={onClickImageUpload}>
        <BsPlusCircleFill />
      </PlusIconContainer>
    </Form>
  );
};

export default ProfileImageEditForm;