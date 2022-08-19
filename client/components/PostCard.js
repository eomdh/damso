import React from 'react';
import styled from 'styled-components';
import ProfileImage from './ProfileImage';

const Container = styled.div`
  width: 100%;
  max-height: 700px;
  border-bottom: 5px solid #e6ecf0;
  padding: 10px;
`; 

const UpsideContainer = styled.div`
  display: flex;
  width: 100%;
`;

const PostInformationContainer = styled.div`
  width: 100%;
  display: flex;
  margin-left: 10px;
  margin-top: 3px;
`;

const ProfileImageContainer = styled.div`
  width: 70px;
  height: 60px;
  margin-right: 10px;
  border-radius: 50px;
  overflow: hidden;
`;

const Nickname = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const PostCard = ({ post }) => {
  return (
    post && (
      <Container>
        <UpsideContainer>
          <ProfileImageContainer>
            <ProfileImage src={require('../image/user.png')} /> 
          </ProfileImageContainer>
          <PostInformationContainer>
            <Nickname>{ post.User.nickname }</Nickname>
          </PostInformationContainer>
        </UpsideContainer>
      </Container>
    )
  )
};

export default PostCard;