import Image from "next/image";
import PresentationCard from "./components/PresentationCard";
import Tab from "./components/Tab";
import ToggleThemeBtn from "./components/ToggleThemeBtn";
import ProjectCard from "./components/ProjectCard";
import { title } from "process";
import clientPromise from "../libs/mongodb";
import { ObjectId } from "mongodb";
import LogoLinks from "./components/Logo-Links";
import ContactFooter from "./components/Footer";

export interface ProjectData{
  _id: ObjectId
  title: string 
  description: string
  links: string
  images: string[]
  desktop: boolean
  tech: string[]
}

async function getProyects() {
  try{
    
    const client = await clientPromise;
          const db = client.db("portfolio");
          const projects = await db
              .collection<ProjectData>("projects")
              .find({})
              .sort({order:1})
              .toArray();
         
          return projects
  }
        
     catch (e) {
        console.error(e);
    }
}

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
    <div class='ms-3 p-2 '> 
   Funciones:<br/>
- Negociar con proveedores de materia prima y clientes, <br/>
- Gestionar los datos de proveedores, inventarios y clientes <br/>
- Contactar y recabar datos de clientes como proveedores<br/>
- Verificar que el producto final cumpliera con lo requerido por el cliente<br/>
- Mantener actualizados los datos del negocio<br/>
Logros:<br/>
- Implementé un sistema básico de seguimiento de inventarios, clientes y proveedores, utilizando Excel y Python<br/>
- Cree una interfaz web sencilla para la gestion de datos usando HTML CSS, y JavaScript<br/>
</div>
   
    <li class='font-semibold'>Bluetab, an IBM Company</li>

    <div class='ms-3 p-2 '> 
    Funciones:<br/>
