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
import { format, addDays, subDays, startOfWeek, isSameDay } from "date-fns"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useEffect, useState } from "react"
import '../../loading.css'
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"


export default function CoursesPage() {
  //const token= localStorage.getItem('token');
  const [listCours,setListCours]=useState([]);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState();
  const [formateur, setFormateur] = useState(null);
  const router = useRouter()
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      const storedToken = localStorage.getItem('token');
  
      if (storedUser && storedToken) {
        setFormateur(JSON.parse(storedUser));
        setToken(storedToken);
      }
    }

}, [])

useEffect(() => {
  if (formateur && token) {
    getListCours();
  }
}, [formateur, token]);

const handleClick = (e,url) => {
  console.log(url)
  console.log('essaiiii')
  e.preventDefault();
  setLoading(true);
  router.push(url);

};
// Dès que pathname change => stop loading
useEffect(() => {
  setLoading(false);
  }, [pathname]);

  async function getListCours(){
    setLoading(true)

    try{
      console.log(formateur)
      console.log('testttttttttt')
      const response= await fetch(`/api/cours?formateur_id=${formateur.id}`,{
        method : 'GET',
        headers :{
          "Content-Type": "application/json",
          //'Authorization' : 'Bearer ' + token
        }
      });
      if(!response.ok){
      setLoading(false)

        console.log('erreur')
        return;
      }
      const result= await response.json();
      setLoading(false)
      console.log(result);
      setListCours(result);
    }catch(e){
      setLoading(false)
      console.error('error',e.message);
    }
  }

  async function handleDeleteCours(id,e){
    e.preventDefault();
    setLoading(true)

    try{
      const response= await fetch('/api/cours',{
        method:'delete',
        headers:{
          "Content-type" : 'application/json'
        },
        body: JSON.stringify({ id: id }),
        
      })
      if(!response.ok){
      setLoading(false)
        return;
      }
      //const result= await response.json();
      setLoading(false)
      setListCours(
        prev=>prev.filter(cours=>cours.id != id)
      )
      //setListCours(result.data)

    }
    catch(e){
      setLoading(false)
      console.error('error',e.message)
    }
  }


  return (

      <>
              {loading && (
              <div className="loading flex items-center justify-center inset-0" >
                  <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
              </div>
            )}
          <div className="p-6">
            <div className="flex flex-col gap-6 md:gap-8 max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
                  <p className="text-slate-500">Manage and organize your course content</p>
                </div>
                  <Button onClick={(e)=>handleClick(e,"/professor/courses/new")} className="bg-emerald-600 hover:bg-emerald-700">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create New Course
                  </Button>
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
                            src={cours.image ? `/uploads/${cours.image}` : `/placeholder.svg?height=160&width=320&text=Course ${i + 1}`}
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
                            <span>Students: {cours._count.suivis}</span>
                            
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-slate-500">{cours.description}</span>
                          </div>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                            <Button onClick={(e)=>handleClick(e,`/professor/courses/${cours.id}`)} variant="outline" className="w-full border-slate-200">
                              <Edit className="h-4 w-4" />
                              Edit
                            </Button>
                          <Link href="#" className="flex-1">
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                              <Eye className="h-4 w-4" />
                              View
                            </Button>
                          </Link>
                          <div className="flex-1">
                            <Button className="w-full bg-red-500 hover:bg-red-700" onClick={(e)=>handleDeleteCours(cours.id,e)}>
                              <Trash2 className="h-4 w-4" />
                              delete
                            </Button>
                          </div>

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
                            <TableHead>Categorie</TableHead>
                            <TableHead>Students</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Last Updated</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {listCours?.map((cours, i) => (
                            <TableRow key={i}>
                              <TableCell className="font-medium">
                                {cours.nom}
                              </TableCell>
                              <TableCell>
                                {cours.theCategories}
                              </TableCell>
                              <TableCell></TableCell>
                              <TableCell>
                                {cours.description}
                              </TableCell>
                              <TableCell className="text-slate-500">
                                {format(cours.updatedAt,'Y-MM-dd')}
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
                                      <Link href="#" className="flex w-full">
                                        <Eye className="h-4 w-4 mr-2" />
                                        View
                                      </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <a onClick={(e)=>handleClick(e,`/professor/courses/${cours.id}`)}  className="flex w-full">
                                        <Edit className="h-4 w-4 mr-2" />
                                        Edit
                                      </a>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-red-600" onClick={(e)=>handleDeleteCours(cours.id,e)}>
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
                      {/*<div className="text-sm text-slate-500">
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
                      </div>*/}
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </>

  )
}