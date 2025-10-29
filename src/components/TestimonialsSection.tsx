import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { ImageOptimizer } from '../utils/imageOptimizer';
import { imageAssets } from '../assets/imageAssets';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Initialize image optimizer
  useEffect(() => {
    ImageOptimizer.init();
    return () => ImageOptimizer.destroy();
  }, []);

  const testimonials = [
    {
      id: 2,
      name: "Job Da Fonseca Vissoca",
      role: "Trabalhamos juntos na Mutltitel no dept. de Marketing e Fidelização de Clientes",
      content: "O Fernando é um excelente profissional, com uma vasta experiência em TI, é um enorme prazer partilharmos conhecimentos.",
      avatar: imageAssets.testimonials.jobVissoca,
      rating: 5
    },
    {
      id: 3,
      name: "Henrique Sanjuluca",
      role: "Ele me supervisionava na Multitel, no departamento de Marketing.",
      content: "É com grande prazer que escrevo esta recomendação de Fernando Mabiala. Fernando é um Técnico Sênior em Design Gráfico e Sistemas, e durante o tempo de Trabalho tenho a oportunidade de trabalhar com ele, fico impressionado com seu profissionalismo, habilidades e dedicação ao trabalho. Fernando se destaca por sua competência técnica e criatividade no design gráfico. Ele possui um olho aguçado para detalhes e uma capacidade única de transformar ideias em projetos visuais impressionantes e funcionais. Sua proficiência em diversas ferramentas de design gráfico e software de sistemas o torna um recurso inestimável para qualquer equipe. Está sempre disposto a ajudar os colegas. Estou confiante de que Fernando Mabiala tem um futuro promissor à sua frente. Ele é um profissional excepcional que traz valor a qualquer projeto em que se envolve. Recomendo-o sem reservas para qualquer posição ou oportunidade em sua área de expertise.",
      avatar: imageAssets.testimonials.henriqueSanjuluca,
      rating: 5
    },
    {
      id: 4,
      name: "Mário Pedro",
      role: " Trabalhamos juntos em diversos projectos",
      content: "Recomendo, profissional bastante focado e competente. O Fernando , atua brilhantemente como técnico de marketing e desenvolvedor de sistemas. Sua habilidade em unir estratégias de marketing com soluções tecnológicas é realmente impressionante. Com uma sólida experiência em desenvolvimento de sistemas, ele consegue criar plataformas que não apenas atendem às necessidades técnicas, mas também são otimizadas para alcançar resultados de marketing eficazes. Sua visão estratégica, combinada com um profundo conhecimento técnico, faz dele um profissional excepcional e um grande ativo para qualquer equipe.",
      avatar: imageAssets.testimonials.marioPedro,
      rating: 5
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Set up lazy loading for avatar images
  useEffect(() => {
    const avatarImages = document.querySelectorAll('.testimonial-avatar');
    avatarImages.forEach(img => {
      ImageOptimizer.observe(img as HTMLImageElement);
    });
  }, [currentIndex]);

  return (
    <div className="h-full w-full flex items-center justify-center p-8 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Depoimentos
            </span>
          </h2>
        </div>
        
        <div 
          className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 z-10"
          >
            <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
          
          {/* Testimonial Content */}
          <div className="max-w-3xl mx-auto">
            
            <blockquote className="text-center text-gray-800 dark:text-gray-200 mb-8 text-sm">
              "{testimonials[currentIndex].content}"
            </blockquote>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center mb-4 overflow-hidden">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='%23818cf8'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E"
                  data-src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover testimonial-avatar lazy"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <div className="font-bold text-sm text-gray-900 dark:text-white">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600 text-sm dark:text-gray-400">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-indigo-600 dark:bg-indigo-400 w-8' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;