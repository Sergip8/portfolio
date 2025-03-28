import React from 'react'
import { ProjectData } from '../page'
import Project from './Project'
import { WithId } from 'mongodb'

function ProjectCard({projects}: {projects: WithId<ProjectData>[] | undefined}) {
  return (
    <div className='relative overflow-x-visible w-full text-[14px] h-full  p-4 '>
  
    <div className='text-lg text-center'>

      </div>
  

          <Project project={JSON.stringify(projects)}></Project>



  

  </div>
  )
}

export default ProjectCard