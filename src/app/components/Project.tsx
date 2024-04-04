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
  const [absolutePosition, setAbsolutePosition] = useState({ left: 0, top: 0, display: 'none' });

  const content: ProjectData = JSON.parse(project);

  const handleHover = (event: any) => {
    const rect = event.target.getBoundingClientRect();
    setAbsolutePosition({
      left: rect.right + window.screenX-300,
      top: rect.top + window.screenY+50,
      display: 'block'
    });
    const elementId = event.target.id;
    setHoveredElementId(elementId);
  };

  const handleMouseLeave = () => {
    setAbsolutePosition({ ...absolutePosition, display: 'none' });
  };


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

  function handleOut(event: any): void {
    setHoveredElementId("");
  }

  return (
    <div className="">
      
      <div className=" py-2">
        <div
          id={content._id.toString()}
          className="mb-2 text-sm font-medium text-neutral-800 dark:text-neutral-50 cursor-wait"
          onMouseEnter={handleHover}
          onMouseOut={handleOut}
          onMouseLeave={handleMouseLeave}
        >
          {content.title}
        
        </div>
        {data.length>0 && (
            <div className="fixed z-[9999]" style={absolutePosition}>
              <ProjectImage
                loading={loading}
                projectId={hoveredElementId}
                image={data}
              ></ProjectImage>
            </div>
          )}

        <p className="text-gray-700 dark:text-neutral-400 text-md">
          {content.description}
        </p>
      </div>
      <div className="px-1 pt-0 pb-2 flex justify-between">
        {content.links.split(",").map((l, i) => (
          <div key={i}>
            <a target="_blank" href={l.split(";")[1]}>
              {l.split(";")[0]}
            </a>
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default Project;
