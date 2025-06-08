"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

export default function InteractiveLogo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        // Calculate distance from center
        const deltaX = e.clientX - centerX
        const deltaY = e.clientY - centerY
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
        
        // Limit movement within circular boundary (max 120px from center)
        const maxDistance = 120
        const limitedDistance = Math.min(distance, maxDistance)
        const angle = Math.atan2(deltaY, deltaX)
        
        setMousePosition({
          x: Math.cos(angle) * limitedDistance * 0.9,
          y: Math.sin(angle) * limitedDistance * 0.9
        })
      }
    }

    if (isHovering) {
      window.addEventListener('mousemove', handleMouseMove)
    } else {
      // Return to center when not hovering
      setMousePosition({ x: 0, y: 0 })
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isHovering])

  return (
    <div
      ref={containerRef}
      className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] flex items-center justify-center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1.5 h-1.5 bg-purple-400 rounded-full opacity-40 transition-all duration-1000 ${
              isHovering ? 'animate-pulse scale-150 opacity-80' : ''
            }`}
            style={{
              left: `${20 + (i * 4)}%`,
              top: `${15 + Math.sin(i * 0.5) * 25}%`,
              animationDelay: `${i * 0.1}s`,
              transform: isHovering 
                ? `translate(${Math.sin(i) * 25}px, ${Math.cos(i) * 25}px)` 
                : 'translate(0, 0)'
            }}
          />
        ))}
      </div>

      {/* Main Logo Container - Follows Mouse */}
      <div 
        className={`relative z-10 transition-all duration-200 ease-out flex flex-col items-center ${
          isHovering ? 'scale-110' : 'scale-100'
        }`}
        style={{
          transform: `scale(${isHovering ? 1.1 : 1}) translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      >
        {/* Your Actual Logo */}
        <div className="relative mb-6">
          <div 
            className={`relative w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 transition-all duration-300 ${
              isHovering ? 'drop-shadow-2xl' : 'drop-shadow-lg'
            }`}
            style={{
              filter: isHovering 
                ? 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.4)) drop-shadow(0 0 40px rgba(168, 85, 247, 0.2))' 
                : 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.3))'
            }}
          >
            <Image
              src="/images/globe-icon.png"
              alt="Hack United Logo"
              width={256}
              height={256}
              className={`w-full h-full object-contain transition-all duration-300 ${
                isHovering ? 'animate-pulse' : ''
              }`}
            />
          </div>
          
          {/* Rotating Ring Around Logo */}
          <div 
            className={`absolute inset-0 w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full transition-all duration-500 ${
              isHovering ? 'animate-spin' : ''
            }`}
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(168, 85, 247, 0.3), transparent)',
              animationDuration: '3s'
            }}
          />
        </div>


      </div>

      {/* Interactive Ripple Effect */}
      {isHovering && (
        <div className="absolute inset-0 rounded-full animate-ping bg-purple-500/20" />
      )}
    </div>
  )
} 