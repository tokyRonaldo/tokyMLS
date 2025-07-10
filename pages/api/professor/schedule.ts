import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from "next-connect";
import getRawBody from 'raw-body';
import { format, addDays, subDays, startOfWeek, isSameDay } from "date-fns"
//import authMiddleware from "../../src/lib/middleware/auth";

import { PrismaClient } from '../../../src/generated/prisma';
const prisma = new PrismaClient();


// Création de la route API avec createRouter
const apiRoute = createRouter<NextApiRequest, NextApiResponse>({
    onError(error: any, req: NextApiRequest, res: NextApiResponse) {
      res.status(501).json({ error: `Erreur serveur : ${error.message}` });
    },
    onNoMatch(req: NextApiRequest, res: NextApiResponse) {
      res.status(405).json({ error: `Méthode ${req.method} non autorisée` });
    },
  });


  apiRoute.post(async(req,res) => {
    const data= req.body
    
    try{
    let dateSchedule=data.dateSchedule;
    let heureDebutSchedule=data.heureDebutSchedule;
    let heureFinSchedule=data.heureFinSchedule ?? data.heureDebutSchedule;
    
    const dateDebut = new Date(`${dateSchedule}T${heureDebutSchedule}:00`);
    const dateFin = new Date(`${dateSchedule}T${heureFinSchedule}:00`);

    // Format MySQL : 'YYYY-MM-DD HH:mm:ss'
    const formatDateForMySQL = (date: Date): string => {
        return date.toISOString().slice(0, 19).replace('T', ' ');
    };

    console.log('Début :', formatDateForMySQL(dateDebut)); // '2025-06-19 12:00:00'
    console.log('Fin :', formatDateForMySQL(dateFin));     // '2025-06-19 14:00:00'
    let dataUrl= await generateJitsiLink(data.titreChedule);

    //let dateDebut=;
    const schedule= await prisma.visioSession.create({
        data:{
            titre:data.titreChedule,
            description:data.descriptionSchedule,
            dateDebut:dateDebut,
            dateFin:dateFin,
            lienVisio:dataUrl,
            estEnregistre:false,
            lienEnregistrement:data.lienSchedule,
            cours :{
                connect:{
                    id:data.coursSchedule
                }
            },
            formateur:{
                connect:{
                    id:data.formateur_id
                }
            }



        }
    });
    return res.status(200).json(schedule);
  }catch(e){
    return res.status(500).json({message:'erreur serveur','error' : e.message})
  }
  })

  apiRoute.get(async (req, res) => {
    const formateur_id= req.query.formateur_id;
    console.log('tessssssssssss');
    console.log(formateur_id);
    try{
      const response=  await prisma.visioSession.findMany({
        where: {
          formateurId: Number(formateur_id), // ou une variable comme id: myId
        },
        include: {
          cours: true,
        },
      });
      return res.status(200).json(response);
  
    }catch(e){
      return res.status(500).json({message:'erreur serveur','error' : e.message})
    }
  })
  
   async function generateJitsiLink(title:string) {

    
      const roomName = title.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
      return `https://meet.jit.si/${roomName}-${Date.now()}`
    }


// Exportation du routeur par défaut
export default apiRoute.handler();