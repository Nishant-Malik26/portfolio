"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scrollProgress = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const scrollProgress2 = useTransform(
    scrollYProgress,
    [0.2, 0.8],
    [150, -210]
  );
  const scrollProgress3 = useTransform(
    scrollYProgress,
    [0.22, 0.8],
    [190, -280]
  );

  return (
    <motion.div>
      <motion.section className="sectionAbout">
        <h1>Where I have Worked</h1>

        <motion.div
          // variants={item}
          style={{ x: scrollProgress, opacity: opacityProgress }}
          className="experienceContainner"
        >
          <h4>Cantik Technologies</h4>
          <ul className="pointers">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              dolore atque quidem aliquid officiis similique excepturi ullam
              maiores consequatur beatae pariatur repudiandae quasi ducimus,
              incidunt, ex iusto eveniet. Quam, obcaecati.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              dolore atque quidem aliquid officiis similique excepturi ullam
              maiores consequatur beatae pariatur repudiandae quasi ducimus,
              incidunt, ex iusto eveniet. Quam, obcaecati.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              dolore atque quidem aliquid officiis similique excepturi ullam
              maiores consequatur beatae pariatur repudiandae quasi ducimus,
              incidunt, ex iusto eveniet. Quam, obcaecati.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              dolore atque quidem aliquid officiis similique excepturi ullam
              maiores consequatur beatae pariatur repudiandae quasi ducimus,
              incidunt, ex iusto eveniet. Quam, obcaecati.
            </li>
          </ul>
        </motion.div>
        <motion.div
          //  variants={item}
          style={{ x: scrollProgress3, opacity: opacityProgress }}
          // transition={{ delay: 2 }}
          className="experienceContainner"
        >
          <h4>Lorem ipsum dolor</h4>
          <ul className="pointers">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              dolore atque quidem aliquid officiis similique excepturi ullam
              maiores consequatur beatae pariatur repudiandae quasi ducimus,
              incidunt, ex iusto eveniet. Quam, obcaecati.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              dolore atque quidem aliquid officiis similique excepturi ullam
              maiores consequatur beatae pariatur repudiandae quasi ducimus,
              incidunt, ex iusto eveniet. Quam, obcaecati.
            </li>
          </ul>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}

export default Experience;
