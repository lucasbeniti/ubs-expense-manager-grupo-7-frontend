'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

interface UserData {
  employeeId: string
  name: string
  login: string
  role: string
}

interface AuthContextType {
  user: UserData | null
  setUser: (user: UserData | null) => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<UserData | null>(null)

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedUser = localStorage.getItem('@gestao-ubs:user')
    if (savedUser) {
      setUserState(JSON.parse(savedUser))
    }
    setMounted(true)
  }, [])

  const handleSetUser = (userData: UserData | null) => {
    setUserState(userData)
    if (userData) {
      localStorage.setItem('@gestao-ubs:user', JSON.stringify(userData))
    } else {
      localStorage.removeItem('@gestao-ubs:user')
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser: handleSetUser, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuthContext must be used within an AuthProvider')
  return context
}
