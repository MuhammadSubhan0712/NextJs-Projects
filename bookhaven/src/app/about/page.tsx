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
              BookHaven was founded in 2015 with a simple mission: to connect readers with books they'll love. 
              What started as a small online bookstore has grown into a thriving community of book lovers.
            </p>
            
            <p>
              Our team of passionate bibliophiles carefully curates our collection to include both popular titles 
              and hidden gems across all genres. We believe that every book has its reader, and we're committed 
              to helping you discover your next favorite book.
            </p>
            
            <p>
              Beyond just selling books, we're building a community. Through our book clubs, author events, and 
              reading challenges, we bring readers together to share their love of literature.
            </p>
          </div>
        </div>
      </section>


    </main>
  </>
  )
}

export default About