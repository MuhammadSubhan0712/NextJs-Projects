"use client"
import React from 'react'
import { motion } from 'framer-motion';
import {Button} from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
          
          <Button size="lg">
           Browse Collection
           <ArrowRight className='ml-2 h-4 w-4'/>
          </Button>

          <Button variant="outline" size="lg">
           Learn More
          </Button>
          </motion.div>
        </div>

        {/* For Image */}
        </div>
    </section>
    </>
  )
}

export default Hero