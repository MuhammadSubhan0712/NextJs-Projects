import FlavourCard from '@/components/FlavourCard';
import Hero from '@/components/Hero';
import React from 'react'


const featuredFlavors = [
  {
    name: "Velvet Vanilla",
    description: "Creamy Madagascar vanilla with a hint of bourbon",
    color: "bg-amber-300",
    image: "/images/flavors/vanilla.png"
  },
  {
    name: "Chocolate Euphoria",
    description: "Rich Belgian chocolate with cocoa nibs",
    color: "bg-amber-800",
    image: "/images/flavors/chocolate.png"
  },
  {
    name: "Berry Bliss",
    description: "Mixed berries with a swirl of raspberry coulis",
    color: "bg-pink-400",
    image: "/images/flavors/strawberry.png"
  }
];

const Home = () => {
  return (
    <>
    <main>
      <Hero/>

      {/* Featured Flavors Section */}
      <section className='py-16 bg-white'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Signature Flavors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredFlavors.map((flavor, index) => (
            <FlavourCard 
            key={flavor.name}
            name={flavor.name}
            description={flavor.description}
            color={flavor.color}
            image={flavor.image}
            delay={ index * 0.1}/>
          ))}
        </div>
      </div>
      </section>
    </main>
    </>
  )
}

export default Home