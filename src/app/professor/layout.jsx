'use client'
import React, { useState,useEffect } from "react"
import Link from "next/link"
import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  PlusCircle,
  Bell,
  Menu,
  TrendingUp,
  MessageSquare,
  BarChart3,
  LogOut
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { UserProvider } from "@/app/professor/context/UserContext"
import { Children, cloneElement, isValidElement } from 'react'
import { useRouter } from "next/navigation"
import Loading from '../loading'


export default function InstructorDashboardLayout({children}) {
    const [showDetail,setShowDetail]=useState(false)
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    const token= localStorage.getItem('token');
    let user= localStorage.getItem('user');
    const formateur= JSON.parse(user);
    console.log('tessssssssssssssss')
    console.log(user)

 

    async function handleLogout(){
        setLoading(true)
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push("/student/dashboard")

    }
    useEffect(()=>{
        if (!user && !token) {
            router.push("/auth/login")
        }
    },[])


  return (
          
    <UserProvider>
        <style jsx>{`
            .detail-user {
            position: absolute;
            top: 30px;
            right: 2px;
            color: white;
            background-color: #00bc7d;
            z-index: 100000000;
            width: 100px;
            height: auto;
            border-radius: 10%;
            padding: 10px 10px 15px 10px;

            }
      `}</style>
        <div className="flex min-h-screen w-full flex-col">
        {loading && (
          <Loading/>
        )}
        <div className="flex flex-col sm:flex-row">
            {/* Sidebar */}
            <div className="border-r bg-slate-900 text-white p-6 pt-8 hidden md:block w-[260px] shrink-0 h-screen sticky top-0">
            <div className="flex items-center gap-2 font-semibold text-lg mb-10">
                <GraduationCap className="h-6 w-6 text-emerald-400" />
                <span className="text-emerald-400">EduLearn LMS</span>
            </div>
            <div className="mb-4">
                <div className="bg-slate-800 rounded-lg p-3 mb-6">
                <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-medium text-sm">
                    JD
                    </div>
                    <div>
                    <p className="font-medium text-sm">John Doe</p>
                    <p className="text-xs text-slate-400">Instructor</p>
                    </div>
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent text-white border-slate-600 hover:bg-slate-700"
                >
                    View Profile
                </Button>
                </div>
            </div>
            <nav className="grid gap-3">
                <Link
                href="/professor/dashboard"
                className="flex items-center gap-3 rounded-lg bg-slate-800 px-3 py-2.5 text-white font-medium"
                >
                <LayoutDashboard className="h-5 w-5 text-emerald-400" />
                Dashboard
                </Link>
                <Link
                href="/professor/courses"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                <BookOpen className="h-5 w-5" />
                My Courses
                </Link>
                <Link
                href="/instructor/students"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                <Users className="h-5 w-5" />
                Students
                </Link>
                <Link
                href="/instructor/content"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                <FileText className="h-5 w-5" />
                Content
                </Link>
                <Link
                href="/instructor/settings"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                <Settings className="h-5 w-5" />
                Settings
                </Link>
            </nav>
            </div>

            {/* Main content */}
            <main className="flex-1 bg-slate-50" style={{position : 'relative'}}>

                <div className="border-b bg-white px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                    </Button>
                    <h2 className="font-medium">Schedule</h2>
                    </div>
                    <div className="flex items-center gap-3">
                    <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-medium text-sm cursor-pointer" style={{position: 'relative'}}
                    onClick={()=>{
                        setShowDetail(!showDetail)
                    }}
                    >
                        JD
                        {showDetail && 
                            <div className="detail-user" >
                                <div className="user-name">
                                    
                                    <p className="font-medium text-sm mb-2 break-words">
                                        {formateur?.name || 'USER'}
                                    </p>
                                </div>
                                <p className="user-logout flex gap-1 items-center hover:opacity-60" onClick={handleLogout}>
                                    <LogOut size={15} />
                                    Logout
                                </p>
                            </div>
                        }
                    </div>
                    </div>
                </div>
                {children}
            </main>
        </div>
        </div>
    </UserProvider>
  )
}

