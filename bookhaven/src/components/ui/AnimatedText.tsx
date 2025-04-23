"use client"

import React from 'react'
import { motion } from 'framer-motion';


const AnimatedText = ({text, className,}: {text:string, className?: string}) => {
  const words = text.split("  ")

  const container = {
    hidden: {opacity: 0},
    visible: ( i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      
    }
  }

  return (
    <div>AnimatedText</div>
  )
}

export default AnimatedText