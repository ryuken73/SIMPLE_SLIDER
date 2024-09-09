import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`
const CustomImg = styled.img`
  width: 100%;
`

export default function Image(props) {
  const {src, delImage} = props
  const onClick = React.useCallback(() => {
    delImage(src);
  }, [delImage, src])
  return (
    <Container>
      <CustomImg src={src}></CustomImg>
      <p></p>
      <button onClick={onClick}>remove</button>
    </Container>
  )
}
