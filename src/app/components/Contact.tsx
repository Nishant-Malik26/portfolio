"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Contact() {
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
      id="sectionContact"
    >
      <section className="sectionContact">
        <h1>Get in touch</h1>

        <motion.div
          // variants={item}
          // style={{ x: scrollProgress, opacity: opacityProgress }}
          className="projectContainner"
        >
          <div style={{ textAlign: "center", width: "50%", marginLeft: "25%" }}>
            I am actively seeking new opportunities as a Full Stack, Frontend,
            or Backend Developer. If you have any exciting roles or projects in
            mind, feel free to reach out—I’d love to hear from you and discuss
            potential opportunities!
          </div>
        </motion.div>
        <a className="resumeButton" href="mailto:nishantmalik2015@gmail.com">
          Contact Me
        </a>
      </section>
    </motion.div>
  );
}

export default Contact;
