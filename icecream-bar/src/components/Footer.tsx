"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";


const footerLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Flavors", href: "/services" },
  { name: "Locations", href: "/contact" },
  { name: "Careers", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
];

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, href: "#" },
  { icon: <Instagram className="w-5 h-5" />, href: "#" },
  { icon: <Twitter className="w-5 h-5" />, href: "#" },
];

const Footer = () => {
  return (
    <>
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-2">🍦</span>
                Scoop Happiness
              </h3>
              <p className="text-pink-100">
                Crafting happiness one scoop at a time since 2023.
              </p>
            </div>

            <div className="col-span-1">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.slice(0, 3).map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-pink-100 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="text-lg font-semibold mb-4">Information</h4>
              <ul className="space-y-2">
                {footerLinks.slice(3).map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-pink-100 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -3 }}
                    className="bg-pink-700 hover:bg-pink-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-pink-500 mt-8 pt-8 text-center text-pink-200">
            <p>
              {" "}
              &copy; {new Date().getFullYear()} Scoop Happiness. All rights
              reserved <abbr title="Muhammad Subhan Khan">MSK</abbr>
            </p>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
