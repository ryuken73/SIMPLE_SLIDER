import React from 'react'; 
import { createContext } from 'react'; 

export const SwiperContext = createContext({})


export function SwiperProvider({totalCount, children}) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const nextIndex = React.useMemo(() => {
    const plusOne = activeIndex + 1;
    console.log('** recalculate nextIndex:', activeIndex, plusOne, totalCount)
    if(plusOne >= totalCount){
      return 0;
    }
    return plusOne;
  }, [activeIndex, totalCount])
  const prevIndex = React.useMemo(() => {
    const minusOne = activeIndex - 1;
    console.log('** recalculate prevIndex:', activeIndex, minusOne, totalCount)
    if(minusOne < 0){
      return 0;
    }
    return minusOne;
  }, [activeIndex, totalCount])
  console.log('&&', nextIndex)

  const goNext = React.useCallback(() => {
    setActiveIndex(nextIndex);
  }, [nextIndex])

  const goPrev = React.useCallback(() => {
    setActiveIndex(prevIndex);
  }, [prevIndex])

  const slideTo = React.useCallback((slideNumber) => {
    setActiveIndex(slideNumber);
  }, [])

  const swiperInstance = {
    goNext,
    goPrev,
    slideTo,
    activeIndex,
    totalCount
  }
  
  return <SwiperContext.Provider value={swiperInstance}>{children}</SwiperContext.Provider>
}
