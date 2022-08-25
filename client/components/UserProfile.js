import React, { useCallback, useRef } from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import ProfileImage from './ProfileImage';
import { BsPlusCircleFill } from 'react-icons/bs';

const Container = styled.div`
  width: 700px;
  height: 400px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const ProfileImageContainer = styled.div`
  margin-top: 50px;
  margin-bottom: -40px;
  width: 150px;
  height: 150px;
  border-radius: 70%;
  overflow: hidden;
`;

const FormContainer = styled.form`
  margin-left: 100px;
`;

const IconContainer = styled.div`
  font-size: 27px;
  color: #1864ab;
  opacity: 0.6;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

const NicknameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 10px;
`;

const Nickname = styled.div`
  font-weight: 600;
  font-size: 25px;
  color: #212529;
`;

const UserProfile = ({ me }) => {
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


  const onSubmit = useCallback(() => {

  }, []);

  return (
    <Container>
      <ProfileImageContainer>
        <ProfileImage />
      </ProfileImageContainer>
      <FormContainer onSubmit={onSubmit} encType="multipart/form-data">
        <input
          type="file"
          multiple
          hidden
          ref={imageInput}
          onChange={onChangeImages}
        />
        <IconContainer onClick={onClickImageUpload}>
          <BsPlusCircleFill />
        </IconContainer>
      </FormContainer>
      <NicknameContainer>
        <Nickname>{ me.nickname }</Nickname>
      </NicknameContainer>
    </Container>
  )
};

export default UserProfile;