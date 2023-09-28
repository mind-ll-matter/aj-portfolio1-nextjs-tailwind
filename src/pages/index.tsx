import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/AJ-Portfolio-double_exposure_trees2-nobg.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>AJ Evile</title>
        <meta name="AJ Evile" content="AJ at a glance" />
        <meta property="og:URL" content="./images/profile/profile2-crop.jpg" />

        <meta property="og:type" content="article" />

        <meta property="og:title" content="AJs temporary portfolio page" />

        <meta property="og:description" content="AJ at a glance" />

        <meta
          property="og:image"
          content="./images/profile/profile2-crop.jpg"
        />
      </Head>
      <TransitionEffect />
      <main
        className="flex items-center text-dark w-full min-h-screen justify-center
      dark:text-light"
      >
        <Layout className="pt-8 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between lg:flex-col w-full">
            <div className="w-1/2 flex justify-center md:w-full">
              <Image
                src={profilePic}
                alt="AJ Evile"
                // className="h-[50%] w-auto"
                // w-full mx-16 h-auto
                className="h-[50%] w-auto lg:mb-8 md:inline-block md:w-[70%]"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
              {/* RESPONSIVENESS ^^^ --> RESOURCE: https://youtu.be/Yw7yWHigGKI?si=EoC17qWjbSBP2Vug&t=15354 */}
            </div>
            {/* <div className="w-1/2 flex flex-col items-center self-center"> */}
            <div className="w-1/2 flex flex-col items-start self-start mt-20 lg:w-full lg:text-center lg:mt-0 md:mt-20 sm:mt-10">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl  "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                {/* <Link href="/dummy.pdf" target={"_blank"}
                className="mr-4 flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark"
                download={true}
                >Resumé <LinkArrow className={"w-6 ml-1"}/> 
                </Link> */}
                <Link
                  href="mailto:aj.evile@gmail.com"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark 
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                md:p-2 md:px-4 md:text-base "
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        {/* <div className="absolute right-8 bottom-0.5 inline-block w-24">
          <Image src={lightBulb} alt="AJ Evile" className='w-full h-auto'/>
        </div> */}
      </main>
    </>
  );
}
