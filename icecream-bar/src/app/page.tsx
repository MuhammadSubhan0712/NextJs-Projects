import { motion } from "framer-motion";
import FlavourCard from "@/components/FlavourCard";
import Hero from "@/components/Hero";
import Image from "next/image";
import React from "react";

const featuredFlavors = [
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
];

const Home = () => {
  return (
    <>
      <main>
        <Hero />

        {/* Featured Flavors Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Our Signature Flavors
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredFlavors.map((flavor, index) => (
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

        {/* About Section */}
        <section className="py-16 bg-pink-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="md:w-1/2">
                <Image
                  src="/images/about.jpg"
                  alt="Our ice cream"
                  className="rounded-xl shadow-lg w-full"
                />
              </motion.div>

              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Handcrafted with Love
                </h2>
                <p className="text-gray-600 mb-4">
                  At Scoop Happiness, we believe in creating ice cream that not
                  only tastes amazing but also tells a story. Each batch is
                  carefully crafted using the finest ingredients sourced from
                  local farmers and producers.
                </p>
                <p className="text-gray-600 mb-6">
                  Our unique small-batch process ensures that every scoop
                  delivers an unforgettable experience, packed with flavor and
                  made with love.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg">
                  Learn More About Us
                </motion.button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
