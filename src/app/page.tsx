'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Vérifier que l'on est côté client
    const userStr = localStorage.getItem("user");
    const t = localStorage.getItem("token");
    setToken(t);
    console.log(token);

    if (userStr) {
      try {
        const parseUser = JSON.parse(userStr);

        if (parseUser.role === "formateur") {
          router.push("/professor/dashboard");
        } else if (parseUser.role === "etudiant") {
          router.push("/student/dashboard");
        } else {
          router.push("/auth/login");
        }
      } catch (err : unknown) {

        if (err instanceof Error) {
          console.error("Erreur de parsing du user :", err);
          router.push("/auth/login");
  
        } else {
          console.error('Erreur inconnue :', err);
        }
      }
    } else {
      router.push("/auth/login");
    }
  }, [router]);

  return null; // Pas de rendu, c'est juste une page de redirection
}
