"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const locations = [
  {
    name: "Downtown",
    address: "123 Ice Cream Ave, Suite 100",
    phone: "(555) 123-4567",
    hours: "Mon-Sun: 12pm - 10pm"
  },
  {
    name: "Uptown",
    address: "456 Sweet Street, Corner of 5th",
    phone: "(555) 987-6543",
    hours: "Mon-Sun: 1pm - 11pm"
  },
  {
    name: "Westside",
    address: "789 Cone Boulevard",
    phone: "(555) 456-7890",
    hours: "Mon-Sun: 11am - 9pm"
  }
];

const Contact = () => {
  return (
    <>
    <main>
      {/* Hero */}
      <section className='relative h-96 bg-gradient-to-r from-pink-500 to-yellow-500 flex items-center justify-center text-center'>
      <div className="absolute inset-0 bg-[url('/images/contact.jpg')] bg-cover bg-center opacity-30">
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-white max-w-2xl mx-auto">
        We would love to hear from you! Visit us or send us a message.
        </p>
      </div>
      </div>
      </section>

      {/* Location */}
    </main>
    </>
  )
}

export default Contact