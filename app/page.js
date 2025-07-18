'use client'
import Image from "next/image"
import { motion } from "motion/react"
import "./home.css" 

export default function Home() {
  const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4 // Delay between child animations
    }
  }
};

const childVariant = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Ritik kamwal.pdf";
    link.download = "Ritik kamwal.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // funtion to hire page
  const hireMe = () => {
    window.location.href = "/hire";
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariant}
      exit={{ opacity: 0 }}
    className="profile-container">
      {/* Left side with text */}
      <motion.div variants={childVariant}
      className="profile-info">
        <h4>Welcome, I am</h4>
        <h1>Full Stack Developer</h1>
        <p><b>Let UI meets UX</b></p>

        <div className="profile-actions">
          <button className="downloadBtn" onClick={downloadCV}>
            Download CV
            <span className="btnIcon">
              <Image src="/download.svg" alt="Download" width={20} height={15} />
            </span>
          </button>

          <button className="contactMe" onClick={hireMe}>
           Contact Me
            <span className="btnIcon1">
              <Image src="/Graphics_arrow.svg" alt="Arrow" width={20} height={15}/>
            </span>
          </button>
        </div>
      </motion.div>

      {/* Right side with profile picture */}
      <motion.div
        variants={childVariant}
        exit={{ rotateY: 0 }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.7 }} 
        className="profile-picture">
        <Image
          src="/profilePhoto.png"
          alt="Developer"
          width={300}
          height={300}
          className="rounded-img"
        />
      </motion.div>
    </motion.div>
  );
}
