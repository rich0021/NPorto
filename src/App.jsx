import Circle from "./components/Circle.jsx";
import SliderLg from "./components/SliderLg.jsx";
import SliderSm from "./components/SliderSm.jsx";
import {
  motion,
  useScroll,
  useTransform,
  useAnimationControls,
} from "framer-motion";
import "./assets/css/dots.css";
import "./assets/css/icon.css";
import Modal from "./components/Modal.jsx";
import { useRef, useState } from "react";

function App() {
  const { scrollYProgress } = useScroll();
  const [modalInfo, setModalInfo] = useState({ isOpen: false });
  const root = useRef();
  const transformY = useTransform(scrollYProgress, [0, 1], [0, 1950]);
  const underlineControl = useAnimationControls();
  const spanV = {
    hidden: {
      y: 100,
    },
    visible: {
      y: 0,
      rotateZ: 0,
    },
  };
  const transition = {
    type: "tween",
    ease: "circOut",
    duration: 1,
  };

  const modalOpen = (data) => {
    document.body.style.overflowY = "hidden";
    setModalInfo({ ...data, isOpen: true });
  };

  const modalClose = () => {
    document.body.style.overflowY = "initial";
    setModalInfo((old) => {
      return { ...old, isOpen: false };
    });
  };

  return (
    <div ref={root} className="h-[2200px] md:h-[2800px]">
      <Circle />
      <Modal modalInfo={modalInfo} close={modalClose} />
      {/* hi text */}
      <div
        className="z-5 relative w-max overflow-hidden flex"
        style={{
          transform: "translateX(-50%) translateY(200px)",
          left: "50%",
        }}
      >
        <motion.span
          initial={{ ...spanV.hidden, rotateZ: -30 }}
          animate={{ ...spanV.visible }}
          transition={{ ...transition }}
          className="font-nunito font-bold text-5xl md:text-8xl relative"
        >
          h
        </motion.span>
        <motion.span
          initial={{ ...spanV.hidden, rotateZ: 20 }}
          animate={{ ...spanV.visible }}
          transition={{ ...transition, delay: 0.5 }}
          className="font-nunito font-bold text-5xl md:text-8xl relative"
        >
          i
        </motion.span>
      </div>
      {/* main content */}
      <div
        className="relative h-[1400px] w-[90%] md:w-[80%] flex"
        style={{ transform: "translateX(-50%) translateY(235px)", left: "50%" }}
      >
        {/* Line start */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 30 }}
          transition={{ ...transition, duration: 1.5 }}
          className="line absolute bg-white rounded-full w-[3.5px] sm:w-[4px] md:w-[5px] "
          style={{
            transform: "translateX(-50%)",
            left: "50%",
          }}
        ></motion.div>

        {/* line */}
        <motion.div
          className="line absolute w-[3.5px] sm:w-[4px] max-h-[1300px] lg:max-h-[2000px] md:w-[5px] bg-white rounded-full"
          style={{
            transform: "translateX(-50%)",
            left: "50%",
            transition: "0.1s",
            transitionTimingFunction: "ease-out",
            height: transformY,
          }}
        ></motion.div>

        {/* left content */}
        <div className="w-[50%] flex items-start flex-col">
          {/* identity */}
          <div className="translate-y-[350px] md:translate-y-[400px] h-max">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...transition, duration: 0.7 }}
              viewport={{ once: true }}
              className="w-[91%] lg:w-[100%] font-bold z-5 font-nunito text-sm sm:text-2xl lg:text-3xl"
            >
              my name is muhammad
            </motion.p>
            <div className="flex gap-x-1 md:gap-x-2 font-bold z-5 font-nunito text-sm sm:text-2xl lg:text-3xl">
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...transition, duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-[#BEC9D9]"
              >
                naufal
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...transition, duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
              >
                muttaqin
              </motion.p>
            </div>
            <motion.div
              onViewportEnter={() => {
                underlineControl.start({ pathLength: 1 });
              }}
              className="translate-y-[-35px] sm:translate-y-[-40px] sm:translate-x-[-10px]"
            >
              <svg
                className="w-[80%] md:w-[90%]"
                height="68"
                viewBox="0 0 394 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={underlineControl}
                  transition={{ ...transition, duration: 1.5 }}
                  d="M1.00495 62.9969C83.846 24.2062 240.707 -35.9501 205.423 33.7498C170.139 103.45 315.452 44.9459 392.518 6.9814"
                  stroke="white"
                  strokeOpacity="0.28"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </div>

          {/* my work */}
          <div className="font-bold translate-y-[1000px] flex justify-center md:translate-y-[1400px] w-full font-nunito text-xl md:text-3xl h-max">
            <div className="relative flex items-center justify-center">
              <p>my work</p>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ ...transition }}
                viewport={{ once: true }}
                className="w-[109%] h-[5px] origin-left rounded-full bg-[#8195cc] absolute"
              ></motion.div>
            </div>
          </div>
        </div>

        {/* right content */}
        <div className="w-[50%] flex justify-end">
          <div className=" flex flex-col items-end translate-y-[750px] md:translate-y-[1000px] text-right h-max">
            <p className="font-bold font-nunito w-[85%] lg:w-[60%] text-sm sm:text-xl md:text-2xl lg:text-3xl">
              i’m a student who trying to be a
              <span className="text-[#cbaddf]"> fullstack</span> developer
            </p>
            <div
              id="dots"
              className="flex justify-between text-4xl md:text-7xl w-[50%]"
            >
              <span>.</span>
              <span style={{ animationDelay: "0.2s" }}>.</span>
              <span style={{ animationDelay: "0.4s" }}>.</span>
            </div>
          </div>
        </div>
      </div>
      {/* slider */}
      <div className="relative translate-y-[100px] md:translate-y-[500px]">
        <SliderLg modalOpen={modalOpen} />
        <SliderSm modalOpen={modalOpen} />
      </div>
      {/* contact */}
      <div className="relative translate-y-[200px] md:translate-y-[750px]">
        <div className="social-buttons">
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...transition, duration: 0.7 }}
            viewport={{ once: true }}
            href="https://www.instagram.com/kurabersayap002/"
            className="social-button social-button--instagram"
            aria-label="Instagram"
            target="_blank"
          >
            <i className="fab fa-brands fa-instagram"></i>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...transition, duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            href="https://www.linkedin.com/in/muhammad-naufal-muttaqin/"
            className="social-button social-button--linkedin"
            aria-label="LinkedIn"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...transition, duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            href="https://github.com/rich0021"
            className="social-button social-button--github"
            aria-label="GitHub"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...transition, duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            href="https://gitlab.com/rich0021"
            className="social-button social-button--gitlab"
            aria-label="Gitlab"
            target="_blank"
          >
            <i className="fab fa-gitlab"></i>
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default App;
