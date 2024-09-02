import React from 'react'

export default function Image(props) {
  const {src, delImage} = props
  const onClick = React.useCallback(() => {
    delImage(src);
  }, [delImage, src])
  return (
    <>
      <img src={src}></img>
      <p></p>
      <button onClick={onClick}>remove</button>
    </>
  )
}
