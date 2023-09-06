import React from 'react'

type TypeLayout = {
    children: React.ReactNode,
    className?: string
}

const Layout = ({children, className=""}: TypeLayout) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-24 ${className}`}>
        {children}
    </div>
  )
}

export default Layout