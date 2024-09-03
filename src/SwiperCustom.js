import React from 'react';
import styled from 'styled-components';
import {SwiperProvider} from './SwiperProvider';

const Container = styled.div`
  /* position: relative; */
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
        <WrappedComponents></WrappedComponents>
      </Container>
    </SwiperProvider>
  )
}

export default React.memo(SwiperCustom);