'use client'

import { createContext, useContext, useState } from 'react'

// Create a context with a default value
const UserContext = createContext(null)

// Create a provider component
export function UserProvider({ children }) {
  const [userData,setUserData] = useState({
    name: 'Toky',
    role: 'Admin'
  })

  return (
    <UserContext.Provider value={{userData,setUserData}}>
      {children}
    </UserContext.Provider>
  )
}

// Custom hook to use the user context
export function useUser() {
  const context = useContext(UserContext)
  if (context === null) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}