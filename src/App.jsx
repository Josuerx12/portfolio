import "./App.sass";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Lang from "./components/LangSelector";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Lang />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
