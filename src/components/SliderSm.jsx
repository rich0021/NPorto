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
    <Swiper
      modules={[Autoplay]}
      className="flex justify-center xl:hidden w-[95%] sm:w-[70%] md:w-[90%]"
      slidesPerView={1}
      spaceBetween={20}
      autoplay={true}
      delay={3000}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
    >
      {info.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <motion.div
              onClick={() => prop.modalOpen(item)}
              className="aspect-square w-full max-h-[400px] bg-white rounded-lg overflow-hidden"
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
  );
}

export default SliderLg;
