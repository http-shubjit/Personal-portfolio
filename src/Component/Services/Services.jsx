import React, { useRef } from 'react'
import './Services.scss'
import { useInView, motion } from 'framer-motion'
import people from '../../assets/people.webp'


const variants = {
  initial: {
    x: -500,
    opacity: 0,
    y: 100

  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    }
  },

}
const Services = () => {
  const ref = useRef()
  const inview = useInView(ref, { margin: "-100px" })

  return (
    <motion.div
      className='services'
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={inview && "animate"}


    >

      <motion.div className="textcontainer" variants={variants}>
        <p>i Focus on helping your brand grow</p>
        <hr />
        <p>and move forward</p>
      </motion.div>
      <motion.div className="tittlecontainer" variants={variants} >
        <div className="title">
          <img src={people} alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas

          </h1>

        </div>
        <div className="title">
          <h1> <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business</h1>

          <button>What We Do</button>
        </div>
      </motion.div>
      <motion.div className="listcontainer" variants={variants} >

        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Branding</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati pariatur fugiat corrupti. Fugiat optio accusamus accusantium quod, eaque aliquam eius qui repellat obcaecati. Nisi eos dignissimos et omnis doloremque neque!</p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Branding</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati pariatur fugiat corrupti. Fugiat optio accusamus accusantium quod, eaque aliquam eius qui repellat obcaecati. Nisi eos dignissimos et omnis doloremque neque!</p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Branding</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati pariatur fugiat corrupti. Fugiat optio accusamus accusantium quod, eaque aliquam eius qui repellat obcaecati. Nisi eos dignissimos et omnis doloremque neque!</p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Branding</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati pariatur fugiat corrupti. Fugiat optio accusamus accusantium quod, eaque aliquam eius qui repellat obcaecati. Nisi eos dignissimos et omnis doloremque neque!</p>
          <button>Go</button>
        </motion.div>
      </motion.div>


    </motion.div>
  )
}

export default Services