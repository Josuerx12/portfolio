import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import profilePic from "../assets/imgs/profilePic.jpg";
import "./Home.sass";
import { useTranslation } from "react-i18next";

const home = () => {
  const { t } = useTranslation();
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
            <a to="/" target="_blank" rel="noreferrer">
              {t("DownloadCv")}
            </a>
          </button>
        </div>
      </div>
      <img className="profilePic" src={profilePic} />
    </main>
  );
};

export default home;
