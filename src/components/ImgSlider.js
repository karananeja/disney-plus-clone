import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel className='imgSlider' {...settings}>
      <Wrap>
        <img src='/images/slider-badging.jpg' alt='' />
      </Wrap>
      <Wrap>
        <img src='/images/slider-badag.jpg' alt='' />
      </Wrap>
      <Wrap>
        <img src='/images/slider-scale.jpg' alt='' />
      </Wrap>
      <Wrap>
        <img src='/images/slider-scales.jpg' alt='' />
      </Wrap>
    </Carousel>
  );
};

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: var(--white-color);
    }
  }

  li.slick-active button:before {
    color: var(--white-color);
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;

  img {
    width: 100%;
    height: 400px;
    object-fit: fill;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border: 4px solid transparent;
    transition-duration: 200ms;

    &:hover {
      border: 4px solid var(--white-color);
    }
  }
`;
