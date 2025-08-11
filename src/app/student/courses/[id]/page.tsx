"use client"
import Link from "next/link"
import Image from 'next/image';
import {
  CheckCircle,
  Clock,
  Download,
  FileText,
  GraduationCap,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState ,use} from "react"

type CoursePageProps = {
  params: Promise<{
    id: string
  }>
}

export default function CoursePage({params}: CoursePageProps) {
  const { id: courseId } = use(params)
  type Lesson = {
    id: number
    title: string,
    completed:boolean
    videoUrl:string,
    document : string,
    contenu : string
    // autres champs
  }
  
  type Cours = {
    id: number
    nom: string
    description: string
    lessons: Lesson[]
    image: string
  }

  const [coursDetail,setCoursDetail] = useState<Cours | null>(null);
  const loading = false;


      useEffect(()=>{
        async function getCoursDetails(): Promise<void> {
          try {
            const response = await fetch(`/api/student/details/cours?id=${courseId}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
        
            if (!response.ok) {
              console.error('Erreur lors de la récupération du cours');
              return;
            }
        
            // Typage de la réponse attendue (exemple)
            const data: Cours = await response.json();
            setCoursDetail(data);
          } catch (error: unknown) {
            if (error instanceof Error) {
              console.error('Erreur fetch :', error.message);
            }else {
              console.error('Erreur inconnue :', error);
            }
    
          }
        }
  
        getCoursDetails()
      
      },[courseId])
    return (
      

        <>
                      {loading && (
              <div className="loading flex items-center justify-center inset-0" >
                  <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
              </div>
            )}
          <div className="p-6">
            <div className="flex flex-col gap-6 md:gap-8 max-w-6xl mx-auto">
              <h1 className="text-2xl font-bold tracking-tight">Web Development Fundamentals</h1>

              <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <Card className="overflow-hidden border-none shadow-sm bg-white">

                    <Image
                      src={`/uploads/${coursDetail?.image}`}
                      alt="Course Banner"
                      width={800} // Largeur en pixels
                      height={300} // Hauteur en pixels
                      className="object-cover w-full h-[300px]"
                      priority // Si l'image est above-the-fold
                    />
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl">{coursDetail?.nom}</CardTitle>
                          <CardDescription>{coursDetail?.description}</CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="rounded-full w-10 h-10 bg-emerald-100 flex items-center justify-center">
                            <span className="text-sm font-medium text-emerald-700">JD</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium">John Doe</p>
                            <p className="text-xs text-slate-500">Senior Developer</p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="content" className="space-y-4">
                        <TabsList className="bg-slate-50 p-1 rounded-lg border border-slate-200 w-full justify-start">
                          <TabsTrigger
                            value="content"
                            className="rounded-md data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600"
                          >
                            Course Content
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="content" className="space-y-6">
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-lg font-medium mb-3 flex items-center">
                                <span className="bg-emerald-100 text-emerald-700 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                                  1
                                </span>
                                {coursDetail?.nom}
                              </h3>
                              <div className="space-y-2">
                                {coursDetail?.lessons?.map((lesson, i) => (
                                  <Card
                                    key={i}
                                    className="p-3 border-none shadow-sm bg-white hover:bg-slate-50 transition-colors"
                                  >
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-3">
                                        {lesson.completed ? (
                                          <CheckCircle className="h-5 w-5 text-emerald-500" />
                                        ) : (
                                          <CheckCircle className="h-5 w-5 text-emerald-500" />
                                        )}
                                        <span className={lesson.completed ? "text-slate-400" : ""}>{lesson.title}</span>
                                      </div>
                                      <Link href={`/student/courses/${courseId}/lesson/${lesson.id}`} className="cursor-pointer">
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          className={
                                            lesson.completed
                                              ? "text-slate-400"
                                              : "text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                                          }
                                        >
                                          {lesson.completed ? "Review" : "Start"}
                                        </Button>
                                      </Link>
                                    </div>
                                  </Card>
                                ))}
                              </div>
                            </div>

                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="border-none shadow-sm bg-white">
                    <CardHeader className="pb-3">
                      <CardTitle>Your Progress</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Progress value={25} className="h-2 bg-slate-100" indicatorClassName="bg-emerald-500" />
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">25% completed</span>
                        <span className="font-medium">3/12 lessons</span>
                      </div>
                      <Link href="/course/1/lesson/3" className="w-full">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Continue Learning</Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-sm bg-white">
                    <CardHeader className="pb-3">
                      <CardTitle>Course Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <Clock className="h-5 w-5 text-slate-400" />
                        <div>
                          <p className="text-sm font-medium">12 hours</p>
                          <p className="text-xs text-slate-500">Total course duration</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <FileText className="h-5 w-5 text-slate-400" />
                        <div>
                          <p className="text-sm font-medium">36 lessons</p>
                          <p className="text-xs text-slate-500">Across 12 modules</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <Users className="h-5 w-5 text-slate-400" />
                        <div>
                          <p className="text-sm font-medium">1,245 students</p>
                          <p className="text-xs text-slate-500">Currently enrolled</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <Download className="h-5 w-5 text-slate-400" />
                        <div>
                          <p className="text-sm font-medium">15 resources</p>
                          <p className="text-xs text-slate-500">Downloadable materials</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-sm bg-white">
                    <CardHeader className="pb-3">
                      <CardTitle>Course Certificate</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-slate-50 p-4 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <GraduationCap className="h-10 w-10 text-slate-400 mx-auto mb-2" />
                          <p className="text-sm text-slate-500">
                            Complete all course requirements to earn your certificate of completion.
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full border-slate-200" disabled>
                        View Certificate
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </>
  )
}


