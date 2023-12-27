import "./App.sass";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Lang from "./components/LangSelector";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Error from "./pages/error/Error";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Lang />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
