import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Competences from "./components/Competences/Competences";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import parallax from "./assets/images/about/mainClavier.webp";

import "./App.css";

// import { useEffect } from "react";

// import scrollSmooth from "./features/scrollSmooth";

function App() {

  // useEffect(() => {
  //   const positions = scrollSmooth();
  //   console.log("positions : ", positions);
  // }, [])

  return (
    <>
      <header>
        <Navbar />
      </header>


      <main>

        <img id="aboutBackgroundImage" src={parallax} alt="Photos de mains sur un clavier d'ordinateur" />

        <Home />

        <About />

        <Competences />

        <Projects />

        <Contact />

      </main>


      <script src="script.js"></script>
    </>
  )
}

export default App
