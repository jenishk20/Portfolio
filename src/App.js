import logo from "./logo.svg";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Certification from "./components/Certifications/Certification";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Education/>
      <Experience/>
      <Skills/>
      <Certification/>
    </div>
  );
}

export default App;
