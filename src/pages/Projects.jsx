import "./Projects.sass";
import { useQuery } from "react-query";
import { api } from "../utils/apiConfig";
import Project from "../components/Project";

import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const { data, isLoading, error } = useQuery("reposUser", async () => {
    const res = await api.get("/josuerx12/repos");
    const filteredRespose = res.data.filter(
      (i) => i.name !== "josuerx12" && i.name !== "portfolio" && !i.private
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
        data.map((p) => <Project key={p.id} project={p} />)}
    </main>
  );
};

export default Projects;
