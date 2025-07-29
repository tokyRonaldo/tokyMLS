'use client'
import Link from "next/link"
import { BookOpen, Filter, GraduationCap, LayoutDashboard, Search, SlidersHorizontal, Menu, Bell } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react"
import '../../loading.css'


export default function CoursesPage() {
  const [allListCours,setAllListCours]=useState([]);
  const [loading, setLoading] = useState(false)

  const [token, setToken] = useState();
  const [student, setStudent] = useState(null);


  async function getAllListCours(type){
    setLoading(true);
    try{
      const response= await fetch(`/api/student/cours/?type=${encodeURIComponent(type)}&userId=${student.id}`,{
        method : 'GET',
        headers :{
          "Content-Type": "application/json",
          //'Authorization' : 'Bearer ' + token
        },
        //body: JSON.stringify({ type: type }),
      });
      setLoading(false)
      if(!response.ok){
        console.log('erreur')
        return;
      }
      const result= await response.json();
      console.log(result);
      setAllListCours(result);
    }catch(e){
      setLoading(false)
      console.error('error',e.message);
    }
  }

  async function handleEnrollNow(id){
    setLoading(true)
    try{
      const response= await fetch(`/api/student/cours/?id=${encodeURIComponent(id)}&userId=${student.id}`,{
        method : 'GET',
        headers :{
          "Content-Type": "application/json",
          //'Authorization' : 'Bearer ' + token
        },
        //body: JSON.stringify({ type: type }),
      });
      setLoading(false)
      if(!response.ok){
        console.log('erreur')
        return;
      }
      const result= await response.json();
      console.log('etooooooooooooooooo e');
      console.log(result);
      getAllListCours('all');
      //setAllListCours(result);
    }catch(e){
      setLoading(false)
      console.error('error',e.message);
    }

  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      const storedToken = localStorage.getItem('token');
  
      if (storedUser && storedToken) {
        setStudent(JSON.parse(storedUser));
        setToken(storedToken);
      }
    }

}, [])


  useEffect(()=>{
    if (student && token) {
      console.log('tesssssss');
      getAllListCours('all')
    }
  },[student,token])

  return (

        <>
            {loading && (
              <div className="loading flex items-center justify-center inset-0" >
                  <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
              </div>
            )}

          <div className="p-6">
            <div className="flex flex-col gap-6 md:gap-8 max-w-6xl mx-auto">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Course Catalog</h1>
                <p className="text-slate-500">Browse and enroll in our wide range of courses</p>
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
                  <Button variant="outline" size="sm" className="h-9 border-slate-200">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Sort
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="all" className="space-y-6">
                <TabsList className="bg-white p-1 rounded-lg border border-slate-200 w-full justify-start">
                  <TabsTrigger onClick={()=>{getAllListCours('all')}}
                    value="all"
                    className="rounded-md data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600"
                  >
                    All Courses
                  </TabsTrigger>
                  <TabsTrigger
                    value="enrolled" onClick={()=>{getAllListCours('enrolled')}}
                    className="rounded-md data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600"
                  >
                    Enrolled
                  </TabsTrigger>
                  <TabsTrigger
                    value="completed" onClick={()=>{getAllListCours('completed')}}
                    className="rounded-md data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600"
                  >
                    Completed
                  </TabsTrigger>
                  <TabsTrigger
                    value="popular" onClick={()=>{getAllListCours('popular')}}
                    className="rounded-md data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600"
                  >
                    Popular
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="space-y-4">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {allListCours.map((cours, i) => (
                      <Card key={i} className="overflow-hidden border-none shadow-sm bg-white">
                         <Link href={"/student/courses/"+cours.id}>
                        <img
                          src={'/uploads/'+cours.image}
                          alt={`Course ${i + 1}`}
                          className="object-cover w-full h-40"
                        />
                        </Link>
                        <CardHeader>
                          <div className="flex justify-between">
                            <CardTitle className="line-clamp-1">
                            <Link href={"/student/courses/"+cours.id}>
                              {cours.nom}
                              </Link>
                              </CardTitle>
                            <span
                              className="text-xs font-medium px-2 py-1 rounded-full"
                              style={{
                                backgroundColor: ["#f0fdf4", "#eff6ff", "#fef2f2"][i % 3],
                                color: ["#16a34a", "#2563eb", "#dc2626"][i % 3],
                              }}
                            >
                              {["Beginner", "Intermediate", "Advanced"][i % 3]}
                            </span>
                          </div>
                          <CardDescription className="line-clamp-2">
                          {cours.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                            <span>12 modules</span>
                            <span>•</span>
                            <span>24 hours</span>
                            <span>•</span>
                            <span>156 students</span>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="rounded-full w-8 h-8 bg-slate-100 flex items-center justify-center">
                              <span className="text-xs font-medium">JD</span>
                            </div>
                            <span className="text-sm font-medium">John Doe</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                         {!cours.enrolled ? 
                            <Button onClick={()=>{handleEnrollNow(cours.id)}} className="w-full bg-emerald-600 hover:bg-emerald-700 cursor-pointer">Enroll Now</Button>
                            : <Button style={{PointerEvent:'none'}} className='w-full bg-neutral-500 hover:bg-neutral-500'>Enrolled </Button>
                         }
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="enrolled" className="space-y-4">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {allListCours.map((cours, i) => (
                      <Card key={i} className="overflow-hidden border-none shadow-sm bg-white">
                        <div className="relative">
                          <img
                            src={cours.image}
                            alt={`Enrolled Course ${i + 1}`}
                            className="object-cover w-full h-40"
                          />
                          <div className="absolute top-3 right-3 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                            {[75, 42, 18][i]}% Complete
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="line-clamp-1">{cours.nom}</CardTitle>
                          <CardDescription className="line-clamp-2">
                            {cours.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Progress
                            value={[75, 42, 18][i]}
                            className="mb-2 h-2 bg-slate-100"
                            indicatorClassName={`bg-${[75, 42, 18][i] > 50 ? "emerald" : "blue"}-500`}
                          />
                          <div className="flex justify-between text-sm">
                            <p className="text-slate-500">Progress</p>
                            <p className="font-medium" style={{ color: [75, 42, 18][i] > 50 ? "#16a34a" : "#2563eb" }}>
                              {[75, 42, 18][i]}%
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            className="w-full"
                            style={{
                              backgroundColor: [75, 42, 18][i] > 50 ? "#16a34a" : "#2563eb",
                              borderColor: [75, 42, 18][i] > 50 ? "#16a34a" : "#2563eb",
                            }}
                          >
                            Continue Learning
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="completed" className="space-y-4">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {allListCours.map((cours, i) => (
                      <Card key={i} className="overflow-hidden">
                        <img
                          src={cours.image}
                          alt={`Completed Course ${i + 1}`}
                          className="object-cover w-full h-40"
                        />
                        <CardHeader>
                          <div className="flex justify-between">
                            <CardTitle className="line-clamp-1">{cours.nom}</CardTitle>
                            <span className="text-sm font-medium bg-green-100 text-green-700 px-2 py-1 rounded">
                              Completed
                            </span>
                          </div>
                          <CardDescription className="line-clamp-2">
                            {cours.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>Completed on: {["Jan 15, 2023", "Mar 22, 2023"][i]}</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            View Certificate
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="popular" className="space-y-4">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <Card key={i} className="overflow-hidden">
                        <img
                          src={`/placeholder.svg?height=160&width=320&text=Popular ${i + 1}`}
                          alt={`Popular Course ${i + 1}`}
                          className="object-cover w-full h-40"
                        />
                        <CardHeader>
                          <div className="flex justify-between">
                            <CardTitle className="line-clamp-1">Popular Course {i + 1}</CardTitle>
                            <span className="text-sm font-medium bg-orange-100 text-orange-700 px-2 py-1 rounded">
                              Trending
                            </span>
                          </div>
                          <CardDescription className="line-clamp-2">
                            One of our most popular courses with high student satisfaction.
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                            <span>15 modules</span>
                            <span>•</span>
                            <span>30 hours</span>
                            <span>•</span>
                            <span>1200+ students</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full">Enroll Now</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </>

  )
}
