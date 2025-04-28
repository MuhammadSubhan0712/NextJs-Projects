"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <section ref={ref} className="relative h-screen w-full overflow-hidden">
        {/* Video Background: */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover">
            <source src="/videos/ingredients.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 bg-black/30 flex items-center justify-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.8 }}
            className="text-center px-4 max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              transition={{ delay: 0.2, duration: 0.8 }}>
              Premium Ingredients
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-white mb-8"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              transition={{ delay: 0.4, duration: 0.8 }}>
              We source only the highest quality ingredients from ethical
              suppliers around the world
            </motion.p>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-pink-600 font-bold py-4 px-10 rounded-full shadow-xl"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              transition={{ delay: 0.6, duration: 0.8 }}>
              Our Sourcing
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
