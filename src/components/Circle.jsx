import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import "../assets/css/circleBg.css";

function Circle() {
  const element = useRef();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const style = {
    /* opacity, */
    x,
    y,
    transition: "0.5s, opacity 2s",
    transitionTimingFunction: "ease-out",
  };

  const onMouseMove = (e) => {
    const bound = element.current.getBoundingClientRect();
    x.set(e.clientX - bound.width / 2 + 3);
    y.set(e.clientY - bound.height / 2 + 5);
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <motion.div
      id="circleBg"
      ref={element}
      className="aspect-square h-[250px] md:h-[300px] lg:h-[350px] rounded-full fixed"
      style={style}
      initial={{ opacity: 0 }}
      animate={{
        rotate: 360,
        opacity: 1,
      }}
      transition={{ repeat: Infinity, duration: 10, opacity: { duration: 1 } }}
    ></motion.div>
  );
}

export default Circle;
