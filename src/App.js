import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import initFontAwesome from "./helper/initFontAwesome";
initFontAwesome();

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About height={true} />} />
        <Route path="projects" element={<Projects height={true} />} />
        <Route path="contact" element={<Contact height={true} />} />
        <Route path="*" element={<Home height={true} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
