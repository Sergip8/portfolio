"use client";

import React, { useEffect, useState } from "react";
import { ProjectData } from "../page";
import { link } from "fs";
import Image from "next/image";
import { ObjectId, WithId } from "mongodb";
import ProjectImage from "./ProjectImage";

export interface ProjectImageData {
  projectId: string;
  image: string;
}

function Project({ project }: { project: string }) {
  const content: ProjectData[] = JSON.parse(project);
  const [activeProject, setActiveProject] = useState(0);
  const currentProject = content[activeProject];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  

  return (
    <section className=" px-6">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16 flex flex-col justify-center items-center ">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 dark:text-white">
            Mis Proyectos
          </h2>
          <div className=' border-b-2 w-60 mt-3'></div>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Algunos de los trabajos recientes que he desarrollado
          </p>
        </div>

        {/* Contenido principal */}
        <div className="flex flex-col lg:flex-row gap-12 ">
          {/* Carrusel de imágenes (lado izquierdo) */}
          <div className="lg:w-1/2 ">
            <div className={`relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl  dark:shadow-gray-800/50 ${currentProject.desktop ? "": "w-fit"} `}>
            <img
                src={currentProject.images[activeImageIndex]}
                alt={`Captura del proyecto ${currentProject.title}`}
                className={`w-full h-full ${currentProject.desktop ? "object-cover": "object-contain"} `}
              />
            </div>
            
            {/* Miniaturas */}
            <div className="flex gap-4 mt-6 overflow-x-auto pb-2">
              {currentProject.images.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    activeImageIndex === index 
                      ? 'border-orange-500 dark:border-orange-400' 
                      : 'border-orange-200 dark:border-gray-700'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Miniatura ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Descripción del proyecto (lado derecho) */}
          <div className="lg:w-1/2 ">
            <div className="bg-white flex flex-col justify-between dark:bg-gray-800 rounded-xl p-8 shadow-lg dark:shadow-gray-900/50 h-full overflow-y-hidden">
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-orange-800 dark:text-white">
                  {currentProject.title}
                </h3>
                <span className="px-3 py-1 bg-orange-100 dark:bg-gray-700 text-orange-800 dark:text-orange-300 rounded-full text-sm">
                  Proyecto {activeProject + 1}/{content.length}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {currentProject.description}
              </p>

              <div className="mb-8">
                <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-3">
                  Tecnologías utilizadas:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {currentProject.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-orange-100 dark:bg-gray-700 text-orange-800 dark:text-orange-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => setActiveProject((prev) => 
                    prev === 0 ? content.length - 1 : prev -1
                  )}
                  className="px-4 py-2 border border-orange-300 dark:border-gray-600 text-orange-800 dark:text-gray-300 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Anterior
                </button>
                
                <button 
                  onClick={() => setActiveProject((prev) => 
                    prev === content.length - 1 ? 0 : prev + 1
                  )}
                  className="px-4 py-2 border border-orange-300 dark:border-gray-600 text-orange-800 dark:text-gray-300 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Siguiente
                </button>

                <a
                  href={currentProject.links.split(";")[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-orange-400 dark:bg-gray-700 text-white rounded-lg hover:bg-orange-500 dark:hover:bg-gray-600 transition-colors ml-auto"
                >
                  {currentProject.links.split(";")[0]}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores de proyectos (para móvil) */}
        <div className="flex justify-center gap-2 mt-8 lg:hidden">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`w-3 h-3 rounded-full ${activeProject === index ? 'bg-orange-500' : 'bg-orange-200 dark:bg-gray-600'}`}
              aria-label={`Ir al proyecto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
