import { motion } from "framer-motion"
import "./Hero.scss"
import hero from '../../assets/hero.png'
import scroll from '../../assets/scroll.png'



const slidingvariants = {
  intial: {
    x: -0,

  },
  animate: {
    x: "-220%",

    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror"
    }
  },

}



const textvariants = {
  intial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  },

  scrollbutton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }

  }
}
const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div
          className="textcontainer"
          variants={textvariants}
          initial="intial"
          animate="animate"

        >
          <motion.h2 variants={textvariants}>Shubhajit Biswal</motion.h2>
          <motion.h1 variants={textvariants}>Web Devloper and Ui/Ux Designer</motion.h1>
          <motion.div className="buttons" variants={textvariants}>
            <motion.button variants={textvariants}>See latest work</motion.button>
            <motion.button variants={textvariants}>Contact me</motion.button>
          </motion.div>
          <motion.img src={scroll}
            alt=""
            variants={textvariants} animate="scrollbutton" />
        </motion.div>
      </div>

      <motion.div className="slidinngtext" variants={slidingvariants} intial="intial" animate="animate">
        Write Content Creator influencer
      </motion.div>
      <div className="imgcontainer">
        <img src={hero} alt="" />
      </div>


    </div>
  )
}

export default Hero