import React from "react";
import "./index.scss";

import profil from "../../assets/images/icons/user.svg";
import star from "../../assets/images/icons/stars.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Client: React.FC = () => {
  const sipweItem: JSX.Element[] = new Array(9)
    .fill("")
    .map((_, inx: number) => (
      <SwiperSlide key={inx}>
        <div className="sipwe__item">
          <div className="swiper__row">
            <img src={profil} alt="user" />
            <div className="text">
              <h4>Carla Samantoes-Diego</h4>
              <span>12.09.2021</span>
            </div>
          </div>
          <img src={star} alt="stars" />
          <p>
            SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
            professional instructions created by PhD Helga George Be sure of our
            quality - the freshest batches of this season. Non-GMO, Heirloom -
            our seeds were tested and have the best germination ratings.{" "}
          </p>
        </div>
      </SwiperSlide>
    ));
  return (
    <>
      <section id="client">
        <h2>What out clients say</h2>
        <div className="container">
          <Swiper
            slidesPerView={2.5}
            spaceBetween={20}
            freeMode={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {sipweItem}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Client;
