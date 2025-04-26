import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';


const footerLinks = [
  {name: 'About Us' , href: "/about"},
  {name: 'Our Flavors' , href: "/services"},
  {name: 'Locations' , href: "/contact"},
  {name: 'Careers' , href: "#"},
  {name: 'Privacy Policy' , href: "#"},
  {name: 'Terms of Service' , href: "#"},
];

const socialLinks = [
  {icon: <Facebook className='w-5 h-5'/>, href: "#"},
  {icon: <Instagram className='w-5 h-5'/>, href: "#"},
  {icon: <Twitter className='w-5 h-5'/>, href: "#"},

]


const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Footer