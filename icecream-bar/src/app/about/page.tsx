import React from 'react'
import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & Head Chef",
    bio: "With over 15 years in the culinary world, Sarah brings her passion for flavors to every recipe.",
    image: "/images/team/sarah.jpg"
  },
  {
    name: "Michael Chen",
    role: "Flavor Innovator",
    bio: "Michael's creative approach to ingredients results in our most unique and popular flavors.",
    image: "/images/team/michael.jpg"
  },
  {
    name: "Emma Rodriguez",
    role: "Customer Happiness",
    bio: "Emma ensures every customer leaves with a smile and a memorable experience.",
    image: "/images/team/emma.jpg"
  }
]
const About = () => {
  return (
    <>
    <main>

      <section className="relative h-96 bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/images/about.jpg')] bg-cover bg-center opacity-30">
        <div className="relative z-10 px-4">
          <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Story
          </motion.h1>
        </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default About