import React from 'react'

type TypeLayout = {
    children: React.ReactNode,
    className?: string
}

const Layout = ({children, className=""}: TypeLayout) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 xl:-24 lg:p-16 md:p-12 sm:p-8 ${className}`}>
        {children}
    </div>
  )
}

export default Layout