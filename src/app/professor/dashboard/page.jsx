'use client'
import Link from "next/link"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useUser } from "@/app/professor/context/UserContext"
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

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


export default function Dashboard() {
  const {userData,setUserData} = useUser()
  useEffect(() => {
    console.log(userData);
  /*  setUserData({
      ...userData,
      'name' :'nouveau nom'
    })*/
    console.log(userData)
    
  }, [userData]);
  const mettreAJourNom = () => {
    setUserData({
      ...userData,
      age: 'Nouveau Nom'
    })
  }
  return (
 
    <main className="flex-1 bg-slate-50">
    <div className="border-b bg-white px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
        </Button>
        <h2 className="font-medium">Instructor Dashboard</h2>
        </div>
        <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
        </Button>
        <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-medium text-sm">
            JD
        </div>
        </div>
    </div>

    <div className="p-6">
        <div className="flex flex-col gap-6 md:gap-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
            <h1 className="text-3xl font-bold tracking-tight">Instructor Dashboard</h1>
            <p className="text-slate-500">Manage your courses and track student progress</p>
            </div>
            <Link href="/professor/courses/new">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create New Course
            </Button>
            </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-white border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <Users className="h-4 w-4 text-emerald-600" />
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">1,248</div>
                <p className="text-xs text-emerald-600">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                +12% from last month
                </p>
            </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-blue-600" />
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">6</div>
                <p className="text-xs text-blue-600">
                <TrendingUp className="inline h-3 w-3 mr-1" />2 new this month
                </p>
            </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Course Completion</CardTitle>
                <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                <BarChart3 className="h-4 w-4 text-amber-600" />
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">72%</div>
                <p className="text-xs text-amber-600">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                +5% from last month
                </p>
            </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Student Feedback</CardTitle>
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                <MessageSquare className="h-4 w-4 text-purple-600" />
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">4.8/5</div>
                <p className="text-xs text-purple-600">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                Based on 156 reviews
                </p>
            </CardContent>
            </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
            <Card className="bg-white border-none shadow-sm lg:col-span-2">
            <CardHeader>
                <CardTitle>Course Performance</CardTitle>
                <CardDescription>Student enrollment and completion rates</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-slate-50 rounded-md">
                <div className="text-center">
                    <BarChart3 className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-500">Course performance chart would appear here</p>
                </div>
                </div>
            </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm">
            <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest student activities</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                {[
                    {
                    action: "enrolled in",
                    course: "Web Development Fundamentals",
                    time: "10 minutes ago",
                    student: "Alex Johnson",
                    icon: <Users className="h-4 w-4 text-emerald-500" />,
                    },
                    {
                    action: "completed",
                    course: "JavaScript Basics",
                    time: "2 hours ago",
                    student: "Sarah Miller",
                    icon: <CheckIcon className="h-4 w-4 text-emerald-500" />,
                    },
                    {
                    action: "submitted assignment for",
                    course: "CSS Layouts",
                    time: "Yesterday",
                    student: "Michael Brown",
                    icon: <FileText className="h-4 w-4 text-blue-500" />,
                    },
                    {
                    action: "asked a question in",
                    course: "HTML Forms",
                    time: "2 days ago",
                    student: "Emily Davis",
                    icon: <MessageSquare className="h-4 w-4 text-purple-500" />,
                    },
                ].map((activity, i) => (
                    <div key={i} className="flex gap-3 items-start">
                    <div className="rounded-full p-1.5 bg-slate-100">{activity.icon}</div>
                    <div>
                        <p className="text-sm">
                        <span className="font-medium">{activity.student}</span>{" "}
                        <span className="text-slate-500">{activity.action}</span>{" "}
                        <span className="font-medium">{activity.course}</span>
                        </p>
                        <p className="text-xs text-slate-400">{activity.time}</p>
                    </div>
                    </div>
                ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button
                variant="ghost"
                className="w-full text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                >
                View All Activities
                </Button>
            </CardFooter>
            </Card>
        </div>

        <div className="mt-4">
            <h2 className="text-xl font-semibold mb-4">Your Courses</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="bg-white border-none shadow-sm overflow-hidden">
                <div className="relative">
                    <img
                    src={`/placeholder.svg?height=160&width=320&text=Course ${i + 1}`}
                    alt={`Course ${i + 1}`}
                    className="object-cover w-full h-40"
                    />
                    <div className="absolute top-3 right-3 bg-white text-slate-700 text-xs px-2 py-1 rounded-full font-medium">
                    {["Active", "Popular", "New"][i]}
                    </div>
                </div>
                <CardHeader className="pb-2">
                    <div className="flex justify-between">
                    <CardTitle className="line-clamp-1">
                        {["Web Development", "Data Science", "UX Design"][i]}
                    </CardTitle>
                    </div>
                    <CardDescription className="flex justify-between">
                    <span>Students: {[156, 98, 42][i]}</span>
                    <span>Modules: {[12, 8, 6][i]}</span>
                    </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                    <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-500">Average completion</span>
                    <span className="font-medium">{[78, 65, 32][i]}%</span>
                    </div>
                    <Progress
                    value={[78, 65, 32][i]}
                    className="h-2 bg-slate-100"
                    indicatorClassName={`bg-${[78, 65, 32][i] > 70 ? "emerald" : [78, 65, 32][i] > 50 ? "blue" : "amber"}-500`}
                    />
                </CardContent>
                <CardFooter className="flex gap-2">
                    <Link href={`/instructor/course/${i + 1}/edit`} className="flex-1">
                    <Button variant="outline" className="w-full border-slate-200">
                        Edit
                    </Button>
                    </Link>
                    <Link href={`/instructor/course/${i + 1}/manage`} className="flex-1">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Manage</Button>
                    </Link>
                </CardFooter>
                </Card>
            ))}
            </div>
        </div>
        </div>
    </div>
    </main>

  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
