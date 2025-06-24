'use client'
import React from "react"
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
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { UserProvider } from "@/app/professor/context/UserContext"
import { Children, cloneElement, isValidElement } from 'react'

export default function InstructorDashboardLayout({children}) {
  return (
          
    <UserProvider>
        <div className="flex min-h-screen w-full flex-col">
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
            {children}
        </div>
        </div>
    </UserProvider>
  )
}

