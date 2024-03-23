import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>CUSTOM </motion.b> WEB DESIGN
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>SUPERIOR </motion.b>  PERFORMANCE
          </h1>
          <button >WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>
            Custom Design</h2>
          <p>
            create websites that generate brand engagement, conversions and measurable results.
          </p>
          <a href="#Contact" className="Go">Go</a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2> Development</h2>
          <p>
            create superior online shopping experiences to boost revenue and grow brand loyalty.
          </p>
          <a href="#Contact" className="Go">Go</a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>
            Website Marketing</h2>
          <p>
            craft digital marketing initiatives to help you grow brand awareness and reach your target audience.
          </p>
          <a href="#Contact" className="Go">Go</a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>

            Web App Design
          </h2>
          <p>
            take a strategic approach to web app creation to provide intuitive user experiences for optimal engagement and user satisfaction
          </p>
          <a href="#Contact" className="Go">Go</a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
