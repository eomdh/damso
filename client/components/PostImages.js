import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";

import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  margin-top: 25px;
  width: 90%;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 400px;
  max-height: 430px;
  width: 100%;
  height: 100%;
`;

const PostImages = ({ images }) => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  if (images.length === 1) {
    return (
      <Container>
        <ImageContainer>
          <Image src={`${images[0].src}`} alt="image" />
        </ImageContainer>
      </Container>
    );
  };

  if (images.length > 1) {
    return (
      <Container>
        <Slider {...settings}>
          {images.map(image => (
            <div key={image.src}>
              <ImageContainer>
                <Image src={`${image.src}`} alt="image" key={image.src} />
              </ImageContainer>
            </div>
          ))}
        </Slider>
      </Container>
    )
  };
};

PostImages.propTypes = {
  images: PropTypes.array,
};

export default PostImages;