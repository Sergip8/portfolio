import React from 'react'

function PresentationCard() {
  return (
   
        <div
  className="flex flex-col md:w-full md:flex-row ">
  <div className=' text-[12px] h-fit bg-slate-50 p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
  <img
    className="md:max-w-[150px] md:w-auto max-w-full w-full object-cover md:h-auto md:!rounded-none "
    src="/foto-edit.png"
    alt="" />
    <div className='text-center'>
  <p className='mt-4 uppercase'>
    Sergio Andres Giraldo
  </p>
  <a href="https://github.com/Sergip8?tab=repositories " target="_blank">
    <img className='inline mt-4' src="/icon-github.svg" alt="github" />

  </a>
  

    </div>
  </div>
  <div className="md:ms-9 flex flex-col justify-start bg-slate-50 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
    <h5
      className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
      Técnico Electrónico y Emprendedor en Plásticos | Especializado en Desarrollo de Software y Electrónica
    </h5>
    <div className=" ps-2 mb-4 font-sans text-sm text-neutral-600 dark:text-neutral-200">

    <p className='pb-2'>
Con más de una década de experiencia en el campo técnico y emprendimiento, he construido una trayectoria diversa. En mis inicios como trabajador comencé como Operario de Ensamble en Cidei, donde perfeccioné mis habilidades en la fabricación y montaje de componentes electrónicos.

    </p>
    <p className='pb-2'>
Posteriormente, en International Cable Corp, desempeñé el papel clave de Técnico Electrónico y Líder de Equipo. Supervisé la reparación de equipos de red, desde routers y switches hasta nodos y amplificadores externos HFC. Destaco mi contribución al desarrollo de una aplicación en Visual Basic y Java, diseñada para analizar datos de mediciones de equipos HFC y detectar fallos, demostrando mi habilidad en la programación y resolución de problemas.

    </p>
<p className=''>
Además, emprendí en el sector de plásticos, donde lideré un negocio independiente. Me encargué de negociar con proveedores de materiales, garantizando la calidad de los productos procesados, y estableciendo conexiones con clientes interesados. Esta experiencia fortaleció mis habilidades empresariales y mi capacidad para trabajar de manera autónoma.

</p>
    </div>
<h5 className="mb-0 text-lg mss-0 font-medium text-neutral-800 dark:text-neutral-50">
  Datos Personales
</h5>
<div className='ps-2  flex gap-11 text-sm font-sans  font-normal'>
<div>
  <p><span>Email:</span> sagp758@gmail.com</p>
  <p><span>Fecha de nacimiento:</span> 20 de julio de 1986</p> 
 
</div>
<div>
  <p><span>Teléfono:</span> 3133057451</p>
  <p><span>Dirección:</span> Kr 18B Bis N° 67A-94 Sur</p>
  
  </div>

</div>
 
  </div>
</div>
   
  )
}

export default PresentationCard