import jwt from "jsonwebtoken";
//import prisma from '@/lib/prisma';
import { PrismaClient } from '../../../src/generated/prisma';
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET; // Assurez-vous d'avoir cette variable définie dans .env

// Middleware d'authentification personnalisé
async function authMiddleware(req, res, next) {
  try {
    // Vérifier si le header Authorization est présent
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        success: false, 
        message: "Authentification requise. Token manquant." 
      });
    }
    
    // Extraire le token
    const token = authHeader.split(' ')[1];
    
    // Vérifier et décoder le token JWT
    const decodedToken = jwt.verify(token, JWT_SECRET);
    

    // Ajouter les informations de l'utilisateur à l'objet req
    req.userId = decodedToken.id;
    req.userEmail = decodedToken.email;
    
    // Vérifier optionnellement si l'utilisateur existe toujours en base de données
    const user = await prisma.user.findUnique({
      where: { id: req.userId }
    });
    
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: "Utilisateur non trouvé" 
      });
    }
    
    // Tout est OK, continuer
    return next();
  } catch (error) {
    // Gérer les différentes erreurs JWT
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ 
        success: false, 
        message: "Token invalide" 
      });
    } else if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        success: false, 
        message: "Token expiré, veuillez vous reconnecter" 
      });
    }
    
    console.error("Erreur d'authentification:", error);
    return res.status(401).json({ 
      success: false, 
      message: "Erreur d'authentification" 
    });
  }
}

export default authMiddleware;