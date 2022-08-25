import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import ProfileImage from './ProfileImage';

const Container = styled.div`
  min-height: 30px;
  padding: 5px 30px 15px 30px;
`;

const UpsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 20px;
`;

const ProfileImageContainer = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 18px;
  border-radius: 50px;
  overflow: hidden;
  float: left;
`;

const Nickname = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

const Comment = ({ comment }) => {
  return (
    <Container>
      <ProfileImageContainer>
          <ProfileImage src={require('../image/user.png')} />
      </ProfileImageContainer>
      <UpsideContainer>
        <Nickname>{comment.User.nickname}</Nickname>
      </UpsideContainer>
      <ContentContainer>
        {comment.content}
      </ContentContainer>
    </Container>
  );
};

export default Comment;