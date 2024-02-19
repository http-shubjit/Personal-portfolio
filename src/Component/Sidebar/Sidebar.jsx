import React, { useState } from 'react'
import { motion } from 'framer-motion'

import './Sidebar.scss'
import Togglebutton from './Togglebutton/Togglebutton'
import Links from './Links/Links'

const Sidebar = () => {
  const [open, setopen] = useState(false)
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        // delay: 0.5,
        type: "spring",
        stiffness: 600,
        // damping: 40
      }
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        // delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  }

  return (
    <motion.div className='sidebar' animate={open ? 'open' : 'closed'}>
      <motion.div className="bg" variants={variants}>
        <Links setopen={setopen} />

      </motion.div>
      <Togglebutton setopen={setopen} />
    </motion.div>
  )
}

export default Sidebar