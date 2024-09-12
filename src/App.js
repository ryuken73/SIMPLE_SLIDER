import './App.css';
import React from 'react';
import styled from 'styled-components';
import SwiperCustom from './SwiperCustom';
import SwiperControl from './SwiperControl';
import SliderCustom from './SliderCustom';
import Image from './Image';
import Video from './Video';
import ShowEvents from './ShowEvents';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`
const Center = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 75vw;
`

// const images = [
//   './images/1.jpg',
//   './images/2.jpg',
//   './images/3.jpg',
//   './images/4.jpg',
//   './images/5.jpg',
//   './images/6.jpg',
// ]
const videos = [
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
]

function App() {
  const [imgsToShow, setImgsToShow] = React.useState(videos);
  const inputRef = React.useRef(null);
  const swiperRef = React.useRef(null);

  const goNext = React.useCallback(() => {
    const swiper = swiperRef.current;
    swiper.goNext();
  }, []);

  const goPrev = React.useCallback(() => {
    const swiper = swiperRef.current;
    swiper.goPrev();
  }, []);

  const delImage = React.useCallback((path) => {
    setImgsToShow(imgsToShow => {
      return imgsToShow.filter(imgPath => {
        return imgPath !== path;
      })
    })
    goPrev();
  }, [goPrev])

  const addImage = React.useCallback(() => {
    const path = inputRef.current.value
    setImgsToShow(imgsToShow => {
      return [
        ...imgsToShow,
        path
      ]
    })
  }, [])

  const goSlider = React.useCallback((e) => {
    const targetIndex = imgsToShow.findIndex(img => img === e.target.id);
    const swiper = swiperRef.current;
    swiper.slideTo(targetIndex);
  }, [imgsToShow])

  const onClick = React.useCallback((image) => {
    return () => {
      delImage(image);
    }
  }, [delImage])

  return (
    <Container>
      <Center>
        <div>total images: {imgsToShow.length}</div>
        <label>go next: </label>
        <button onClick={goNext}>goNext</button>
        <div></div>
        <label>go to slide number: </label>
        {imgsToShow.map((image, index) => (
          <button key={image} id={image} onClick={goSlider}>goto {index}</button>
        ))}
        <div></div>
        <label>add new image(path): </label>
        <input ref={inputRef} placeholder='./images/7.jpg'></input>
        <button onClick={addImage}>add</button>
        <p></p>
        <ShowEvents swiperRef={swiperRef}></ShowEvents>
        <SwiperCustom
          speed={500}
        >
          <SwiperControl swiperRef={swiperRef}></SwiperControl>
          {imgsToShow.map(image => (
            <SliderCustom
              key={image}
            >
              {/* <Image key={image} src={image}></Image> */}
              <Video key={image} src={image}></Video>
              <button onClick={onClick(image)}>del</button>
            </SliderCustom>
          ))}
        </SwiperCustom>
        <div>bottom</div>
      </Center>
    </Container>
  );
}

export default React.memo(App);
