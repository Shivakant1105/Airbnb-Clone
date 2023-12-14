import React, { useState } from 'react'
// import Dashboard from '../pages/dashboard.page'
import Header from '../components/Header'

const Layout = ({children}) => {

  return (
    <>
   <Header  />
   {children}
    {/* <Dashboard/> */}
    </>
  )
}

export default Layout