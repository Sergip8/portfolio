"use client"
import clientPromise from "@/libs/mongodb";
import React from "react";
import Image from "next/image";
import { ObjectId } from "mongodb";
import { ProjectImageData } from "./Project";



// async function getProjectImage(projectId: string) {
//   const client = await clientPromise;
//   const db = client.db("portfolio");
//   const image = await db
//     .collection<ProjectImage>("sample_images")
//     .find({ projectId: projectId })
//     .toArray();
//   return image;
// }

function ProjectImage({ image, projectId, loading }: { image: ProjectImageData[], projectId: string, loading: Boolean }) {
  //const images = await getProjectImage(id);
  return (
    <div className="">
        {loading &&
        <div className="bg-transparent h-auto w-[300px] flex justify-center align-middle">
              <Image
                      src="/loading.gif"
                      height={50}
                      width={50}
                      alt=""
                      //sizes="20vw"
                      className="rounded-lg "
                    />
        </div>
        }
        {!loading &&
        <div className="">
            {projectId != "" &&
            <div className=" ">
                {image.map((img, i) => (
                  <div key={i} className="flex justify-center text-center">
                    <Image
                      src={ img.image}
                      height={0}
                      width={0}
                      alt=""
                      //sizes="100vw"
                      className="w-auto h-[200px] rounded-lg"
                    />
                  </div>
                ))}
        
            </div>
            }

        </div>
    }
    </div>
  );
}

export default ProjectImage;
