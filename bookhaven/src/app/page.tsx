import AnimatedText from '@/components/ui/AnimatedText';
import BookCard from '@/components/ui/BookCard';
import Hero from '@/components/ui/Hero';
import { books } from '@/lib/constants';
import React from 'react'

const Home = () => {
  return (
    <>
    <main>
        {/* Hero Section */}
        <Hero/>

        {/* For Featured Books */}
        <section className="py-12 md:py-24 bg-muted/20">
        <div className="container space-y-12">
            <div className="text-center space-y-4">
                <AnimatedText
                text='Featured Collection'
                className='text-3xl md:text-4xl font-bold'/>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Discover our handpicked selection of books for every reader
                </p>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
    <section className='py-12 md:py-24'>
      <div className="container">
        <div  className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 lg:p-16">
          
        </div>
      </div>
    </section>
    </main>
    </>
  )
}

export default Home