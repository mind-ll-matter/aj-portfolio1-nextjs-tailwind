import Link from "next/link";
import React from "react";
import {
  circIn,
  circOut,
  cubicBezier,
  easeIn,
  easeInOut,
  easeOut,
  motion,
  useAnimation,
  useTransform,
} from "framer-motion";
import Image from "next/image";

const MotionLink = motion(Link);

const Logo = () => {
  //   const controls = useAnimation();

  //   // const handleHoverStart = () => {
  //   // }

  //   const handleHoverEnd = () => {
  //     controls.start({
  //       scale: [1.3, 1],
  //       transition: { duration: 10, ease: easeInOut },
  //     });
  //   };

  return (
    <div className="flex items-center justify-center mt-1">
      <MotionLink
        href="/"
        className="w-16 h-16 px-0.5 bg-dark text-light flex items-center justify-center
        rounded-full text-2xl font-bold border border-solid-2 border-transparent dark:border-light"
        whileHover={{
          scale: [1, 1.3, 1],
          rotate: [0, 360, 360, 0],
          borderRadius: ["50%", "25%", "50%"],
          backgroundColor: ["#121212", "rgba(8 47 73 1)", "#121212"],
          transition: { duration: 1.5 },
        }}
        whileTap={{
          scale: 0.9,
        }}
        // onMouseLeave={handleHoverEnd}
      >
        <Image src="./images/logo/AJ-transparent.png" alt="AJ-Logo" />
      </MotionLink>
    </div>
  );
};

export default Logo;
