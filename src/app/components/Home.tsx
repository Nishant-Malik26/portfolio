import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <div className="sectionContainer">
      <nav className="navigation">
        <ul>
          <li>
            <Link href={"#about"}>About</Link>
          </li>
          <li>
            <Link href={"#experience"}>Experience</Link>
          </li>
          <li>
            <Link href={"#projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"#contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
      <section className="sectionAbout">
        <h5 className="smallFont">Hi, my name is</h5>
        <div>
          <h1>Nishant Malik.</h1>
          <h2>I am building things for web</h2>
        </div>
        <p className="para">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </p>
        <div>
          <button className="resumeButton">Checkout My Resume</button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
