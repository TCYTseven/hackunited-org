'use client'

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface ScrollButtonProps {
  children: React.ReactNode
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
  targetId?: string
}

export function ScrollButton({ children, className, size, targetId = "who-are-we" }: ScrollButtonProps) {
  const handleScroll = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Button 
      size={size}
      className={className}
      onClick={handleScroll}
    >
      {children}
    </Button>
  )
}

export function ScrollButtonWithIcon({ children, className, size, targetId = "who-are-we" }: ScrollButtonProps) {
  const handleScroll = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Button 
      size={size}
      className={className}
      onClick={handleScroll}
    >
      {children}
      <ChevronRight className="ml-2 h-5 w-5" />
    </Button>
  )
} 