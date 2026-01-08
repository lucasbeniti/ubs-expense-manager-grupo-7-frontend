'use client'
import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'

export default function PageHeader({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const headerActions = document.getElementById('header-actions')
  if (!headerActions) {
    return null
  }

  return createPortal(children, headerActions)
}
