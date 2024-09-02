import './App.css';
import React from 'react';
import SwiperCustom from './SwiperCustom';
import SwiperControl from './SwiperControl';
import SliderCustom from './SliderCustom';
import Image from './Image';

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

  const goSlider = React.useCallback((e) => {
    const targetIndex = imgsToShow.findIndex(img => img === e.target.id);
    const swiper = swiperRef.current;
    swiper.slideTo(targetIndex);
  }, [imgsToShow])

  return (
    <SwiperCustom>
      <div>total images: {imgsToShow.length}</div>
      <label>go next: </label>
      <button onClick={goNext}>goNext</button>
      <div></div>
      <label>go to slide number: </label>
      {imgsToShow.map((image, index) => (
        <button key={image} id={image} onClick={goSlider}>goto {index}</button>
      ))}
      <p></p>
      <SwiperControl swiperRef={swiperRef}></SwiperControl>
      {imgsToShow.map(image => (
        <SliderCustom
          key={image}
        >
          
          <Image delImage={delImage} src={image}></Image>
        </SliderCustom>
      ))}
    </SwiperCustom>
  );
}

export default App;
