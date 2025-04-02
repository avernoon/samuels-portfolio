"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ProcessPage() {
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We begin by understanding your goals, audience, and challenges through in-depth conversations and research.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Based on our findings, we develop a comprehensive strategy that outlines the approach, timeline, and deliverables.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Our designers create visual concepts and prototypes that bring the strategy to life, focusing on user experience and aesthetics.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Our development team builds the technical foundation, ensuring performance, accessibility, and seamless functionality.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      number: "05",
      title: "Testing",
      description:
        "We rigorously test across devices and platforms to ensure everything works flawlessly before launch.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      number: "06",
      title: "Launch",
      description: "We carefully deploy the final product and provide support during the critical launch phase.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

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
              className={cn("relative group", item === "Process" && "text-white font-bold")}
            >
              <span>{item}</span>
              <span
                className={cn(
                  "absolute left-0 bottom-0 h-[1px] bg-white transition-all duration-300",
                  item === "Process" ? "w-full" : "w-0 group-hover:w-full",
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
            <h1 className="text-4xl md:text-6xl font-bold">Our Process</h1>
          </motion.div>

          {/* Process Introduction */}
          <motion.div
            className="mb-20 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xl text-gray-300">
              Our creative process is structured yet flexible, allowing us to adapt to each project's unique needs while
              maintaining a clear path from concept to completion. Here's how we bring your vision to life:
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="space-y-32">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={cn(
                  "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
                  index % 2 === 1 && "md:grid-flow-dense",
                )}
              >
                <div className={cn("relative", index % 2 === 1 && "md:col-start-2")}>
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                    <img
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* Decorative element */}
                  <div
                    className={cn(
                      "absolute w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-70 mix-blend-screen",
                      index % 2 === 0 ? "-bottom-6 -right-6" : "-bottom-6 -left-6",
                    )}
                  />
                </div>

                <div className={cn("relative z-10", index % 2 === 1 && "md:col-start-1")}>
                  <div className="text-7xl font-bold text-gray-800">{step.number}</div>
                  <h2 className="text-3xl font-bold mb-6 -mt-6">{step.title}</h2>
                  <p className="text-gray-300 text-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="mt-32 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to create something extraordinary. Reach out to discuss your ideas and how we can bring
              them to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 font-medium text-white bg-gradient-to-r from-purple-500 to-pink-600 rounded-full hover:from-purple-600 hover:to-pink-700 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
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

