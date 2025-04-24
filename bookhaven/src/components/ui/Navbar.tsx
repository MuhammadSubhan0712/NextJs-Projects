"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, X, Menu, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import gif from "../../app/gif.gif";
import Image from "next/image";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contacts" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-amber-200/20 bg-amber-50/95 backdrop-blur supports-[backdrop-filter]:bg-amber-50/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* For Gif of book */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-auto relative">
              <Image
                src={gif}
                alt="BookHaven Logo"
                width={50}
                height={50}
                className="object-contain rounded"
                unoptimized // Required for GIF animations
              />
            </div>
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-amber-900 hover:text-amber-700 transition-colors">
                BookHaven
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-mediumtext-amber-800 hover:text-amber-600 hover:underline underline-offset-4 decoration-2 transition-all duration-300 ease-in-out px-2 py-1 rounded-md hover:bg-amber-50 relative group">
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-amber-800 hover:bg-amber-100">
              <Search className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-amber-800 hover:bg-amber-100">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-amber-800 hover:bg-amber-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMounted && mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden overflow-hidden bg-amber-50">
          <div className="container mx-auto flex flex-col items-center justify-between px-4 sm:px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm text-amber-800 hover:text-amber-400"
                onClick={() => setMobileMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                size="sm"
                className="w-auto bg-white text-amber-800 border-amber-200 hover:bg-amber-100">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button
                size="sm"
                className="w-auto bg-amber-600 hover:bg-amber-700 text-white">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
