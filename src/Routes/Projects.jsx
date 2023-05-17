import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import weatherAppPic from "../assets/imgs/weatherApp.png";
import "./Projects.sass";
import axios from "axios";

const Projects = () => {
  //   const [dados, setDados] = useState([]);

  //   const getData = async () => {
  //     try {
  //       const res = await axios.get(
  //         "https://raw.githubusercontent.com/Josuerx12/josuerx12/main/dados.json"
  //       );
  //       const data = res.data;
  //       setDados(data);
  //     } catch {
  //       console.log("Erro na coleta dos dados!!!");
  //     }
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  return (
    <main className="projects">
      <h6 className="title">Projetos</h6>
      <div className="project">
        <img className="project-img" src={weatherAppPic} alt="Project image" />
        <div className="project-desc">
          <h3>Weather APP</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <a
            className="vizualizar"
            href="https://josuerx12.github.io/WheaterAPP/"
            target="_blank"
            rel="noreferrer"
          >
            Visitar Aplicação
          </a>
          <a
            href="https://github.com/Josuerx12/WheaterAPP"
            target="_blank"
            rel="noreferrer"
          >
            Código <FaGithub />
          </a>
        </div>
      </div>

      <div className="project">
        <img className="project-img" src={weatherAppPic} alt="Project image" />
        <div className="project-desc">
          <h3>Weather APP</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <a
            className="vizualizar"
            href="https://josuerx12.github.io/WheaterAPP/"
            target="_blank"
            rel="noreferrer"
          >
            Visitar Aplicação
          </a>
          <a
            href="https://github.com/Josuerx12/WheaterAPP"
            target="_blank"
            rel="noreferrer"
          >
            Código <FaGithub />
          </a>
        </div>
      </div>

      <div className="project">
        <img className="project-img" src={weatherAppPic} alt="Project image" />
        <div className="project-desc">
          <h3>Weather APP</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <a
            className="vizualizar"
            href="https://josuerx12.github.io/WheaterAPP/"
            target="_blank"
            rel="noreferrer"
          >
            Visitar Aplicação
          </a>
          <a
            href="https://github.com/Josuerx12/WheaterAPP"
            target="_blank"
            rel="noreferrer"
          >
            Código <FaGithub />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Projects;
