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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Locations
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-pink-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              
              <h3 className="text-xl font-bold text-pink-600 mb-4">{location.name}</h3>
              <div className="space-y-4">

                <div className="flex items-start">
                  <MapPin className='w-5 h-5 mt-1 mr-3 text-pink-500'/>
                  <p className="text-gray-700">{location.address}</p>
                </div>

                <div className="flex items-start">
                  <Phone className='w-5 h-5 mt-1 mr-3 text-pink-500'/>
                  <p className="text-gray-700">{location.phone}</p>
                </div>

                <div className="flex items-start">
                    <Clock className="w-5 h-5 mt-1 mr-3 text-pink-500" />
                    <p className="text-gray-700">{location.hours}</p>
                </div>
              </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      
    </main>
    </>
  )
}

export default Contact