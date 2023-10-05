import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Projects.sass";
import { useQuery } from "react-query";
import { api } from "../utils/apiConfig";

const Projects = () => {
  const { t } = useTranslation();
  const { data, isLoading, error } = useQuery("reposUser", async () => {
    const res = await api.get("/josuerx12/repos");
    const filteredRespose = res.data.filter(
      (i) => i.name !== "josuerx12" && i.name !== "portfolio" && i.name !== "CatalagoAPI" && i.name !== "Pedido-Facil-Backend"
    );
    return filteredRespose.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
  });

  return (
    <main className="projects">
      <h6 className="title">{t("Projetos")}</h6>
      {isLoading && <h3>Carregando ...</h3>}
      {!isLoading &&
        !error &&
        data &&
        data.map((p) => (
          <div key={p.id} className="project">
            <div className="project-infos">
              <img
                className="project-img"
                src={`/projects/${p.name}.webp`}
                alt={p.name}
              />
              <p className="createdAT">
                <span>{t("Created at:")} </span>
                {p.pushed_at.toLocaleDateString("pt-BR")}
              </p>
            </div>
            <div className="project-desc">
              <h3>{t(p.name)}</h3>
              <p>{t(p.description)}</p>
              <p className="topics">
                <b>Tags:</b>
                {p.topics.map((tech) => (
                  <span className="tech" key={tech}>
                    #{tech}
                  </span>
                ))}
              </p>
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
        ))}
    </main>
  );
};

export default Projects;
