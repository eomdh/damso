import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { BsPlusCircleFill } from 'react-icons/bs';

const Form = styled.form`
  margin-left: 100px;
`;

const PlusIconContainer = styled.div`
  font-size: 27px;
  color: #1864ab;
  opacity: 0.6;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

const ProfileImageEditForm = () => {
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

  const onSubmit = useCallback((e) => {
    e.preventDefault();

  }, []);

  return (
    <Form onSubmit={onSubmit} encType="multipart/form-data">
      <input
        type="file"
        name="profileImage"
        multiple
        hidden
        ref={imageInput}
        onChange={onChangeImages}
      />
      <PlusIconContainer onClick={onClickImageUpload}>
        <BsPlusCircleFill />
      </PlusIconContainer>
    </Form>
  );
};

export default ProfileImageEditForm;