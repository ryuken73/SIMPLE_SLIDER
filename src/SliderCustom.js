import React from 'react';
import styled from 'styled-components';
import { useSwiper } from './useSwiper';
import useSize from './useSize';

const Container = styled.div`
  position: absolute;
  opacity: ${props => props.isActive ? 1 : 0};
  z-index: ${props => props.isActive ? 1 : 0};
  transition-property: all;
  transition-duration: ${props => `${props.speed}ms`};
`

export default function SliderCustom(props) {
  const {children, index, speed=500, name, setSwiperSize} = props
  const containerRef = React.useRef(null);
  const swiper = useSwiper();
  const isActive = swiper.activeIndex === index;
  console.log('^^index:', index, swiper.activeIndex)
  const size = useSize(containerRef);
  if(index === 0){
    console.log('^^^', size)
    if(size){
      // setSwiperSize({
      //   height: size.height,
      //   width: size.width
      // })
    }
  }
  return (
    <Container ref={containerRef} isActive={isActive} speed={speed}>
      {children}
    </Container>
  )
}

// export default React.memo(SliderCustom);