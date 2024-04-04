import React from 'react'
import { ProjectData } from '../page'
import Project from './Project'
import { WithId } from 'mongodb'

function ProjectCard({projects}: {projects: WithId<ProjectData>[] | undefined}) {
  return (
    <div className='relative md:ms-9 overflow-x-visible md:w-[300px]  '>
         <div className=' text-[12px] overflow-y-scroll p-4 md:max-h-[700px] dark:bg-neutral-700 bg-slate-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'>
  
    <div className='text-lg text-center'>
      <h3>Proyectos</h3>
      </div>
  
  {
    projects?.map((item, i) => (
      <div key={i}>
          <Project key={i} project={JSON.stringify(item)}></Project>
      </div>
    ))
  }


  

  </div>
    </div>
  )
}

export default ProjectCard