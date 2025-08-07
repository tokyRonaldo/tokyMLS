"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock,
  FileText,
  MessageCircle,
  ThumbsUp,
  Share2,
  Bookmark,
  MoreHorizontal,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { use } from "react"

interface LessonPageProps {
  params: Promise<{
    id: string
    lessonId: string
  }>
}

export default function LessonPage({ params }: LessonPageProps) {
  const { id: courseId, lessonId } = use(params)

  const [isCompleted, setIsCompleted] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [comment, setComment] = useState("")
  const [isNotesOpen, setIsNotesOpen] = useState(false)
  const [notes, setNotes] = useState("")
  const [loading, setLoading] = useState(false)

  type Lesson = {
    id: number
    title: string
    videoUrl: string
    contenu: string
    document: string
  }

  const [lessonDetail,setLessonDetail] = useState<Lesson | null>(null);
  const [listLesson,setListLesson] = useState<Lesson[] | null>(null);


  async function getLessonDetails(): Promise<void> {
    try {
      const response = await fetch(`/api/student/details/lesson?id=${lessonId}`, {
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
      const data: any = await response.json();
      if(data.lesson.userLessons && data.lesson.userLessons.length > 0 ){
        const userLesson = (data.lesson.userLessons as any[])?.find((ul) => ul.userId === 1);
        if (userLesson && userLesson.isFinished) {
          // Tu peux accéder à userLesson.isFinished, etc.
          setIsCompleted(true)
        }
      }
      setLessonDetail(data.lesson);
      setListLesson(data.listLesson);
    } catch (error: any) {
      console.error('Erreur fetch :', error.message);
    }
  }
  useEffect(()=>{
     //courseId = params.id
     //lessonId = params.lessonId
    getLessonDetails()
  },[])
  type Navigation = {
    previous: { id: number; title: string } | null;
    next: { id: number; title: string } | null;
    current: number | null;
    total: number;
  };
  
  let navigation: Navigation = {
    previous: null,
    next: null,
    current: null,
    total: 0,
  };
  if (listLesson && lessonId) {
    // Convertir l'id en nombre si nécessaire
    const currentIndex = listLesson.findIndex(lesson => lesson.id == Number(lessonId));
  
    if (currentIndex !== -1) {
       navigation = {
        previous: listLesson[currentIndex - 1]
          ? { id: listLesson[currentIndex - 1].id, title: listLesson[currentIndex - 1].title }
          : null,
        next: listLesson[currentIndex + 1]
          ? { id: listLesson[currentIndex + 1].id, title: listLesson[currentIndex + 1].title }
          : null,
        current: currentIndex + 1,
        total: listLesson.length,
      };
  
      console.log('NAVIGATION', navigation);
    }
  }
  // Commentaires simulés
  const comments = [
    {
      id: 1,
      author: "Sarah Miller",
      avatar: "SM",
      content: "Great explanation! The examples really helped me understand the concept.",
      timestamp: "2 hours ago",
      likes: 5,
    },
    {
      id: 2,
      author: "Alex Kim",
      avatar: "AK",
      content: "I'm still confused about the difference between div and span elements. Could someone explain?",
      timestamp: "4 hours ago",
      likes: 2,
    },
    {
      id: 3,
      author: "John Doe",
      avatar: "JD",
      content: "The HTML structure example was very clear. Looking forward to the next lesson!",
      timestamp: "1 day ago",
      likes: 8,
    },
  ]

  const handleCompleteLesson = async () => {
    //setIsCompleted(!isCompleted)
    try {
      const response = await fetch(`/api/student/details/lesson?id=${lessonId}&is_complet_lesson=true`, {
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
      const data: any = await response.json();
      setIsCompleted(data.response.isFinished);

    } catch (error: any) {
      console.error('Erreur fetch :', error.message);
    }

  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  const handleSubmitComment = () => {
    if (comment.trim()) {
      // Ici, vous ajouteriez la logique pour soumettre le commentaire
      console.log("Submitting comment:", comment)
      setComment("")
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
            <div className="flex flex-col gap-6 max-w-6xl mx-auto">
              {/* Progress Bar */}
              <Card className="border-none shadow-sm bg-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Course Progress</span>
                    <span className="text-sm text-slate-500">
                      {navigation?.current}/{navigation?.total} lessons
                    </span>
                  </div>
                  <Progress
                    value={
                      navigation.current !== null && navigation.total > 0
                      ? (navigation.current / navigation.total) * 100
                      : 0
                    }
                    className="h-2 bg-slate-100"
                    indicatorClassName="bg-emerald-500"
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  {/* Lesson Header */}
                  <Card className="border-none shadow-sm bg-white mb-6">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-2xl">{lessonDetail?.title}</CardTitle>
                            <Badge variant="secondary" className="bg-slate-100">
                              <a
                                href={`/uploads/${lessonDetail?.document}`}
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <div className="flex items-center gap-2 mt-2">
                                  <FileText className="h-3 w-3" />
                                  Text Lesson
                                  <div className="flex items-center gap-1 text-sm text-slate-500">
                                    <Clock className="h-4 w-4" />
                                    duration
                                  </div>
                                </div>
                              </a>
                            </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleBookmark}
                            className={isBookmarked ? "text-yellow-500" : "text-slate-400"}
                          >
                            <Bookmark className="h-5 w-5" fill={isBookmarked ? "currentColor" : "none"} />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Share2 className="h-5 w-5" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  {/* Lesson Content */}
                  <Card className="border-none shadow-sm bg-white mb-6">
                    <CardContent className="p-6">
                      <div className="prose prose-slate max-w-none">
                        {lessonDetail?.contenu.split("\n").map((line, index) => {
                          if (line.startsWith("# ")) {
                            return (
                              <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                                {line.substring(2)}
                              </h1>
                            )
                          } else if (line.startsWith("## ")) {
                            return (
                              <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">
                                {line.substring(3)}
                              </h2>
                            )
                          } else if (line.startsWith("### ")) {
                            return (
                              <h3 key={index} className="text-xl font-medium mt-4 mb-2">
                                {line.substring(4)}
                              </h3>
                            )
                          } else if (line.startsWith("- ")) {
                            return (
                              <li key={index} className="ml-4">
                                {line.substring(2)}
                              </li>
                            )
                          } else if (line.startsWith("```")) {
                            return (
                              <pre key={index} className="bg-slate-100 p-4 rounded-lg my-4 overflow-x-auto">
                                <code>{line}</code>
                              </pre>
                            )
                          } else if (line.trim() === "") {
                            return <br key={index} />
                          } else {
                            return (
                              <p key={index} className="mb-4 leading-relaxed">
                                {line}
                              </p>
                            )
                          }
                        })}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Lesson video */}
                  {lessonDetail?.videoUrl ? 
                  <Card className="border-none shadow-sm bg-white mb-6">
                    <CardContent className="p-6">
                      <video  controls width="640" height="360" src={'/uploads/'+lessonDetail?.videoUrl}></video>
                    </CardContent>
                  </Card>
                  : ''}

                  {/* Discussion Section */}
                  <Card className="border-none shadow-sm bg-white">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageCircle className="h-5 w-5" />
                        Discussion ({comments.length})
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="comments" className="space-y-4">
                        <TabsList>
                          <TabsTrigger value="comments">Comments</TabsTrigger>
                          <TabsTrigger value="questions">Questions</TabsTrigger>
                        </TabsList>

                        <TabsContent value="comments" className="space-y-4">
                          {/* Add Comment */}
                          <div className="space-y-3">
                            <Textarea
                              placeholder="Ask a question or share your thoughts..."
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                              className="border-slate-200"
                            />
                            <Button onClick={handleSubmitComment} className="bg-emerald-600 hover:bg-emerald-700">
                              Post Comment
                            </Button>
                          </div>

                          <Separator />

                          {/* Comments List */}
                          <div className="space-y-4">
                            {comments.map((comment) => (
                              <div key={comment.id} className="flex gap-3">
                                <Avatar className="h-10 w-10">
                                  <AvatarFallback className="bg-slate-100">{comment.avatar}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="font-medium text-sm">{comment.author}</span>
                                    <span className="text-xs text-slate-500">{comment.timestamp}</span>
                                  </div>
                                  <p className="text-sm text-slate-700 mb-2">{comment.content}</p>
                                  <div className="flex items-center gap-3">
                                    <Button variant="ghost" size="sm" className="h-8 px-2">
                                      <ThumbsUp className="h-3 w-3 mr-1" />
                                      {comment.likes}
                                    </Button>
                                    <Button variant="ghost" size="sm" className="h-8 px-2">
                                      Reply
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>

                        <TabsContent value="questions">
                          <p className="text-slate-500 text-center py-8">No questions yet. Be the first to ask!</p>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Lesson Actions */}
                  <Card className="border-none shadow-sm bg-white">
                    <CardContent className="p-4">
                      <Button
                        onClick={handleCompleteLesson}
                        className={`w-full ${
                          isCompleted ? "bg-emerald-600 hover:bg-emerald-700" : "bg-emerald-600 hover:bg-emerald-700"
                        }`}
                      >
                        {isCompleted ? (
                          <>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Completed
                          </>
                        ) : (
                          <>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Mark as Complete
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Navigation */}
                  <Card className="border-none shadow-sm bg-white">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Navigation</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {navigation.previous && (
                        <Link href={`/course/${courseId}/lesson/${navigation.previous.id}`}>
                          <Button variant="outline" className="w-full justify-start">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Previous: {navigation.previous.title}
                          </Button>
                        </Link>
                      )}
                      {navigation.next && (
                        <Link href={`/course/${courseId}/lesson/${navigation.next.id}`}>
                          <Button className="w-full justify-start bg-emerald-600 hover:bg-emerald-700">
                            Next: {navigation.next.title}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                  {/* Course Overview */}
                  <Card className="border-none shadow-sm bg-white">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Course Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Link href={`/course/${courseId}`}>
                        <Button variant="outline" className="w-full">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Back to Course
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </>
  )
}
