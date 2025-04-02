export type Project = {
  id: number
  title: string
  slug: string
  category: string
  year: number
  client: string
  description: string
  challenge: string
  solution: string
  images: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Harmony",
    slug: "harmony",
    category: "Digital Experience",
    year: 2023,
    client: "Musicverse",
    description:
      "An immersive digital experience that visualizes music in three-dimensional space, allowing users to interact with sound in a completely new way.",
    challenge:
      "Create an intuitive interface that translates audio into visual elements while maintaining performance across devices.",
    solution:
      "We developed a custom WebGL engine that analyzes audio frequencies in real-time and generates responsive 3D visualizations.",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
  // ... other projects with the same structure
] 