"use client"

import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: false, amount:0.5});
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
    else{
      controls.start("hidden");
    }
  },[isInView, controls]);

  return (
    <>
    <section
    ref={ref}
    className='relative h-screen w-full overflow-hidden'>

      {/* Video Background: */}
      <div className="absolute inset-0 z-0">
        <video 
        autoPlay
        loop
        muted
        playsInline
        className='w-full h-full object-cover'>
          <source src='/videos/icecream-parallax.mp4' type='video/mp4'/>
        </video>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 bg-black/30 flex items-center justify-center">
      <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          transition={{ duration: 0.8 }}
          className="text-center px-4 max-w-4xl mx-auto"
        >
          
       </motion.div>
      </div>

    </section>
    </>
  )
}

export default VideoSection