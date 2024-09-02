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
  const swiperRef = React.useRef(null);
  const goNext = React.useCallback(() => {
    swiperRef.current.goNext();
  }, []);
  return (
    <SwiperCustom>
      <button onClick={goNext}>goNext</button>
      <p></p>
      <SwiperControl swiperRef={swiperRef}></SwiperControl>
      {images.map(image => (
        <SliderCustom
          key={image}
        >
          
          <Image src={image}></Image>
        </SliderCustom>
      ))}
    </SwiperCustom>
  );
}

export default App;
