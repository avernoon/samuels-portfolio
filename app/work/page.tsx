"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Filter } from "lucide-react"
import { cn } from "@/lib/utils"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Harmony",
    category: "Digital Experience",
    image: "/placeholder.svg?height=600&width=800",
    year: 2025,
  },
  { id: 2, title: "Pulse", category: "Brand Identity", image: "/placeholder.svg?height=600&width=800", year: 2022 },
  { id: 3, title: "Nebula", category: "Web Design", image: "/placeholder.svg?height=600&width=800", year: 2023 },
  {
    id: 4,
    title: "Prism",
    category: "Interactive Installation",
    image: "/placeholder.svg?height=600&width=800",
    year: 2021,
  },
  { id: 5, title: "Echo", category: "Digital Experience", image: "/placeholder.svg?height=600&width=800", year: 2022 },
  { id: 6, title: "Flux", category: "Web Design", image: "/placeholder.svg?height=600&width=800", year: 2023 },
  { id: 7, title: "Vertex", category: "Brand Identity", image: "/placeholder.svg?height=600&width=800", year: 2021 },
  {
    id: 8,
    title: "Horizon",
    category: "Interactive Installation",
    image: "/placeholder.svg?height=600&width=800",
    year: 2022,
  },
]

const categories = ["All", "Digital Experience", "Brand Identity", "Web Design", "Interactive Installation"]

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-40 px-6 py-4 flex justify-between items-center bg-black/80 backdrop-blur-sm">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          SAMUEL FORD DENNIS III
        </Link>

        <nav className="hidden md:flex space-x-8">
          {["Work", "About", "Process", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className={cn("relative group", item === "Work" && "text-white font-bold")}
            >
              <span>{item}</span>
              <span
                className={cn(
                  "absolute left-0 bottom-0 h-[1px] bg-white transition-all duration-300",
                  item === "Work" ? "w-full" : "w-0 group-hover:w-full",
                )}
              ></span>
            </Link>
          ))}
        </nav>
      </header>

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link href="/" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white mb-4">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold">Our Work</h1>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium">Filter Projects</h2>
              <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="md:hidden flex items-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>Filter</span>
              </button>
            </div>

            <div
              className={cn(
                "md:flex space-y-4 md:space-y-0 space-x-0 md:space-x-4 overflow-hidden transition-all duration-300",
                isFilterOpen ? "max-h-60" : "max-h-0 md:max-h-none",
              )}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full border transition-all duration-300",
                    selectedCategory === category
                      ? "bg-white text-black border-white"
                      : "bg-transparent text-white border-gray-700 hover:border-white",
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.05 }}
                className="group"
              >
                <Link href={`/work/${project.title.toLowerCase()}`}>
                  <div className="relative overflow-hidden mb-4">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="object-cover w-full h-full"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        />
                      </div>
                    </motion.div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-gray-400">{project.category}</p>
                    </div>
                    <span className="text-gray-500">{project.year}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">SAMUEL FORD DENNIS III</h3>
              <p className="text-gray-400 max-w-xs">
                Creating digital experiences that blend art and technology since 2015.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">2hitmeup@gmail.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Follow</h3>
              <div className="flex space-x-4">
                {["Instagram", "Twitter", "LinkedIn", "Behance"].map((social) => (
                  <Link key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                    {social}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} SAMUEL FORD DENNIS III All rights reserved.</p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

