import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.sass";
const Navbar = () => {
  const [open, setOpen] = useState(true);
  const clickHandler = () => setOpen(!open);

  return (
    <div className="container">
      <header className="navbar">
        <h2 className="navbar-logo">Josué C.</h2>
        <nav className={"navbar-menu"}>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/projetos">Projetos</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
        <button onClick={clickHandler} className="navbar-menu-btn">
          <FaBars />
        </button>
      </header>
      <div className="mobile-menu">
        <nav
          className={open ? "navbar-menu-mobile" : "navbar-menu-mobile active"}
        >
          <ul>
            <li>
              <Link onClick={clickHandler} to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link onClick={clickHandler} to="/sobre">
                Sobre
              </Link>
            </li>
            <li>
              <Link onClick={clickHandler} to="/projetos">
                Projetos
              </Link>
            </li>
            <li>
              <Link onClick={clickHandler} to="/contato">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
