"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

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
    >
      <section className="sectionContact">
        <h1>Get in touch</h1>

        <motion.div
          // variants={item}
          // style={{ x: scrollProgress, opacity: opacityProgress }}
          className="projectContainner"
        >
          <div style={{ textAlign: "center", width: "50%", marginLeft: "25%" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum
            harum sapiente saepe ipsum. Voluptatem culpa explicabo illo facilis
            quia, voluptatibus, asperiores beatae laborum aspernatur tempore
            vitae id. Qui, temporibus.
          </div>
        </motion.div>
        <button className="resumeButton">Contact Me</button>
      </section>
    </motion.div>
  );
}

export default Contact;
