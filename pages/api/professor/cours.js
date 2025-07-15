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
    const { id } = req.query;
    try{
      console.log(id);
        const cours = await prisma.cours.findUnique({
            where:{
                id : Number(id)
            },
            include: {
              lessons: true,
            },
        });
       
        return res.status(200).json(cours);
  
    }catch(e){
      return res.status(500).json({message:'erreur serveur','error' : e.message})
    }
  })
  


// Exportation du routeur par défaut
export default apiRoute.handler();