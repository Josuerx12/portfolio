import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const Project = (project) => {
  const { t } = useTranslation();

  const { name, pushed_at, description, topics, homepage, svn_url } =
    project.project;

  const userLang = navigator.language || navigator.userLanguage;
  return (
    <div className="project">
      <div className="project-infos">
        <img
          className="project-img"
          src={`/projects/${name}.webp`}
          alt={name}
        />
        <p className="createdAT">
          <span>{t("Created at:")} </span>
          {new Date(pushed_at).toLocaleDateString(userLang)}
        </p>
      </div>
      <div className="project-desc">
        <h3>{t(name)}</h3>
        <p>{t(description)}</p>
        <p className="topics">
          <b>Tags:</b>
          {topics.map((tech) => (
            <span className="tech" key={tech}>
              #{tech}
            </span>
          ))}
        </p>
        <a
          className="vizualizar"
          href={homepage}
          target="_blank"
          rel="noreferrer"
        >
          {t("Visitar")}
        </a>
        <a href={svn_url} target="_blank" rel="noreferrer">
          {t("Codigo")} <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Project;
