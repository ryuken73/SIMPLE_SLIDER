import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`
const CustomVideo = styled.video`
  width: 100%;
`

function Image(props) {
  const {src} = props
  return (
    <Container>
      <CustomVideo controls src={src}></CustomVideo>
    </Container>
  )
}

export default React.memo(Image);