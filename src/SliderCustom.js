import React from 'react';
import styled from 'styled-components';
import { useSwiper } from './useSwiper';
import useSize from './useSize';

const Container = styled.div`
  opacity: ${props => props.isActive ? 1 : 0};
  z-index: ${props => props.isActive ? 1 : 0};
  transform: ${props => `translate(-${props.moveX}px, 0px)`};
  transition-property: opacity;
  transition-duration: ${props => `${props.speed}ms`};
  width: 100%;
  height: 100%;
  flex-shrink: 0;
`

export default function SliderCustom(props) {
  const {children, index, speed=500} = props
  const containerRef = React.useRef(null);
  const swiper = useSwiper();
  const isActive = swiper.activeIndex === index;
  // console.log('^^index:', index, swiper.activeIndex)
  console.log('re-render SliderCustom')
  const sizeCurrent = useSize(containerRef);
  const moveX = sizeCurrent.width * index;

  return (
    <Container 
      ref={containerRef} 
      moveX={moveX} 
      isActive={isActive} 
      speed={speed}
    >
      {children}
    </Container>
  )
}

// export default React.memo(SliderCustom);