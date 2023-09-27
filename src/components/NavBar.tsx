// https://icon-sets.iconify.design/line-md/moon-filled-to-sunny-filled-loop-transition/
// https://icon-sets.iconify.design/line-md/sunny-filled-loop-to-moon-filled-loop-transition/

import React, { MouseEventHandler, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import Image from "next/image";

const MotionImage = motion(Image);

// import {TwitterIcon, GithubIcon, LinkedinIcon, SunIcon4, MoonIcon4} from "./Icons";

// import {TwitterIcon, GithubIcon, LinkedinIcon} from "./Icons";
// import MoonIconSvg from '../../public/images/svgs/sunny-filled-loop-to-moon-filled-loop-transition.svg'
// import SunIconSvg from '../../public/images/svgs/moon-filled-to-sunny-filled-loop-transition.svg'

import { TwitterIcon, GithubIcon, LinkedinIcon, GmailIcon } from "./Icons";
import SunIconPng from "../../public/images/svgs/SunIconPng.png";
import MoonIconPng from "../../public/images/svgs/MoonIconPng.png";

// import {TwitterIcon, GithubIcon, LinkedinIcon} from "./Icons";
// import { ReactComponent as SunIconReact } from '../../public/images/svgs/sunny-filled-loop-to-moon-filled-loop-transition.svg'
// import { ReactComponent as MoonIconReact } from '../../public/images/svgs/moon-filled-to-sunny-filled-loop-transition.svg'

// import {TwitterIcon, GithubIcon, LinkedinIcon} from "./Icons";
// import { Icon } from '@iconify/react';

import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useEffect } from "react";

interface TypeCustomLink {
  href: string;
  title: string;
  className?: string;
}
interface TypeCustomMobileLink extends TypeCustomLink {
  toggle: () => void;
}

const CustomLink = (props: TypeCustomLink) => {
  const router = useRouter();

  return (
    <Link href={props.href} className={`${props.className} relative group`}>
      {props.title}
      <span
        className={`h-[1px] inline-block bg-dark
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 
      ${router.asPath === props.href ? "w-full" : "w-0"} dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = (props: TypeCustomMobileLink) => {
  const router = useRouter();

  const handleClick = () => {
    props.toggle();
    // push new address to the url
    router.push(props.href);
  };

  return (
    <button
      className={`${props.className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {props.title}
      <span
        className={`h-[1px] inline-block bg-light
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 
      ${router.asPath === props.href ? "w-full" : "w-0"} dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between 
   dark:text-light 
  relative z-10 lg:px-16 md:px-12 sm:px-8 lg:py-10"
    >
      <button
        className="flex-col items-center justify-center hidden lg:flex "
        onClick={handleClick}
      >
        <span
          className={`transition-all duration-300 ease-out bg-dark dark:bg-light block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`transition-all duration-300 ease-out bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`transition-all duration-300 ease-out bg-dark dark:bg-light block h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/blog" title="Blog" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-5 mr-3"
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-7 mr-3"
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mr-3"
            whileTap={{ scale: 0.9 }}
          >
            <LinkedinIcon />
          </motion.a>
          <motion.a
            href="mailto:aj.evile@gmail.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="mr-3 flex items-center bg-dark text-light p-1 px-3 rounded-lg text-xs font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
          >
            Contact
          </motion.a>

          <motion.button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className="ml-3 flex items-center justify-center rounded-full p-1
          sm:mx-1 bg-light text-dark"
            whileTap={{ scale: 0.7 }}
          >
            {/* {mode === "light" ? <SunIcon4 className={"fill-dark"}/> : <MoonIcon4 className={"fill-dark"}/>} */}
            {/* {mode === "light" ? <SunIconSvg className={"w-full h-auto md:w-3"}/> : <MoonIconSvg className={"w-full h-auto md:w-3"}/>} */}

            {mode === "dark" ? (
              <MotionImage
                src={MoonIconPng}
                alt="Moon Icon"
                className="w-6"
                animate={{
                  scale: [1, 0.9, 1, 0.9, 1],
                  rotate: [5, -5, 5, 15, 5],
                }}
                transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
              />
            ) : (
              <MotionImage
                src={SunIconPng}
                alt="Sun Icon"
                className="w-6"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
              />
            )}

            {/* {mode === "light" ? <div className="w-6 h-6 bg-green-500"/> : <div className="w-6 h-6 bg-blue-500"/>} */}
            {/* {mode === "light" ? <SunIconReact className={"fill-dark"}/> : <MoonIconReact className={"fill-dark"}/>} */}
            {/* {mode === "light" ?
          <Icon icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition" className="reset w-full h-auto fill-dark"/> 
          :
          <Icon icon="line-md:moon-filled-to-sunny-filled-loop-transition" className="reset w-full h-auto fill-dark"/>
          } */}
          </motion.button>
        </nav>
      </div>

      {isOpen ? (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full"
            onClick={() => setIsOpen(false)}
          ></div>
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className="min-w-[70vw] flex flex-col justify-between items-center 
    z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
          >
            <nav className="flex items-center flex-col justify-center">
              <CustomMobileLink
                href="/"
                title="Home"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/about"
                title="About"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/projects"
                title="Projects"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/blog"
                title="Blog"
                className=""
                toggle={handleClick}
              />
            </nav>
            <nav className="flex items-center justify-center flex-wrap mt-2">
              <motion.a
                href="https://twitter.com"
                target={"_blank"}
                whileHover={{ y: -2 }}
                className="w-5 mr-3 sm:mx-1"
                whileTap={{ scale: 0.9 }}
              >
                <TwitterIcon />
              </motion.a>
              <motion.a
                href="https://github.com.com"
                target={"_blank"}
                whileHover={{ y: -2 }}
                className="w-6 mr-3 sm:mx-1 bg-light dark:bg-dark rounded-full"
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target={"_blank"}
                whileHover={{ y: -2 }}
                className="w-6 mr-3 sm:mx-1"
                whileTap={{ scale: 0.9 }}
              >
                <LinkedinIcon />
              </motion.a>
              <motion.a
                href="mailto:aj.evile@gmail.com"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                // className="mr-3 flex items-center bg-dark text-light p-1 px-3 rounded-lg text-xs font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                className="w-6 sm:mx-1"
              >
                <GmailIcon />
              </motion.a>
            </nav>
            <motion.button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className="flex items-center justify-center rounded-full p-1
          bg-light text-dark mt-5"
              whileTap={{ scale: 0.7 }}
            >
              {/* {mode === "light" ? <SunIcon4 className={"fill-dark"}/> : <MoonIcon4 className={"fill-dark"}/>} */}
              {/* {mode === "light" ? <SunIconSvg className={"w-full h-auto md:w-3"}/> : <MoonIconSvg className={"w-full h-auto md:w-3"}/>} */}

              {mode === "dark" ? (
                <MotionImage
                  src={MoonIconPng}
                  alt="Moon Icon"
                  className="w-6"
                  animate={{
                    scale: [1, 0.9, 1, 0.9, 1],
                    rotate: [5, -5, 5, 15, 5],
                  }}
                  transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
                />
              ) : (
                <MotionImage
                  src={SunIconPng}
                  alt="Sun Icon"
                  className="w-6"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
                />
              )}
            </motion.button>
          </motion.div>
        </>
      ) : null}

      <div className="absolute left-[50%] top-0.4 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
