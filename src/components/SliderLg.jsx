import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useEffect, useState } from "react";

import "swiper/css";

function SliderLg(prop) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("/project.json").then((response) => {
      response.json().then((data) => {
        setInfo(data);
      });
    });
  }, []);

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        className="rotate-[-8deg] w-[110vw] xl:flex justify-center translate-x-[-90px] pl-8 hidden"
        slidesPerView={3}
        spaceBetween={50}
        autoplay={true}
        delay={3000}
      >
        {info.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <motion.div
                onClick={() => prop.modalOpen(item)}
                className="h-[400px] w-[450px] bg-white rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={item.img}
                  className="w-full h-full object-contain"
                  alt={`${item.name} image`}
                />
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SliderLg;
