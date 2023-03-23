import { motion, AnimatePresence } from "framer-motion";
import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

function Modal(prop) {
  return (
    <AnimatePresence initial={false}>
      {prop.modalInfo.isOpen && (
        <div
          className="relative z-999 text-[#1d1d1f] font-nunito font-semibold"
          aria-labelledby="Project Detail"
          role="dialog"
          aria-modal="true"
        >
          <motion.div className="fixed inset-0 z-10 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              exit={{ opacity: 0 }}
              className="w-screen h-screen bg-black absolute"
            ></motion.div>
            <motion.div
              key="modal"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ ease: "circOut" }}
              className="z-5 flex h-screen items-center justify-center p-4 text-center sm:items-center sm:p-0 font-nunito font-semibold"
            >
              <div className="transform overflow-y-auto rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full md:w-[70%] lg:w-[60%]">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h4>{prop.modalInfo?.name}</h4>
                  <hr className="mt-2" />
                  <div className="mt-4">
                    <div className="mb-6">
                      <Swiper
                        modules={[Autoplay]}
                        autoplay={true}
                        delay={2000}
                        slidesPerView={1}
                        spaceBetween={30}
                        breakpoints={{ 1024: { slidesPerView: 2 } }}
                      >
                        {prop.modalInfo.imgDetail &&
                          prop.modalInfo.imgDetail.length > 0 &&
                          prop.modalInfo.imgDetail.map((item, index) => {
                            return (
                              <SwiperSlide key={index}>
                                <motion.div className="aspect-video w-full rounded-lg">
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
                    <div className="text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <p>{prop.modalInfo?.desc}</p>
                      <p className="my-6">{prop.modalInfo?.tech}</p>
                      <a
                        className="text-blue-500"
                        target={"_blank"}
                        href={prop.modalInfo?.link}
                      >
                        {prop.modalInfo?.link}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    onClick={prop.close}
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default memo(Modal);
