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
  ArrowLeft,
  Save,
  Plus,
  Trash2,
  MoveUp,
  MoveDown,
  FileImage,
  Upload,
  DollarSign,
  CheckCircle,
  Eye,
  Pencil
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog"

import { use } from 'react';
import { useParams } from 'next/navigation';
import '../../../loading.css'
import { useRouter } from "next/navigation"

import { useEffect,useState } from "react"



export default function NewCourse() {
  const [showModal, setShowModal] = useState(false);
  const [titleLesson, setTitleLesson] = useState('');
  const [descriptionLesson, setDescriptionLesson] = useState('');
  const [documentLesson, setDocumentLesson] = useState('');
  const [videoLesson, setVideoLesson] = useState('');
  const [countLesson, setCountLesson] = useState(0);
  const [identifiantLesson, setIdentifiantLesson] = useState();
  const [isEditLesson, setIsEditLesson] = useState(false);
  const [listLesson, setListLesson] = useState([]);
  const [coursTitle, setCoursTitle] = useState('');
  const [coursDescription, setCoursDescription] = useState('');
  const [coursLevel, setCoursLevel] = useState('');
  const [coursContent, setCoursContent] = useState('');
  const [coursCategory, setCoursCategory] = useState('');
  const [coursImage, setCoursImage] = useState('');
  const [coursImagePreview, setCoursImagePreview] = useState(null);
  const [coursVideo, setCoursVideo] = useState('');
  const [coursVideoPreview, setCoursVideoPreview] = useState(null);
  const [coursSubtitle, setCoursSubtitle] = useState('');
  const [loading, setLoading] = useState(false);

  const [token, setToken] = useState();
  const [formateur, setFormateur] = useState();
  const router = useRouter()

  const params = useParams();
  const id = params.id;

  const lessonArray=[
    { title: "HTML Basics", type: "text", completed: true },
    { title: "HTML Document Structure", type: "text", completed: true },
    { title: "HTML Elements and Attributes", type: "video", completed: false },
    { title: "HTML Forms", type: "text", completed: false },
  ]
 
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
  if(id){
    handleGetCours(id);
}
}, []);


