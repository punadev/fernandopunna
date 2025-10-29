import React, { useEffect, useState } from 'react';
import { ChevronDown, Play, Palette, MessageCircle, ArrowRight } from 'lucide-react';
import { profileImage } from '../assets/imageAssets';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Rotate cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % 3);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div 
          className="absolute w-64 h-64 rounded-full bg-indigo-200 dark:bg-indigo-900 opacity-20 blur-3xl transition-all duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            left: '5%'
          }}
        ></div>
        <div 
          className="absolute w-48 h-48 rounded-full bg-purple-200 dark:bg-purple-900 opacity-20 blur-3xl transition-all duration-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.01}px)`,
            bottom: '15%',
            right: '10%'
          }}
        ></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center space-x-3 bg-white dark:bg-gray-800 rounded-full px-5 py-2 shadow-sm mb-6">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Portfolio 2025</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="block text-gray-900 dark:text-white">Fernando</span>
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Puna</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-medium max-w-2xl">
                Técnico de Marketing | Designer Gráfico | Web Developer.
              </p>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                Sou um profissional de marketing especializado em estratégias direcionadas ao sector tecnológico, ajudando marcas a crescer e a destacar-se num mercado cada vez mais competitivo.
              </p>
            </div>
            
            {/* Stats */}
            <div className={`grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                { number: '5+', label: 'Marketing' },
                { number: '12+', label: 'Design Gráfico' },
                { number: '5+', label: 'Web Developer' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                  <div className="text-sm sm:text-base text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Interactive Cards */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
              <img 
                src={profileImage} 
                alt="Fernando Puna" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            
            {/* Decorative elements around the image */}
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center shadow-lg">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;