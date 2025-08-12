'use client'
import Link from 'next/link'
import { GraduationCap, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Loading from '../../loading'
import '../../loading.css'
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import React, { useState,useEffect } from "react"



export default function Login() {
    const router = useRouter()
    const pathname = usePathname();
    const [email,setEmail]=useState(null)
    const [password,setPassword]=useState(null)
    const [loading, setLoading] = useState(false);
    const [errorLogin, setErrorLogin] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleLogin= async(e)=>{
        setLoading(true)
        setErrorLogin(false)

        e.preventDefault();
        try{
            const login= await fetch('/api/auth/login',{
                'method' : 'POST',
                'headers' : {
                    'Content-type': 'application/json'
                  },
                body : JSON.stringify({
                    email,password
                })
          
            })
            // 💡 Déclencher une exception manuellement si la réponse n'est pas OK
            if (!login.ok) {
                setLoading(false)
                const errorRes = await login.json(); // si ton backend renvoie un message d'erreur
                setLoading(false);
                throw new Error(errorRes.message || 'Échec de la connexion');
        }

            const result = await login.json();
            localStorage.setItem('token', result.token);
            localStorage.setItem('user', JSON.stringify(result.data));

            // Redirection selon le rôle
            if (result.data.role === "etudiant") {
                router.push("/student/dashboard");
            } else {
                router.push("/professor/dashboard");
            }
        
        
        
        }catch(error){
            if (error instanceof Error) {
                console.error(error)
                setLoading(false)
                setErrorLogin(true)
                setErrorMsg(error.message || 'Une erreur est survenue')
                toast.error(err.message || 'Une erreur est survenue');
            
              } else {
                console.error('Erreur inconnue :', error);
              }
        
        }
    }

    useEffect(() => {
        setLoading(false);
        }, [pathname]);

    return (
<div className="flex flex-1 min-h-screen justify-center items-center bg-slate-50">
    {loading && (
          <div className="loading flex items-center justify-center inset-0" >
            <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
    )}
    <div className='w-full max-w-md'>

        <div className="mb-8 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <GraduationCap className="h-8 w-8 text-emerald-600" />
            <span>EduLearn LMS</span>
          </div>
          <p className="mt-2 text-slate-500">Créez votre compte pour commencer à apprendre</p>
        </div>

        {errorLogin && (
        <div className='div-error bg-red-300 rounded p-2 pt-7 px-3 text-black relative' >
            <span className='absolute top-0.5 right-2 cursor-pointer px-2 rounded-full hover:opacity-60 hover:bg-slate-100 hover:bg-emerald-700' 
            onClick={()=>setErrorLogin(false)}
            >x</span>
            <p className='break-words  p-2' style={{color:'#0c0c0dc4'}}>
                {errorMsg}
            </p>
        </div>)
        }
        <Card className='border-none shadow-md'>
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>veuillez vous connecter</CardDescription>
            </CardHeader>
            <CardContent>
                <form action="" onSubmit={handleLogin}>
                    <div className='username grid grid-cols-1 gap-2'>
                        <div className='space-y-2'>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" name="email" placeholder="email" required value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" name="password" placeholder="*******" type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                        </div>

                    </div>
                    <Button type="submit" className='w-full bg-emerald-600 hover:bg-emerald-700 mt-2'>Login</Button>
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
              Vous n'avez pas encore de compte?{" "}
              <Link href="/auth/register" className="text-emerald-600 hover:underline">
                S'inscrire
              </Link>
            </p>
          </CardFooter>

        </Card>
    </div>
</div>
    )
}