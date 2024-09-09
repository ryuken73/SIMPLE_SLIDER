import React from 'react';
import styled from 'styled-components';
import { useSwiper } from './useSwiper';
import useSize from './useSize';

const Container = styled.div`
  /* position: absolute; */
  opacity: ${props => props.isActive ? 1 : 0};
  z-index: ${props => props.isActive ? 1 : 0};
  transform: ${props => `translate(-${props.moveX}px, 0px)`};
  transition-property: all;
  transition-duration: ${props => `${props.speed}ms`};
  width: 100%;
  /* width: ${props => `${props.width}px`}; */
  height: 100%;
  flex-shrink: 0;
`

export default function SliderCustom(props) {
  const {children, index, speed=500, name, setSwiperSize} = props
  // const [size, setSize] = React.useState({width: 0, height: 0});
  const containerRef = React.useRef(null);
  const swiper = useSwiper();
  const isActive = swiper.activeIndex === index;
  console.log('^^index:', index, swiper.activeIndex)
  // React.useEffect(() => {
  //   setSize(() => {
  //     return {
  //       width: containerRef.current.offsetWidth,
  //       height: containerRef.current.offsetHeight,
  //     }
  //   })
  // }, [])
  const sizeCurrent = useSize(containerRef);
  let moveX;
  let moveY;
  // if(index === 0){
    console.log('^^^', sizeCurrent)
    if(sizeCurrent){
      // setSize({
      //   height: sizeCurrent.height,
      //   width: sizeCurrent.width
      // })
    moveX = sizeCurrent.width * index;
    moveY = sizeCurrent.height
    }
  // }

  console.log('XX sizing', index, sizeCurrent, moveX, moveY);
  return (
    <Container ref={containerRef} width={sizeCurrent.width} moveX={moveX} moveY={moveY} isActive={isActive} speed={speed}>
      {children}
    </Container>
  )
}

// export default React.memo(SliderCustom);