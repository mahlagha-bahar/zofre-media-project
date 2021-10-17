import React, { useRef, useState } from "react";
import Nav from "./Nav";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import AboutRobat from "./AboutRobat";
import Product from "./Product";

// install Swiper modules
SwiperCore.use([Pagination]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Nav />
      <div class="gray-box">
        شرکت فراورده های گوشتی رباط کریم کیفیت یعنی صداقت در تولید
      </div>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        className="black-box"
      >
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
            className="user-photo"
          />
        </SwiperSlide>
        <SwiperSlide><img
            src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
            className="user-photo"
          /></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
      </Swiper>
      <AboutRobat />
      <Product />
      <div className="footer"></div>
    </div>
  );
}

export default App;
