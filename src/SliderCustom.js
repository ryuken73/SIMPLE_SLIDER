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
  const [width, setWidth] = React.useState(0);
  const containerRef = React.useRef(null);
  const swiper = useSwiper();
  const isActive = swiper.activeIndex === index;
  React.useEffect(() => {
    const observer = new ResizeObserver(entries => {
      setWidth(entries[0].contentRect.width)
    })
    observer.observe(containerRef.current);
    return () => {
      containerRef.current && observer.unobserve(containerRef.current);
    }
  }, [])
  // console.log('^^index:', index, swiper.activeIndex)
  // const sizeCurrent = useSize(containerRef);
  // console.log('re-render SliderCustom', sizeCurrent)
  // const moveX = sizeCurrent.width * index;
  console.log('re-render SliderCustom', width)
  const moveX = width * index;

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