import React from 'react';
import { useParams } from 'react-router-dom'; 
import projects from '../../datas/projects'; 
import '../../assets/styles/ProjectsSheet.scss';
import Collapse from '../../components/Collapse';
import Slideshow from '../../components/Slideshow';  
import Tag from '../../components/Tag'; 

function ProjectsSheet() {
  const { id } = useParams(); // Récupération de l'ID depuis les paramètres de l'URL
  const project = projects.find(proj => proj.id === id); // Recherche du projet correspondant

  const dataCollapse = [
    { title: 'Description', content: (<p>{project.description}</p>) }, 
    { 
      title: 'Langages/outils', 
      content: (
        <ul>
          {project.equipments.map((equipment, index) => (
            <li key={index} style={{ listStyle: 'none', position: 'relative', right: '5%' }}>{equipment}</li>
          ))}
        </ul>
      ) 
    },
  ];

  return (
    <div className='projectsSheet'>
      <div className='projectsSheet-slide'>    
        <Slideshow images={project.pictures.map(picture => require(`../../assets/image/${picture}`))} /> 
      </div>

      <div className='projectsSheet-center'>
        <div className='projectsSheet-left'>
          <div className='projectsSheet-info'>
            <span className='projectsSheet-title'>{project.title}</span>
            {/* lien GitHub */}
            <a className='projectsSheet-githubLink' href={project.githubLink}
              target='_blank' rel='noopener noreferrer'>
              <img src={require('../../assets/image/logo_github.webp')} alt="GitHub Logo" />
            </a>
          </div>
          <div className='projectsSheet-tagList'>
            {project.tags.map((tag, index) => (
              <Tag key={index} text={tag} />  
            ))}
          </div>
        </div>
      </div>  

      <div className='projectsSheet-wraper'>    
        {/* Boucle pour afficher chaque élément du tableau dans un Collapse */}
        {dataCollapse.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />    
        ))}
      </div>
    </div>
  );
}

export default ProjectsSheet;
