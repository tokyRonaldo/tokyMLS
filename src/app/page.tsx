'use client'
import Link from "next/link"
import { BookOpen, Clock, GraduationCap, LayoutDashboard, LineChart, Users, Menu, Bell } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation"


export default function Dashboard() {
  const router = useRouter()
  const token= localStorage.getItem('token');
  let user= localStorage.getItem('user');
  if(user){

    let parseUser=JSON.parse(user)

    if(parseUser && parseUser.role == 'formateur' ){
      router.push("/professor/dashboard")
    }
    else if(parseUser && parseUser.role == 'etudiant'){
      router.push("/student/dashboard")
    }
    else{
      router.push("/auth/login")
      
    }
  }
  else{
    router.push("/auth/login")

  }

}
