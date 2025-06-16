'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const images = [
  '/morocco1.png',
  '/morocco2.png',
  '/morocco3.png',
  '/morocco4.png',
  '/med1.png',
]

const Hero = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full flex transition-transform duration-1000 ease-in-out"
        style={{ width: `${images.length * 100}%`, transform: `translateX(-${index * (100 / images.length)}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="relative w-screen h-full flex-shrink-0">
            <Image src={src} alt={`slide-${i}`} fill className="object-cover" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10 text-white text-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Stunning Destinations</h1>
          <p className="text-lg md:text-xl">Morocco & Mediterranean</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
