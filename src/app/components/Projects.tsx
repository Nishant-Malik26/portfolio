"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.3 1", "1.33 1"],
  });

  const scrollProgress = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section className="sectionAboutHorizontal">
      <h1>Projects</h1>
      <motion.div className="projectWrapper">
        <motion.div
          // variants={item}
          style={{ x: scrollProgress, opacity: opacityProgress }}
          className="projectContainner"
        >
          {/* <h4>Robin by Mahindra and Mahindra</h4> */}
          <ul className="pointers">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            </li>
          </ul>
        </motion.div>
        <motion.div
          // variants={item}
          style={{ x: scrollProgress, opacity: opacityProgress }}
          className="projectContainner"
        >
          {/* <h4>Robin by Mahindra and Mahindra</h4> */}
          <ul className="pointers">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            </li>
          </ul>
        </motion.div>
        <motion.div
          // variants={item}
          style={{ x: scrollProgress, opacity: opacityProgress }}
          className="projectContainner"
        >
          {/* <h4>Robin by Mahindra and Mahindra</h4> */}
          <ul className="pointers">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            </li>
          </ul>
        </motion.div>
        <motion.div
          // variants={item}
          style={{ x: scrollProgress, opacity: opacityProgress }}
          className="projectContainner"
        >
          {/* <h4>Robin by Mahindra and Mahindra</h4> */}
          <ul className="pointers">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            </li>
          </ul>
        </motion.div>
        <motion.div
          // variants={item}
          style={{ x: scrollProgress, opacity: opacityProgress }}
          className="projectContainner"
        >
          {/* <h4>Robin by Mahindra and Mahindra</h4> */}
          <ul className="pointers">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            </li>
          </ul>
        </motion.div>
        <motion.div
          // variants={item}
          style={{ x: scrollProgress, opacity: opacityProgress }}
          className="projectContainner"
        >
          {/* <h4>Robin by Mahindra and Mahindra</h4> */}
          <ul className="pointers">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            </li>
          </ul>
        </motion.div>
        <motion.div
          // variants={item}
          style={{ x: scrollProgress, opacity: opacityProgress }}
          className="projectContainner"
        >
          {/* <h4>Robin by Mahindra and Mahindra</h4> */}
          <ul className="pointers">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            </li>
          </ul>
        </motion.div>
        <motion.div
          // variants={item}
          style={{ x: scrollProgress, opacity: opacityProgress }}
          className="projectContainner"
        >
          {/* <h4>Robin by Mahindra and Mahindra</h4> */}
          <ul className="pointers">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            </li>
          </ul>
        </motion.div>
        <motion.div
          // variants={item}
          style={{ x: scrollProgress, opacity: opacityProgress }}
          className="projectContainner"
        >
          {/* <h4>Robin by Mahindra and Mahindra</h4> */}
          <ul className="pointers">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            </li>
          </ul>
        </motion.div>
        <motion.div
          // variants={item}
          style={{ x: scrollProgress, opacity: opacityProgress }}
          className="projectContainner"
        >
          {/* <h4>Robin by Mahindra and Mahindra</h4> */}
          <ul className="pointers">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            </li>
          </ul>
        </motion.div>
        <motion.div
          // variants={item}
          style={{ x: scrollProgress, opacity: opacityProgress }}
          className="projectContainner"
        >
          {/* <h4>Robin by Mahindra and Mahindra</h4> */}
          <ul className="pointers">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            </li>
          </ul>
        </motion.div>
        <motion.div
          // variants={item}
          style={{ x: scrollProgress, opacity: opacityProgress }}
          className="projectContainner"
        >
          {/* <h4>Robin by Mahindra and Mahindra</h4> */}
          <ul className="pointers">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            </li>
          </ul>
        </motion.div>
        <motion.div
          // variants={item}
          style={{ x: scrollProgress, opacity: opacityProgress }}
          className="projectContainner"
        >
          {/* <h4>Robin by Mahindra and Mahindra</h4> */}
          <ul className="pointers">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            </li>
          </ul>
        </motion.div>
        <motion.div
          // variants={item}
          style={{ x: scrollProgress, opacity: opacityProgress }}
          className="projectContainner"
        >
          {/* <h4>Robin by Mahindra and Mahindra</h4> */}
          <ul className="pointers">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
