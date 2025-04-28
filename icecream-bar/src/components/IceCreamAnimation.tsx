"use client";
import React from "react";
import { motion } from "framer-motion";

const IceCreamAnimation = () => {
  const flavors = [
    { colors: "bg-pink-400", top: "20%", left: "10%", delay: 0 },
    { colors: "bg-purple-300", top: "30%", left: "25%", delay: 0.2 },
    { colors: "bg-yellow-200", top: "15%", left: "40%", delay: 0.4 },
    { colors: "bg-green-200", top: "25%", left: "55%", delay: 0.6 },
    { colors: "bg-blue-300", top: "20%", left: "70%", delay: 0.8 },
    { colors: "bg-red-400", top: "30%", left: "85%", delay: 1.0 },
  ];

  return (
    <>
      <div className="relative bg-gradient-to-b from-gray-700 to-blue-100 w-full h-64">
        {flavors.map((flavor, index) => (
          <motion.div
            key={index}
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: [0, -20, 0],
              opacity: 1,
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2 + Math.random() * 2,
                delay: flavor.delay,
              },
              rotate: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3 + Math.random() * 2,
                delay: flavor.delay * 0.5,
              },
            }}
            className={`absolute w-12 h-20 md:w-16 md:h-24 rounded-full ${flavor.colors} ice-cream-scoop`}
            style={{
              top: flavor.top,
              left: flavor.left,
              // clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
            }}
          />
        ))}

        {/* Cone */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute w-16 h-20 md:w-20 md:h-24 bg-amber-300 bottom-0 left-1/2 transform -translate-x-1/2 ice-cream-cone"
        />

        {/* Drips */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, 10, 0],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + i * 0.5,
              delay: i * 0.3,
            }}
            className={`absolute w-2 h-4 bg-pink-400 rounded-b-full bottom-16 left-1/2 transform -translate-x-1/2`}
            style={{
              left: `${50 + (i - 2) * 5}%`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default IceCreamAnimation;
