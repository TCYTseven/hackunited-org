"use client"

import { useRef, useEffect, useState } from "react"
import * as THREE from "three"

export default function CyberGlobe() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    // Set up scene
    const scene = new THREE.Scene()

    // Set up camera with wider field of view to see the entire globe
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
    camera.position.z = 3.5 // Position camera further back to see the entire globe

    // Set up renderer with transparent background
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(400, 400) // Larger size
    containerRef.current.appendChild(renderer.domElement)

    // Create globe geometry - slightly larger
    const globeGeometry = new THREE.SphereGeometry(1.2, 64, 64)

    // Create material with cyber theme
    const globeMaterial = new THREE.MeshPhongMaterial({
      color: new THREE.Color("#2a0b6d"), // Darker purple base
      emissive: new THREE.Color("#1a0545"), // Very dark purple for emissive
      specular: new THREE.Color("#9370DB"), // Light purple for highlights
      shininess: 30,
      transparent: true,
      opacity: 0.9,
    })

    // Create mesh
    const globe = new THREE.Mesh(globeGeometry, globeMaterial)
    scene.add(globe)

    // Create continents layer
    const continentsGeometry = new THREE.SphereGeometry(1.21, 64, 64)

    // Create a canvas to draw the continents
    const canvas = document.createElement("canvas")
    canvas.width = 1024
    canvas.height = 512
    const context = canvas.getContext("2d")

    if (context) {
      // Fill with transparent background
      context.fillStyle = "rgba(0, 0, 0, 0)"
      context.fillRect(0, 0, canvas.width, canvas.height)

      // Load the world map image
      const worldMap = new Image()
      worldMap.crossOrigin = "Anonymous"

      // When the image loads, draw it on the canvas with purple color
      worldMap.onload = () => {
        context.drawImage(worldMap, 0, 0, canvas.width, canvas.height)

        // Get the image data
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
        const data = imageData.data

        // Change the color to light purple
        for (let i = 0; i < data.length; i += 4) {
          // If pixel is not transparent (land)
          if (data[i + 3] > 0) {
            data[i] = 180 // R
            data[i + 1] = 120 // G
            data[i + 2] = 255 // B
            data[i + 3] = 200 // A - semi-transparent for glow effect
          }
        }

        // Put the modified image data back
        context.putImageData(imageData, 0, 0)

        // Update the texture
        continentsTexture.needsUpdate = true
      }

      // Set the source of the image
      worldMap.src = "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"
    }

    // Create texture from canvas
    const continentsTexture = new THREE.CanvasTexture(canvas)

    // Create material for continents
    const continentsMaterial = new THREE.MeshPhongMaterial({
      map: continentsTexture,
      transparent: true,
      opacity: 0.9,
      emissive: new THREE.Color("#a080ff"), // Light purple glow
      emissiveIntensity: 0.5,
    })

    // Create continents mesh
    const continents = new THREE.Mesh(continentsGeometry, continentsMaterial)
    scene.add(continents)

    // Create wireframe overlay for cyber effect
    const wireframeGeometry = new THREE.SphereGeometry(1.22, 32, 32)
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#9370DB"),
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    })
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial)
    scene.add(wireframe)

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 2)
    scene.add(ambientLight)

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)

    // Add point light inside the globe for glow effect
    const pointLight = new THREE.PointLight(0x9370db, 1, 10)
    pointLight.position.set(0, 0, 0)
    scene.add(pointLight)

    // Add outer glow effect
    const glowGeometry = new THREE.SphereGeometry(1.25, 64, 64)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#9370DB"),
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide,
    })
    const glow = new THREE.Mesh(glowGeometry, glowMaterial)
    glow.scale.multiplyScalar(1.15)
    scene.add(glow)

    // Animation loop
    let animationFrameId: number
    const rotationSpeed = 0.001 // Default slow rotation

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      // Rotate globe - faster when hovering
      globe.rotation.y += isHovering ? rotationSpeed * 5 : rotationSpeed
      continents.rotation.y += isHovering ? rotationSpeed * 5 : rotationSpeed
      wireframe.rotation.y += isHovering ? rotationSpeed * 5 : rotationSpeed

      // Slightly different rotation for wireframe to create interesting effect
      wireframe.rotation.x += rotationSpeed * 0.2

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      renderer.setSize(400, 400)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [isHovering])

  return (
    <div
      ref={containerRef}
      className="w-[400px] h-[400px] flex items-center justify-center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    />
  )
}
