"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
      id="sectionProjects"
      ref={ref}
    >
      <section className="sectionAboutHorizontal">
        <h1>Some Things I’ve Built</h1>

        <motion.div
          // variants={item}
          // style={{ x: scrollProgress, opacity: opacityProgress }}
          className="projectContainner"
        >
          <Link
            className="links"
            href="https://client2-devconnector-com.onrender.com/"
            passHref={true}
          >
            <Image
              className="projectImage"
              alt="projectImage"
              src="/devconnector.png"
              width={700}
              height={800}
            />
          </Link>
          <div className="leftSubsectionProject">
            <Link
              className="links"
              href="https://client2-devconnector-com.onrender.com/"
              passHref={true}
            >
              <div style={{ textAlign: "right", marginLeft: "13rem" }}>
                Devconnector
              </div>
            </Link>
            <div className="boldTag">
              I developed DevConnector, a social network application featuring
              user authentication with JWT, profile management, and post CRUD
              functionalities. The project utilized JavaScript, Node.js,
              React.js, Redux, Express.js, MongoDB, Git, and Docker. I
              containerized the application with Docker and Docker Compose, and
              orchestrated its deployment using Kubernetes. You can view the
              GitHub repository and access the deployed application using links
              belows.
            </div>

            <ul className="linksContainer">
              <Link
                className="links"
                href="https://github.com/Nishant-Malik26/NodePrep"
                passHref={true}
              >
                <ul>Github Repository</ul>
              </Link>
              <Link
                className="links"
                href="https://client2-devconnector-com.onrender.com/"
                passHref={true}
              >
                <ul>Deployed Application</ul>
              </Link>
            </ul>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}

export default Projects;