const handleFileChange = (e)=>{
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      setDocumentLesson(file);
      console.log('Fichier sélectionné :', file.name);
    }

  }

  const handleGetCours = async (id)=>{

    try{
        const fetchApi= await fetch(`/api/professor/cours?id=${id}`,{
            method : 'GET',
            headers: {
              //"Content-Type": "application/json",
              'Authorization' : 'Bearer ' + token
             }
        })
        if (!fetchApi.ok) {
          console.error('Erreur lors de la récupération du cours');
          return;
        }

        const resp= await fetchApi.json();
        
        setCoursTitle(resp.nom);
        setCoursDescription(resp.description);
        setCoursLevel(resp.level);
        setCoursSubtitle(resp.sousTitre);
        setCoursCategory(resp.theCategories)
        if(resp.image && resp.image!= ''){
          setCoursImagePreview(`/uploads/${resp.image}`);
          setCoursImage(resp.image);
        }
        if(resp.video && resp.video!= ''){
          setCoursVideoPreview(`/uploads/${resp.video}`);
          setCoursVideo(resp.image);
        }
        const arrayLesson = resp.lessons.map(lesson => ({
          titleLesson: lesson.title,
          descriptionLesson: lesson.contenu,
          documentLesson: lesson.document,
          videoLesson: lesson.videoUrl
        }));
        setListLesson(arrayLesson)

        console.log(resp);


    }catch(e){
        console.error(e);
    }
  }
  

  const handleFileChangeCours = (e)=>{
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      setCoursImage(file);
      setCoursImagePreview(URL.createObjectURL(file)); //generer un url temporaire de l'image pour l'afficher
      console.log('Fichier sélectionné :', file.name);
    }

  }

  const handleVideoChange = (e)=>{
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      setVideoLesson(file);
      console.log('Fichier sélectionné :', file.name);
    }
  }

  const handleVideoChangeCours = (e)=>{
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      setCoursVideo(file);
      setCoursVideoPreview(URL.createObjectURL(file));
      console.log('Fichier sélectionné :', file.name);
    }
  }

  const handleAddLesson= async (e)=>{
    //e.preventDefault();
    if(isEditLesson){
      console.log('is edit lesson true')
      console.log(identifiantLesson)
      setListLesson(prev =>
        prev.map((lesson, index) =>
          index === identifiantLesson ? { ...lesson,
             titleLesson: titleLesson,
              descriptionLesson: descriptionLesson,
               documentLesson: documentLesson,
               videoLesson:videoLesson 
          } : lesson 
        ) 
      );
    }
    else{
      setListLesson(prev => [
        ...prev,
        { titleLesson: titleLesson, descriptionLesson: descriptionLesson, documentLesson: documentLesson,videoLesson:videoLesson }
      ]);
    }
    initializeVariable();
  }

  const handleDeleteLesson=async (i) =>{
    console.log('test suppr');
    setListLesson(prev =>
      prev.filter((_, index) => index !== i)
    );
    
  }

  const initializeVariable = ()=>{
    setTitleLesson('');
    setDescriptionLesson('');
    setDocumentLesson('');
    setVideoLesson('');
  }
  

  const handleSubmitCours = async () => {
    setLoading(true);
    console.log('subbbbmiiiiiiiiiiit')
    try {
      const formData = new FormData();
  
      // Champs simples
      formData.append("coursTitle", coursTitle);
      formData.append("coursDescription", coursDescription);
      formData.append("coursLevel", coursLevel);
      formData.append("coursContent", coursContent);
      formData.append("coursCategory", coursCategory);
      formData.append("coursSubtitle", coursSubtitle);
      formData.append("userId", formateur.id);
  
      // Fichiers (si ce sont bien des File)
      if (coursImage instanceof File) {
        formData.append("coursImage", coursImage);
      }
  
      if (coursVideo instanceof File) {
        formData.append("coursVideo", coursVideo);
      }
  
      // listLesson est un tableau d'objets
      listLesson.forEach((lesson, index) => {
        console.log(lesson.titleLesson)
        formData.append(`listLesson[${index}][title]`, lesson.titleLesson);
        formData.append(`listLesson[${index}][contenu]`, lesson.descriptionLesson);
        if (lesson.documentLesson instanceof File) {
          formData.append(`lessonDocument_${index}`, lesson.documentLesson);
        }
        if (lesson.videoLesson instanceof File) {
          formData.append(`lessonVideo_${index}`, lesson.videoLesson);
        }

        //formData.append(`listLesson[${index}][document]`, lesson.documentLesson);
        //formData.append(`listLesson[${index}][videoUrl]`, lesson.videoLesson);
      })
      console.log(formData)
      /*if(listLesson.length > 0){
        formData.append("lesson", JSON.stringify(listLesson));
      }*/
  
      const response = await fetch(`/api/cours?coursId=${id}`, {
        method: "POST",
        body: formData, // pas de JSON ici
         headers: {
          //"Content-Type": "application/json",
          'Authorization' : 'Bearer ' + token
         }
      });
      if (!response.ok) {
        console.error('Erreur lors de la récupération du cours');
        setLoading(false)
        toast.error('Une erreur est survenue');

        return;
      }

      const resp = await response.json();
      router.push("/professor/courses")
      setLoading(false)
      toast.success('Données chargées avec succès');

    } catch (error) {
      console.error("Erreur lors de l'envoi du cours :", error);
      setLoading(false)
      toast.error(err.message || 'Une erreur est survenue');

    }
  };

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
                  <h1 className="text-3xl font-bold tracking-tight">Edit Course</h1>
                  <p className="text-slate-500">Update your course details and content</p>
                </div>
                <div className="flex gap-2">
                  <Link href="/course/1">
                    <Button variant="outline" className="border-slate-200">
                      Preview
                    </Button>
                  </Link>
                  <Button className="bg-emerald-600 hover:bg-emerald-700"
                    onClick={handleSubmitCours}
                  >
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="details" className="space-y-6">
                <TabsList className="flex bg-white p-1 rounded-lg border border-slate-200 w-full justify-start ">
                  <TabsTrigger
                    value="details"
                    className="rounded-md flex-initial data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600"
                  >
                    Course Details
                  </TabsTrigger>
                  <TabsTrigger
                    value="lesson"
                    className="rounded-md flex-initial data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600"
                  >
                    Lessons
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="details">
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="md:col-span-2 space-y-6">
                      <Card className="border-none shadow-sm">
                        <CardHeader>
                          <CardTitle>Basic Information</CardTitle>
                          <CardDescription>Update the basic information about your course</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="title">Course Title</Label>
                            <Input
                              id="cours_title"
                              placeholder="Enter course title"
                              Value={coursTitle}
                              className="border-slate-200"
                              onChange={(e)=>{setCoursTitle(e.target.value)}}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="subtitle">Subtitle</Label>
                            <Input
                              id="cours_subtitle"
                              placeholder="Enter course subtitle"
                              value={coursSubtitle}
                              className="border-slate-200"
                              onChange={(e)=>{setCoursSubtitle(e.target.value)}}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                              id="cours_description"
                              placeholder="Enter course description"
                              className="min-h-[150px] border-slate-200"
                              value={coursDescription}
                              onChange={(e)=>{setCoursDescription(e.target.value)}}
                            />
                          </div>
                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="category">Category</Label>
                              <Select value={coursCategory}
                              onValueChange={(value) => setCoursCategory(value)}
                              >
                                <SelectTrigger className="border-slate-200">
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="webdev">Web Development</SelectItem>
                                  <SelectItem value="datascience">Data Science</SelectItem>
                                  <SelectItem value="design">Design</SelectItem>
                                  <SelectItem value="marketing">Marketing</SelectItem>
                                  <SelectItem value="business">Business</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="level">Level</Label>
                              <Select value={coursLevel}
                              onValueChange={(value) => setCoursLevel(value)}
                              >
                                <SelectTrigger className="border-slate-200">
                                  <SelectValue placeholder="Select level" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="beginner">Beginner</SelectItem>
                                  <SelectItem value="intermediate">Intermediate</SelectItem>
                                  <SelectItem value="advanced">Advanced</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                    </div>

                    <div className="space-y-6">
                      <Card className="border-none shadow-sm">
                        <CardHeader>
                          <CardTitle>Course Image</CardTitle>
                          <CardDescription>Upload a cover image for your course</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="border-2 border-dashed border-slate-200 rounded-lg p-4 text-center">
                            <img
                              src={coursImagePreview || "/placeholder.svg?height=200&width=400&text=Course Image"}
                              alt="Course cover"
                              className="mx-auto mb-4 rounded-md"
                            />
                            <div className="space-y-2">
                            <Input id="picture" type="file" 
                                    onChange={handleFileChangeCours}
                                    accept=".pdf,.jpg,.png"
                                  />
                              <p className="text-xs text-slate-500">Recommended size: 1280x720px (16:9 ratio)</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-none shadow-sm">
                        <CardHeader>
                          <CardTitle>Promotional Video</CardTitle>
                          <CardDescription>Add a short video to promote your course</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="border-2 border-dashed border-slate-200 rounded-lg p-4 text-center">
                            <div className="bg-slate-100 rounded-md h-[150px] flex items-center justify-center mb-4">
                              
                              {(coursVideoPreview && coursVideoPreview!= '') ? (
                                <video
                                  controls
                                  src={coursVideoPreview}
                                  className="mx-auto mb-4 rounded-md h-full w-full"
                                />
                              ) : (
                                <Upload className="h-10 w-10 text-slate-400" />
                              )}
                            </div>
                            <Input id="video" type="file" 
                                    onChange={handleVideoChangeCours}
                                    accept=".mkv,.mp4"
                            />                            
                            <p className="text-xs text-slate-500 mt-2">
                              Max file size: 500MB. Supported formats: MP4, MOV
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-none shadow-sm">
                        <CardHeader>
                          <CardTitle>Course Status</CardTitle>
                          <CardDescription>Control the visibility of your course</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="published">Published</Label>
                              <p className="text-xs text-slate-500">Make this course visible to students</p>
                            </div>
                            <Switch id="published" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="featured">Featured</Label>
                              <p className="text-xs text-slate-500">Show this course in featured section</p>
                            </div>
                            <Switch id="featured" />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="lesson">
                  <div className="space-y-6">
                    <Card className="border-none shadow-sm">
                      <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                          <CardTitle>Course lesson</CardTitle>
                          <CardDescription>Organize your course content into modules and lessons</CardDescription>
                        </div>
                        <Dialog open={showModal} onOpenChange={setShowModal}>
                          <DialogTrigger className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 flex items-center rounded-md text-sm font-medium"   onClick={() => 
                            {
                              setShowModal(true)
                              setIsEditLesson(false)
                              initializeVariable()
                            }}>
                              <Plus className="h-4 w-4 mr-2" />
                              Add Module
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle>Share link</DialogTitle>
                              <DialogDescription>
                                Anyone who has this link will be able to view this.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="flex-col items-center space-x-2">
                              <div className="grid flex-1 gap-2 mb-4">
                                <Label htmlFor="title" >
                                  Titre
                                </Label>
                                <Input
                                  id="title"
                                  name='title'
                                  value={titleLesson}
                                  required
                                  onChange={(e)=>{setTitleLesson(e.target.value)}}
                                />

                              </div>
                              <div className="grid flex-1 gap-2 mb-4">
                                <Label htmlFor="document">
                                    Document
                                  </Label>
                                  <Input id="picture" type="file" 
                                    onChange={handleFileChange}
                                    accept=".pdf,.jpg,.png"
                                  />
                                  {documentLesson  && (
                                    <span className="text-sm text-gray-600">
                                      Document selectioned : {documentLesson.name}
                                    </span>
                                  )}
                            </div>


                            <div className="flex-1 gap-2 mb-4">
                                <Label htmlFor="video" >
                                    Video
                                  </Label>
                                  <Input id="video" type="file" 
                                    onChange={handleVideoChange}
                                    accept=".mkv,.mp4"
                                  />
                                  {videoLesson  && (
                                    <span className="text-sm text-gray-600">
                                      Document selectioned : {videoLesson.name}
                                    </span>
                                  )}

                              </div>
                              <div className="grid flex-1 gap-2">
                                <Label htmlFor="description">
                                  Description
                                </Label>
                                <Textarea
                                  id="description"
                                  name='description'
                                  placeholder="Entrer la description"
                                  className="min-h-[150px] border-slate-200"
                                  onChange={(e)=>{setDescriptionLesson(e.target.value)}}
                                  value={descriptionLesson}
                                />

                              </div>

                            </div>

                            <DialogFooter className="sm:justify-end">
                              <DialogClose>
                                <Button type="button" className="mr-1">
                                  Close
                                </Button>
                                <Button onClick={handleAddLesson} type="button" variant="ghost" className={`bg-emerald-600 hover:bg-emerald-700 ${titleLesson === '' ? 'opacity-50 cursor-not-allowed' : ''}`}  disabled={titleLesson === ''}>
                                  Save
                                </Button>
                              </DialogClose>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>

                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Module 1 */}
                        <div className="border rounded-lg overflow-hidden">
                          <div className="bg-slate-50 p-4 border-b flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="bg-emerald-100 text-emerald-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">
                                1
                              </div>
                              <div>
                                <Input
                                  defaultValue="List of Lessons"
                                  className="border-0 bg-transparent p-0 text-base font-medium focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                              </div>
                            </div>
                         
                          </div>
                          <div className="p-4 space-y-3">
                            {/* Lessons */}
                            {listLesson?.map((lesson, i) => (
                              <div key={i} className="flex items-center justify-between bg-white p-3 rounded-md border">
                                <div className="flex items-center gap-3">
                                  {lesson.completed ? (
                                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                                  ) : lesson.type === "video" ? (
                                    <div className="text-blue-500">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <circle cx="12" cy="12" r="10" />
                                        <polygon points="10 8 16 12 10 16 10 8" />
                                      </svg>
                                    </div>
                                  ) : (
                                    <FileText className="h-5 w-5 text-slate-400" />
                                  )}
                                  <Input
                                    value={lesson.titleLesson}
                                    className="border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                  />
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button variant="ghost" size="icon" className="h-8 w-8"
                                  onClick={(e)=>{

                                  }}
                                  >
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="icon" className="h-8 w-8"
                                  onClick={(e)=>{
                                    setShowModal(true);
                                    setTitleLesson(lesson.titleLesson);
                                    setDescriptionLesson(lesson.descriptionLesson);
                                    setDocumentLesson(lesson.documentLesson);
                                    setVideoLesson(lesson.videoLesson);
                                    setIsEditLesson(true);
                                    setIdentifiantLesson(i);
                                  }}                                  
                                  >
                                    <Pencil className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500"
                                  onClick={(e)=>{
                                    handleDeleteLesson(i);
                                  }}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            ))}
                            <Button variant="outline" className="w-full border-dashed border-slate-200">
                              <Plus className="h-4 w-4 mr-2" />
                              Add Lesson
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

         

              </Tabs>
            </div>
          </div>
        </>

  )
}