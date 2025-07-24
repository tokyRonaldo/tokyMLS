'use client'
import Link from "next/link"
import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  Bell,
  Menu,
  Search,
  Filter,
  MoreHorizontal,
  ArrowUpDown,
  Mail,
  Download,
  UserPlus,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import '../../loading.css'


export default function students(){
  const [loading, setLoading] = useState(false);
  const [listStudents, setListStudents] = useState([]);

  let user= localStorage.getItem('user');
  const formateur= JSON.parse(user);

  const handleListeStudents= async()=>{
    setLoading(true);
    const response= await fetch(`/api/professor/students?formateur_id=${formateur.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      setLoading(false)
      if(!response.ok){
        console.error('error')
        return;
      }
      let result = await response.json();
      console.log(result);
      console.log('testtttt');
      setListStudents(result);
  }
  const handleDeleteStudent= async (studentId) => {
    console.log(studentId);
    console.log('studentntnnnnn');
    setLoading(true);
    const response= await fetch(`/api/professor/students?formateur_id=${formateur.id}&student_id=${studentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      setLoading(false)
      if(!response.ok){
        console.error('error')
        return;
      }
      let result = await response.json();
      console.log(result);
      console.log('testtttt222');
      //setListStudents(result);
      setListStudents(prev =>
        prev.filter(student => student.id !== studentId)
      );
  }

useEffect(()=>{
  handleListeStudents()
},[])

    return(
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
                  <h1 className="text-3xl font-bold tracking-tight">Students</h1>
                  <p className="text-slate-500">Manage your students and track their progress</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="border-slate-200">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add Student
                  </Button>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                  <Input type="search" placeholder="Search students..." className="w-full pl-8 border-slate-200" />
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
                      <DropdownMenuItem>Name (A-Z)</DropdownMenuItem>
                      <DropdownMenuItem>Name (Z-A)</DropdownMenuItem>
                      <DropdownMenuItem>Enrollment Date (Newest)</DropdownMenuItem>
                      <DropdownMenuItem>Enrollment Date (Oldest)</DropdownMenuItem>
                      <DropdownMenuItem>Progress (High to Low)</DropdownMenuItem>
                      <DropdownMenuItem>Progress (Low to High)</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <Card className="border-none shadow-sm">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Student</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Enrolled Courses</TableHead>
                        <TableHead>Progress</TableHead>
                        <TableHead>Enrollment Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {listStudents.map((student, i) => (
                        <TableRow key={i}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center">
                                <span className="text-xs font-medium">
                                  ST
                                </span>
                              </div>
                              <div>
                                <p className="font-medium">
                                  {student.username
                                  }
                                </p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            {
                              student.email
                            }
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <Badge variant="outline" className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                                {student.coursSuivis}
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Progress
                                value={[78, 65, 32, 45, 82, 58, 70, 90, 25, 50][i]}
                                className="h-2 w-[80px] bg-slate-100"
                                indicatorClassName={`bg-${
                                  [78, 65, 32, 45, 82, 58, 70, 90, 25, 50][i] > 70
                                    ? "emerald"
                                    : [78, 65, 32, 45, 82, 58, 70, 90, 25, 50][i] > 50
                                      ? "blue"
                                      : "amber"
                                }-500`}
                              />
                              <span className="text-sm">{[78, 65, 32, 45, 82, 58, 70, 90, 25, 50][i]}%</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-slate-500">
                            {
                              [
                                "Jan 15, 2023",
                                "Feb 3, 2023",
                                "Mar 12, 2023",
                                "Apr 5, 2023",
                                "May 20, 2023",
                                "Jun 8, 2023",
                                "Jul 17, 2023",
                                "Aug 22, 2023",
                                "Sep 10, 2023",
                                "Oct 5, 2023",
                              ][i]
                            }
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
                                  <Link href={`/instructor/student/${i + 1}`} className="flex w-full">
                                    View Profile
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Link href={`/instructor/student/${i + 1}/progress`} className="flex w-full">
                                    View Progress
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Mail className="h-4 w-4 mr-2" />
                                  Send Message
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600" onClick={()=>handleDeleteStudent(student.id)}>Remove Student</DropdownMenuItem>
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
                    Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{" "}
                    <span className="font-medium">100</span> students
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
                      2
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 border-slate-200">
                      3
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 border-slate-200">
                      &gt;
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>

        </>
    )
}