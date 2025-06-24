"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { GraduationCap, Loader2 } from "lucide-react"

import { jwtDecode } from 'jwt-decode';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RegisterPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [userType, setUserType] = useState("student")

  interface JwtPayload {
    id: number;
    username: string;
    email: string;
    // ajoute les autres champs que tu veux
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    console.log(e.target);
    console.log('-------------------ici----------');
    const userName = formData.get("username") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const role = formData.get("userType") as string
    const confirmPassword = formData.get("confirmPassword") as string
    const acceptTerms = formData.get("acceptTerms") === "on"

    const formValues = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      role: userType,
    }
    console.log(formValues);

    try {
      // Validation simple
      if (password !== confirmPassword) {
        setError("Les mots de passe ne correspondent pas")
        setIsLoading(false)
        return
      }

      if (!acceptTerms) {
        setError("Vous devez accepter les conditions d'utilisation")
        setIsLoading(false)
        return
      }

      // Simulation d'une inscription (à remplacer par votre logique d'authentification)
     // await new Promise((resolve) => setTimeout(resolve, 1500))
      /*const reponse = await fetch('/api/user',{
        'method' : 'get', 
        'headers' : {
          'Content-type': 'application/json'
        }

      })*/

      const reponse = await fetch('/api/auth/register',{
        'method' : 'post', 
        'headers' : {
          'Content-type': 'application/json'
        },
        body:JSON.stringify(formValues)

      })
      if(reponse.ok){
        const result = await reponse.json();
        const decoded = jwtDecode<JwtPayload>(result.token);
        const userDetail = {
          token:result.token,
          id:decoded.id,
          email:decoded.email
        }
        localStorage.setItem('token',result.token);
        localStorage.setItem('user',JSON.stringify(userDetail));
        console.log(decoded);
        // Redirection en fonction du type d'utilisateur
        if (userType === "edudiant") {
          router.push("/")
        } else {
          router.push("/instructor/dashboard")
        }
      }


    } catch (err) {
      setError("Une erreur est survenue lors de l'inscription")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <GraduationCap className="h-8 w-8 text-emerald-600" />
            <span>EduLearn LMS</span>
          </div>
          <p className="mt-2 text-slate-500">Créez votre compte pour commencer à apprendre</p>
        </div>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Inscription</CardTitle>
            <CardDescription>Remplissez le formulaire ci-dessous pour créer votre compte</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" name="username" placeholder="Username" required autoComplete="family-name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre@email.com"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="userType">Je suis un</Label>
                <Select value={userType} onValueChange={(value) => setUserType(value)}>
                  <SelectTrigger id="userType" name="userType">
                    <SelectValue placeholder="Sélectionnez votre profil" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="etudiant">Étudiant</SelectItem>
                    <SelectItem value="formateur">Formateur</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  autoComplete="new-password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  required
                  autoComplete="new-password"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="acceptTerms" name="acceptTerms" />
                <Label htmlFor="acceptTerms" className="text-sm">
                  J'accepte les{" "}
                  <Link href="/terms" className="text-emerald-600 hover:underline">
                    conditions d'utilisation
                  </Link>{" "}
                  et la{" "}
                  <Link href="/privacy" className="text-emerald-600 hover:underline">
                    politique de confidentialité
                  </Link>
                </Label>
              </div>
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Inscription en cours...
                  </>
                ) : (
                  "S'inscrire"
                )}
              </Button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-slate-500">Ou s'inscrire avec</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" type="button" className="border-slate-200">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" type="button" className="border-slate-200">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  Facebook
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-slate-500">
              Vous avez déjà un compte?{" "}
              <Link href="/auth/login" className="text-emerald-600 hover:underline">
                Se connecter
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
