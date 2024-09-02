import React from 'react';
import { useSwiper } from './useSwiper';

function SwiperControl(props) {
  const {swiperRef} = props
  const swiper = useSwiper();
  swiperRef.current = swiper
  return null;
}

export default React.memo(SwiperControl);