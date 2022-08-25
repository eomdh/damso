import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import ProfileImage from './ProfileImage';

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
  width: 150px;
  height: 150px;
  border-radius: 70%;
  overflow: hidden;
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
  return (
    <Container>
      <ProfileImageContainer>
        <ProfileImage />
      </ProfileImageContainer>
      <NicknameContainer>
        <Nickname>{ me.nickname }</Nickname>
      </NicknameContainer>
    </Container>
  )
};

export default UserProfile;