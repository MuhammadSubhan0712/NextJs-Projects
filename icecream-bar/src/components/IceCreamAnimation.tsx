import React from "react";
import { delay, motion } from "framer-motion";

const IceCreamAnimation = () => {
  const flavors = [
    { colors: "bg-pink-400", top: "20%", left: "10%" },
    { colors: "bg-pink-300", top: "30%", left: "25%" },
    { colors: "bg-pink-200", top: "15%", left: "40%" },
    { colors: "bg-pink-200", top: "25%", left: "55%" },
    { colors: "bg-pink-300", top: "20%", left: "70%" },
    { colors: "bg-pink-400", top: "30%", left: "85%" },
  ];

  return (
    <>
      <div className="relative w-full h-64">
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
                delay: index * 0.3,
              },
              rotate: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3 + Math.random() * 2,
                delay: index * 0.2,
              },
            }}
            className={`absolute w-16 h-24 rounded-full ${flavor.color}`}
            style={{
              top: flavor.top,
              left: flavor.left,
              clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
            }}
          />
        ))}

         {/* Cone */}
         <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1 }}
         className="absolute w-20 h-24 bg-amber-300 bottom-0 left-1/2 transform -translate-x-1/2"
         style={{
          clipPath: "ploygon(0 0, 100% 0, 80% 100%, 20% 100%)"
         }}/>
      </div>
    </>
  );
};

export default IceCreamAnimation;
