"use client";

import React, { useEffect, useState } from "react";
import { ProjectData } from "../page";
import { link } from "fs";

import { ObjectId, WithId } from "mongodb";
import ProjectImage from "./ProjectImage";

export interface ProjectImageData {
  projectId: string;
  image: string;
}

function Project({ project }: { project: string }) {
  const [hoveredElementId, setHoveredElementId] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<WithId<ProjectImageData>[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  //const [isHoveredImg, setIsHoveredImg] = useState(false);
  const [xtrans, setxtrans] = useState(120);
  const content: ProjectData = JSON.parse(project);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch("/api/image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectId: hoveredElementId,
      }),
    });

    res
      .json()
      .then((image) => {
      

        setData(image);
      })
      .catch((e) => console.log(e.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
 
    if (hoveredElementId != "") fetchData();
  }, [hoveredElementId]);

  useEffect(() => {
    if (!content.desktop)
      setxtrans(x => x-30)
  }, [])


  return (
    <div className="my-4 ps-12 md:grid grid-cols-[300px_minmax(350px,100%)]">
    <div className="relative w-64 h-52">
      {content.images.map((image, index) => (
        <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
          key={index}
          className={`ms-5 absolute w-full h-full bg-cover bg-center rounded-lg  transition-transform duration-500 overflow-hidden
             ${index === 0 ? 'z-30' : index === 1 ? 'z-20' : 'z-10'}
             `
            }
             style={{
              
              transform: isHovered 
                ? `translateX(${xtrans - index * xtrans/2}%) rotateY(0deg)`
                : `translateX(-${index * 4}%) rotateY(-${index * 10}deg)`, 
              // top: `${index * 2.5}rem`,
              left: `${index * -1.5}rem`
            }}
            
        >
          <img
          
            src={image}
            alt={`Image ${index + 1}`}
            className={`w-full h-full ${content.desktop? 'object-fill' : 'object-contain'}`}
          />
        </div>
      ))}
      </div>
    <div className="">
      <h2 className="mb-2">{content.title}</h2>
    <p className="text-gray-700 dark:text-neutral-400 text-md">
          {content.description}
         </p>
         <div className="mt-2 pt-0 pb-2 flex gap-5">
         {content.links.split(",").map((l, i) => (
          <div key={i}>
            <a  href={l.split(";")[1]} target="_blank" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-500 dark:focus:ring-green-800">
            {l.split(";")[0]}
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
           
          </div>
        ))}
      </div>
    </div>
    </div>
    // <div className="">
      
    //   <div className=" py-2">
    //     <div
    //       id={content._id.toString()}
    //       className="mb-2 text-sm font-medium text-neutral-800 dark:text-neutral-50 cursor-wait"
    //       onMouseEnter={handleHover}
    //       onMouseOut={handleOut}
    //       onMouseLeave={handleMouseLeave}
    //     >
    //       {content.title}
        
    //     </div>
    //     {data.length>0 && (
    //         <div className="fixed z-[9999]" style={absolutePosition}>
    //           <ProjectImage
    //             loading={loading}
    //             projectId={hoveredElementId}
    //             image={data}
    //           ></ProjectImage>
    //         </div>
    //       )}

    //     <p className="text-gray-700 dark:text-neutral-400 text-md">
    //       {content.description}
    //     </p>
    //   </div>
    //   <div className="px-1 pt-0 pb-2 flex justify-between">
    //     {content.links.split(",").map((l, i) => (
    //       <div key={i}>
    //         <a target="_blank" href={l.split(";")[1]}>
    //           {l.split(";")[0]}
    //         </a>
    //       </div>
    //     ))}
    //   </div>
     
    // </div>
  );
}

export default Project;
