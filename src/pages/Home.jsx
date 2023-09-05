import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./Home.sass";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { api } from "../utils/apiConfig";

const Home = () => {
  const { t } = useTranslation();
  const { isLoading, error, data } = useQuery("reposData", async () => {
    const res = await api.get("/Josuerx12");
    return res.data;
  });
  console.log({ isLoading, error, data });
  return (
    <main className="home">
      <div className="presentation">
        <h2>{t("Profissao")}</h2>
        <p>{t("QuemSouEu")}</p>
        <div className="professional-links">
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/josueaze12/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Josuerx12"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <button className="cv">
            <a
              href="https://raw.githubusercontent.com/Josuerx12/portfolio/master/src/assets/curriculum-ptbr.pdf"
              target="_blank"
              rel="noreferrer"
            >
              {t("DownloadCv")}
            </a>
          </button>
        </div>
      </div>
      <img
        className="profilePic"
        src={
          isLoading
            ? "https://gifs.eco.br/wp-content/uploads/2022/06/gifs-de-icone-carregando-0.gif"
            : data.avatar_url
        }
      />
    </main>
  );
};

export default Home;
