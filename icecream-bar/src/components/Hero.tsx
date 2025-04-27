"use client";

import React from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment }  from "@react-three/drei";
import { useInView } from "react-intersection-observer";;
import IceCreamAnimation from "./IceCreamAnimation";
import dynamic from "next/dynamic";

const IceCreamModel =  dynamic(() => import('./IcecreamModel'), {ssr: false});


const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <>
      <section
      ref={ref} 
      className="relative py-20 bg-gradient-to-b from-pink-50 to-blue-50 overflow-hidden">

        {/* Video hd Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20">
           <source src="videos/ice-cream-background.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Floating 3D Icecream models */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 5], fov :45 }}>
            <ambientLight intensity={0.5}/>
            <pointLight position={[10, 10, 10]} />
            {inView && <IceCreamModel position={[-2, 0, 0]}/>}
            

          </Canvas>
        </div>
 


        {/* For Animated Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10"
        />

        {/* Main Content */}
        <div className="container mx-auto h-full flex flex-col justify-center items-center relative z-10 px-4">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-pink-600 mb-6 text-center">
            Scoop Happiness
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 mb-4 max-w-2xl text-center">
            Artisanal ice cream crafted with love and the finest ingredients
          </motion.p>

          {/* Custom ice cream animation Component */}
          <IceCreamAnimation />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg mt-8">
              Order Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-pink-600 font-bold py-3 px-8 rounded-full shadow-lg mt-8 border border-pink-200">
              Our Flavors
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute bottom-[-8]  left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-gray-600 mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="w-1 h-2 bg-gray-400 rounded-full mt-1"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
