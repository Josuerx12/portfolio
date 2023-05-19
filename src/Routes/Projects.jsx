import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Projects.sass";
import axios from "axios";

const Projects = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  const getData = async () => {
    axios
      .get(
        "https://raw.githubusercontent.com/Josuerx12/josuerx12/main/dados.json"
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const renderPortfolio = () => {
    if (data && data.portfolio) {
      return data.portfolio.map((p, i) => (
        <div key={i} className="project">
          <img className="project-img" src={p.img} alt={p.name} />
          <div className="project-desc">
            <h3>{p.name}</h3>
            <p>{t(p.desc)}</p>
            <a
              className="vizualizar"
              href={p.pageUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t("Visitar")}
            </a>
            <a href={p.url} target="_blank" rel="noreferrer">
              {t("Codigo")} <FaGithub />
            </a>
          </div>
        </div>
      ));
    }
    return <h1 className="title">{t("Carregando")}</h1>;
  };

  return (
    <main className="projects">
      <h6 className="title">{t("Projetos")}</h6>
      {renderPortfolio()}
    </main>
  );
};

export default Projects;
