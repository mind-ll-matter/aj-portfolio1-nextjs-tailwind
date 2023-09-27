import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-sm dark:border-light
    sm:text-xs'>
        <Layout className='py-5 flex items-center justify-between dark:text-light
        lg:flex-col lg:py-4 md:py-2 sm:py-2 xs:py-2'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div>Built with 
                <span className='text-2xl px-1'>&hearts;</span> 
                {/* <span className='text-primary text-2xl px-1'>&#9825;</span>  */}
                by <Link href="https://www.linkedin.com/in/ajevile/" className='underline underline-offset-2
                ' target={"_blank"}>AJ</Link>
            </div>
        </Layout>
    </footer>
  )
}

export default Footer