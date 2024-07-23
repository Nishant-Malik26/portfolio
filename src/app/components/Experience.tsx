"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.3 1", "1.33 1"],
  });

  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const scrollProgress2 = useTransform(scrollYProgress, [0, 1], [0.8, -1]);
  const scrollProgress3 = useTransform(scrollYProgress, [0, 1], [0.8, -1]);

  return (
    <motion.div id="sectionExperience">
      <motion.section
        className="sectionAbout"
        style={{ x: scrollProgress, opacity: opacityProgress }}
      >
        <h1>Where I have Worked</h1>

        <motion.div
          // variants={item}
          style={{ x: scrollProgress, opacity: opacityProgress }}
          className="experienceContainner"
        >
          <h4>Cantik Technologies</h4>
          <ul className="pointers">
            <li>
              From December 2022 to April 2024, I was a Full Stack Developer at
              Wipro through Cantik Technologies. I built responsive user
              interfaces with React, JavaScript, CSS, Redux, ANT Design, and
              SCSS, and developed RESTful APIs using Node.js. I also used Jest
              and React Testing Library for unit testing and participated in
              Agile/Scrum meetings to enhance project workflows.
            </li>
            <li>
              I worked on the Robin - Dealer Management System 2.0 for Mahindra
              and Mahindra, developing over 23 modules and integrating 60+ APIs.
              This optimization improved load times by 2 seconds and covered all
              phases of the SDLC. Technologies used included JavaScript,
              React.js, Redux, SCSS, Jest, Node.js, and CodeCommit (AWS).
            </li>
          </ul>
        </motion.div>
        <motion.div
          //  variants={item}
          style={{ x: scrollProgress2, opacity: opacityProgress }}
          // transition={{ delay: 2 }}
          className="experienceContainner"
        >
          <h4>Cognizant Internship</h4>
          <ul className="pointers">
            <li>
              During my internship at Cognizant in Gurugram from February to
              August 2022, I successfully completed a comprehensive web
              development training program. This experience provided me with
              valuable hands-on skills across various aspects of web
              development, significantly enhancing my technical expertise and
              preparing me for real-world challenges.
            </li>
          </ul>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}

export default Experience;
