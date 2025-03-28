"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import AngularIcon from '../../../public/icons/angular.svg'
import DotnetIcon from '../../../public/icons/dotnet.svg'
import ReactIcon from '../../../public/icons/react.svg'
import PythonIcon from '../../../public/icons/python.svg'
import NextjsIcon from '../../../public/icons/nextjs.svg'

import LaravelIcon from '../../../public/icons/laravel.svg'



function Tab({item}:{item: any}) {

    const iconMap = {
        'net': DotnetIcon,
        'angular': AngularIcon,
        'react': ReactIcon,
        'python': PythonIcon,
        'laravel': LaravelIcon,
        'nextjs': NextjsIcon
      };
      
    const skills = [
        {
          name: "NET",
          description: "Creación de APIs robustas y aplicaciones backend con .NET Core/6+. Dominio de Entity Framework y Dapper para ORM",
          icon: "net" // Reemplaza con la ruta correcta
        },
        {
          name: "Angular",
          description: "Desarrollo de aplicaciones empresariales escalables con Angular, implementando módulos, componentes y servicios",
          icon: "angular"
        },
        {
          name: "Python",
          description: "Desarrollo de scripts de automatización, análisis de datos. Conocimientos en inteligencia artificial básica",
          icon: "python"
        },
        {
          name: "React",
          description: "Construcción de interfaces dinámicas y reactivas con React Hooks y Context API. Integración con APIs REST ",
          icon: "react"
        },
        {
          name: "Laravel",
          description: "Creación de APIs RESTful con autenticación y manejo de relaciones complejas en bases de datos.",
          icon: "laravel"
        },
        {
            name: "Next.js",
            description: "Desarrollo de aplicaciones SSR y estáticas con enrutamiento avanzado",
            icon: "nextjs"
          },
      ];
  return (
    <section className="py-12 px-6 ">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="flex flex-col justify-center items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 dark:text-white">
            Mis Habilidades
          </h2>
          <div className=' border-b-2 bg-orange-300 dark:bg-slate-50 w-60 mt-3'></div>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino y utilizo para crear soluciones de calidad
          </p>
        </div>

        {/* Grid de habilidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || null;
            return (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg dark:shadow-gray-900/50 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-orange-50 dark:bg-gray-600 rounded-lg mr-4">
                  {IconComponent && <IconComponent width="32" height="32"  className="dark:fill-white fill-orange-700" />}
                  </div>
                  <h3 className="text-xl font-semibold text-orange-800 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Sección adicional de experiencia */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg dark:shadow-gray-900/50">
          <h3 className="text-2xl font-bold text-orange-800 dark:text-white mb-4">
            Experiencia Complementaria
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">
                Metodologías
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 dark:bg-gray-500 rounded-full mr-2"></span>
                  Scrum y Agile Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 dark:bg-gray-500 rounded-full mr-2"></span>
                  Diseño UX/UI básico
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 dark:bg-gray-500 rounded-full mr-2"></span>
                  Principios SOLID y Clean Code
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">
                Otras Tecnologías
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 dark:bg-gray-500 rounded-full mr-2"></span>
                  MongoDB, MySQL y SQL Server
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 dark:bg-gray-500 rounded-full mr-2"></span>
                  Docker básico
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 dark:bg-gray-500 rounded-full mr-2"></span>
                  Testing con Jest
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tab