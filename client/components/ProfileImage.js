import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background-image: url(${props => props.profileSrc});
  background-color: gray;
  background-size: cover;
  background-position: center center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
`;

const ProfileImage = ({ profileImagePath }) => {
  return (
    <Container profileSrc={profileImagePath ? `%{profileImagePath}` : require('../image/user.png')} />
  );
};

ProfileImage.propTypes = {
  profileImagePath: PropTypes.string.isRequired,
};

export default ProfileImage;