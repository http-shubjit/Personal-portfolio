import React from 'react'
import './Navbar.scss'
import { motion } from 'framer-motion'
import img1 from '../../assets/instagram.png'
import img2 from '../../assets/facebook.png'
import img3 from '../../assets/dribbble.png'
import img4 from '../../assets/youtube.png'
import Sidebar from '../Sidebar/Sidebar'



const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className="wrapper">
        <motion.span initial={{ opacity: 0, scale: 0.3 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >Shubhajit Biswal</motion.span>
        <div className="social">
          <a href="#" ><img src={img2} /></a>
          <a href="#" ><img src={img1} /></a>
          <a href="#"><img src={img3} /></a>
          <a href="#" ><img src={img4} /></a>

        </div>
      </div>
    </div>
  )
}

export default Navbar