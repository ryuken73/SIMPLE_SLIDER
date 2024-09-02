import React from 'react';
import styled from 'styled-components';
import { useSwiper } from './useSwiper';

const Container = styled.div`
  position: absolute;
  opacity: ${props => props.isActive ? 1 : 0};
  z-index: ${props => props.isActive ? 1 : 0};
  transition: 0.5s all;
`

export default function SliderCustom(props) {
  const {children, index} = props
  const swiper = useSwiper();
  const isActive = swiper.activeIndex === index;
  return (
    <Container isActive={isActive}>
      {children}
    </Container>
  )
}
