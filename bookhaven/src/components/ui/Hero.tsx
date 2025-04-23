"use client"
import React from 'react'
import { motion } from 'framer-motion';
import {Button} from '@/components/ui/button';
import { ArrowBigRight } from 'lucide-react';

const Hero = () => {
  return (
    <>
    <section className="relative overflow-hidden">
        <div className="container flex flex-col lg:flex-row items-center gap-8 py-12 md:py-24">

            {/* Text */}
            <div className="lg:w-1/2 space-y-6">
            <div className="lg:w-1/2 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Discover Your Next <span className="text-primary">Favorite</span> Book
          </motion.h1>

          <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.2 }}
         className='text-lg text-muted-foreground'>
           
           Explore our curated collection of books across all genres. Find your next adventure today.
          </motion.p>

          <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.4 }}
           className="flex gap-4">
          
          </motion.div>
          

            </div>
        </div>
    </section>
    </>
  )
}

export default Hero