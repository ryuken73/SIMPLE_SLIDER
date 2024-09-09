import React from 'react';
import styled from 'styled-components';
import {SwiperProvider} from './SwiperProvider';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  width: 100%;
  height: 100%;
`
const SwiperWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;

`

function SwiperCustom(props) {
  const {speed, children} = props;
  const [totalCount, setTotalCount] = React.useState(null);
  // const [swiperSize, setSwiperSize] = React.useState({});
  // console.log('###', swiperSize)
  const WrappedComponents = React.useCallback(() => {
    let slideIndex = 0;
    const result = [];
    React.Children.forEach(children, (child) => {
      if(child.type.name === 'SliderCustom'){
        // result.push(React.cloneElement(child, {index: slideIndex, setSwiperSize, speed}));
        result.push(React.cloneElement(child, {index: slideIndex, speed}));
        slideIndex++
      } else {
        result.push(child);
      }
    })
    setTotalCount(slideIndex); 
    return result;
  }, [children, speed])

  return (
    <SwiperProvider totalCount={totalCount}>
      <Container>
        <SwiperWrapper>
        <WrappedComponents></WrappedComponents>
        </SwiperWrapper>
      </Container>
    </SwiperProvider>
  )
}

export default React.memo(SwiperCustom);