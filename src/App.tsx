import React, { useState, useEffect, useCallback } from 'react';
import { ImageOptimizer } from './utils/imageOptimizer';

// Import new components
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import ProfessionalApproachSection from './components/ProfessionalApproachSection';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const totalSections = 7;

  // Initialize image optimizer
  useEffect(() => {
    ImageOptimizer.init();
    return () => ImageOptimizer.destroy();
  }, []);

  // Initialize dark mode based on system preference or stored preference
  useEffect(() => {
    const storedPreference = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedPreference !== null) {
      setIsDarkMode(storedPreference === 'true');
    } else {
      setIsDarkMode(systemPrefersDark);
    }
  }, []);

  // Apply dark mode class to body and save preference
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Handle scroll navigation
  const scrollToSection = (index: number) => {
    const container = document.getElementById('horizontal-scroll-container');
    const sections = document.querySelectorAll('.horizontal-section');
    
    if (container && sections[index]) {
      // Scroll to the section with smooth behavior
      container.scrollTo({
        left: (sections[index] as HTMLElement).offsetLeft,
        behavior: 'smooth'
      });
      setCurrentSection(index);
      setActiveMenu(false);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' && currentSection < totalSections - 1) {
      scrollToSection(currentSection + 1);
    } else if (e.key === 'ArrowLeft' && currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  }, [currentSection]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);

    // Handle scroll events for section detection
    const handleScroll = () => {
      const container = document.getElementById('horizontal-scroll-container');
      if (!container) return;
      
      // Calculate which section is currently visible
      const scrollPosition = container.scrollLeft + container.offsetWidth / 2;
      const sections = document.querySelectorAll('.horizontal-section');
      
      sections.forEach((section, index) => {
        const sectionLeft = (section as HTMLElement).offsetLeft;
        const sectionRight = sectionLeft + (section as HTMLElement).offsetWidth;
        
        if (scrollPosition >= sectionLeft && scrollPosition < sectionRight) {
          setCurrentSection(index);
        }
      });
    };

    const container = document.getElementById('horizontal-scroll-container');
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [handleKeyDown]);

  // Handle navigation from space-x-2 elements
  useEffect(() => {
    const handleSpaceXClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const parent = target.closest('.space-x-2');
      
      if (parent) {
        // Find the index of the clicked button
        const buttons = parent.querySelectorAll('button');
        buttons.forEach((button, index) => {
          if (button === target || button.contains(target)) {
            scrollToSection(index);
          }
        });
      }
    };

    document.addEventListener('click', handleSpaceXClick);
    return () => document.removeEventListener('click', handleSpaceXClick);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-indigo-100 dark:border-gray-700 border-t-indigo-500 dark:border-t-indigo-400 rounded-full animate-spin mb-8"></div>
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            FERNANDO PUNA
          </div>
          <div className="text-slate-600 dark:text-slate-300 text-sm animate-pulse">
            Carregando experiência premium...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      {/* Floating Navigation Menu */}
      <div className="fixed top-6 left-6 z-50">
        <button 
          onClick={() => setActiveMenu(!activeMenu)}
          className="w-14 h-14 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
          <div className={`w-6 h-0.5 bg-gray-800 dark:bg-white mb-1 transition-all duration-300 ${activeMenu ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${activeMenu ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-800 dark:bg-white mt-1 transition-all duration-300 ${activeMenu ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
        
        {/* Menu Items */}
        {activeMenu && (
          <div className="absolute top-16 left-0 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 w-64 transition-all duration-300">
            <div className="space-y-2">
              {['Início', 'Habilidades', 'Portfólio', 'Depoimentos', 'Experiência', 'Abordagem', 'Contato'].map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(index)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                    currentSection === index 
                      ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-40">
        <button 
          onClick={toggleDarkMode}
          className="w-14 h-14 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? (
            <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex space-x-2">
          {Array.from({ length: totalSections }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSection === index 
                  ? 'bg-indigo-600 dark:bg-indigo-400 w-8' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        id="horizontal-scroll-container"
        className="w-screen h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth flex"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        <div className="horizontal-section w-screen h-screen snap-center flex-shrink-0 flex items-center justify-center">
          <HeroSection />
        </div>
        <div className="horizontal-section w-screen h-screen snap-center flex-shrink-0 flex items-center justify-center">
          <SkillsSection />
        </div>
        <div className="horizontal-section w-screen h-screen snap-center flex-shrink-0 flex items-center justify-center">
          <GallerySection />
        </div>
        <div className="horizontal-section w-screen h-screen snap-center flex-shrink-0 flex items-center justify-center">
          <TestimonialsSection />
        </div>
        <div className="horizontal-section w-screen h-screen snap-center flex-shrink-0 flex items-center justify-center">
          <ExperienceSection />
        </div>
        <div className="horizontal-section w-screen h-screen snap-center flex-shrink-0 flex items-center justify-center">
          <ProfessionalApproachSection />
        </div>
        <div className="horizontal-section w-screen h-screen snap-center flex-shrink-0 flex items-center justify-center">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default App;