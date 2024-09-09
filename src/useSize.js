import * as React from 'react'
import useResizeObserver from '@react-hook/resize-observer'

const useSize = (target) => {
  const [size, setSize] = React.useState({width:0, height:0})

  React.useLayoutEffect(() => {
    if(target.current === null) return;
    console.log('XX resized')
    setSize(target.current.getBoundingClientRect())
  }, [target])

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize(entry.contentRect))
  return size
}

export default useSize;