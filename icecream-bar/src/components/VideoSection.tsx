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

      

    </section>
    </>
  )
}

export default VideoSection