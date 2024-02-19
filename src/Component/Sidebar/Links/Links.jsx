import { motion } from "framer-motion"
const Links = ({ setopen }) => {


  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1
      }
    },

    closed: {
      transition: {
        staggerChildren: 0.5,
        staggerDirection: -1
      }
    }
  }
  const itemsvariants = {
    open: {
      y: 0,
      opacity: 1
    },

    closed: {
      y: 50,
      opacity: 0
    }
  }

  const items = [
    "Homepage", "Services", "Portfolio", "Contact", "About"
  ]


  return (
    <motion.div className="links " variants={variants}>
      {items.map((item) => <motion.a href={`#${item}`} key={item} variants={itemsvariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setopen((prev) => !prev)}>{item}</motion.a>


      )}
    </motion.div>
  )
}

export default Links