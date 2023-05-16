import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import profilePic from "../assets/imgs/profilePic.jpg";
import "./Home.sass";

const home = () => {
  return (
    <section className="home">
      <div className="presentation">
        <h2>Desenvolvedor Front-End</h2>
        <p>
          Olá sou Josue Carvalho. Sou Desenvolvedor Front-End e trabalho com
          React.
        </p>
        <div className="proffesional-links">
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <button>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              Download CV
            </a>
          </button>
        </div>
      </div>
      <img className="profilePic" src={profilePic} />
    </section>
  );
};

export default home;
