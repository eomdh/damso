import React from 'react';
import styled from 'styled-components';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  margin: 15px 15px 15px 0px;
  width: 90%;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 400px;
  width: 100%;
  height: 500px;
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
        <Image src={images[0].src} alt="image" />
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
                <Image src={image.src} alt="image" key={image.src} />
              </ImageContainer>
            </div>
          ))}
        </Slider>
      </Container>
    );
  };
};

export default PostImages;