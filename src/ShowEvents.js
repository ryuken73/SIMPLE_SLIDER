import React from 'react';
import { useSwiper } from './useSwiper';

export default function ShowEvents(props) {
  const {swiperRef} = props;
  const [activeIndex, setActiveIndex] = React.useState();

  const eventHandler = React.useCallback((e) => {
    setActiveIndex(e.detail.activeIndex)
  }, []);

  React.useEffect(() => {
    swiperRef.current.on('realIndexChange', eventHandler);
    return () => {
      swiperRef.current.off('realIndexChange', eventHandler)
    }
  }, [eventHandler, swiperRef])
  return (
    <div>activeIndex = {activeIndex}</div>
  )
}
