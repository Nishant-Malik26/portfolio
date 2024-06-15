"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.3 1", "1.33 1"],
  });

  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      style={{
        scale: scrollProgress,
        opacity: opacityProgress,
        marginTop: "5rem",
      }}
      ref={ref}
    >
      <section className="sectionAboutHorizontal">
        <h1>Some Things I’ve Built</h1>

        <motion.div
          // variants={item}
          // style={{ x: scrollProgress, opacity: opacityProgress }}
          className="projectContainner"
        >
          <Image
            className="projectImage"
            alt="projectImage"
            src="/devconnector.png"
            width={700}
            height={800}
          />
          <div className="leftSubsectionProject">
            <div style={{ textAlign: "right", marginLeft: "13rem" }}>
              Robin by Mahindra and Mahindra
            </div>
            <div className="boldTag">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              ullam dolore? Aut necessitatibus ad laudantium odit! Accusantium
              deleniti, quo pariatur fugit, recusandae et magni mollitia porro,
              voluptatem nesciunt rem id.
            </div>
            <ul style={{ marginTop: "17rem", marginLeft: "0.5rem" }}>
              <ul>heloo</ul>
              <ul>heloo</ul>
              <ul>heloo</ul>
              <ul>heloo</ul>
              <ul>heloo</ul>
            </ul>
            <ul style={{ marginLeft: "20rem" }}>
              <ul>link</ul>
              <ul>link</ul>
            </ul>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}

export default Projects;