- Creación y configuración de jobs en Control-M para la automatización de procesos<br/>
- Realización de pruebas de procesamientos de Spark con escala usando Jupiter<br/>
- Creación de procesamientos ETL usando Spark con Scala<br/>
- Desarrollo de documentación técnica tal como documento técnico, modelo de solución de datos, diagramas ETL de procesamiento entre otros<br/>
- Validación de calidad de código scala<br/>
- Despliegue de componentes hacia Bitbucket,<br/>
- Creación y configuración de transferencias <br/>
Logros:<br/>
Desarrollé una herramienta en Python que analiza automáticamente el código en Scala para identificar y reportar malas prácticas comunes. El programa realiza una revisión exhaustiva para detectar elementos como: funciones sin utilizar o sin pruebas asociadas, variables sin usar, saltos de linea innecesarios, errores de configuración, entre otros</div></ul>`
    
  },
  {"name": "Educación", 
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
  {"name": "Habilidades", 
    "content": `
    <div>
  
    <div class=" md:flex gap-4">
    <div>
    <div class="mb-4">
    Lenguajes
    </div>
    <div>
    <div class='font-semibold'>Javascript</div>
    <div class="w-[300px] xl:w-[150px] md:w-[100px] bg-gray-200 rounded-full mb-3 h-2.5 dark:bg-gray-700 flex">
    <div class="bg-blue-600 h-2.5 rounded-full " style="width: 70%"></div>
    <div class="mt-2">70</div>
  </div>
    </div>
    <div>
    <div class='font-semibold'>Kotlin</div>
    <div class="w-[300px] xl:w-[150px] md:w-[100px] bg-gray-200 rounded-full mb-3 h-2.5 dark:bg-gray-700 flex">
    <div class="bg-blue-600 h-2.5 rounded-full " style="width: 60%"></div>
    <div class="mt-2">60</div>
  </div>
    </div>
    <div>
    <div class='font-semibold'>Java</div>
    <div class="w-[300px] xl:w-[150px] md:w-[100px] bg-gray-200 rounded-full mb-3 h-2.5 dark:bg-gray-700 flex">
    <div class="bg-blue-600 h-2.5 rounded-full " style="width: 50%"></div>
    <div class="mt-2">50</div>
  </div>
    </div>
    <div>
    <div class='font-semibold'>Python</div>
    <div class="w-[300px] xl:w-[150px] md:w-[100px] bg-gray-200 rounded-full mb-3 h-2.5 dark:bg-gray-700 flex">
    <div class="bg-blue-600 h-2.5 rounded-full " style="width: 50%"></div>
    <div class="mt-2">50</div>
  </div>
    </div>
    <div>
    <div class='font-semibold'>C#</div>
    <div class="w-[300px] xl:w-[150px] md:w-[100px] bg-gray-200 rounded-full mb-3 h-2.5 dark:bg-gray-700 flex">
    <div class="bg-blue-600 h-2.5 rounded-full " style="width: 35%"></div>
    <div class="mt-2">35</div>
  </div>
    </div>
  
    </div>
    <div>
    <div class="mb-4">
    Frontend
    </div>
    <div>
    <div class='font-semibold'>HTML & CSS</div>
    <div class="w-[300px] xl:w-[150px] md:w-[100px] bg-gray-200 rounded-full mb-3 h-2.5 dark:bg-gray-700 flex">
    <div class="bg-blue-600 h-2.5 rounded-full " style="width: 80%"></div>
    <div class="mt-2">80</div>
  </div>
    </div>
    <div>
    <div class='font-semibold'>Angular</div>
    <div class="w-[300px] xl:w-[150px] md:w-[100px] bg-gray-200 rounded-full mb-3 h-2.5 dark:bg-gray-700 flex">
    <div class="bg-blue-600 h-2.5 rounded-full " style="width: 60%"></div>
    <div class="mt-2">60</div>
  </div>
    </div>
    <div>
    <div class='font-semibold'>React & Nextjs</div>
    <div class="w-[300px] xl:w-[150px] md:w-[100px] bg-gray-200 rounded-full mb-3 h-2.5 dark:bg-gray-700 flex">
    <div class="bg-blue-600 h-2.5 rounded-full " style="width: 50%"></div>
    <div class="mt-2">50</div>
  </div>
    </div>
    
    </div>
    
    <div>
    <div class="mb-4">
    Backend
    </div>
    <div>
    <div class='font-semibold'>SpringBoot</div>
    <div class=" w-[300px] xl:w-[150px] md:w-[100px] bg-gray-200 rounded-full mb-3 h-2.5 dark:bg-gray-700 flex">
    <div class="bg-blue-600 h-2.5 rounded-full " style="width: 50%"></div>
    <div class="mt-2">50</div>
  </div>
    </div>
    <div>
    <div class='font-semibold'>Laravel</div>
    <div class="w-[300px] xl:w-[150px] md:w-[100px] bg-gray-200 rounded-full mb-3 h-2.5 dark:bg-gray-700 flex">
    <div class="bg-blue-600 h-2.5 rounded-full " style="width: 40%"></div>
    <div class="mt-2">40</div>
  </div>
    </div>
    <div>
    <div class='font-semibold'>.Net 6</div>
    <div class="w-[300px] xl:w-[150px] md:w-[100px] bg-gray-200 rounded-full mb-3 h-2.5 dark:bg-gray-700 flex">
    <div class="bg-blue-600 h-2.5 rounded-full " style="width: 35%"></div>
    <div class="mt-2">35</div>
  </div>
    </div>
    </div>
    <div>
    <div class="mb-4">
    Databases
    </div>
    <div>
    <div class='font-semibold'>MongoDb</div>
    <div class="w-[300px] xl:w-[150px] md:w-[100px] bg-gray-200 rounded-full mb-3 h-2.5 dark:bg-gray-700 flex">
    <div class="bg-blue-600 h-2.5 rounded-full " style="width: 60%"></div>
    <div class="mt-2">60</div>
  </div>
    </div>
    <div>
    <div class='font-semibold'>Mysql && Postgres</div>
    <div class="w-[300px] xl:w-[150px] md:w-[100px] bg-gray-200 rounded-full mb-3 h-2.5 dark:bg-gray-700 flex">
    <div class="bg-blue-600 h-2.5 rounded-full " style="width: 50%"></div>
    <div class="mt-2">50</div>
  </div>
    </div>
    
    <div>
    <div class='font-semibold'>Sql Server</div>
    <div class="w-[300px] xl:w-[150px] md:w-[100px] bg-gray-200 rounded-full mb-3 h-2.5 dark:bg-gray-700 flex">
    <div class="bg-blue-600 h-2.5 rounded-full " style="width: 35%"></div>
    <div class="mt-2">35</div>
  </div>
    </div>
    
    </div>

    <div>
    <div class="mb-4">
    Otros
    </div>
    <div>
    <div class='font-semibold'>Git</div>
    <div class="w-[300px] xl:w-[150px] md:w-[100px] bg-gray-200 rounded-full mb-3 h-2.5 dark:bg-gray-700 flex">
    <div class="bg-blue-600 h-2.5 rounded-full " style="width: 40%"></div>
    <div class="mt-2">40</div>
  </div>
    </div>
    <div>
    <div class='font-semibold'>Excel</div>
    <div class="w-[300px] xl:w-[150px] md:w-[100px] bg-gray-200 rounded-full mb-3 h-2.5 dark:bg-gray-700 flex">
    <div class="bg-blue-600 h-2.5 rounded-full " style="width: 50%"></div>
    <div class="mt-2">50</div>
  </div>
    </div>
    
    </div>
    
  
    `
  }, 
]

 export default async function Home() {
  const projects = await getProyects() 
  
  return (
    <main className=" xl:container mx-auto flex min-h-screen flex-col">
      <div className="flex">
      <LogoLinks 
       logo="/icons/sg.svg" // O un componente SVG
       linkedinUrl="https://linkedin.com/in/sergio-andrés-giraldo-0906a754"
       githubUrl="https://github.com/Sergip8?tab=repositories"
      />
      <ToggleThemeBtn/>

      </div>
   
       <PresentationCard/>
      <Tab item={JSON.stringify(content)}/>


        <ProjectCard projects={projects}></ProjectCard>

      <ContactFooter/>

    </main>
  );
}
