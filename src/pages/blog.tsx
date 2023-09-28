import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import article1 from "../../public/images/articles/BoatThumbnail.jpg";
import article2 from "../../public/images/articles/Faletele.jpg";
import article3 from "../../public/images/articles/KidsBakeHouse.jpg";
import article4 from "../../public/images/articles/BehindBar.jpg";

const MotionImage = motion(Image);

type TypeArticle = {
  img: StaticImageData;
  title: string;
  date: string;
  link: string;
};

type TypeFeaturedArticle = {
  img: StaticImageData;
  title: string;
  time: string;
  summary: string;
  link: string;
};

type TypeMovingImg = {
  title: string;
  img: StaticImageData;
  link: string;
};

// Separate the animation logic into an individual component (separate to the rest of the article)
// so that only the necessary parts are rerendered instead of rerendering the whole article component
const MovingImg = ({ title, img, link }: TypeMovingImg) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(document.createElement("div"));

  const handleMouse = (event: any) => {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-14);
  };
  const handleMouseLeave = (event: any) => {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline md:text-lg">
        {title}
      </h2>
      <MotionImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-50 w-96 h-auto hidden absolute rounded-lg sm:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }: TypeArticle) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }} //so that the trickling of articles only happens once.
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 sm:flex-col dark:border-light dark:bg-dark dark:text-light"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 sm:self-start  sm:pl-0 sm:pt-2 xs:text-sm dark:text-primaryDark">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({
  img,
  title,
  time,
  summary,
  link,
}: TypeFeaturedArticle) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl md:mt-5 dark:bg-dark dark:border-light">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
    xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <MotionImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg ">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const blogs = () => {
  return (
    <>
      <Head>
        <title>AJ Evile | About Page</title>
        <meta
          name="description"
          content="AJ Evile is a web developer and ui ux designer who loves turning ideas into reality."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Some of my thoughts"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap -y-16">
            <FeaturedArticle
              title="Resources that changed my life."
              summary="I promise I'm gonna write up something interesting soon lol."
              img={article1}
              link="/"
              time="3 min read"
            />
            <FeaturedArticle
              title="Other stuff I want to talk about"
              summary="I've got no idea what else I want to talk about right now, but when I do, I'll put it here."
              img={article2}
              link="/"
              time="1 min read"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center mt-32">
            still thinking...
          </h2>
          {/*
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Here is where we will add more articles that we create. I won&apos;t need this part right now though."
              img={article3}
              date="26/09/2023"
              link="/"
            />
            <Article
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              img={article4}
              date="12/04/2018"
              link="/"
            />
            <Article
              title="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              img={article1}
              date="31/12/2015"
              link="/"
            />
            <Article
              title="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              img={article2}
              date="06/08/2012"
              link="/"
            />
            <Article
              title="Here is where we will add more articles that we create. I won&apos;t need this part right now though."
              img={article3}
              date="26/09/2023"
              link="/"
            />
            <Article
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              img={article4}
              date="12/04/2018"
              link="/"
            />
            <Article
              title="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              img={article1}
              date="31/12/2015"
              link="/"
            />
            <Article
              title="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              img={article2}
              date="06/08/2012"
              link="/"
            />
          </ul>
          */}
        </Layout>
      </main>
    </>
  );
};

export default blogs;
