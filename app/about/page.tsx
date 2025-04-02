"use client"

import { cn } from "@/lib/utils"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
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
              className={cn("relative group", item === "About" && "text-white font-bold")}
            >
              <span>{item}</span>
              <span
                className={cn(
                  "absolute left-0 bottom-0 h-[1px] bg-white transition-all duration-300",
                  item === "About" ? "w-full" : "w-0 group-hover:w-full",
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
            <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
          </motion.div>

          {/* Studio Introduction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  What started as a passion project has evolved into a full-service creative endeavor, working with
                  clients across the globe to bring their visions to life through thoughtful design and innovative
                  technology.
                </p>
                <p>
                  The approach is collaborative and iterative, focusing on the unique needs of each project while
                  maintaining the commitment to excellence in both form and function.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Our Studio"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-70 mix-blend-screen" />
            </motion.div>
          </div>

          {/* Our Values */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description:
                    "We push boundaries and explore new possibilities, constantly evolving our craft to create forward-thinking solutions.",
                },
                {
                  title: "Collaboration",
                  description:
                    "We believe the best work happens when diverse perspectives come together, both within our team and with our clients.",
                },
                {
                  title: "Excellence",
                  description:
                    "We're committed to quality in everything we do, from the smallest details to the overall vision of each project.",
                },
              ].map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="bg-gray-900 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Chen",
                  role: "Creative Director",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "Jordan Taylor",
                  role: "Lead Developer",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "Morgan Lee",
                  role: "Design Lead",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "Casey Kim",
                  role: "Project Manager",
                  image: "/placeholder.svg?height=400&width=400",
                },
              ].map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="aspect-square relative overflow-hidden rounded-full mb-4 mx-auto max-w-[200px]">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Clients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Clients We've Worked With</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((client) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + client * 0.05 }}
                  className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={`/placeholder.svg?height=100&width=200&text=Client ${client}`}
                    alt={`Client ${client}`}
                    className="max-h-12"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">STUDIO</h3>
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

