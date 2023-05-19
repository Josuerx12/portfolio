import "./About.sass";
import { useTranslation } from "react-i18next";
import aboutPic from "../assets/imgs/developmentPic.jpg";
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
            <img
              src="https://raw.githubusercontent.com/Josuerx12/Pagina-Portifolio-Curso-JS-Avancado/master/data/imgs/html.png"
              alt="html skill"
            />
            <img
              src="https://raw.githubusercontent.com/Josuerx12/Pagina-Portifolio-Curso-JS-Avancado/master/data/imgs/css.png"
              alt="css skill"
            />
            <img
              src="https://raw.githubusercontent.com/Josuerx12/Pagina-Portifolio-Curso-JS-Avancado/master/data/imgs/sass.png"
              alt="sass skill"
            />
            <img
              src="https://raw.githubusercontent.com/Josuerx12/Pagina-Portifolio-Curso-JS-Avancado/master/data/imgs/js.png"
              alt="js skill"
            />
            <img
              src="https://raw.githubusercontent.com/Josuerx12/Pagina-Portifolio-Curso-JS-Avancado/master/data/imgs/react.png"
              alt="react skill"
            />
            <img
              src="https://raw.githubusercontent.com/Josuerx12/Pagina-Portifolio-Curso-JS-Avancado/master/data/imgs/git.png"
              alt="git skill"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
