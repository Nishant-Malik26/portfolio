"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.3 1", "1.33 1"],
  });

  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1.3]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      style={{ scale: scrollProgress, opacity: opacityProgress }}
      ref={ref}
    >
      <section className="sectionAbout">
        {/* <h5 className="smallFont">Hi, my name is</h5> */}
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iure
          sapiente nobis, dicta id esse voluptate consequuntur quam veritatis
          tenetur ducimus eum sed quae corporis nihil laudantium similique odio
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iure
          sapiente nobis, dicta id esse voluptate consequuntur quam veritatis
          tenetur ducimus eum sed quae corporis nihil laudantium similique odio
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iure
          sapiente nobis, dicta id esse voluptate consequuntur quam veritatis
          tenetur ducimus eum sed quae corporis nihil laudantium similique odio
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iure
          sapiente nobis, dicta id esse voluptate consequuntur quam veritatis
          tenetur ducimus eum sed quae corporis nihil laudantium similique odio
        </p>

        <ul>
          <li>JS</li>
          <li>Java</li>
          {/* <li>Tello</li> */}
        </ul>
        <ul>
          <li>JS</li>
          <li>Java</li>
          {/* <li>Tello</li> */}
        </ul>
        <ul>
          <li>JS</li>
          <li>Java</li>
          {/* <li>Tello</li> */}
        </ul>
        <ul>
          <li>JS</li>
          <li>Java</li>
          {/* <li>Tello</li> */}
        </ul>
      </section>
    </motion.div>
  );
}

export default About;
