import AnimatedText from '@/components/ui/AnimatedText'
import BookCard from '@/components/ui/BookCard'
import Hero from '@/components/ui/Hero'
import { books } from '@/lib/constants'
import React from 'react'



const page = () => {
  return (
    <>
    <main>
      <Hero/>

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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {books.map((book, index) => (
              <BookCard
              key={index}
              title={book.title}
              author={book.author}
              price={book.price}
              rating={book.rating}
              coverImage={book.coverImage}/>
            ))}
          </div>
      </div>
      </section>

      
    </main>
    </>
  )
}

export default page