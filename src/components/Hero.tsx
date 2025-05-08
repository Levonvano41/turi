import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  // Array of hero images and content
  const slides = [
    {
      image: 'https://images.pexels.com/photos/5007052/pexels-photo-5007052.jpeg',
      title: 'Откройте для себя Армению',
      subtitle: 'Страна с богатой историей и захватывающей природой',
    },
    {
      image: 'https://images.pexels.com/photos/5007070/pexels-photo-5007070.jpeg',
      title: 'Древние монастыри',
      subtitle: 'Прикоснитесь к тысячелетней истории христианства',
    },
    {
      image: 'https://images.pexels.com/photos/13582991/pexels-photo-13582991.jpeg',
      title: 'Кулинарные традиции',
      subtitle: 'Попробуйте знаменитую армянскую кухню',
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          </div>
        </div>
      ))}

      {/* Hero content */}
      <div className="relative z-10 flex flex-col justify-center h-full container mx-auto px-4">
        <div className="max-w-3xl text-white">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 transform translate-y-0 opacity-100"
            style={{ 
              opacity: 1, 
              transform: 'translateY(0)' 
            }}
          >
            {slides[currentSlide].title}
          </h1>
          <p 
            className="text-xl md:text-2xl mb-8 transition-all duration-700 delay-200 transform translate-y-0 opacity-100"
            style={{ 
              opacity: 1, 
              transform: 'translateY(0)' 
            }}
          >
            {slides[currentSlide].subtitle}
          </p>
          <div className="transition-all duration-700 delay-400 transform translate-y-0 opacity-100">
            <a 
              href="#explore"
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-white bg-amber-600 hover:bg-amber-700 transition-colors"
            >
              Исследовать
              <ChevronRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-10">
        <div className="flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-amber-500 w-10' : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;