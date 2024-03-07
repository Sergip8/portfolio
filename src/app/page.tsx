import Image from "next/image";
import PresentationCard from "./components/PresentationCard";
import Tab from "./components/Tab";
import ToggleThemeBtn from "./components/ToggleThemeBtn";

const content = [
  {"name": "Experiencia", 
    "content": `<ul class='list-disc'><li class='font-semibold'> Cidei operario de ensamble 2010 -2011 </li>
    <li class='font-semibold'>International Cable Corp técnico electrónico 2011 2012 </li>
    <div class='ms-3 p-2 '> Líder de equipo encargado de reparar equipos de red de parte del cliente routers,
    swiches, equipos de cómputo, y red externa HFC Amplificadores, fuentes, nodos
    Cree una aplicación encargada de tomar los datos de mediciones tomadas de equipos
    HFC con un analizador de espectro y detectar si el equipo tenia fallos, esto utilizando
    Visual Basic y java</div>
    <li class='font-semibold'> Trabajo como independiente con mi emprendimiento en el sector de plásticos</li>
    <div class='ms-3 p-2 '> Trabaje fabricando y
    vendiendo todo tipo de plásticos procesados en especial PVC.
    negociar con proveedores de material sin procesar,
    verificar que el material procesado cumpliera con la calidad necesaria para su venta,
    contactar con clientes interesados en el material procesado</div></ul>`
    
  },
  {"name": "Educacion", 
    "content": `
    <ul class='list-disc'><li class='font-semibold'>
    Tecnólogo en electrónica Universidad Francisco José De Caldas</li>
    <div class='ms-3 p-2 '>Programación En C y Assembler</div>
    <li class='font-semibold'>Tecnólogo en Análisis y Desarrollo de Software SENA</li>
    <div class='ms-3 p-2'>Metodologías Agiles
    Programación En Html, Css, Javascript, PHP, React, Angular, C#, Spring Boot
    </div></ul>
    `
  },
  {"name": "Proyectos", 
    "content": `
    <ul class='list-disc'>
    <li class='font-semibold'>Vizualizador de manga online</li>
    <div class='ms-3 p-2'>Es una pagina creada usando Nextjs con base de datos en Mysql, para los estilos se utilizo tailwind, la base de
    datos se encuentra alojada en Amazon RDS, las imagenes se alojan en un servidor propio apache con un backend en nodejs</div>
    <div class='ms-3 p-2 text-base'><a class="hover:text-indigo-800 dark:hover:text-indigo-300" href="https://mangado-nextjs.vercel.app/" target="_blank">pagina web</a></div>
    <li class='font-semibold'>Pagina para comparar precios de las cadenas de tiendas mas populares de Colombia</li>
    <div class='ms-3 p-2'>Es una pagina creada usando Angular con base de datos en MongoDb. Para el backend se utiliza el servicio de HTTP endpoins de Mongo Atlas, la base de
    datos se encuentra alojada en Mongo Atlas. El scrapper para conseguir la información de las tiendas esta hecho con python</div>
    <div class="flex gap-2">
    <div class='ms-3 p-2 text-base'><a class="hover:text-indigo-800 dark:hover:text-indigo-300" href="https://price-comparator.000webhostapp.com/" target="_blank">Pagina web</a></div>
    <div class='ms-3 p-2 text-base'><a class="hover:text-indigo-800 dark:hover:text-indigo-300" href="https://drive.google.com/uc?export=download&id=1gOS1NSyYA9FDjxjeCBNPjLF0OGDK8Tz0" target="_blank">Android app</a></div>
    </div>
    <li class='font-semibold'>pagina para la gestion de un consultorio medico</li>
    <div class='ms-3 p-2'>Es una pagina creada usando React con Backend Laravel, la base de datos esta implementada con Mysql</div>
    <div class="flex gap-2">
    <div class='ms-3 p-2 text-base'><a class="hover:text-indigo-800 dark:hover:text-indigo-300" href="https://github.com/Sergip8/consultorio_laravel-react" target="_blank">Repositorio Github</a></div>
    <div class='ms-3 p-2 text-base'><a class="hover:text-indigo-800 dark:hover:text-indigo-300" href="https://drive.google.com/file/d/1g1jYyU9HjG1B6KAAtiuJ7pz4FTy6BiXY/view?usp=drive_link" target="_blank">Manual</a></div>
    
    </div>
    <li class='font-semibold'>Clon de Reddit</li>
    <div class='ms-3 p-2'>Es una pagina creada usando Angular con Backend Spring Boot y base de datos en Mongodb</div>
    <div class='ms-3 p-2 text-base'><a class="hover:text-indigo-800 dark:hover:text-indigo-300" href="https://github.com/Sergip8/spring-boot-reddit-clone" target="_blank">Repositorio Github</a></div>
    </ul>
    `
    
  },
  
]
export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col">
      <ToggleThemeBtn/>
       <PresentationCard/>
      <Tab item={JSON.stringify(content)}/>
    </main>
  );
}
