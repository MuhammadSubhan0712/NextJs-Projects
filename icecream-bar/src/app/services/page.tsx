"use client";
import React from "react";
import { motion } from "framer-motion";
import FlavourCard from "@/components/FlavourCard";

const allFlavors = [
  {
    name: "Velvet Vanilla",
    description: "Creamy Madagascar vanilla with a hint of bourbon",
    color: "bg-amber-300",
    image: "/images/flavors/vanilla.png",
  },
  {
    name: "Chocolate Euphoria",
    description: "Rich Belgian chocolate with cocoa nibs",
    color: "bg-amber-800",
    image: "/images/flavors/chocolate.png",
  },
  {
    name: "Berry Bliss",
    description: "Mixed berries with a swirl of raspberry coulis",
    color: "bg-pink-400",
    image: "/images/flavors/strawberry.png",
  },
  {
    name: "Mint Chocolate Chip",
    description: "Cool peppermint with dark chocolate chunks",
    color: "bg-green-300",
    image: "/images/flavors/mint.png",
  },
  {
    name: "Salted Caramel",
    description: "Buttery caramel with a touch of sea salt",
    color: "bg-amber-500",
    image: "/images/flavors/caramel.png",
  },
  {
    name: "Cookies & Cream",
    description: "Vanilla ice cream packed with chocolate cookies",
    color: "bg-gray-400",
    image: "/images/flavors/cookies.png",
  },
];
const seasonalFlavors = [
  {
    name: "Pumpkin Spice",
    description: "Seasonal favorite with cinnamon, nutmeg and pumpkin",
    color: "bg-orange-400",
    image: "/images/flavors/pumpkin.png",
  },
  {
    name: "Peppermint Bark",
    description: "Holiday special with peppermint and white chocolate",
    color: "bg-red-300",
    image: "/images/flavors/peppermint.png",
  },
];

const Services = () => {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="relative h-96 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-center">
          <div className="absolute inset-0 bg-[url('/images/flavors/hero.png')] bg-cover bg-center opacity-30">
            <div className="relative z-10 px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Flavors
              </h1>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Discover our wide range of artisanal ice cream flavors
              </p>
            </div>
          </div>
        </section>

        {/* Dashing Flavors */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Classic Flavors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {allFlavors.map((flavor, index) => (
                <FlavourCard
                  key={flavor.name}
                  name={flavor.name}
                  description={flavor.description}
                  color={flavor.color}
                  image={flavor.image}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Seasonal Flavors */}
        <section className="py-16 bg-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Seasonal Specials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {seasonalFlavors.map((flavor, index) => (
                <FlavourCard
                  key={flavor.name}
                  name={flavor.name}
                  description={flavor.description}
                  color={flavor.color}
                  image={flavor.image}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Custom Orders */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Custom Ice Cream Cakes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Celebrate special occasions with a custom ice cream cake featuring
              your favorite flavors and decorations.
            </p>
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg">
              Order Custom Cake
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
