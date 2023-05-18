import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import "./Projects.sass";
import axios from "axios";

const Projects = () => {
  
  const [data , setData] = useState([])

  const getData = async () => {
    axios.get('https://raw.githubusercontent.com/Josuerx12/josuerx12/main/dados.json')
    .then( res => setData(res.data))
    .catch(err => console.log(err))
  }

  useEffect(()=> {
    getData()
  },[])

  const portfolio = data.portfolio.map((p, i)=> (
    <div key={i} className="project">
      <img className="project-img" src={p.img} alt={p.name} />
      <div className="project-desc">
        <h3>{p.name}</h3>
        <p>{p.desc}</p>
        <a
          className="vizualizar"
          href={p.pageUrl}
          target="_blank"
          rel="noreferrer"
        >
              Visitar Aplicação
        </a>
        <a
          href={p.url}
          target="_blank"
          rel="noreferrer"
        >
          Código <FaGithub />
        </a>
      </div>
    </div>
  ))
  
  return (
    <main className="projects">
      <h6 className="title">Projetos</h6>
      {portfolio}
    </main>
  );
};

export default Projects;
