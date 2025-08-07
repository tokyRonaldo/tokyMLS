import { createRouter } from "next-connect";

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
    const { student_id } = req.query;

    try {
      // Étape 1 : Trouver les cours suivis par l'étudiant
      const suivreCours = await prisma.suivreCours.findMany({
        where: { userId: Number(student_id) },
        select: {
          coursId: true,
        },
      });
  
      // Extraire tous les IDs de cours
      const coursIds = suivreCours.map(sc => sc.coursId);
  
      // Étape 2 : Récupérer les visioSessions liées à ces cours
      const visioSessions = await prisma.visioSession.findMany({
        where: {
          coursId: {
            in: coursIds,
          },
        },
        include: {
          cours: true, // pour inclure les détails du cours
        },
      });
  
      return res.status(200).json({
        success: true,
        visioSessions,
      });
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: 'Erreur serveur',
      });
    }
  });
  


// Exportation du routeur par défaut
export default apiRoute.handler();