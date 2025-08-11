import path from "path";
import multer from "multer";
import { createRouter } from "next-connect";
import getRawBody from 'raw-body';

//import prisma from '@/lib/prisma';    
//ca a causer bcp de bug // ajouter npx prisma generate
import { PrismaClient } from '../../src/generated/prisma';
const prisma = new PrismaClient();


// Configuration du stockage pour Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "public/uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + extension);
  },
});

const upload = multer({ storage });

// Création de la route API avec createRouter
const apiRoute = createRouter({
  onError(error, req, res) {
    res.status(501).json({ error: `Erreur serveur : ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Méthode ${req.method} non autorisée` });
  },
});

/// Application des middlewares
//apiRoute.use(authMiddleware); // Middleware d'authentification exécuté en premier

// Middleware pour gérer les fichiers uploadés
/*apiRoute.use(upload.fields([
  { name: "coursImage", maxCount: 1 },
  { name: "coursVideo", maxCount: 1 },
  { name: /^lessonVideo_\d+$/, maxCount: 1 },
  { name: /^lessonVideo_\d+$/, maxCount: 1 }
]));
*/

apiRoute.use(upload.any());


// Gestion de la requête POST
apiRoute.post(async (req, res) => {
  const coursId=req.query.coursId
  try {
    const {
      coursTitle,
      coursDescription,
      coursLevel,
      coursContent,
      coursCategory,
      coursSubtitle,
      userId,
    } = req.body;
  // Récupération sécurisée des fichiers
  const coursImageFile = req.files.find(f => f.fieldname === "coursImage");
  const coursVideoFile = req.files.find(f => f.fieldname === "coursVideo");

  const coursImage = coursImageFile ? coursImageFile.filename : "";
  const coursVideo = coursVideoFile ? coursVideoFile.filename : "";

  //editer un cours
  if(coursId){
    var cours = await prisma.cours.update({
      where: {
        id: Number(coursId),
      },
      data: {
        nom: coursTitle || "Sans titre",
        description: coursDescription || "",
        level: coursLevel || "",
        content: coursContent || "",
        sousTitre: coursSubtitle || "",
        image: coursImage,
        video: coursVideo,
        /*category: {
          connect: {
            id: 1,
          },
        },*/
        theCategories: coursCategory,
        user: {
          connect: {
            id: Number(userId),
          },
        },
      },
    });
    //supprimer tout les lessons pour inserer des nouveaux si c'est un update
    await prisma.lesson.deleteMany({
      where: {
        coursId: Number(cours.id),
      },
    });


  }else
  {
      // Création du cours avec l'ID de l'utilisateur
      var cours = await prisma.cours.create({
        data: {
          nom: coursTitle || "Sans titre",
          description: coursDescription || "",
          level: coursLevel || "",
          content: coursContent || "",
          //categoryId: 1,
          /*category: {
            connect: {
              id: 1
            }
          },*/
          theCategories : coursCategory,
          sousTitre: coursSubtitle || "",
          image: coursImage,
          video: coursVideo,
          user : {
            connect: {
              id: Number(userId)
            }
          }
    
        },
      });
  }


  const lessons = [];

    const listLessonRaw = req.body.listLesson;
    const listLesson = Array.isArray(listLessonRaw)
      ? listLessonRaw
      : Object.values(listLessonRaw); // au cas où c'est un objet indexé
    
    
    for (let index = 0; index < listLesson.length; index++) {
      const lesson = listLesson[index];
    
      if (!lesson?.title) continue; // Ignore les entrées invalides
    
      const documentFile = req.files.find(f => f.fieldname === `lessonDocument_${index}`);
      const videoFile = req.files.find(f => f.fieldname === `lessonVideo_${index}`);
    
      lessons.push({
        title: lesson.title,
        contenu: lesson.contenu,
        documentLesson: documentFile?.filename ?? null,
        videoLesson: videoFile?.filename ?? null
      });
    }
    
    res.status(200).json({ success: true, cours });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Erreur serveur", error: e.message });
  }
});

apiRoute.get(async (req, res) => {
  try{
    const { formateur_id } = req.query;
    if(formateur_id && formateur_id != undefined){
      const response = await prisma.cours.findMany({
        where: {
          userId: Number(formateur_id), // ou une variable comme id: myId
        },
        include: {
          _count: {
            select: {
              suivis: true, // nombre d'étudiants qui suivent ce cours
            },
          },
        },      })
      return res.status(200).json(response);
    }else{

      const response=  await prisma.cours.findMany();
      return res.status(200).json(response);
    }
    

  }catch(e){
    return res.status(500).json({message:'erreur serveur','error' : e.message})
  }
})


/**
 * DELETE = Suppression
 */
apiRoute.delete(async (req, res) => {
  try {
    const raw = await getRawBody(req);
    const body = JSON.parse(raw.toString());
    const { id } = body;

    await prisma.lesson.deleteMany({
      where: {
        coursId: Number(id),
      },
    });

    await prisma.cours.delete({
      where: { id: Number(id) },
    });

    const result=await prisma.cours.findMany();

    return res.status(200).json({ success: true, message: "Cours supprimé",data : result });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// Exportation de la configuration pour désactiver le parser de corps par défaut
export const config = {
  api: {
    bodyParser: false, // Important pour Multer
  },
};

// Exportation du routeur par défaut
export default apiRoute.handler();