import AnimatedText from '@/components/ui/AnimatedText'
import React from 'react'

const About = () => {
  return (
  <>
   <main>
      <section className="py-12 md:py-24">
        <div className="container max-w-4xl space-y-8">
          <AnimatedText 
            text="Our Story" 
            className="text-3xl md:text-4xl font-bold" 
          />
          
          <div className="space-y-6 text-muted-foreground">
            <p>
              BookHaven was founded in 2015 with a simple mission: to connect readers with books they will love. 
              What started as a small online bookstore has grown into a thriving community of book lovers.
            </p>
            
            <p>
              Our team of passionate bibliophiles carefully curates our collection to include both popular titles 
              and hidden gems across all genres. We believe that every book has its reader, and we are committed 
              to helping you discover your next favorite book.
            </p>
            
            <p>
              Beyond just selling books, we are building a community. Through our book clubs, author events, and 
              reading challenges, we bring readers together to share their love of literature.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-muted/20">
        <div className="container max-w-4xl space-y-8">
          <AnimatedText 
            text="Our Values" 
            className="text-3xl md:text-4xl font-bold" 
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Quality Over Quantity",
                description: "We carefully select each title in our collection to ensure it meets our high standards."
              },
              {
                title: "Community Focused",
                description: "We're more than a bookstore - we're a gathering place for readers."
              },
              {
                title: "Sustainability",
                description: "We prioritize eco-friendly packaging and support sustainable publishing practices."
              },
              {
                title: "Lifelong Learning",
                description: "We believe in the power of books to educate, inspire, and transform."
              },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  </>
  )
}

export default About