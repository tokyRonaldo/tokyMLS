'use client'
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
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  ArrowUpDown,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useEffect, useState } from "react"


export default function CoursesPage() {
  //const token= localStorage.getItem('token');
  const [listCours,setListCours]=useState([]);

  useEffect(() => { getListCours()},[])

  async function getListCours(){
    try{
      const response= await fetch('/api/cours',{
        method : 'GET',
        headers :{
          "Content-Type": "application/json",
          //'Authorization' : 'Bearer ' + token
        }
      });
      if(!response.ok){
        console.log('erreur')
        return;
      }
      const result= await response.json();
      console.log(result);
      setListCours(result);
    }catch(e){
      console.error('error',e.message);
    }
  }


  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-col sm:flex-row">
      <main className="flex-1 bg-slate-50">
          <div className="border-b bg-white px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
              <h2 className="font-medium">Course Management</h2>
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
                  <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
                  <p className="text-slate-500">Manage and organize your course content</p>
                </div>
                <Link href="/instructor/course/new/edit">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create New Course
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                  <Input type="search" placeholder="Search courses..." className="w-full pl-8 border-slate-200" />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-9 border-slate-200">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="h-9 border-slate-200">
                        <ArrowUpDown className="mr-2 h-4 w-4" />
                        Sort
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Newest First</DropdownMenuItem>
                      <DropdownMenuItem>Oldest First</DropdownMenuItem>
                      <DropdownMenuItem>Most Students</DropdownMenuItem>
                      <DropdownMenuItem>Highest Completion</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <Tabs defaultValue="grid" className="space-y-6">
                <div className="flex justify-between items-center">
                  <TabsList className="bg-white p-1 rounded-lg border border-slate-200">
                    <TabsTrigger
                      value="grid"
                      className="rounded-md data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600"
                    >
                      Grid View
                    </TabsTrigger>
                    <TabsTrigger
                      value="table"
                      className="rounded-md data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600"
                    >
                      Table View
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="grid" className="space-y-4">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {listCours?.map((cours, i) => (
                      <Card key={i} className="bg-white border-none shadow-sm overflow-hidden">
                        <div className="relative">
                          <img
                            src={cours.image}
                            alt={`Course ${i + 1}`}
                            className="object-cover w-full h-40"
                          />
                          <div className="absolute top-3 right-3 bg-white text-slate-700 text-xs px-2 py-1 rounded-full font-medium">
                            {["Active", "Draft", "Popular", "New", "Archived", "Upcoming"][i]}
                          </div>
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between">
                            <CardTitle className="line-clamp-1">
                              {cours.nom}
                            </CardTitle>
                          </div>
                          <CardDescription className="flex justify-between">
                            <span>Students: {}</span>
                            <span>Modules: {[12, 8, 6, 10, 9, 7][i]}</span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-slate-500">Average completion</span>
                            <span className="font-medium">{[78, 65, 32, 45, 82, 58][i]}%</span>
                          </div>
                          <Progress
                            value={[78, 65, 32, 45, 82, 58][i]}
                            className="h-2 bg-slate-100"
                            indicatorClassName={`bg-${
                              [78, 65, 32, 45, 82, 58][i] > 70
                                ? "emerald"
                                : [78, 65, 32, 45, 82, 58][i] > 50
                                  ? "blue"
                                  : "amber"
                            }-500`}
                          />
                        </CardContent>
                        <CardFooter className="flex gap-2">
                          <Link href={`/instructor/course/${i + 1}/edit`} className="flex-1">
                            <Button variant="outline" className="w-full border-slate-200">
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </Button>
                          </Link>
                          <Link href={`/course/${i + 1}`} className="flex-1">
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </Button>
                          </Link>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-9 w-9 border-slate-200">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Duplicate</DropdownMenuItem>
                              <DropdownMenuItem>
                                <Link href={`/instructor/course/${i + 1}/analytics`} className="flex w-full">
                                  Analytics
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem>Export</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="table">
                  <Card className="border-none shadow-sm">
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Course Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Students</TableHead>
                            <TableHead>Completion</TableHead>
                            <TableHead>Last Updated</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {Array.from({ length: 6 }).map((_, i) => (
                            <TableRow key={i}>
                              <TableCell className="font-medium">
                                {
                                  [
                                    "Web Development Fundamentals",
                                    "Data Science Essentials",
                                    "UX Design Principles",
                                    "Mobile App Development",
                                    "Digital Marketing Basics",
                                    "Graphic Design Masterclass",
                                  ]}
                              </TableCell>
                              <TableCell>
                                <span
                                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                    ["Active", "Draft", "Popular", "New", "Archived", "Upcoming"][i] === "Active"
                                      ? "bg-emerald-100 text-emerald-700"
                                      : ["Active", "Draft", "Popular", "New", "Archived", "Upcoming"][i] === "Popular"
                                        ? "bg-blue-100 text-blue-700"
                                        : ["Active", "Draft", "Popular", "New", "Archived", "Upcoming"][i] === "Draft"
                                          ? "bg-amber-100 text-amber-700"
                                          : ["Active", "Draft", "Popular", "New", "Archived", "Upcoming"][i] ===
                                              "Archived"
                                            ? "bg-slate-100 text-slate-700"
                                            : ["Active", "Draft", "Popular", "New", "Archived", "Upcoming"][i] === "New"
                                              ? "bg-purple-100 text-purple-700"
                                              : "bg-orange-100 text-orange-700"
                                  }`}
                                >
                                  {["Active", "Draft", "Popular", "New", "Archived", "Upcoming"][i]}
                                </span>
                              </TableCell>
                              <TableCell>{[156, 98, 42, 75, 120, 65][i]}</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <Progress
                                    value={[78, 65, 32, 45, 82, 58][i]}
                                    className="h-2 w-[80px] bg-slate-100"
                                    indicatorClassName={`bg-${
                                      [78, 65, 32, 45, 82, 58][i] > 70
                                        ? "emerald"
                                        : [78, 65, 32, 45, 82, 58][i] > 50
                                          ? "blue"
                                          : "amber"
                                    }-500`}
                                  />
                                  <span className="text-sm">{[78, 65, 32, 45, 82, 58][i]}%</span>
                                </div>
                              </TableCell>
                              <TableCell className="text-slate-500">
                                {["2 days ago", "1 week ago", "3 days ago", "Yesterday", "5 days ago", "Today"][i]}
                              </TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                      <Link href={`/course/${i + 1}`} className="flex w-full">
                                        <Eye className="h-4 w-4 mr-2" />
                                        View
                                      </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <Link href={`/instructor/course/${i + 1}/edit`} className="flex w-full">
                                        <Edit className="h-4 w-4 mr-2" />
                                        Edit
                                      </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <Link href={`/instructor/course/${i + 1}/students`} className="flex w-full">
                                        <Users className="h-4 w-4 mr-2" />
                                        Students
                                      </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-red-600">
                                      <Trash2 className="h-4 w-4 mr-2" />
                                      Delete
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between border-t p-4">
                      <div className="text-sm text-slate-500">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of{" "}
                        <span className="font-medium">6</span> courses
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-8 w-8 p-0 border-slate-200">
                          &lt;
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0 bg-emerald-50 text-emerald-600 border-emerald-200"
                        >
                          1
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 w-8 p-0 border-slate-200">
                          &gt;
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
