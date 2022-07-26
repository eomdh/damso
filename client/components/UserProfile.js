import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 700px;
  height: 500px;
  background-color: white;
  border-radius: 20px;
  margin-top: 50px;
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

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
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


const UserProfile = () => {
  // const followerList = [{ nickname: '한예지'}, { nickname: '채송현'}, { nickname : '김상원'}];
  // const followingList = [{ nickname: '한예지'}, { nickname: '채송현'}, { nickname : '김상원'}];

  return (
    <Container>
      <ProfileImageContainer>
        <ProfileImage src={require('../image/me.png')} />
      </ProfileImageContainer>
      <NicknameContainer>
        <Nickname>Eomdh</Nickname>
      </NicknameContainer>
    </Container>
  )
};

export default UserProfile;