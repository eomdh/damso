import React from 'react';
import styled from 'styled-components';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  margin: 15px 0;
  width: 100%;
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div{
    outline: none;
  }
`;

const ImageContainer = styled.div`
  margin: 0 150px;
`;

const Image = styled.img`
  max-width: 400px;
  width: 100%;
  height: 500px;
  border-radius: 5px;
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
        <StyledSlider {...settings}>
          {images.map(image => (
            <div key={image.src}>
              <ImageContainer>
                <Image src={image.src} alt="image" key={image.src} />
              </ImageContainer>
            </div>
          ))}
        </StyledSlider>
      </Container>
    );
  };
};

export default PostImages;