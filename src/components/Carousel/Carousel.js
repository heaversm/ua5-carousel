import cstyles from './Carousel.module.scss';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import cx from 'classnames';

import { messageData } from '../../data/messageData';
import star from '../../assets/star.svg';

const Carousel = props => {
  const [curSlide, setSlide] = useState(0);

  const changeSlide = slideVal => {
    setSlide(slideVal);
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: cx(cstyles.dots, 'slick-dots'),
  };

  return (
    <div className={cstyles.container}>
      <img className={cx(cstyles.star, cstyles["star--left"])} src={star} alt="asterisk decorative graphic"/>
      <h1 className={cstyles.section_title}>{messageData[0].section_title}</h1>
      <Slider {...carouselSettings} className={cstyles.slider}>
        {messageData[0].quotes.map((quote, index) => {
          return (
            <div className={cstyles.slide} key={`quote-${index}`}>
              <h2 className={cstyles.message}>{quote.message}</h2>
              <h3 className={cstyles.attribution}>{quote.attribution}</h3>
            </div>
          );
        })}
      </Slider>
      <button className={cstyles.view_all}>VIEW ALL</button>
    </div>
  );
};

Carousel.propTypes = {};

export default Carousel;
