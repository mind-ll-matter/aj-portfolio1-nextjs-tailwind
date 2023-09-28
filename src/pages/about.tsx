import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/profile2-crop.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { once } from "events";
import Experience from "@/components/Experience";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = (value: { value: number }) => {
  const ref = useRef<HTMLInputElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value.value);
    }
  }, [isInView, value.value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value.value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value.value]);

  return <span ref={ref}></span>;
};

const about = () => {
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
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 lg-:!text-7xl sm:!text-6xl xs:!text:4xl sm:mb-8"
            text="Mind to Matter."
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Kia ora
              </h2>
              <p className="font-medium">
                I&apos;m AJ, a web developer and UI/UX designer with passion for
                new and innovative ideas. I&apos;ve fallen in love with
                technology and how it can be used to help our communities in
                Aotearoa and world wide.
              </p>
              <p className="font-medium my-4">
                Having studied Biomedical Engineering at the University of
                Auckland, I also have a deep interest in human biology and
                psychology - what we&apos;re made of, how we operate and how we
                think. This appreciation for the sciences, I believe, sets me
                apart from your typical software developer. I love turning
                thoughts into reality, and seeing how it can make the world a
                better place.
              </p>
              <p className="font-medium">
                If you&apos;d like to take to an idea from mind to matter,
                let&apos;s grab a coffee!
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="AJ Evile"
                className="w-full h-auto rounded-2xl"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={6} />+
                </span>
                <h2 className="text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Months of Experience
                </h2>
              </div>
            </div>
          </div>
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default about;
