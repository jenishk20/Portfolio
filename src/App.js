import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Certification from "./components/Certifications/Certification";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Youtube from "./components/Youtube/Youtube";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Education/>
      <Experience/>
      <Skills/>
      <Youtube/>
      <Certification/>
      <Footer/>
    </div>
  );
}

export default App;
