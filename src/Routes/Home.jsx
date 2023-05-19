import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import profilePic from "../assets/imgs/profilePic.jpg";
import "./Home.sass";

const home = () => {
  return (
    <main className="home">
      <div className="presentation">
        <h2>Desenvolvedor Front-End</h2>
        <p>
          Olá sou Josue Carvalho. Sou Desenvolvedor Front-End e trabalho com
          React.
        </p>
        <div className="professional-links">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/josueaze12/" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/Josuerx12" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
          <button>
            <a to="/" target="_blank" rel="noreferrer">
              Download CV
            </a>
          </button>
        </div>
      </div>
      <img className="profilePic" src={profilePic} />
    </main>
  );
};

export default home;
