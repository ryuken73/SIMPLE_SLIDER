import React from 'react'; 
import { createContext } from 'react'; 

export const SwiperContext = createContext({})

const getNextIndexLoop = (max, currentIndex) => {
  const nextIndex = currentIndex + 1;
  if(nextIndex === max){
    return 0;
  }
  return nextIndex;
}

export function SwiperProvider({totalCount, children}) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const goNext = React.useCallback(() => {
    setActiveIndex(activeIndex => {
      const nextIndex = getNextIndexLoop(totalCount, activeIndex)
      // console.log(nextIndex)
      return nextIndex
    })
  }, [totalCount])
  const goToSlide = React.useCallback((slideNumber) => {
    setActiveIndex(slideNumber);
  }, [])
  const swiperInstance = {
    goNext,
    goToSlide,
    activeIndex
  }
  return <SwiperContext.Provider value={swiperInstance}>{children}</SwiperContext.Provider>
}
