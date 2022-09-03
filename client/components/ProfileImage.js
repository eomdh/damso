import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background-image: url(${props => props.path});
  background-size: cover;
  background-position: center center;
`;

const ProfileImage = ({ path }) => {
  return (
    <Container path={path 
      ? `http://localhost:3065/profileImages/${path}` 
      : require('../image/user.png')} />
  );
};

ProfileImage.propTypes = {
  profileImagePath: PropTypes.string.isRequired,
};

export default ProfileImage;