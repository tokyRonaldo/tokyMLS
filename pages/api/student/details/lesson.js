import { createRouter } from "next-connect";
import getRawBody from 'raw-body';
//import authMiddleware from "../../src/lib/middleware/auth";

import { PrismaClient } from '../../../../src/generated/prisma';
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
    const id=parseInt(req.query.id, 10)
    try{
      if(req.query.is_complet_lesson){

        const response = await prisma.userLesson.upsert({
          where: {
            // Doit être un champ UNIQUE ou combinaison UNIQUE
            userId_lessonId: {
              userId: 1,
              lessonId: Number(id),
            },
          },
          update: {
            isFinished: true,
          },
          create: {
            isFinished: true,
            user: {
              connect: { id: 1 },
            },
            lesson: {
              connect: { id: Number(id) },
            },
          },
        });        return res.status(200).json({response : response,is_complete : true})

      }else{
        const lesson = await prisma.lesson.findUnique({
           where: { id: id },
           include: {
            userLessons: true,
          },
        });
        const listLesson = await prisma.lesson.findMany({
          where: { coursId: lesson.coursId },
       });
       
        return res.status(200).json({lesson : lesson,listLesson : listLesson});

      }
  
    }catch(e){
      return res.status(500).json({message:'erreur serveur','error' : e.message})
    }
  })
  


// Exportation du routeur par défaut
export default apiRoute.handler();