'use client'
import { useRouter } from "next/navigation"


export default function Dashboard() {
  const router = useRouter()
  const user= localStorage.getItem('user');
  if(user){

    const parseUser=JSON.parse(user)

    if(parseUser && parseUser.role == 'formateur' ){
      router.push("/professor/dashboard")
    }
    else if(parseUser && parseUser.role == 'etudiant'){
      router.push("/student/dashboard")
    }
    else{
      router.push("/auth/login")
      
    }
  }
  else{
    router.push("/auth/login")

  }

}
