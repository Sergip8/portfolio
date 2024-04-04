import clientPromise from "@/libs/mongodb";
import ProjectImage from "../../components/ProjectImage";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { ProjectImageData } from "@/app/components/Project";

export async function POST(request: any, ) {
  // response.setHeader('Access-Control-Allow-Origin', '*');
  // response.setHeader('Access-Control-Allow-Methods', 'POST');
  // response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
 
  const { projectId } = await request.json();
    try {
        
            console.log("id: "+ projectId)
            const client = await clientPromise;
            const db = client.db("portfolio");
            const image = await db
              .collection<ProjectImageData>("sample_images")
              .find({ projectId: projectId })
              .toArray()
            
           //console.log(image)
            return NextResponse.json(image)
        

    } catch (error) {
      console.error('Error al obtener datos de la base de datos:', error);
      throw error;
    }
  }