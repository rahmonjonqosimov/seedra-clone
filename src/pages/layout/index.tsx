import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { Outlet } from 'react-router-dom'

const Layout:React.FC = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout