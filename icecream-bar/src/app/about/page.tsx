"use client"

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import IceCreamAnimation from "@/components/IceCreamAnimation";

const teamMembers = [
  {
    name: "Muhammad Subhan Khan",
    role: "Founder & Head Chef",
    bio: "With over 15 years in the culinary world, Subhan brings her passion for flavors to every recipe.",
    image: "/images/msubhan.jpg",
  },
  {
    name: "Michael Chen",
    role: "Flavor Innovator",
    bio: "Michael's creative approach to ingredients results in our most unique and popular flavors.",
    image: "/images/michael-chen.jpg",
  },
  {
    name: "Emma Rodriguez",
    role: "Customer Happiness",
    bio: "Emma ensures every customer leaves with a smile and a memorable experience.",
    image: "/images/Emma Rodriguez.jpg",
  },
];

const About = () => {
  return (
    <>
      <main>
        <section className="relative h-100 bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-center mb-[-10]">
          <div className="absolute inset-0 bg-[url('/images/about-us.jpg')] bg-cover bg-center opacity-50" />
          <div className="relative z-10 px-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Story
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white max-w-2xl mx-auto">
              From a small family recipe to bringing joy to thousands
            </motion.p>
          </div>
        </section>

        <IceCreamAnimation/>
        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center text-gray-800 mb-12">
                How It All Began
              </motion.h2>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-pink-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-pink-600 mb-2">
                    2015 - The First Scoop
                  </h3>
                  <p className="text-gray-700">
                    What started as a summer experiment in Sarah's kitchen
                    turned into a neighborhood sensation. Her vanilla bean ice
                    cream with a hint of lavender became the talk of the town.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    2018 - First Shop
                  </h3>
                  <p className="text-gray-700">
                    With demand growing, we opened our first small shop
                    downtown. The line stretched around the block on opening
                    day, and we knew we were onto something special.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-yellow-600 mb-2">
                    2023 - Scoop Happiness
                  </h3>
                  <p className="text-gray-700">
                    Today, we operate three locations and ship nationwide. But
                    we still make every batch with the same care and attention
                    as that first summer in Sarah's kitchen.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-pink-50">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-gray-800 mb-12">
              Meet Our Team
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-64 bg-gray-200 overflow-hidden">
                    
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      width={500}
                      height={500}
                    />

                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-pink-600 mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
