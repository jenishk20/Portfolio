import logo from "./logo.svg";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Certification from "./components/Certifications/Certification";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Skills/>
      <Certification/>
    </div>
  );
}

export default App;
