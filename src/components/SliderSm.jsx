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
      className="flex justify-center xl:hidden"
      slidesPerView={1}
      spaceBetween={20}
      autoplay={true}
      delay={3000}
      breakpoints={{
        976: {
          slidesPerView: 2,
        },
      }}
    >
      {info.map((item, index) => {
        return (
          <SwiperSlide key={index} onClick={prop.modalOpen}>
            <motion.div className="aspect-square w-full bg-yellow-500 rounded-lg overflow-hidden">
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
