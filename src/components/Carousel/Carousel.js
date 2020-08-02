import cstyles from './Carousel.module.scss';

import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import cx from 'classnames';
import star from '../../assets/star.svg';

const Carousel = ({starLeft,messagesData, messageColor, buttonColor, showArrows, showDots, doFade, doAutoplay, animSpeed, autoplaySpeed, fx}) => {

  const [isInitialized,handleInitialize] = useState(false);

  useEffect(()=>{
    handleInitialize(true);
  },[])

  const carouselSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: cx(cstyles.dots, 'slick-dots'),
    arrows: showArrows,
    dots: showDots,
    fade: doFade,
    autoplay: doAutoplay,
    autoplaySpeed: autoplaySpeed,
    speed: animSpeed
  };
  
  return (
    <div className={cx(cstyles.container,{fx: fx, initialized: isInitialized})}>
      <img 
        className={`${cx(cstyles.star, 'star')} ${starLeft ? cx(cstyles['star--left']) : ''}`}
        src={star} alt="asterisk decorative graphic"
      />
      <div className={cstyles.container_inner}>
        <h1 className={cstyles.section_title}>{messagesData.section_title}</h1>
        <Slider {...carouselSettings} className={cstyles.slider}>
          {messagesData.quotes.map((quote, index) => {
            return (
              <div className={cstyles.slide} key={`quote-${index}`}>
                <h2 className={cstyles.message} style={{color: messageColor && messageColor}}>{quote.message}</h2>
                <h3 className={cstyles.attribution}>{quote.attribution}</h3>
              </div>
            );
          })}
        </Slider>
        <button className={`${cstyles.view_all} view_all`} style={{backgroundColor: buttonColor && buttonColor}}>VIEW ALL</button>
      </div>
    </div>
  );
};

Carousel.defaultProps = {
  starLeft: false,
  showArrows: true,
  showDots: true,
  doFade: false,
  doAutoplay: false,
  animSpeed: 500,
  autoplaySpeed: 3000,
  fx: false,
};

Carousel.propTypes = {
  starLeft: PropTypes.bool,
  showArrows: PropTypes.bool,
  showDots: PropTypes.bool,
  doFade: PropTypes.bool,
  doAutoplay: PropTypes.bool,
  animSpeed: PropTypes.number,
  autoplaySpeed: PropTypes.number,
  messageColor: PropTypes.string,
  buttonColor: PropTypes.string,
  fx: PropTypes.bool,
  messagesData: PropTypes.shape({
    section_title: PropTypes.string,
    quotes: PropTypes.arrayOf(PropTypes.shape({
      message: PropTypes.string.isRequired,
      attribution: PropTypes.string
    })).isRequired
  }),
};

export default Carousel;
