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
          <motion.div
            key="modal"
            className="fixed inset-0 z-10 overflow-y-auto overflow-x-hidden"
          >
            <motion.div className="z-5 p-8 flex relative min-h-screen items-center justify-center text-center sm:items-center sm:p-0 font-nunito font-semibold">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.25 }}
                exit={{ opacity: 0 }}
                className="w-full h-full bg-black absolute"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ ease: "circOut" }}
                className="relative z-999 transform text-left shadow-xl my-8 w-full sm:w-[80%] md:w-[55%] lg:w-[60%]"
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-t-lg">
                  <h4>{prop.modalInfo?.name}</h4>
                  <hr className="mt-2" />
                  <div className="mt-4">
                    <div className="mb-6">
                      <Swiper
                        modules={[Autoplay]}
                        autoplay={true}
                        delay={2000}
                        slidesPerView={prop.modalInfo.slideSM}
                        spaceBetween={30}
                        breakpoints={{
                          1024: { slidesPerView: prop.modalInfo.slideLG },
                        }}
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
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 rounded-b-lg">
                  <button
                    onClick={prop.close}
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default memo(Modal);
