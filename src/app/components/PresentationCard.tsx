import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
function PresentationCard() {
  return (
    <div className="flex items-center justify-center  p-6">
    <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">
      {/* Imagen de perfil */}
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-orange-200 dark:border-gray-700 shadow-lg dark:shadow-gray-800/50">
        <Image
          src="/yo_ed.png"
          alt="Foto de perfil"
          width={256}
          height={256}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      
      <div className="flex-1  text-orange-900 dark:text-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold dark:text-white">
          &quot;Creando soluciones digitales con pasión y creatividad&quot;
        </h1>
        
        <div className="my-6">
          <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-100">Hola, soy Sergio</h2>
          <p className="text-lg leading-relaxed dark:text-gray-300 text-gray-700">
            Desarrollador Full Stack con 2 años de experiencia creando aplicaciones web modernas. 
            Especializado en Angular, .NET y diseño UX. Me apasiona resolver problemas complejos 
            y crear experiencias digitales memorables para los usuarios.
          </p>
        </div>
        
        <Link href='files/SERGIO_ANDRES_GIRALDO_HV_gd.docx' 
        className="!mt-4 px-6 py-2 bg-orange-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg hover:bg-orange-500 transition-colors shadow dark:shadow-gray-800">
          Mi Hoja de Vida
        </Link>
      </div>
    </div>
  </div>
   
  )
}

export default PresentationCard