import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Certification from "./components/Certifications/Certification";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Education/>
      <Experience/>
      <Skills/>
      <Certification/>
      <Footer/>
    </div>
  );
}

export default App;
