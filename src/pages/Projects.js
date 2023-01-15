import React from 'react'
import ProjectItem from '../component/ProjectItem'
import '../styles/Projects.css'
import { ProjectList } from '../Helpers/ProjectList'

function Projects() {
  return (
    <div className="projects">
      <h2>MY PROJECTS</h2>
      <div className="projectList">
        {ProjectList.map((project,i)=>{
          return <ProjectItem id={i} image={project.image} name={project.name} />
        })}
      </div>
    </div>
  )
}

export default Projects