"use client"
import React, { useState, useMemo } from 'react'
import { ProjectData } from '../page'
import Project from './Project'
import { WithId } from 'mongodb'

type DevelopmentType = 'WEB' | 'AUTO'

function ProjectCard({projects}: {projects: WithId<ProjectData>[] | undefined}) {
  const [selectedType, setSelectedType] = useState<DevelopmentType>('WEB')

  // Filter projects based on selected type
  const filteredProjects = useMemo(() => {
    if (!projects) return undefined

    return projects.filter(project => project.development_type === selectedType)
  }, [projects, selectedType])

  return (
    <div className='relative overflow-x-visible w-full text-[14px] h-full p-4
       text-gray-800  dark:text-gray-200'>
      
      {/* Switch buttons for filtering */}
      <div className='flex justify-center mb-6'>
        {/* El fondo del switch también cambia con el modo 'dark' */}
        <div className='inline-flex rounded-lg p-1 bg-gray-100 dark:bg-gray-800'>
          
          <button
            onClick={() => setSelectedType('WEB')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
              ${selectedType === 'WEB'
                ? 'bg-orange-500 text-white shadow-md dark:bg-blue-600' // Botón activo: Naranja en claro, Azul en oscuro
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100' // Botón inactivo: Gris en claro, Gris más claro en oscuro
              }`
            }
          >
            Web
          </button>
          <button
            onClick={() => setSelectedType('AUTO')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
              ${selectedType === 'AUTO'
                ? 'bg-orange-500 text-white shadow-md dark:bg-blue-600' // Botón activo: Naranja en claro, Azul en oscuro
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100' // Botón inactivo: Gris en claro, Gris más claro en oscuro
              }`
            }
          >
            Automation
          </button>
        </div>
      </div>

      {/* Project count indicator */}
      {/* El color del texto del contador también cambia con el modo 'dark' */}
      <div className='text-lg text-center mb-4 text-gray-600 dark:text-gray-400'>
        {filteredProjects && (
          <span>
            {selectedType === 'WEB' ? 'Web' : 'Automation'} Project{filteredProjects.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {/* Render filtered projects */}
      {filteredProjects && filteredProjects.length > 0 && (
        <Project project={JSON.stringify(filteredProjects)} />
      )}
    </div>
  )
}

export default ProjectCard