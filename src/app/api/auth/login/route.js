// src/app/api/user/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../generated/prisma';
const prisma = new PrismaClient();
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { requireAuth } from '@/lib/middleware/auth';

// Fonction pour l'authentification adaptée au App Router
 async function authenticateRequest(request) {
   // Adaptation de votre logique d'authentification pour App Router
   // return true si authentifié, false sinon
   const token = request.headers.authorization
   if (!token || token !== 'mon-secret-token') {
    NextResponse.status(401).json({ message: 'Non autorisé' })
     return false
   }
   return true
 }

export async function GET(request) {
  // Vérification d'authentification (à adapter)
   if (!await authenticateRequest(request)) {
     return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
   }
  
  console.log("----------------------------------ici------------------------------------------");
  
  // Exemple de récupération de données avec Prisma
   const users = await prisma.user.findMany();
  
  // Pour l'instant, nous retournons les données statiques
  return NextResponse.json({ users});
}

export async function POST(request) {
try{

  const body = await request.json();
  console.log(body);
  const { email,password } = body;
  // Exemple de création d'utilisateur avec Prisma
  const user = await prisma.user.findFirst({
    where: { email }
    });
    console.log(user);
    console.log('uusssssssssssssssseeeeeeeeeeerrrrr');
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return new Response(JSON.stringify({ error: 'Identifiants invalides' }), { status: 401 })
    }
    const token = jwt.sign({
      id:user.id,
      email:user.email
      },
       process.env.JWT_SECRET, 
       { expiresIn: '1d'

      })
    return NextResponse.json({ data: user,token:token }, { status: 201 });
  }
  catch(e){
    console.error('Erreur création utilisateur :', e);
    return NextResponse.json({message:'error'.e},{status:500})
  }
}
