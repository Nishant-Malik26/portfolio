import Link from "next/link";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import HomePage from "./components/Home";
// import AboutPage from "./about/page";
// import AboutPage from "./components/about/page";

export default function Home() {
  return (
    <div className="wrapper">
      <HomePage />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
