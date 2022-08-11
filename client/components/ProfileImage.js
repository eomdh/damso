import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const Container = styled.div`
  width: 45px;
  height: 45px;
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

const ProfileImage = ({ profileSrc }) => {
  return (
    <Container>
      <Img src={require('../image/user.png')} />
    </Container>
    // <Container profileSrc={profileSrc ? `%{profileSrc}` : null} />
  )
}

ProfileImage.propTypes = {
  profileSrc: PropTypes.string.isRequired,
};

export default ProfileImage;