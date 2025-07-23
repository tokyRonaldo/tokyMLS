'use client'
import Link from "next/link"
import { BookOpen, Clock, GraduationCap, LayoutDashboard, LineChart, Users, Menu, Bell } from "lucide-react"
import { useEffect,useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useUser } from "@/app/student/context/UserContext"

export default function Dashboard() {
  const {userData,setUserData} = useUser()
  const [loading, setLoading] = useState(false)
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
 
        <>
            {loading && (
              <div className="loading flex items-center justify-center inset-0" >
                  <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
              </div>
            )}
          <div className="p-6">
            <div className="flex flex-col gap-6 md:gap-8 max-w-6xl mx-auto">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Welcome back, Alex!</h1>
                <p className="text-slate-500">Track your progress and continue learning where you left off.</p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card className="bg-white border-none shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
                    <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <BookOpen className="h-4 w-4 text-emerald-600" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">6</div>
                    <p className="text-xs text-slate-500">2 courses completed</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-none shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <LineChart className="h-4 w-4 text-blue-600" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">68%</div>
                    <Progress value={68} className="mt-2 bg-blue-100" indicatorClassName="bg-blue-500" />
                  </CardContent>
                </Card>
                <Card className="bg-white border-none shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Upcoming Deadlines</CardTitle>
                    <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-amber-600" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-slate-500">Next due in 2 days</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Continue Learning</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                    asChild
                  >
                    <Link href="/courses">View All Courses</Link>
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="bg-white border-none shadow-sm overflow-hidden">
                    <div className="relative">
                      <img
                        src="/placeholder.svg?height=120&width=320"
                        alt="Web Development"
                        className="object-cover w-full h-40"
                      />
                      <div className="absolute top-3 right-3 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                        75% Complete
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle>Web Development Fundamentals</CardTitle>
                      <CardDescription>Learn HTML, CSS and JavaScript basics</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <Progress value={75} className="mb-2 h-2 bg-slate-100" indicatorClassName="bg-emerald-500" />
                      <div className="flex justify-between text-sm">
                        <p className="text-slate-500">6 of 8 modules completed</p>
                        <p className="font-medium text-emerald-600">75%</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                        <Link href="/course/web-development">Continue</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-white border-none shadow-sm overflow-hidden">
                    <div className="relative">
                      <img
                        src="/placeholder.svg?height=120&width=320"
                        alt="Data Science"
                        className="object-cover w-full h-40"
                      />
                      <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                        42% Complete
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle>Introduction to Data Science</CardTitle>
                      <CardDescription>Python, statistics and data visualization</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <Progress value={42} className="mb-2 h-2 bg-slate-100" indicatorClassName="bg-blue-500" />
                      <div className="flex justify-between text-sm">
                        <p className="text-slate-500">3 of 7 modules completed</p>
                        <p className="font-medium text-blue-600">42%</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                        <Link href="/course/data-science">Continue</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-white border-none shadow-sm overflow-hidden">
                    <div className="relative">
                      <img
                        src="/placeholder.svg?height=120&width=320"
                        alt="UX Design"
                        className="object-cover w-full h-40"
                      />
                      <div className="absolute top-3 right-3 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                        18% Complete
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle>UX Design Principles</CardTitle>
                      <CardDescription>User research, wireframing and prototyping</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <Progress value={18} className="mb-2 h-2 bg-slate-100" indicatorClassName="bg-purple-500" />
                      <div className="flex justify-between text-sm">
                        <p className="text-slate-500">1 of 6 modules completed</p>
                        <p className="font-medium text-purple-600">18%</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                        <Link href="/course/ux-design">Continue</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Upcoming Assignments</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                    asChild
                  >
                    <Link href="/assignments">View All</Link>
                  </Button>
                </div>

                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Card key={i} className="bg-white border-none shadow-sm">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>Assignment {i + 1}</CardTitle>
                            <CardDescription>Course: Web Development Fundamentals</CardDescription>
                          </div>
                          <div className="px-2 py-1 bg-amber-100 text-amber-700 rounded-md text-sm font-medium">
                            Due in {i + 1} days
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-500">
                          Complete the project requirements and submit your work before the deadline.
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" className="border-slate-200 hover:bg-slate-50" asChild>
                          <Link href={`/assignment/${i + 1}`}>View Details</Link>
                        </Button>
                        <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
                          <Link href={`/assignment/${i + 1}/submit`}>Submit Assignment</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
  )
}
