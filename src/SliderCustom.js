import React from 'react';
import styled from 'styled-components';
import { useSwiper } from './useSwiper';

const Container = styled.div`
  position: absolute;
  opacity: ${props => props.isActive ? 1 : 0};
  z-index: ${props => props.isActive ? 1 : 0};
  transition-property: all;
  transition-duration: ${props => `${props.speed}ms`};
`

export default function SliderCustom(props) {
  const {children, index, speed=500} = props
  const swiper = useSwiper();
  const isActive = swiper.activeIndex === index;
  console.log('^^index:', index, swiper.activeIndex)
  return (
    <Container isActive={isActive} speed={speed}>
      {children}
    </Container>
  )
}
