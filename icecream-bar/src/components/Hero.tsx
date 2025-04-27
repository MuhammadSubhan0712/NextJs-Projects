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
            {inView &&  <IceCreamModel position={[2, 1, -1]}
            scale={0.8} flavor="chocolate"/>}
            <Environment preset="city"/>
          </Canvas>
        </div>
 


        {/* For Animated Background */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
  {/* Main Content */}
        
           <motion.h1
            whileHover={{ scale: 1.02 }}
            className="text-5xl md:text-7xl font-bold text-pink-600 mb-6">
            Scoop Happiness
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 mb-8">
            Artisanal ice cream crafted with love and the finest ingredients
          </motion.p>
          {/* Custom ice cream animation Component */}
          {/* <IceCreamAnimation /> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(236, 72, 153, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-full shadow-xl">
              Order Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-50 text-pink-600 font-bold py-4 px-10 rounded-full shadow-xl border border-pink-200">
              Our Flavors
            </motion.button>
          </motion.div>
          </motion.div>
        
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
          className="absolute bottom-8  left-1/2 transform -translate-x-1/2 flex flex-col items-center">
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
        </div>
      </section>
    </>
  );
};

export default Hero;
