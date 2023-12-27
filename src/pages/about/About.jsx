import "./About.sass";
import { useTranslation } from "react-i18next";
import aboutPic from "../../assets/imgs/developmentPic.webp";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaGitAlt,
  FaAws,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
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
            <FaHtml5 title="HTML5" id="html" />
            <FaCss3Alt title="CSS3" id="css3" />
            <FaSass title="SASS" id="sass" />
            <FaJs title="JavaScript" id="js" />
            <SiTypescript title="TypeScript" id="ts" />
            <FaReact title="React.JS" id="react" />
            <FaGitAlt title="Git" id="git" />
            <FaBootstrap title="Bootstrap" id="bs" />
            <FaAws title="Amazon Web Services" id="aws" />
            <FaNodeJs title="Node.JS" id="node" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
