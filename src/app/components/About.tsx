"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.3 1", "1.33 1"],
  });

  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      style={{ scale: scrollProgress, opacity: opacityProgress }}
      ref={ref}
      id="sectionAbout"
    >
      <section className="sectionAbout">
        {/* <h5 className="smallFont">Hi, my name is</h5> */}
        <p className="para">
          Hi, I&apos;m Nishant Malik, a dedicated full-stack developer with a flair
          for building innovative web solutions. My journey in the tech world
          has been fueled by a passion for creating seamless user experiences
          and leveraging the power of AWS to deliver robust and scalable
          applications. With a strong foundation in both front-end and back-end
          technologies, I thrive on turning complex problems into elegant,
          efficient code. Whether it&apos;s optimizing performance, enhancing user
          interfaces, or ensuring secure data handling, I am committed to
          excellence in every aspect of development. At the heart of my work is
          a desire to push boundaries and drive progress. I believe in
          continuous learning and staying abreast of the latest industry trends
          to keep my skills sharp and my projects cutting-edge. Let&apos;s connect
          and create something extraordinary together. Whether it&apos;s
          collaborating on groundbreaking projects or sharing insights on the
          latest in tech, I&apos;m excited about the possibilities that lie ahead.
        </p>
        <div className="techstackContainer">
          <ul className="techStack">
            <li>React</li>
            <li>Javascipt</li>
            <li>HTML/CSS3</li>
          </ul>
          <ul className="techStack">
            <li>NodeJS</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
          <ul className="techStack">
            <li>Java</li>
            <li>SpringBoot</li>
            <li>Hibernate</li>
          </ul>
          <ul className="techStack">
            <li>Git/Github/CodeCommit(AWS)</li>
            <li>Agile Methodologies</li>
            <li>AWS</li>
          </ul>
        </div>
      </section>
    </motion.div>
  );
}

export default About;
