// src/app/api/user/[id]/route.js
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Récupérer un utilisateur par ID
export async function GET(request, { params }) {
  const { id } = params;
  
  try {
    const userId = parseInt(id);
    
    if (isNaN(userId)) {
      return NextResponse.json({ error: "ID invalide" }, { status: 400 });
    }
    
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });
    
    if (!user) {
      return NextResponse.json({ error: "Utilisateur non trouvé" }, { status: 404 });
    }
    
    return NextResponse.json({ user });
  } catch (error) {
    console.error("Erreur lors de la récupération de l'utilisateur:", error);
    return NextResponse.json({ error: "Impossible de récupérer l'utilisateur" }, { status: 500 });
  }
}

// Mettre à jour un utilisateur par ID
export async function PUT(request, { params }) {
  const { id } = params;
  
  try {
    const userId = parseInt(id);
    
    if (isNaN(userId)) {
      return NextResponse.json({ error: "ID invalide" }, { status: 400 });
    }
    
    const body = await request.json();
    const { name, email } = body;
    
    // Vérifier si l'utilisateur existe
    const existingUser = await prisma.user.findUnique({
      where: { id: userId }
    });
    
    if (!existingUser) {
      return NextResponse.json({ error: "Utilisateur non trouvé" }, { status: 404 });
    }
    
    // Construire l'objet de mise à jour avec seulement les champs fournis
    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (email !== undefined) updateData.email = email;
    
    // Mettre à jour l'utilisateur
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData
    });
    
    return NextResponse.json({ 
      message: "Utilisateur mis à jour avec succès", 
      user: updatedUser 
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
    
    // Gestion de l'erreur d'unicité pour l'email
    if (error.code === 'P2002') {
      return NextResponse.json({ error: "Cet email est déjà utilisé" }, { status: 400 });
    }
    
    return NextResponse.json({ error: "Impossible de mettre à jour l'utilisateur" }, { status: 500 });
  }
}

// Supprimer un utilisateur par ID
export async function DELETE(request, { params }) {
  const { id } = params;
  
  try {
    const userId = parseInt(id);
    
    if (isNaN(userId)) {
      return NextResponse.json({ error: "ID invalide" }, { status: 400 });
    }
    
    // Vérifier si l'utilisateur existe
    const existingUser = await prisma.user.findUnique({
      where: { id: userId }
    });
    
    if (!existingUser) {
      return NextResponse.json({ error: "Utilisateur non trouvé" }, { status: 404 });
    }
    
    // Supprimer l'utilisateur
    await prisma.user.delete({
      where: { id: userId }
    });
    
    return NextResponse.json({ message: "Utilisateur supprimé avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'utilisateur:", error);
    return NextResponse.json({ error: "Impossible de supprimer l'utilisateur" }, { status: 500 });
  }
}