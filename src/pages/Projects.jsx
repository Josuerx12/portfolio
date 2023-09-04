import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Projects.sass";
import { useQuery } from "react-query";
import { api } from "../utils/apiConfig";

const Projects = () => {
  const { t } = useTranslation();
  const { data, isLoading, error } = useQuery("reposUser", async () => {
    const res = await api.get("/josuerx12/repos");
    return res.data.filter((i) => i.name !== "josuerx12");
  });

  const renderPortfolio = () => {
    if (!isLoading && !error && data) {
      return data.map((p) => (
        <div key={p.id} className="project">
          <img
            className="project-img"
            src={`/projects/${p.name}.webp`}
            alt={p.name}
          />
          <div className="project-desc">
            <h3>{p.name}</h3>
            <p>{t(p.description)}</p>
            <a
              className="vizualizar"
              href={p.homepage}
              target="_blank"
              rel="noreferrer"
            >
              {t("Visitar")}
            </a>
            <a href={p.svn_url} target="_blank" rel="noreferrer">
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
