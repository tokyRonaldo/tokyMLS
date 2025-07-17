/*import { requireAuth } from '@/lib/middleware/auth'
//import { PrismaClient } from '@prisma/client';
//const prisma = new PrismaClient();
//import prisma from '../../../lib/prisma.js'
//import { PrismaClient } from '@prisma/client';
//const prisma = new PrismaClient();
import prisma from '@/lib/prisma'

export default function handler(req, res) {
  //if (!requireAuth(req, res)) return

  if (req.method === 'GET') {
    console.log("----------------------------------ici------------------------------------------")
    res.status(200).json({ users: ['Alice', 'Bob'] })
  } else if (req.method === 'POST') {
    const { name } = req.body
    res.status(201).json({ message: `Utilisateur ${name} créé !` })
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Méthode ${req.method} non autorisée`)
  }

  res.status(200).json({ message: 'Contenu sécurisé' })
}*/



// src/app/api/user/route.js
import { NextResponse } from 'next/server';
//import prisma from '@/lib/prisma';
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
  // Vérification d'authentification (à adapter)
  // if (!await authenticateRequest(request)) {
  //   return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  // }
  console.log("----------------------------------ici------------------------------------------");
  console.log(process.env.JWT_SECRET)
try{

  const body = await request.json();
  console.log(body);
  const { username, email, password,role } = body;
  const hashedPassword = await bcrypt.hash(password, 10);
  // Exemple de création d'utilisateur avec Prisma
  const user = await prisma.user.create({
    data : {
      username,
      email,
      password: hashedPassword,
      role :role
    }
    });
    
    const token= jwt.sign(
      {
        id:user.id,
        email:user.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d' // expire dans 7 jours
      }
    )
    return NextResponse.json({ data: user,token:token }, { status: 201 });
  }
  catch(e){
    console.error('Erreur création utilisateur :', e);
    return NextResponse.json({message:'error'.e},{status:500})
  }
}
