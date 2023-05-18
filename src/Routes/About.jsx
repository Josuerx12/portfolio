import "./About.sass";
import aboutPic from "../assets/imgs/developmentPic.jpg";
const About = () => {
  return (
    <main className="sobre">
      <img className="aboutPic" src={aboutPic} alt="about pic" />
      <div className="sobre-section">
        <h3 className="title">Sobre</h3>
        <p>
        Meu nome é Josué Carvalho, sou um desenvolvedor front-end 
        em transição de carreira, com 21 anos de idade e possuo 
        habilidades avançadas em inglês. Atualmente, estou focado 
        em aprimorar minhas habilidades em React JS, uma das 
        principais bibliotecas JavaScript para o desenvolvimento 
        de interfaces de usuário.
        </p>
        <p>
        Minha formação em fisioterapia traz uma perspectiva 
        única para o meu trabalho como desenvolvedor front-end, 
        permitindo que eu crie interfaces intuitivas e acessíveis 
        para os usuários finais. Estou constantemente em busca de 
        maneiras de aprimorar minhas habilidades técnicas e estou 
        animado para encontrar oportunidades desafiadoras, onde eu 
        possa contribuir para projetos inovadores e colaborar em equipe, 
        visando alcançar resultados excepcionais.
        </p>
      <div className="skills">
        <h3 className="title">Habilidades</h3>
        <div className="technologies">
          <img src="https://raw.githubusercontent.com/Josuerx12/Pagina-Portifolio-Curso-JS-Avancado/master/data/imgs/html.png" alt="html skill" />
          <img src="https://raw.githubusercontent.com/Josuerx12/Pagina-Portifolio-Curso-JS-Avancado/master/data/imgs/css.png" alt="css skill" />
          <img src="https://raw.githubusercontent.com/Josuerx12/Pagina-Portifolio-Curso-JS-Avancado/master/data/imgs/sass.png" alt="sass skill" />
          <img src="https://raw.githubusercontent.com/Josuerx12/Pagina-Portifolio-Curso-JS-Avancado/master/data/imgs/js.png" alt="js skill" />
          <img src="https://raw.githubusercontent.com/Josuerx12/Pagina-Portifolio-Curso-JS-Avancado/master/data/imgs/react.png" alt="react skill" />
          <img src="https://raw.githubusercontent.com/Josuerx12/Pagina-Portifolio-Curso-JS-Avancado/master/data/imgs/git.png" alt="git skill" />
        </div>
      </div>
      </div>
    </main>
  );
};

export default About;
