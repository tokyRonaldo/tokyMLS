import { createRouter } from "next-connect";
import getRawBody from 'raw-body';
//import authMiddleware from "../../src/lib/middleware/auth";

import { PrismaClient } from '../../../src/generated/prisma';
const prisma = new PrismaClient();


// Création de la route API avec createRouter
const apiRoute = createRouter({
    onError(error, req, res) {
      res.status(501).json({ error: `Erreur serveur : ${error.message}` });
    },
    onNoMatch(req, res) {
      res.status(405).json({ error: `Méthode ${req.method} non autorisée` });
    },
  });

  apiRoute.get(async (req, res) => {
    const { type, id,userId } = req.query;
    try{
      if(id != undefined && userId !== undefined){
        const response= await prisma.suivreCours.create({
          data: {
            cours: {
              connect : {
                id : Number(id)
              }
            },
            user : {
              connect :{
                id:Number(userId)
              }
            }
          }
        })
        
        return res.status(200).json(response);
      }
      else{
        const allCours = await prisma.cours.findMany();
        const coursInscrits = await prisma.suivreCours.findMany({
          where: { userId :Number(userId)},
          select: { coursId: true }
        });
        const coursIdInscrits = new Set(coursInscrits.map(c => c.coursId));
      
        let coursAvecStatus = allCours.map(cours => ({
          ...cours,
          enrolled: coursIdInscrits.has(cours.id)
        }));  
        
        if (type === "enrolled") {
          coursAvecStatus = coursAvecStatus.filter(cours => cours.enrolled);
        }
        return res.status(200).json(coursAvecStatus);
      }
  
    }catch(e){
      return res.status(500).json({message:'erreur serveur','error' : e.message})
    }
  })
  


// Exportation du routeur par défaut
export default apiRoute.handler();