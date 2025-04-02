"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Project } from "@/lib/projects"

export default function ProjectContent({ initialProject }: { initialProject: Project }) {
  const [project] = useState(initialProject)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  // Move all the JSX from the original file here, but use `project` directly instead of checking loading state
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Copy all the JSX from the original component, starting with the header */}
      {/* ... */}
    </div>
  )
} 