import { motion, useAnimation } from "framer-motion";
import { useState, useRef, useEffect, Children } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function SliderLg(prop) {
  return (
    <Swiper
      className="flex justify-center xl:hidden"
      slidesPerView={1}
      breakpoints={{
        976: {
          slidesPerView: 2,
        },
      }}
    >
      {prop.slides.map((item, index) => {
        return (
          <SwiperSlide key={index} className="flex justify-center">
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
