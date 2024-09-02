import React from 'react';
import { useSwiper } from './useSwiper';

function SliderCustom(props) {
  const {swiperRef} = props
  const swiper = useSwiper();
  swiperRef.current = swiper
  return null;
}

export default React.memo(SliderCustom);