"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const [mounted , setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true);
  },[]);

  if (!mounted) {
    return <div className={className}>{text}</div>
  }

  const words = text.split("  ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

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
      y: 20,

      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <motion.div
        style={{ display: "flex", overflow: "hidden" }}
        variants={container}
        initial="hidden"
        animate="visible"
        className={`flex flex-wrap ${className}`}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={child}
            style={{ marginRight: "5px" }}>
            {word}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
};

export default AnimatedText;
