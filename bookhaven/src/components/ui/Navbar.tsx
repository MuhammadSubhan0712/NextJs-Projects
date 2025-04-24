"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {Button} from '@/components/ui/button';
import { Search, X, Menu, ShoppingCart } from "lucide-react";


const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

       // Mobile Menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(()=>{
    setIsClient(true);
  },[]);

  if (!isClient) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
 <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">BookHaven</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-primary tranistion-colors">
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>

            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
          <div
            className="md:hidden overflow-hidden">
            <div className="container py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm"
                  onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}

              <div className="flex gap-4 pt-4">
                <Button variant="outline" size="sm" className="w-full">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>

                <Button size="sm" className="w-full">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart
                </Button>
              </div>
            </div>
          </div>
          )}
      </header>
    )
  }
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">BookHaven</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-primary tranistion-colors">
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>

            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden">
            <div className="container py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm"
                  onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}

              <div className="flex gap-4 pt-4">
                <Button variant="outline" size="sm" className="w-full">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>

                <Button size="sm" className="w-full">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
};

export default Navbar;
