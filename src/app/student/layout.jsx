'use client'
// app/(dashboard)/layout.tsx

//import Sidebar from "@/components/Sidebar"
//import Header from "@/components/Header" // si tu as un header
import Link from "next/link"
import { BookOpen, Clock, GraduationCap, LayoutDashboard, LineChart, Users, Menu, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Children, cloneElement, isValidElement } from 'react'
import { UserProvider } from "@/app/student/context/UserContext"

export default function DashboardLayout({  children } ) {
    const userData = { name: "Toky", role: "Admin" };
    //const childWithProps = cloneElement(children, { user });
    /*const childrenWithProps = Children.map(children, (child) => {
        // Check if the child is a valid React element
        if (isValidElement(child)) {
          // Clone the element with userData as a new prop
          return cloneElement(child, { userData })
        }
        return child
      })*/
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
                <nav className="grid gap-3">
                    <Link
                    href="/"
                    className="flex items-center gap-3 rounded-lg bg-slate-800 px-3 py-2.5 text-white font-medium"
                    >
                    <LayoutDashboard className="h-5 w-5 text-emerald-400" />
                    Dashboard
                    </Link>
                    <Link
                    href="/student/courses"
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                    <BookOpen className="h-5 w-5" />
                    My Courses
                    </Link>
                    <Link
                    href="/schedule"
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                    <Clock className="h-5 w-5" />
                    Schedule
                    </Link>
                    <Link
                    href="/progress"
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                    <LineChart className="h-5 w-5" />
                    Progress
                    </Link>
                    <Link
                    href="/community"
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                    <Users className="h-5 w-5" />
                    Community
                    </Link>
                </nav>

                <div className="mt-auto pt-20">
                    <div className="bg-slate-800 rounded-lg p-4 mt-6">
                    <h4 className="font-medium text-sm mb-2">Need Help?</h4>
                    <p className="text-xs text-slate-400 mb-3">Contact our support team for assistance with your courses.</p>
                    <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent text-white border-slate-600 hover:bg-slate-700"
                    >
                        Contact Support
                    </Button>
                    </div>
                </div>
            </div>
        {children}
        </div>
    </div>
    </UserProvider>
  )
}
