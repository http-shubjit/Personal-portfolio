import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Shubhajit-Dev        </motion.span>
        <div className="social">

          <a href="https://github.com/http-shubjit">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/shubajitbiswal001/">
            <img src="/linkedin.jpg" alt="" />
          </a>
          <a href="https://www.instagram.com/shubjit.02x?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="">
            <img src="/facebook.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
