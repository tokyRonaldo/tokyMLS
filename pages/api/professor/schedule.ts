import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from "next-connect";
import getRawBody from 'raw-body';
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
    console.log('heeeeeeeeeere')
    console.log(req.body)
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
    let dataUrl= await getLinkDaily();
    console.log('etooooo ndrayyy ooooooo')
    console.log(dataUrl)
/*
    //let dateDebut=;
    const schedule= await prisma.visioSession.create({
        data:{
            titre:data.titreChedule,
            description:data.descriptionSchedule,
            dateDebut:dateDebut,
            dateFin:dateFin,
            lienVisio:data.lienSchedule,
            estEnregistre:false,
            lienEnregistrement:data.lienSchedule,
            cours :{
                connect:{
                    //id:data.coursSchedule
                    id:2
                }
            },
            formateur:{
                connect:{
                    id:data.formateur_id
                }
            }



        }
    });
    return res.status(200).json(schedule);*/
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
  
   async function getLinkDaily() {
    const response = await fetch('https://api.daily.co/v1/rooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer aa670eaa59a2a68567952226c45cde053f6017165c678ebd0e4a4a04f9e65080',
      },
      body: JSON.stringify({
        properties: {
          enable_chat: true,
          start_video_off: false,
          start_audio_off: false,
        },
      }),
    });
  
    const data = await response.json();
    return data.url;
  }


// Exportation du routeur par défaut
export default apiRoute.handler();