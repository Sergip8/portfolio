import Image from "next/image";
import PresentationCard from "./components/PresentationCard";
import Tab from "./components/Tab";
import ToggleThemeBtn from "./components/ToggleThemeBtn";
import ProjectCard from "./components/ProjectCard";
import { title } from "process";
import clientPromise from "../libs/mongodb";
import { ObjectId } from "mongodb";

export interface ProjectData{
  _id: ObjectId
  title: string 
  description: string
  links: string
  images: string[]
  desktop: boolean
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
    <div class='ms-3 p-2 '> Trabaje fabricando y
    vendiendo todo tipo de plásticos procesados en especial PVC.
    Mis funciones principales eran,
    negociar con proveedores de material sin procesar,
    verificar que el material procesado cumpliera con la calidad necesaria para su venta,
    contactar con clientes interesados en el material procesado. 
    Mantuve mi negocio por 10 años, 
    tuve que desistir de continuar debido al incumplimiento por parte de algunos clientes, y el inpacto de la pandemia</div></ul>`
    
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
    <main className="xl:container mx-auto flex min-h-screen flex-col">
      <ToggleThemeBtn/>
      <div className="">
      <div className="">
       <PresentationCard/>
      <Tab item={JSON.stringify(content)}/>

      </div>
      <div className="">
        <ProjectCard projects={projects}></ProjectCard>

      </div>
      </div>

    </main>
  );
}
