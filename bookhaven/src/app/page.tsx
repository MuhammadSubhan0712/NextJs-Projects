import AnimatedText from "@/components/ui/AnimatedText";
import BookCard from "@/components/ui/BookCard";
import Hero from "@/components/ui/Hero";
import { books } from "@/lib/constants";
import "./globals.css";
import React from "react";

const Home = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <Hero />

        {/* For Featured Books */}
        <section className="py-12 md:py-24 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <AnimatedText
                text="Featured Collection"
                className="flex justify-center items-center text-3xl md:text-4xl font-bold"
              />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our handpicked selection of books for every reader
              </p>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4 px-4 sm:px-6 lg:px-8">
              {books.map((book, index) => (
                <BookCard
                  key={index}
                  title={book.title}
                  author={book.author}
                  price={book.price}
                  rating={book.rating}
                  coverImage={book.coverImage}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 md:py-24">
          <div className="container">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <AnimatedText
                  text="Join Our Reading Community"
                  className="flex justify-center items-center text-2xl md:text-3xl font-bold"
                />
                <p className="text-muted-foreground">
                  Sign up for our newsletter and get 10% off of your first
                  order!
                </p>
                <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2 rounded-md border bg-background text-sm"
                  />

                  <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials (Optional) */}
        <section className="py-12 md:py-24 bg-background flex justify-center items-center">
          <div className="container max-w-4xl ">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Readers Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "BookHaven has the best collection! Found my new favorite author here.",
                  author: "Jane D.",
                },
                {
                  quote:
                    "Fast delivery and great customer service. Highly recommend!",
                  author: "Michael T.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="border p-6 rounded-lg">
                  <p className="text-muted-foreground mb-4">
                    {testimonial.quote}
                  </p>
                  <p className="font-medium">— {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
