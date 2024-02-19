import { useRef } from 'react'
import './Portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.unsplash.com/photo-1591293835940-934a7c4f2d9b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse error quam maiores ipsa, laudantium voluptate repellat nobis consequatur voluptatibus earum eos quibusdam at libero cupiditate dicta quaerat aspernatur asperiores unde? Rerum expedita perspiciatis corrupti eligendi? Minus adipisci exercitationem quidem doloribus unde, tenetur vero libero facere vel maiores? Amet, reprehenderit dolor.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.unsplash.com/photo-1591293835940-934a7c4f2d9b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse error quam maiores ipsa, laudantium voluptate repellat nobis consequatur voluptatibus earum eos quibusdam at libero cupiditate dicta quaerat aspernatur asperiores unde? Rerum expedita perspiciatis corrupti eligendi? Minus adipisci exercitationem quidem doloribus unde, tenetur vero libero facere vel maiores? Amet, reprehenderit dolor.",

  }
  , {
    id: 3,
    title: "Vanila JS app",
    img: "https://images.unsplash.com/photo-1591293835940-934a7c4f2d9b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse error quam maiores ipsa, laudantium voluptate repellat nobis consequatur voluptatibus earum eos quibusdam at libero cupiditate dicta quaerat aspernatur asperiores unde? Rerum expedita perspiciatis corrupti eligendi? Minus adipisci exercitationem quidem doloribus unde, tenetur vero libero facere vel maiores? Amet, reprehenderit dolor.",

  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.unsplash.com/photo-1591293835940-934a7c4f2d9b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse error quam maiores ipsa, laudantium voluptate repellat nobis consequatur voluptatibus earum eos quibusdam at libero cupiditate dicta quaerat aspernatur asperiores unde? Rerum expedita perspiciatis corrupti eligendi? Minus adipisci exercitationem quidem doloribus unde, tenetur vero libero facere vel maiores? Amet, reprehenderit dolor.",

  }


]


const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });// offset: ["start start", "end start"]
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);// ["0%", "-300%"]
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imagecontainer" ref={ref}>
            <img src={item.img} alt="" />

          </div>
          <motion.div className="textcontainer" style={{ y: y }}>
            <h2>{item.title}</h2>
            <p>{item.des}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progres">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX: scaleX }} className="progressbar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;