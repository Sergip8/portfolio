"use client";

import React, { useEffect, useState } from "react";
import { ProjectData } from "../page";

export interface ProjectImageData {
  projectId: string;
  image: string;
}

function Project({ project }: { project: string }) {
  const [content, setContent] = useState<ProjectData[]>(() => JSON.parse(project));
  const [activeProject, setActiveProject] = useState(0);
  let currentProject = content[activeProject]
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

   useEffect(() => {
    setContent(JSON.parse(project));
    setActiveProject(0)
  }, [project]); 

  // Cerrar zoom con tecla Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isZoomed) {
        setIsZoomed(false);
      }
    };


    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isZoomed]);

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isZoomed]);

  const openZoom = () => {
    setIsZoomed(true);
  };

  const closeZoom = () => {
    setIsZoomed(false);
  };

  const projectNav = (direcction: "ant" | "sig") =>{
    setActiveImageIndex(0)
    if(direcction === "ant"){
      setActiveProject((prev) => prev === 0 ? content.length - 1 : prev -1)
    }
    if(direcction === "sig"){
      setActiveProject((prev) => prev === content.length - 1 ? 0 : prev + 1)
    }

  }

  return (
    <>
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
          
          <div className={currentProject.development_type === "WEB"? 'flex flex-col lg:flex-row gap-12': 'flex flex-col justify-center items-center gap-6' }>
            {/* Carrusel de imágenes (lado izquierdo) */}
            <div className={currentProject.development_type === "WEB"?"lg:w-1/2 ": "flex flex-row-reverse gap-3"}>
              <div className={`relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl dark:shadow-gray-800/50 ${currentProject?.desktop ? "w-96 md:w-[650px]": "w-fit"} cursor-zoom-in`}>
                <img
                  src={currentProject?.images[activeImageIndex]}
                  alt={`Captura del proyecto ${currentProject?.title}`}
                  className={`w-full h-full ${currentProject?.desktop ? "object-cover": "object-contain"} transition-transform hover:scale-105`}
                  onClick={openZoom}
                />
                {/* Icono de zoom */}
                <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              
              {/* Miniaturas */}
              <div className={currentProject.development_type === "WEB" ? "flex gap-4 mt-6 overflow-x-auto pb-2": "flex flex-col gap-2"}>
                {currentProject?.images.map((img, index) => (
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
            <div className={currentProject.development_type === "WEB"? "lg:w-1/2 ": "w-full"}>
              <div className="bg-white flex flex-col justify-between dark:bg-gray-800 rounded-xl p-8 shadow-lg dark:shadow-gray-900/50 h-full overflow-y-hidden">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className={currentProject.development_type === "WEB"? "text-2xl font-bold text-orange-800 dark:text-white": "text-orange-800 dark:text-white text-3xl font-bold ps-32"}>
                    {currentProject?.title}
                  </h3>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-gray-700 text-orange-800 dark:text-orange-300 rounded-full text-sm">
                    Proyecto {activeProject + 1}/{content.length}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6" dangerouslySetInnerHTML={{ __html: currentProject?.description }}>
                 
                </p>

                <div className="mb-8">
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-3">
                    Tecnologías utilizadas:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {currentProject?.tech.map((tech, index) => (
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
                    onClick={() => projectNav("ant")}
                    className="px-4 py-2 border border-orange-300 dark:border-gray-600 text-orange-800 dark:text-gray-300 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Anterior
                  </button>
                  
                  <button 
                    onClick={() => projectNav("sig")}
                    className="px-4 py-2 border border-orange-300 dark:border-gray-600 text-orange-800 dark:text-gray-300 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Siguiente
                  </button>
                    {currentProject.links != "" &&
                  <a
                    href={currentProject?.links.split(";")[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-orange-400 dark:bg-gray-700 text-white rounded-lg hover:bg-orange-500 dark:hover:bg-gray-600 transition-colors ml-auto"
                  >
                    {currentProject?.links.split(";")[0]}
                  </a>
                    }
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

      {/* Modal de zoom */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeZoom}
        >
          <div className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center">
            {/* Botón de cerrar */}
            <button
              onClick={closeZoom}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-10 transition-all"
              aria-label="Cerrar zoom"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Imagen con zoom */}
            <img
              src={currentProject?.images[activeImageIndex]}
              alt={`Captura ampliada del proyecto ${currentProject?.title}`}
              className="max-w-[60vh] max-h-auto object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Navegación de imágenes en el modal */}
            {currentProject?.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex(prev => 
                      prev === 0 ? currentProject?.images.length - 1 : prev - 1
                    );
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 transition-all"
                  aria-label="Imagen anterior"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex(prev => 
                      prev === currentProject?.images.length - 1 ? 0 : prev + 1
                    );
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 transition-all"
                  aria-label="Imagen siguiente"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Indicador de imagen actual */}
            {currentProject?.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">
                {activeImageIndex + 1} / {currentProject?.images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Project;