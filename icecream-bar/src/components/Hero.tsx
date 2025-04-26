import React from 'react'
import {motion} from "framer-motion";
const Hero = () => {
  return (
    <>
    <section className="relative h-screen bg-gradient-to-b from-pink-50 to-blue-50 ovrflow-hidden">
      {/* For Animated Background */}
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      transition={{ duration: 2 }}
      className="absolute top-0 left-0 w-full h-full bg-[url('/envato-animations/icecream-pattern.svg')] bg-repeat opacity-20"/>
        
        {/* Main Content */}
        <div className="container mx-auto h-full flex flex-col justify-center items-center relative z-10">
          <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-pink-600 mb-6">

          </motion.h1>
        </div>
    </section>
    </>
  )
}

export default Hero