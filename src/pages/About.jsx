import "./About.sass";
import { useTranslation } from "react-i18next";
import aboutPic from "../assets/imgs/developmentPic.webp";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

const About = () => {
  const { t } = useTranslation();
  return (
    <main className="sobre">
      <img className="aboutPic" src={aboutPic} alt="about pic" />
      <div className="sobre-section">
        <h3 className="title">{t("Sobre")}</h3>
        <p>{t("SobreP1")}</p>
        <p>{t("SobreP2")}</p>
        <div className="skills">
          <h3 className="title">{t("habilidades")}</h3>
          <div className="technologies">
            <FaHtml5 id="html" />
            <FaCss3Alt id="css3" />
            <FaSass id="sass" />
            <FaJs id="js" />
            <FaReact id="react" />
            <FaGitAlt id="git" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
