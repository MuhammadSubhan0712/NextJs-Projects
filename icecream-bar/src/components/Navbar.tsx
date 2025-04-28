"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import Image from "next/image";
import gif from "../../public/images/navbar.gif";


const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Flavors", path: "/services" },
    { name: "Contact", path: "/contact" },
    ,
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center">
             <Image
                src={gif}
                alt="Icecream"
                width={30}
                height={30}
                className="object-contain rounded"
                unoptimized 
              />
            <span className="ml-2 text-2xl font-bold text-pink-600">
              Scoop Happiness
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item && item.path}
              href={item && item.path || "default-path"}
              className="relative text-gray-700 hover:text-pink-600 transition-colors"
            >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="block py-2 px-1">
                  {item && item.name}
                </motion.span>

                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:oultine-none"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white">
            <div className="container mx-auto px-4 py-2 flex flex-col items-center">
              {navItems.map((item) => (
                <Link
                  key={item && item.path}
                  href={item && item.path || "default-path"}
                  className="py-3 px-2 text-gray-700 hover:text-pink-600 border-b border-gray-100"
                  onClick={() => setIsOpen(false)}>
                  {item && item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
