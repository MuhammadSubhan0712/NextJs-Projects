"use client";

import React from "react";
import { motion } from "framer-motion";
import FlavourCard from "@/components/FlavourCard";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

// Dynamically import components that use browser APIs:

const VideoSection = dynamic(() => import("@/components/VideoSection"), {
  ssr: false,
});

const featuredFlavors = [
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
];

const Home = () => {
  return (
    <>
      <main>
        <Hero />

        {/* Featured Flavors Section */}
        <section className="py-16 bg-white">
          {/* Animated background elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.05 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-[url('/images/icecream-pattern.png')] bg-repeat"
          />
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-16">
              Our Signature <span className="text-pink-600">Flavors</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {featuredFlavors.map((flavor, index) => (
                <motion.div
                  key={flavor.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}>
                  <p className="text-center text-xl text-pink-800">{flavor.name}</p>
                  <FlavourCard {...flavor} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <VideoSection />

        {/* About Section */}
        <section className="py-20 bg-gradient-to-r from-pink-50 to-blue-50 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:w-1/2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto rounded-2xl">
                    <source src="/videos/handcrafted.mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Handcrafted with <span className="text-pink-600">Love</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Scoop Happiness, we believe in creating ice cream that not
                  only tastes amazing but also tells a story. Each batch is
                  carefully crafted using the finest ingredients sourced from
                  local farmers and producers.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our unique small-batch process ensures that every scoop
                  delivers an unforgettable experience, packed with flavor and
                  made with love.
                </p>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 25px rgba(236, 72, 153, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-full shadow-xl">
                  Learn More About Us
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
