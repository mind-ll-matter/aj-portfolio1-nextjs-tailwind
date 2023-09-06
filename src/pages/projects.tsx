import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { GithubIcon } from '@/components/Icons'

import turners from "../../public/images/projects/turners.jpg"
import metro from "../../public/images/projects/metro-combined-image.png"
import levelup from "../../public/images/projects/levelup-combined-image.png"
import apiProj from "../../public/images/projects/api-combined-image.png"
import portfolio from "../../public/images/projects/portfolio-page.png"


type TypeFeaturedProject = {
    type: string,
    title: string,
    summary: string,
    img: StaticImageData,
    link: string,
    github: string
}

type TypeProject = {
    type: string,
    title: string,
    img: StaticImageData,
    link: string,
    github: string
}

const FeaturedProject = (props: TypeFeaturedProject) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl'/>
            <Link href={props.link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={props.img} alt={props.title} className='w-full h-auto'/>
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>{props.type}</span>
                <Link href={props.link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{props.title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{props.summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={props.github} target='_blank' className='w-10'><GithubIcon/></Link>
                    <Link href={props.link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 font-semibold'>Visit Project</Link>
                </div>  
            </div>

        </article>
    )
}

const Project = (props:TypeProject) => {
    return (
    <article className='w-full flex items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative flex-col'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl'/>

        <Link href={props.link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
            <Image src={props.img} alt={props.title} className='w-full h-auto'/>
        </Link>

        <div className='w-full flex flex-col items-start justify-between mt-4'>
            <span className='text-primary font-medium text-xl'>{props.type}</span>
            <Link href={props.link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold'>{props.title}</h2>
            </Link>
            <div className='w-full mt-2 flex items-center justify-between'>
                <Link href={props.link} target='_blank' className='text-lg font-semibold underline'>Visit</Link>
                <Link href={props.github} target='_blank' className='w-10'><GithubIcon/></Link>
            </div>  
        </div>
    </article>
    )
}

const projects = () => {

  return (
    <>
        <Head>
            <title>AJ Evile | Projects Page</title>
            <meta name="description" content="Here are some of the projects that AJ has worked on."/>
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Everything you can imagine is real." className='mb-16'/>
                <div className='grid grid-cols-12 gap-24 gap-y-32'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            type="AI & Search Integration"
                            title="Turners Search & Chatbot"
                            summary="This project used ReactJS,DialogFlow, Bing Custom Search, CSS, and JavaScript to build a web home page with chatbot and custom search to search things on the turners website. Users can use the chatbot to ask any questions about the Turners auction."
                            img={turners}
                            link="https://github.com/mind-ll-matter/turners-auction-1-frontend"
                            github="https://github.com/mind-ll-matter/turners-auction-1-frontend"
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject 
                             type="Full Stack"
                             title="Metro Property Redesign"
                             img={metro}
                             link="https://github.com/mind-ll-matter/Metro_Frontend-MRHQ_mission5/"
                             summary='A redesign of the Metro Property Management web app, using React, SCSS, Docker and MongoDB. Completed with a team of two designers and three developers.'
                             github="https://github.com/mind-ll-matter/Metro_Frontend-MRHQ_mission5/"
                         />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject 
                             type="Backend + DevOps"
                             title="Restul API Deployment"
                             img={apiProj}
                             link="https://github.com/mind-ll-matter/mrhq-level5-mission3-aj"
                             summary='A complete deployment of a Restful API with CRUD functionality built with NodeJS, Typescript, and GCP Cloud Run.'
                             github="https://github.com/mind-ll-matter/mrhq-level5-mission3-aj"
                         />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject 
                             type="Full Stack"
                             title="Student-Teacher Platform"
                             img={levelup}
                             link="https://github.com/Mission-Ready/mission-x-frontend-2301-l41t1"
                             summary='Our team of 5 created a fully functional school web app for both teachers and students. We used React, NodeJS and MySQL.'
                             github="https://github.com/Mission-Ready/mission-x-frontend-2301-l41t1"
                         />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject 
                             type="Frontend + Deployment"
                             title="Portfolio Project"
                             img={portfolio}
                             link="www.ajevile.com"
                             summary='A practise portfolio website, created using NextJS, Tailwind and Framer motion, for the first time.'
                             github="https://github.com/mind-ll-matter/ajevile-frontend-nextjs-tailwind"
                         />
                    </div>
                    {/*  
                    <div className='col-span-6'>
                        <Project 
                            type="Full Stack"
                            title="Metro Property Redesign"
                            img={metro}
                            link=""
                            github="https://github.com/mind-ll-matter/Metro_Frontend-MRHQ_mission5/"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            type="Project"
                            title="Turners Search & Chatbot"
                            img={turners}
                            link=""
                            github="https://github.com/mind-ll-matter/turners-auction-1-frontend"
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            type="Featured Project"
                            title="Turners Search & Chatbot"
                            summary="My project used ReactJS,DialogFlow, Bing Custom Search, CSS, and JavaScript to build a web home page with chatbot and custom search to search things on the turners website. Users can use the chatbot to ask any questions about the Turners auction."
                            img={turners}
                            link=""
                            github="https://github.com/mind-ll-matter/turners-auction-1-frontend"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project 
                            type="Project"
                            title="Turners Search & Chatbot"
                            img={turners}
                            link=""
                            github="https://github.com/mind-ll-matter/turners-auction-1-frontend"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            type="Project"
                            title="Turners Search & Chatbot"
                            img={turners}
                            link=""
                            github="https://github.com/mind-ll-matter/turners-auction-1-frontend"
                        />
                    </div>
                     */}
                </div>
            </Layout>
        </main>
    </>
    )
}

export default projects