"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Hero_img from "../../app/Hero.jpg";

const Hero = () => {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container flex flex-col lg:flex-row items-center gap-8 py-12 md:py-24">
          {/* Text */}
          <div className="lg:w-1/2 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Discover Your Next <span className="text-primary">Favorite</span>{" "}
              Book
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground">
              Explore our curated collection of books across all genres. Find
              your next adventure today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4">
              <Button size="lg">
                Browse Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </motion.div>
          </div>

          {/* For Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2">
            <div className="relative aspect-square w-full rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={Hero_img}
                  alt="BookHaven - Discover your next read"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/*For Animated Background */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -z-10 top-0 left-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl">
          <motion.div
            animate={{
              y: [0, 50, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
            className="absolute -z-10 bottom-0 right-0 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"></motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
