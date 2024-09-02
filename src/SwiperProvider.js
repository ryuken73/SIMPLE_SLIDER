import React from 'react'; 
import { createContext } from 'react'; 

export const SwiperContext = createContext({})


export function SwiperProvider({totalCount, children}) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const nextIndex = React.useMemo(() => {
    const plusOne = activeIndex + 1;
    if(plusOne === totalCount){
      return 0;
    }
    return plusOne;
  }, [activeIndex, totalCount])
  console.log('&&', nextIndex)

  const goNext = React.useCallback(() => {
    setActiveIndex(nextIndex);
  }, [nextIndex])

  const goToSlide = React.useCallback((slideNumber) => {
    setActiveIndex(slideNumber);
  }, [])

  const swiperInstance = {
    goNext,
    goToSlide,
    activeIndex,
  }
  return <SwiperContext.Provider value={swiperInstance}>{children}</SwiperContext.Provider>
}
