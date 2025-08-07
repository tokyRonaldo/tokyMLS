"use client"

import Link from "next/link"
import {
  CalendarIcon,
  Plus,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Video,
  Clock,
  UsersIcon,
  LucideSearch,
  Filter,
  ArrowUpDown,
} from "lucide-react"
import { format, subDays, startOfWeek, isSameDay } from "date-fns"
import { fr } from "date-fns/locale"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useEffect, useState } from "react"
import '../../loading.css'


export default function InstructorSchedule() {
  // Current date for the calendar
  const today = new Date()

  const [currentDate, setCurrentDate] = useState(new Date());
  const [titreSchedule, setTitreSchedule] = useState<string | null>(null);
  const [coursSchedule, setCoursSchedule] = useState<string | null>(null);
  const [dateSchedule, setDateSchedule] = useState<string | null>(null);
  const [heureDebutSchedule, setHeureDebutSchedule] = useState<string | null>(null);
  const [heureFinSchedule, setHeureFinSchedule] = useState<string | null>(null);
  const [lienSchedule, setLienSchedule] = useState<string | null>(null);
  const [descriptionSchedule, setDescriptionSchedule] = useState<string | null>(null);
  const [listSchedule, setListSchedule] = useState<any[] | null>(null);
  const [listCours, setListCours] = useState<any[] | null>(null);
  const [openNewVisio, setOpenNewVisio] = useState(false);
  const [openVisioRapide, setOpenVisioRapide] = useState(false);
  const [openDropMenuId, setOpenDropMenuId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);


  type Formateur = {
      id: string
  }

  const [token, setToken] = useState<string | null>(null);
  const [formateur, setFormateur] = useState<Formateur | null>(null);

  const monthNames = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  const dayNames = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

  const getDaysInMonth = (date : any) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - (firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1));
    
    const days = [];
    const currentDate = new Date(startDate);
    
    for (let i = 0; i < 42; i++) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return days;
  };

  const isCurrentMonth = (date : any) => {
    return date.getMonth() === currentDate.getMonth();
  };

  const isToday = (date : any) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const navigateMonth = (direction : any) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const days = getDaysInMonth(currentDate);



  const handleAddVisio = async (e : React.MouseEvent<HTMLButtonElement>,date?: Date | null) =>{
    e.preventDefault()
    setLoading(true);
    //c'est un objet
    const dataVisio={
      'formateur_id' : formateur?.id, 
      'titreChedule' : titreSchedule, 
      'coursSchedule' : coursSchedule,      
      'dateSchedule' : date ? format(new Date(date),'Y-MM-dd') : dateSchedule ,   
      'heureDebutSchedule' : heureDebutSchedule,      
      'heureFinSchedule' : heureFinSchedule, 
      'lienSchedule' : lienSchedule,
      'descriptionSchedule' : descriptionSchedule      
    }
    try {
      const response = await fetch(`/api/professor/schedule?id=2`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataVisio) //transforme en json text '{"nom": "Bob", "email": "bob@example.com"}'
      });
      
      if (!response.ok) {
        console.error('Erreur lors de la récupération du cours');
        return;
      }
  
      // Typage de la réponse attendue (exemple)
      const data: any = await response.json();
      setOpenNewVisio(false)
      setLoading(false)

    } catch (error: any) {
      console.error('Erreur fetch :', error.message);
      setLoading(false)
    }
  }

  const handleListeSchedule= async()=>{
    const response= await fetch(`/api/professor/schedule?formateur_id=${formateur?.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if(!response.ok){
        console.error('error')
        return;
      }
      let result = await response.json();
      setListSchedule(result);
  }

  const handleListeCours= async()=>{

      const response= await fetch(`/api/cours?formateur_id=${formateur?.id}`,{
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
      let result = await response.json();
      setListCours(result);
  }

  const handleDeleteVisio = async (e : React.MouseEvent<HTMLButtonElement>,id:any) =>{
    e.preventDefault()
    setLoading(true)

    //c'est un objet
    try {
      const response = await fetch(`/api/professor/schedule?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }),
      });
  
      if (!response.ok) {
        console.error('Erreur lors de la récupération du cours');
        return;
      }
  
      // Typage de la réponse attendue (exemple)
      const data: any = await response.json();
      setOpenDropMenuId(null)
      setLoading(false)
    } catch (error: any) {
      console.error('Erreur fetch :', error.message);
      setLoading(false)
    }
  }


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


  useEffect(()=>{
    if (formateur && token) {

      handleListeSchedule();
      handleListeCours();
    }
  },[formateur, token])

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
                  <h1 className="text-3xl font-bold tracking-tight">Calendrier des visioconférences</h1>
                  <p className="text-slate-500">Gérez vos sessions de visioconférence pour vos cours</p>
                  <p className="text-slate-500">
                    Cliquez sur "Créer une visioconférence" ou sur "+ Ajouter session" dans le calendrier pour
                    programmer une nouvelle session
                  </p>
                </div>
                <Dialog open={openNewVisio} onOpenChange={setOpenNewVisio}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 shadow-lg" onClick={() => setOpenNewVisio(true)}>
                      <Plus className="mr-2 h-5 w-5" />
                      Créer une visioconférence
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[525px]">
                    <DialogHeader>
                      <DialogTitle>Programmer une visioconférence</DialogTitle>
                      <DialogDescription>
                        Remplissez les détails pour créer une nouvelle session de visioconférence pour vos étudiants.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="title">Titre</Label>
                        <Input id="title" placeholder="Titre de la visioconférence" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setTitreSchedule(e.target.value)} />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="course">Cours associé</Label>
                        <Select onValueChange={(value) => setCoursSchedule(value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionner un cours" />
                          </SelectTrigger>
                          <SelectContent>

                            <SelectItem  value="test">test</SelectItem>
                            {listCours?.map((cours,i)=>(

                            <SelectItem key={cours.id} value={cours.id}>{cours.nom}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="date">Date</Label>
                          <Input id="date" type="date" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setDateSchedule(e.target.value)}/>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="start-time">Heure de début</Label>
                          <Input id="start-time" type="time"  onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setHeureDebutSchedule(e.target.value)}/>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="end-time">Heure de fin</Label>
                          <Input id="end-time" type="time" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setHeureFinSchedule(e.target.value)} />
                        </div>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="description">Description (optionnel)</Label>
                        <Textarea
                          id="description"
                          placeholder="Informations supplémentaires pour les étudiants"
                          className="min-h-[80px]" onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=>setDescriptionSchedule(e.target.value)}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" className="border-slate-200">
                        Annuler
                      </Button>
                      <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={(e:React.MouseEvent<HTMLButtonElement>)=>{handleAddVisio(e); }}>Programmer</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <Tabs defaultValue="calendar" className="space-y-6">
                <TabsList className="bg-white p-1 rounded-lg border border-slate-200">
                  <TabsTrigger
                    value="calendar"
                    className="rounded-md data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600"
                  >
                    Vue Calendrier
                  </TabsTrigger>
                  <TabsTrigger
                    value="list"
                    className="rounded-md data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600"
                  >
                    Vue Liste
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="calendar">
                  <Card className="border-none shadow-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Button variant="outline" size="icon" className="h-10 w-10 border-slate-200" onClick={() => navigateMonth(-1)}>
                            <ChevronLeft className="h-5 w-5" />
                          </Button>
                          <h2 className="text-xl font-semibold">
                          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                          </h2>
                          <Button variant="outline" size="icon" className="h-10 w-10 border-slate-200" onClick={() => navigateMonth(1)}>
                            <ChevronRight className="h-5 w-5" />
                          </Button>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="border-slate-200">
                            Aujourd'hui
                          </Button>
                        </div> 
                      </div>
                    </CardHeader>
                    <CardContent>
                      {/* Grand calendrier mensuel */}
                      <div className="grid grid-cols-7 gap-2 mb-4">
                        {dayNames.map((day) => (
                          <div key={day} className="text-center text-sm font-medium text-slate-500 py-2">
                            {day}
                          </div>
                        ))}
                      </div>

                      {/* Grille du calendrier */}
                      <div className="grid grid-cols-7 gap-2">
                        {days.map((date, i) => {
                          const isCurrentMonthDay = isCurrentMonth(date);
                          const isTodayDate = isToday(date);

                          const dayConferences = listSchedule?.filter((conf) => isSameDay(new Date(conf.dateDebut), date))

                          return (
                            <div
                              key={i}
                              className={`min-h-[120px] p-2 border rounded-lg transition-colors ${
                                isCurrentMonthDay
                                  ? "bg-white border-slate-200 hover:bg-slate-50"
                                  : "bg-slate-50 border-slate-100 text-slate-400"
                              } ${isTodayDate ? "ring-2 ring-emerald-500 bg-emerald-50" : ""}`}
                            >
                              <div className={`text-sm font-medium mb-2 ${isTodayDate ? "text-emerald-700" : ""}`}>
                                {format(date, "d")}
                              </div>

                              {/* Visioconférences du jour */}
                              <div className="space-y-1">
                                {dayConferences?.map((conference) => (
                                  <div
                                    key={conference.id}
                                    onClick={() => window.open(conference.lienVisio, "_blank")}
                                    className="bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 rounded-md p-2 text-xs cursor-pointer transition-colors group"
                                  >
                                    <div className="flex items-center gap-1 mb-1">
                                      <Video className="h-3 w-3 text-emerald-600" />
                                      <span className="font-medium text-emerald-800 truncate">{conference.titre}</span>
                                    </div>
                                    <div className="text-emerald-600 flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      <span>{format(new Date(conference.dateDebut), "HH:mm")}</span>
                                    </div>
                                    <div className="text-emerald-700 text-xs mt-1 group-hover:underline">
                                      Cliquer pour rejoindre
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* Bouton d'ajout rapide */}
                              {isCurrentMonthDay && (
                                
                                <Dialog open={openVisioRapide} onOpenChange={setOpenVisioRapide}>
                                <DialogTrigger asChild>
                                  <Button variant="outline" size="sm"  className="w-full mt-2 h-8 text-xs border-emerald-200 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700">
                                    <Plus className="mr-1 h-3 w-3" />
                                    Ajouter session
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                  <DialogHeader>
                                    <DialogTitle>
                                      Visioconférence - {format(date, "d MMMM yyyy", { locale: fr })}
                                    </DialogTitle>
                                    <DialogDescription>
                                      Remplissez les détails pour créer une nouvelle session de visioconférence pour vos étudiants.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="grid gap-4 py-4">
                                    <div className="grid gap-2">
                                      <Label htmlFor="day-title">Titre</Label>
                                      <Input id="day-title" placeholder="Titre de la session" 
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setTitreSchedule(e.target.value)}
                                      />
                                    </div>
                                    <div className="grid gap-2">
                                      <Label htmlFor="course">Cours associé</Label>
                                      <Select onValueChange={(value) => setCoursSchedule(value)}>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Sélectionner un cours" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {listCours?.map((cours,i)=>(

                                            <SelectItem key={cours.id} value={cours.id}>{cours.nom}</SelectItem>
                                            ))}                                        
                                        </SelectContent>
                                      </Select>
                                    </div>

                                    <div className="grid gap-2">
                                      <Label htmlFor="day-time">Heure</Label>
                                      <Input id="day-time" type="time" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setHeureDebutSchedule(e.target.value)} />
                                    </div>

                                  </div>
                                  <DialogFooter>
                                    <Button variant="outline">Annuler</Button>
                                    <Button className="bg-emerald-600 hover:bg-emerald-700"
                                      onClick={(e:React.MouseEvent<HTMLButtonElement>)=>handleAddVisio(e,date)  }>
                                      Ajouter
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="list">
                  <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between bg-white p-4 rounded-lg shadow-sm mb-6">
                    <div className="relative w-full md:w-96">
                      <LucideSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                      <Input
                        type="search"
                        placeholder="Rechercher une visioconférence..."
                        className="w-full pl-8 border-slate-200"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="h-9 border-slate-200">
                        <Filter className="mr-2 h-4 w-4" />
                        Filtrer
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm" className="h-9 border-slate-200">
                            <ArrowUpDown className="mr-2 h-4 w-4" />
                            Trier
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Date (plus récente)</DropdownMenuItem>
                          <DropdownMenuItem>Date (plus ancienne)</DropdownMenuItem>
                          <DropdownMenuItem>Titre (A-Z)</DropdownMenuItem>
                          <DropdownMenuItem>Cours (A-Z)</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  <Card className="border-none shadow-sm">
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Titre</TableHead>
                            <TableHead>Cours</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Horaire</TableHead>
                            <TableHead>Statut</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {listSchedule?.map((conference) => (
                            <TableRow key={conference.id}>
                              <TableCell className="font-medium">
                                <a
                                //href={`/instructor/schedule/${conference.id}`}
                                 className="hover:underline">
                                  {conference.titre}
                                </a>
                              </TableCell>
                              <TableCell>{conference.cours.nom}</TableCell>
                              <TableCell>{format(conference.dateDebut, "dd/MM/yyyy")}</TableCell>
                              <TableCell>
                                {format(new Date(conference.dateDebut), "HH:mm")} - {format(new Date(conference.dateFin), "HH:mm")}
                              </TableCell>
                              <TableCell>
                                <Badge
                                  variant="outline"
                                  className={
                                    conference.status === "upcoming"
                                      ? "bg-blue-50 text-blue-700 border-blue-200"
                                      : conference.status === "active"
                                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                        : conference.status === "completed"
                                          ? "bg-slate-50 text-slate-700 border-slate-200"
                                          : "bg-red-50 text-red-700 border-red-200"
                                  }
                                >
                                  {conference.status === "upcoming"
                                    ? "À venir"
                                    : conference.status === "active"
                                      ? "En cours"
                                      : conference.status === "completed"
                                        ? "Terminée"
                                        : "Annulée"}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu 
                                 open={openDropMenuId === conference.id}
                                 onOpenChange={(open) => setOpenDropMenuId(open ? conference.id : null)}
                                >
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                      <Link href='#' className="flex w-full">
                                        Voir les détails
                                      </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem  >Modifier</DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <a  onClick={() => window.open(conference.lienVisio, "_blank")} className="flex w-full">
                                        Démarrer
                                        </a>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-red-600" onClick={(e: React.MouseEvent<any>) => {handleDeleteVisio(e,conference.id)}}>Supprimer</DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Prochaines visioconférences</h2>
                <div className="space-y-4">
                  {listSchedule?.map((conference) => (
                    <Card key={conference.id} className="border-none shadow-sm">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between">
                          <div>
                            <CardTitle className="flex items-center gap-2">
                              <Video className="h-5 w-5 text-emerald-600" />
                              {conference.cours.nom}
                            </CardTitle>
                            <CardDescription>{conference.cours.description}</CardDescription>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="border-slate-200">
                              <Link href={`/instructor/schedule/${conference.id}`}>Détails</Link>
                            </Button>
                            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                              Démarrer
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4 text-slate-400" />
                            <span>{format(conference.dateDebut, "EEEE d MMMM yyyy", { locale: fr })}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-slate-400" />
                            <span>
                              {format(new Date(conference.dateDebut), "HH:mm")} - {format(new Date(conference.dateFin), "HH:mm")}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <UsersIcon className="h-4 w-4 text-slate-400" />
                            <span> participants</span>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-2">
                          <div className="text-sm font-medium">google meet:</div>
                          <Link
                            href={conference.lienVisio}
                            target="_blank"
                            className="text-sm text-blue-600 hover:underline truncate"
                          >
                            {conference.lienVision}
                          </Link>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t pt-4 flex justify-between">
                        <div className="text-sm text-slate-500">
                          Créé le {format(subDays(today, Math.floor(Math.random() * 7) + 1), "d MMM", { locale: fr })}
                        </div>
                        <Button variant="outline" size="sm" className="border-slate-200">
                          Envoyer un rappel
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
