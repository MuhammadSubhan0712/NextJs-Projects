"use client";
import React from "react";
import FlavourCard from "@/components/FlavourCard";

const allFlavors = [
  {
    name: "Velvet Vanilla",
    description: "Creamy Madagascar vanilla with a hint of bourbon",
    color: "bg-amber-300",
    image: "/images/velvet-vanilla.jpg",
  },
  {
    name: "Chocolate Euphoria",
    description: "Rich Belgian chocolate with cocoa nibs",
    color: "bg-amber-800",
    image: "/images/chocolate-euphoria.jpg",
  },
  {
    name: "Berry Bliss",
    description: "Mixed berries with a swirl of raspberry coulis",
    color: "bg-pink-400",
    image: "/images/berry-bliss.jpg",
  },
  {
    name: "Mint Chocolate Chip",
    description: "Cool peppermint with dark chocolate chunks",
    color: "bg-green-300",
    image: "/images/mint-chocolate.jpg",
  },
  {
    name: "Salted Caramel",
    description: "Buttery caramel with a touch of sea salt",
    color: "bg-amber-500",
    image: "/images/salted-caramel.jpg",
  },
  {
    name: "Cookies & Cream",
    description: "Vanilla ice cream packed with chocolate cookies",
    color: "bg-yellow-800",
    image: "/images/cookies&cream.jpg",
  },
];
const seasonalFlavors = [
  {
    name: "Pumpkin Spice",
    description: "Seasonal favorite with cinnamon, nutmeg and pumpkin",
    color: "bg-orange-400",
    image: "/images/pumpkin-spice.jpg",
  },
  {
    name: "Peppermint Bark",
    description: "Holiday special with peppermint and white chocolate",
    color: "bg-red-400",
    image: "/images/peppermint-bark.jpg",
  },
  {
    name: "Blueberry Special",
    description: "Holiday special with blueberry flavor",
    color: "bg-purple-600",
    image: "/images/blueberry.jpg",
  },
];

const Services = () => {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="relative h-96 bg-gradient-to-r from-pink-100 to-blue-100 flex items-center justify-center text-center">
          <div className="absolute inset-0 bg-[url('/images/flavors-hero3.jpg')] bg-cover bg-center opacity-50">
            <div className="relative mt-25 z-10 px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 opacity-100">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-auto h-full">
              {allFlavors.map((flavor, index) => (
               <div
               key={flavor.name}>
               <p className="text-center text-xl text-pink-800">{flavor.name}</p>
               <FlavourCard {...flavor} />
             </div>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {seasonalFlavors.map((flavor, index) => (
                 <div
                 key={flavor.name}>
                 <p className="text-center text-xl text-pink-800">{flavor.name}</p>
                 <FlavourCard {...flavor} />
               </div>
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
