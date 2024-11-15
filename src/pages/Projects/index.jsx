import React from 'react';
import '../../assets/styles/Projects.scss';
import Banner from '../../components/Banner';
import projects from '../../datas/projects';
import Card from '../../components/Card';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className='projects'>
      <Banner bannerClass='projects-banner' bannerText='Mes putains de projets' />
      <div className='projects-housing'>
        {projects.map(project => (
          <Link className='projects-linkHousing' key={project.id} to={`/projects/${project.id}`}>
            <Card
              cardSrc={require(`../../assets/image/${project.cover}`)} 
              cardTitle={project.title}
              cardAlt={project.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
