import { motion, useAnimation } from "framer-motion";
import { useState, useRef, useEffect, Children } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function SliderLg(prop) {
  return (
    <Swiper
      className="rotate-[-8deg] w-[110vw] xl:flex justify-center translate-x-[-90px] pl-8 hidden"
      slidesPerView={3}
      spaceBetween={50}
    >
      {prop.slides.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <motion.div className="h-[400px] w-[450px] bg-yellow-500 rounded-lg overflow-hidden">
              <img
                src={item.img}
                className="w-full h-full object-fill"
                alt={`${item.name} image`}
              />
            </motion.div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SliderLg;
