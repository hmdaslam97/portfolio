import React from 'react'
import {useParams} from "react-router-dom"
import { ProjectList } from '../Helpers/ProjectList';
import '../styles/ProjectDisplay.css'
import GitHubIcon from '@mui/icons-material/GitHub';


function ProjectDisplay() {
    const {id}=useParams();
    const project= ProjectList[id];
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <h4><a href={project.git} target="_blank"><GitHubIcon/></a></h4>
      <a href={project.hosted}><img src={project.image} alt={project.name} /></a>
      <h3>Skills Used: {project.skills}</h3>
      <p>Description:   {project.description}</p>
    </div>
  )
}

export default ProjectDisplay