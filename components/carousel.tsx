"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselImages = [
  {
    src: "/saberLife.jpg",
    alt: "Crianças brincando e aprendendo em sala colorida",
  },
  {
    src: "/saberLife.jpg",
    alt: "Educação bilíngue - crianças lendo livros em inglês e português",
  },
  {
    src: "/saberLife.jpg",
    alt: "Pátio da escola com crianças brincando em atividades ao ar livre",
  },
  {
    src: "/saberLife.jpg",
    alt: "Professores e crianças em sessão de musicoterapia",
  },
  {
    src: "/saberLife.jpg",
    alt: "Crianças aprendendo karatê na escola",
  },
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-lg">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-transparent bg-opacity-30 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Educação Integral e Bilíngue</h2>
              <p className="text-lg md:text-xl mb-6 text-pretty">Desenvolvendo o potencial completo de cada criança</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Conheça nossa escola
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
