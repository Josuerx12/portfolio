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

  return (
    <main className="projects">
      <h6 className="title">{t("Projetos")}</h6>
      {isLoading && <h3>Carregando ...</h3>}
      {!isLoading &&
        !error &&
        data &&
        data.map((p) => (
          <div key={p.id} className="project">
            <img
              className="project-img"
              src={`/projects/${p.name}.webp`}
              alt={p.name}
            />
            <div className="project-desc">
              <h3>{t(p.name)}</h3>
              <p>{t(p.description)}</p>
              <p className="technologies">
                {p.topics.map((tech) => (
                  <>
                    <span className="tech">{tech}</span>
                  </>
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
