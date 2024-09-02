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
  const [imgToShow, setImgToShow] = React.useState(images);
  const swiperRef = React.useRef(null);
  const goNext = React.useCallback(() => {
    const swiper = swiperRef.current;
    swiper.goNext();
  }, []);
  const delImage = React.useCallback((path) => {
    console.log('remove ', path)
    setImgToShow(imgToShow => {
      return imgToShow.filter(imgPath => {
        return imgPath !== path;
      })
    })
  }, [])
  return (
    <SwiperCustom>
      <button onClick={goNext}>goNext</button>
      <p></p>
      <SwiperControl swiperRef={swiperRef}></SwiperControl>
      {imgToShow.map(image => (
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
