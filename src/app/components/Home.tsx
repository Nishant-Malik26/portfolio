"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function HomePage() {
  const container = {
    hidden: { y: -100 },
    show: {
      y: 0,
      transition: {
        type: "spring",
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: -100 },
    show: { y: 0 },
  };

  const motionSection = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 2,
        ease: "easeOut",
        staggerDirection: -1,
      },
    },
  };

  const sectionItems = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div
      transition={{ staggerChildren: 1 }}
      className="sectionContainer"
    >
      <motion.nav className="navigation">
        <motion.ul variants={container} initial="hidden" animate="show">
          <motion.li variants={item}>
            <Link href={"#about"}>About</Link>
          </motion.li>
          <motion.li variants={item}>
            <Link href={"#experience"}>Experience</Link>
          </motion.li>
          <motion.li variants={item}>
            <Link href={"#projects"}>Projects</Link>
          </motion.li>
          <motion.li variants={item}>
            <Link href={"#contact"}>Contact</Link>
          </motion.li>
        </motion.ul>
      </motion.nav>
      <motion.section
        variants={motionSection}
        initial="hidden"
        animate="show"
        className="sectionAbout"
      >
        <motion.h5 variants={sectionItems} className="smallFont">
          Hi, my name is
        </motion.h5>
        <motion.div variants={sectionItems}>
          <h1>Nishant Malik.</h1>
          <h2>I am building things for web</h2>
        </motion.div>
        <motion.p variants={sectionItems} className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iure
          sapiente nobis, dicta id esse voluptate consequuntur quam veritatis
          tenetur ducimus eum sed quae corporis nihil laudantium similique odio
        </motion.p>
        <motion.div variants={sectionItems}>
          <button className="resumeButton">Checkout My Resume</button>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}

export default HomePage;
