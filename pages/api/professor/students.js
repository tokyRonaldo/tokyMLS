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
    const { formateur_id } = req.query;

    try {
      // Récupère tous les utilisateurs avec le rôle "etudiant"

      const etudiants = await prisma.user.findMany({
        where: {
          role: "etudiant",
        },
        select: {
          id: true,
          username: true,
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
      const countMap = new Map();
      coursCounts.forEach(item => {
        countMap.set(item.userId, item._count.coursId);
      });

      // Fusionne les étudiants avec leur nombre de cours suivis
      const result = etudiants.map(etudiant => ({
        ...etudiant,
        coursSuivis: countMap.get(etudiant.id) || 0, // 0 si non trouvé
      }))
      .filter(etudiant => etudiant.coursSuivis > 0);

    // Résultat final
    return res.status(200).json(result);

    /*
        const cours = await prisma.cours.findMany({
        where: {
          userId: 2,
        },
        include: {
          suivis: {
            where: {
              user: {
                role: 'etudiant',
              }
            },
            include: {
              user: {
                select: {
                  id: true,
                  username: true,
                  email: true
                }
              }
            }
          }
        }
      });
    return res.status(200).json(cours);
  */

    } catch (e) {
    return res.status(500).json({ message: 'Erreur serveur', error: e.message });
    }

})

apiRoute.delete(async (req, res) => {
  const { formateur_id,student_id } = req.query;

  try {

        // Supprime les relations "suivreCours" entre l'étudiant et les cours du formateur
        const deletedRelations = await prisma.suivreCours.deleteMany({
          where: {
            userId: Number(student_id),
            cours: {
              userId: Number(formateur_id),
            },
          },
        });

        return res.status(200).json(deletedRelations);


  } catch (e) {
  return res.status(500).json({ message: 'Erreur serveur', error: e.message });
  }

})

  


// Exportation du routeur par défaut
export default apiRoute.handler();