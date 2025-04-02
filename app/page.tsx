"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Custom cursor */}
      <motion.div
        className="fixed w-6 h-6 rounded-full bg-white mix-blend-difference pointer-events-none z-50"
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      />

      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-40 px-6 py-4 flex justify-between items-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <Link href="/" className="text-xl font-bold tracking-tighter">
            SAMUEL FORD DENNIS III
          </Link>
        </motion.div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <motion.nav
          className="hidden md:flex space-x-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, staggerChildren: 0.1 }}
        >
          {["Work", "About", "Process", "Contact"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <Link href={`/${item.toLowerCase()}`} className="relative group">
                <span>{item}</span>
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-30 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <nav className="flex flex-col space-y-8 text-center">
              {["Work", "About", "Process", "Contact"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-3xl font-bold"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center relative">
        <div className="container mx-auto px-6">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated gradient background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: isLoaded ? 0.6 : 0,
                background: [
                  "radial-gradient(circle at 20% 30%, rgba(78, 13, 117, 0.4) 0%, rgba(0, 0, 0, 0) 70%)",
                  "radial-gradient(circle at 50% 50%, rgba(142, 45, 226, 0.4) 0%, rgba(0, 0, 0, 0) 70%)",
                  "radial-gradient(circle at 80% 70%, rgba(156, 39, 176, 0.4) 0%, rgba(0, 0, 0, 0) 70%)",
                  "radial-gradient(circle at 20% 30%, rgba(78, 13, 117, 0.4) 0%, rgba(0, 0, 0, 0) 70%)",
                ],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="absolute inset-0 z-0"
            />

            {/* Floating particles */}
            {Array.from({ length: 20 }).map((_, i) => {
              const size = Math.floor(Math.random() * 60) + 20
              return (
                <motion.div
                  key={i}
                  initial={{
                    x: Math.random() * windowSize.width,
                    y: Math.random() * windowSize.height,
                    opacity: Math.random() * 0.3 + 0.1,
                  }}
                  animate={{
                    x: [
                      Math.random() * windowSize.width,
                      Math.random() * windowSize.width,
                      Math.random() * windowSize.width,
                    ],
                    y: [
                      Math.random() * windowSize.height,
                      Math.random() * windowSize.height,
                      Math.random() * windowSize.height,
                    ],
                    opacity: [Math.random() * 0.3 + 0.1, Math.random() * 0.5 + 0.3, Math.random() * 0.3 + 0.1],
                  }}
                  transition={{
                    duration: 20 + Math.random() * 30,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  style={{
                    width: size,
                    height: size,
                  }}
                  className={`absolute rounded-full blur-xl opacity-30 mix-blend-screen ${
                    i % 3 === 0
                      ? "bg-gradient-to-r from-purple-500 to-pink-500"
                      : i % 3 === 1
                        ? "bg-gradient-to-r from-blue-500 to-purple-500"
                        : "bg-gradient-to-r from-pink-500 to-orange-500"
                  }`}
                />
              )
            })}

            {/* Noise texture overlay */}
            <motion.div
              className="absolute inset-0 z-10 opacity-20 pointer-events-none"
              initial={{ backgroundPosition: "0% 0%" }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror",
                duration: 30,
                ease: "linear",
              }}
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                backgroundSize: "200px 200px",
              }}
            />
          </div>

          <div className="relative z-10">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              I am Sam
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Sam I am
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl max-w-xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Crafting digital experiences that blend art and technology to create memorable interactions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Link href="/work" className="group flex items-center space-x-2 text-lg font-medium">
                <span>View Work</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
          >
            <motion.div className="w-1 h-2 bg-white rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Work
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              { title: "Harmony", category: "Digital Experience", image: "/placeholder.svg?height=600&width=800" },
              { title: "Pulse", category: "Brand Identity", image: "/placeholder.svg?height=600&width=800" },
              { title: "Nebula", category: "Web Design", image: "/placeholder.svg?height=600&width=800" },
              { title: "Prism", category: "Interactive Installation", image: "/placeholder.svg?height=600&width=800" },
            ].map((project, i) => (
              <motion.div
                key={project.title}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
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
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-gray-400">{project.category}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/work"
              className="inline-flex items-center space-x-2 text-lg font-medium border-b border-white pb-1"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">About...</h2>
              <p className="text-gray-300 mb-6">
                Specializing in digital experiences that blur the line between art and
                technology and create immersive and memorable projects.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-lg font-medium border-b border-white pb-1"
              >
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <img src="/placeholder.svg?height=600&width=600" alt="Studio" className="object-cover w-full h-full" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-70 mix-blend-screen" />
            </motion.div>
          </div>
        </div>
      </section>

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
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} SAMUEL FORD DENNIS III. All rights reserved.</p>

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

