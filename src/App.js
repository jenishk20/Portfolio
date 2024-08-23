import logo from "./logo.svg";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Skills/>
    </div>
  );
}

export default App;
