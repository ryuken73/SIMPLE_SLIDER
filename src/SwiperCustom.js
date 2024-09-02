import React from 'react';
import {SwiperProvider} from './SwiperProvider';

export default function SwiperCustom(props) {
  const {speed, children} = props;
  const [totalCount, setTotalCount] = React.useState(null);
  const WrappedComponents = React.useCallback(() => {
    let slideIndex = 0;
    const result = [];
    React.Children.forEach(children, (child) => {
      if(child.type.name === 'SliderCustom'){
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
      <WrappedComponents></WrappedComponents>
    </SwiperProvider>
  )
}
