import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`
const CustomImg = styled.img`
  width: 100%;
`

function Image(props) {
  const {src} = props
  return (
    <Container>
      <CustomImg src={src}></CustomImg>
    </Container>
  )
}

export default React.memo(Image);