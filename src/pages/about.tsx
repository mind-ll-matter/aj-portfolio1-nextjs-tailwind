import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/profile2-crop.jpg"
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { once } from 'events'
import Experience from '@/components/Experience'

const AnimatedNumbers = (value: {value:number} ) => {
    const ref = useRef<HTMLInputElement>(null)

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration:3000 });
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value.value)
        }
    }, [isInView, value.value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value.value){
                ref.current.textContent = latest.toFixed(0)
            }
        })

    }, [springValue, value.value])

    return<span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>AJ Evile | About Page</title>
            <meta name="description" content="AJ Evile is a web developer and ui ux designer who loves turning ideas into reality."/>
        </Head>
        <main className="flex w-full flex-col items-center justify-center">
            <Layout className='pt-16'>
                <AnimatedText className="mb-16" text="Mind to Matter."/> 
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Kia ora</h2>
                        <p className='font-medium'>
                            I'm AJ, a web developer and UI/UX designer with passion for new and innovative ideas. I've fallen in love with technology and how it can be used to help our communities in Aotearoa and world wide. 
                        </p>
                        <p className='font-medium my-4'>
                            Having studied Biomedical Engineering at the University of Auckland, I also have a deep interest in human biology and psycology - what we're made of, how we operate and how we think. This appreciation for the sciences, I believe, sets me apart from your typical software developer. I love turning thoughts into reality, and seeing how it can make the world a better place.
                        </p>
                        <p className='font-medium'>
                            If you'd like to take to an idea from mind to matter, let's grab a coffee!
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                        <Image src={profilePic} alt="AJ Evile" className="w-full h-auto rounded-2xl"/>
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={5}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>satisfied clients</h2>
                        </div>
                        <div  className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                            <AnimatedNumbers value={5}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>projects completed</h2>
                        </div>
                        <div  className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                            <AnimatedNumbers value={6}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>months of experiences</h2>
                        </div>
                    </div>
                </div>
                <Experience/>
            </Layout>
        </main>
    </>
  )
}

export default about