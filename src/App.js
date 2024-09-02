import './App.css';
import React from 'react';
import styled from 'styled-components';
import SwiperCustom from './SwiperCustom';
import SwiperControl from './SwiperControl';
import SliderCustom from './SliderCustom';
import Image from './Image';
import ShowEvents from './ShowEvents';

const Container = styled.div``

const images = [
  './images/1.jpg',
  './images/2.jpg',
  './images/3.jpg',
  './images/4.jpg',
  './images/5.jpg',
  './images/6.jpg',
]

function App() {
  const [imgsToShow, setImgsToShow] = React.useState(images);
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

  return (
    <Container>
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
            <Image delImage={delImage} src={image}></Image>
          </SliderCustom>
        ))}
      </SwiperCustom>
    </Container>
  );
}

export default App;
