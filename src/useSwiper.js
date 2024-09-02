import { SwiperContext } from './SwiperProvider';
import { useContext } from 'react'; 

export function useSwiper() {
  return useContext(SwiperContext);
};