import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import planet from '../../assets/planets.png'
import sun from '../../assets/sun.png'

const Parallax = ({ type }) => {
  const pref = useRef();

  const { scrollYProgress } = useScroll({
    target: pref,
    offset: ["start start", "end start"]
  });


  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const ytext = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);


  //
  //
  //style={{ x: ybg }}
  return (
    <div
      className="parallax"
      ref={pref}
      style={{
        background: type === "Services"
          ? "linear-gradient(180deg, #111132, #0c0c1d)"
          : "linear-gradient(180deg, #111132, #505064)"
      }}
    >
      <motion.h1 style={{ y: ytext }}>
        {type === "Services" ? "What I Do?" : "What I Did ?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{ backgroundImage: `url(${type === "planets" ? planet : sun})` }} ></motion.div>
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
    </div>
  );
};

export default Parallax;
