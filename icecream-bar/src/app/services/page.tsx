"use client";
import React from 'react'
import { motion } from 'framer-motion'

const allFlavors = [
  {
    name: "Velvet Vanilla",
    description: "Creamy Madagascar vanilla with a hint of bourbon",
    color: "bg-amber-300",
    image: "/images/flavors/vanilla.png"
  },
  {
    name: "Chocolate Euphoria",
    description: "Rich Belgian chocolate with cocoa nibs",
    color: "bg-amber-800",
    image: "/images/flavors/chocolate.png"
  },
  {
    name: "Berry Bliss",
    description: "Mixed berries with a swirl of raspberry coulis",
    color: "bg-pink-400",
    image: "/images/flavors/strawberry.png"
  },
  {
    name: "Mint Chocolate Chip",
    description: "Cool peppermint with dark chocolate chunks",
    color: "bg-green-300",
    image: "/images/flavors/mint.png"
  },
  {
    name: "Salted Caramel",
    description: "Buttery caramel with a touch of sea salt",
    color: "bg-amber-500",
    image: "/images/flavors/caramel.png"
  },
  {
    name: "Cookies & Cream",
    description: "Vanilla ice cream packed with chocolate cookies",
    color: "bg-gray-400",
    image: "/images/flavors/cookies.png"
  }
];
const seasonalFlavors = [
  {
    name: "Pumpkin Spice",
    description: "Seasonal favorite with cinnamon, nutmeg and pumpkin",
    color: "bg-orange-400",
    image: "/images/flavors/pumpkin.png"
  },
  {
    name: "Peppermint Bark",
    description: "Holiday special with peppermint and white chocolate",
    color: "bg-red-300",
    image: "/images/flavors/peppermint.png"
  }
];


const Services = () => {
  return (
    <>
    <main>
      {/* Hero */}
      <section className="relative h-96 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/images/flavors/hero.png')] bg-cover bg-center opacity-30">
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Flavors</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
          Discover our wide range of artisanal ice cream flavors
          </p>
        </div>
        </div>
      </section>

    </main>
    </>
  )
}

export default Services
