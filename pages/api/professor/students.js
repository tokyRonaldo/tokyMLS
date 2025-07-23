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
    const { formateur_id } = req.query;

    try {
      // Récupère tous les utilisateurs avec le rôle "etudiant"
      const etudiants = await prisma.user.findMany({
        where: {
          role: "etudiant",
        },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });

      // Récupère le nombre de cours suivis PAR étudiant POUR ce formateur
      const coursCounts = await prisma.suivreCours.groupBy({
        by: ['userId'],
        where: {
          cours: {
            userId: Number(formateur_id), // ID du formateur
          },
        },
        _count: {
          coursId: true,
        },
      });

      // Crée une map rapide userId => nombre de cours
      const countMap = new Map<number, number>();
      coursCounts.forEach(item => {
        countMap.set(item.userId, item._count.coursId);
      });

      // Fusionne les étudiants avec leur nombre de cours suivis
      const result = etudiants.map(etudiant => ({
        ...etudiant,
        coursSuivis: countMap.get(etudiant.id) || 0, // 0 si non trouvé
      }));

// Résultat final
    return res.status(200).json(result);

    } catch (e) {
    return res.status(500).json({ message: 'Erreur serveur', error: e.message });
    }

})
  


// Exportation du routeur par défaut
export default apiRoute.handler();