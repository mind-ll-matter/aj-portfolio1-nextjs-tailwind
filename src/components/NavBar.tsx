import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";

// import {TwitterIcon, GithubIcon, LinkedinIcon, SunIcon, MoonIcon} from "./Icons";
import {TwitterIcon, GithubIcon, LinkedinIcon} from "./Icons";
import SunIcon from '../../public/images/svgs/sunny-filled-loop-to-moon-filled-loop-transition.svg'
import MoonIcon from '../../public/images/svgs/moon-filled-to-sunny-filled-loop-transition.svg'

import {motion} from "framer-motion"
import useThemeSwitcher from "./hooks/useThemeSwitcher";

interface TypeCustomLink {
  href:string,
  title: string,
  className?:string
}

const CustomLink = (props:TypeCustomLink) => {
  const router = useRouter()

  return (
    <Link href={props.href} className={`${props.className} relative group`}>
      {props.title}
      <span className={`h-[1px] inline-block bg-dark
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 
      ${router.asPath === props.href ? "w-full" : "w-0"}`}>&nbsp;</span>
    </Link>
  )
}

const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher();

  return <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
    
  <nav>
    <CustomLink href='/' title="Home" className="mr-4"/>
    <CustomLink href='/about' title="About" className="mx-4"/>
    <CustomLink href='/projects' title="Projects" className="ml-4"/>
  </nav>
  <nav className="flex items-center justify-center flex-wrap">
    <motion.a href="https://twitter.com" target={"_blank"}
    whileHover={{y:-2}}
    className="w-5 mr-3"
    whileTap={{scale:0.9}}
    >
      <TwitterIcon/>
    </motion.a>
    <motion.a href="https://linkedin.com" target={"_blank"}
      whileHover={{y:-2}}
      className="w-7 mr-3"
      whileTap={{scale:0.9}}>
      <GithubIcon/>
    </motion.a>
    <motion.a href="https://linkedin.com" target={"_blank"}
      whileHover={{y:-2}}
      className="w-6 mr-3"
      whileTap={{scale:0.9}}>
      <LinkedinIcon/>
    </motion.a>
    <motion.a href="mailto:ajevile@gmail.com" target={"_blank"}
      whileHover={{y:-2}}
      whileTap={{scale:0.9}}
      className="mr-3 flex items-center bg-dark text-light p-1 px-3 rounded-lg text-xs font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
      >
      Contact
    </motion.a>

    <button onClick={() => setMode(mode === "light" ? "dark" : "light") }
      className="ml-3 flex items-center justify-center rounded-full p-1">
      {mode === "dark" ? <SunIcon className={"fill-dark"}/> : <MoonIcon className={"fill-dark"}/>}
    </button>
  </nav>


  <div className="absolute left-[50%] top-0.4 translate-x-[-50%]">
    <Logo/>
  </div>

  </header>;
 
};

export default NavBar;
