import { SwiperContext } from './SwiperProvider';
import { useContext } from 'react'; 

export function useSwiper() {
  const {activeIndex, goNext} = useContext(SwiperContext);
  // console.log('^^',activeIndex, goNext)
  return {activeIndex, goNext}
};