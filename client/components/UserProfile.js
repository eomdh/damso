import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ProfileImage from './ProfileImage';
import ProfileImageEditForm from './profileImageEditForm';
import IntroduceEditForm from './IntroduceEditForm';

import styled from 'styled-components';
import { BsPencilFill } from 'react-icons/bs';

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

const NicknameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 5px;
`;

const Nickname = styled.div`
  font-weight: 600;
  font-size: 25px;
  color: #212529;
`;

const IntroduceContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Introduce = styled.div`
  margin-right: 7px;
  font-weight: 500;
  font-size: 18px;
  color: #868e96;
`;

const PencilIconContainer = styled.div`
  font-size: 15px;
  margin-top: 2px;
  opacity: 0.6;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

const Button = styled.button`
  all: unset;
  border-radius: 10px;
  width: 20%;
  height: 30px;
  padding: 8px 15px;
  background-color: #1864ab;
  color: white;
  font-weight: 700;
  font-size: 17px;
  text-align: center;
  cursor: pointer;
  opacity: 0.8;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

const UserProfile = ({ me }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [onEditForm, setOnEditForm] = useState(false);

  const onClickEditForm = useCallback(() => {
    setOnEditForm(prev => !prev);
  }, [onEditForm]);

  return (
    <Container>
      <ProfileImageContainer>
        <ProfileImage path={ me.profileImagePath } />
      </ProfileImageContainer>
      { id && <ProfileImageEditForm /> }
      <NicknameContainer>
        <Nickname>{ me.nickname }</Nickname>
      </NicknameContainer>
      {onEditForm 
      ? <IntroduceEditForm setOnEditForm={setOnEditForm} />
      : (
        <IntroduceContainer>
          <Introduce>{ me.introduce }</Introduce>
          { id && 
          <PencilIconContainer onClick={onClickEditForm}>
            <BsPencilFill />
          </PencilIconContainer> }
        </IntroduceContainer>
      )}
      <Button>
        게시글보기
      </Button>
    </Container>
  );
};

UserProfile.propTypes = {
  me: PropTypes.object.isRequired,
};

export default UserProfile;