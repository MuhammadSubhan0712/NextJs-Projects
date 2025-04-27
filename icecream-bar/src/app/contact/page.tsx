"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const locations = [
  {
    name: "Downtown",
    address: "123 Ice Cream Ave, Suite 100",
    phone: "(555) 123-4567",
    email: "downtown@gmail.com",
    hours: "Mon-Sun: 12pm - 10pm",
  },
  {
    name: "Uptown",
    address: "456 Sweet Street, Corner of 5th",
    phone: "(555) 987-6543",
    email: "uptown@gmail.com",
    hours: "Mon-Sun: 1pm - 11pm",
  },
  {
    name: "Westside",
    address: "789 Cone Boulevard",
    phone: "(555) 456-7890",
    email: "westside@gmail.com",
    hours: "Mon-Sun: 11am - 9pm",
  },
];

const Contact = () => {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="relative h-96 bg-gradient-to-r from-pink-500 to-yellow-500 flex items-center justify-center text-center">
          <div className="absolute inset-0 bg-[url('/images/contact-us.jpg')] bg-cover bg-center opacity-50">
            <div className="relative mt-25 z-10 px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
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
                  <h3 className="text-xl font-bold text-pink-600 mb-4">
                    {location.name}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mt-1 mr-3 text-pink-500" />
                      <p className="text-gray-700">{location.address}</p>
                    </div>

                    <div className="flex items-start">
                      <Phone className="w-5 h-5 mt-1 mr-3 text-pink-500" />
                      <p className="text-gray-700">{location.phone}</p>
                    </div>

                    <div className="flex items-start">
                      <Mail className="w-5 h-5 mt-1 mr-3 text-pink-500" />
                      <p className="text-gray-700">{location.email}</p>
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
        <section className="py-16 bg-pink-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors">
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Join Our Newsletter
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Get updates on new flavors, special events, and exclusive
              discounts!
            </p>

            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-r-lg shadow-md transition-colors">
                Subscribe
              </motion.button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
