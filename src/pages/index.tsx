import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/AJ-Portfolio-double_exposure_trees2-nobg.png"
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 flex justify-center">
              <Image src={profilePic} alt="AJ Evile" className="h-[50%] w-auto"/>
            </div>
            {/* <div className="w-1/2 flex flex-col items-center self-center"> */}
            <div className="w-1/2 flex flex-col items-start self-start mt-20
            ">
              <AnimatedText text="Turning Vision Into Reality With Code And Design." 
              className="!text-6xl text-left"/>
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className="flex items-center self-start mt-2">
              {/* <Link href="/dummy.pdf" target={"_blank"}
                className="mr-4 flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                download={true}
                >Resumé <LinkArrow className={"w-6 ml-1"}/> 
                </Link> */}
                <Link href="mailto:aj.evile@gmail.com" target={"_blank"}
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                >Get In Touch</Link>
              </div>
            </div>

          </div>
        </Layout>
        <HireMe/>
        {/* <div className="absolute right-8 bottom-0.5 inline-block w-24">
          <Image src={lightBulb} alt="AJ Evile" className='w-full h-auto'/>
        </div> */}
      </main>
    </>
  );
}