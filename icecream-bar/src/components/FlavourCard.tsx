"use client";

import React from "react";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

interface FlavorCardProps {
  name: string;
  description: string;
  color: string;
  image: string | StaticImageData;
  delay?: number;
}

const FlavourCard = ({
  name,
  description,
  color,
  image,
  delay = 0,
}: FlavorCardProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          <div className={`absolute bottom-0 left-0 w-full h-1 ${color}`}></div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
            <p className="text-grqay-600 mb-4">{description}</p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${color} text-white py-2 px-4 rounded-full text-sm font-medium`}>
              Order Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FlavourCard;
