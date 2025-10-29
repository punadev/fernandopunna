import React, { useState, useEffect } from 'react';
import { ImageOptimizer } from '../utils/imageOptimizer';
import { imageAssets } from '../assets/imageAssets';

const GallerySection = () => {
  const [filter, setFilter] = useState('Design Gráfico');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showAllImages, setShowAllImages] = useState(false);

  // Initialize image optimizer
  useEffect(() => {
    ImageOptimizer.init();
    return () => ImageOptimizer.destroy();
  }, []);

  // Mock gallery data with imported images for Design Gráfico items
  const galleryItems = [
    { id: 1, category: 'Design Gráfico', title: 'Arte Cidade de Luanda', description: 'Esta arte foi desenvolvida para representar uma angola do futuro e mais smart.', image: imageAssets.gallery.design1 },
    { id: 2, category: 'web', title: 'Website Institucional', description: 'Design e desenvolvimento de website responsivo' },
    { id: 3, category: '3D Created', title: 'Materiais Promocionais', description: 'Catálogo e folder para evento corporativo' },
    { id: 4, category: 'Design Gráfico', title: 'Banner Filda 2024', description: 'Esta arte foi criada especialmente para os convidados do stand da Multitel na FILDA 2024.', image: imageAssets.gallery.design2 },
    { id: 5, category: 'motion', title: 'Animação Explainer', description: 'Vídeo explicativo para plataforma SaaS' },
    { id: 6, category: '3D Created', title: 'Embalagem Produto', description: 'Design de packaging para linha de cosméticos' },
    { id: 7, category: 'web', title: 'E-commerce', description: 'Plataforma de vendas online completa' },
    { id: 8, category: 'Design Gráfico', title: '+Voz, +Internet', description: 'É um projeto desenvolvido com foco no segmento B2B.', image: imageAssets.gallery.design3 },
    { id: 9, category: 'Design Gráfico', title: 'VOIP', description: 'Arte criada e elaborada para comunicacao empresarial.', image: imageAssets.gallery.design4 },
    { id: 10, category: 'Design Gráfico', title: 'VOIP Alternative', description: 'Arte criada e elaborada para comunicacao empresarial.', image: imageAssets.gallery.design5 }
  ];

  const filteredItems = galleryItems.filter(item => item.category === filter);

  // Get items to display based on screen size and showAllImages state
  const getDisplayItems = () => {
    if (showAllImages) {
      return filteredItems;
    }
    // On mobile, show 1 item; on desktop, show 4 items
    const isMobile = window.innerWidth < 768;
    const itemsToShow = isMobile ? 1 : 4;
    return filteredItems.slice(0, itemsToShow);
  };

  const displayItems = getDisplayItems();

  const categories = [
    { id: 'Design Gráfico', name: 'Design Gráfico' },
    { id: 'web', name: 'Web' },
    { id: '3D Created', name: '3D Created' },
    { id: 'motion', name: 'Motion' },
  ];

  // Find the selected item by ID
  const getSelectedItem = () => {
    if (selectedImage === null) return null;
    return galleryItems.find(item => item.id === selectedImage) || null;
  };

  const selectedItem = getSelectedItem();

  // Get navigation functions for modal
  const getNextImage = () => {
    if (selectedImage === null) return null;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    if (currentIndex === -1 || currentIndex === filteredItems.length - 1) return null;
    return filteredItems[currentIndex + 1];
  };

  const getPrevImage = () => {
    if (selectedImage === null) return null;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    if (currentIndex === -1 || currentIndex === 0) return null;
    return filteredItems[currentIndex - 1];
  };

  const nextImage = getNextImage();
  const prevImage = getPrevImage();

  const handleNext = () => {
    if (nextImage) {
      setSelectedImage(nextImage.id);
    }
  };

  const handlePrev = () => {
    if (prevImage) {
      setSelectedImage(prevImage.id);
    }
  };

  // Set up lazy loading for gallery images
  useEffect(() => {
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(img => {
      ImageOptimizer.observe(img as HTMLImageElement);
    });
  }, [displayItems]);

  return (
    <div className="h-full w-full flex items-center justify-center p-3 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Portfólio
            </span>
          </h2>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setFilter(category.id);
                setShowAllImages(false);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {displayItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedImage(item.id)}
              className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              {/* Image Display - Actual images for Design Gráfico items, placeholders for others */}
              <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                {item.category === 'Design Gráfico' && item.image ? (
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 24 24' fill='%23818cf8'%3E%3Cpath d='M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z'/%3E%3C/svg%3E"
                    data-src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover gallery-image lazy"
                    loading="lazy"
                  />
                ) : (
                  <div className="bg-gray-200 dark:bg-gray-700 border-2 border-dashed rounded-xl w-10 h-10" />
                )}
              </div>
              
              {/* Content */}
              <div className="p-3">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-gray-900 dark:text-white text-xs">{item.title}</h3>
                  <span className="text-xs px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full capitalize">
                    {item.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-tight">
                  {item.description}
                </p>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <div className="text-white">
                  <h3 className="font-bold text-xs">{item.title}</h3>
                  <p className="text-xs opacity-80 leading-tight">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Show "Ver mais" card if there are more items and we're not showing all */}
          {!showAllImages && filteredItems.length > displayItems.length && (
            <div 
              onClick={() => {
                // Find the first item that's not currently displayed
                const firstHiddenItem = filteredItems.find(item => 
                  !displayItems.some(displayItem => displayItem.id === item.id)
                );
                if (firstHiddenItem) {
                  setSelectedImage(firstHiddenItem.id);
                }
              }}
              className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600"
            >
              <div className="aspect-square flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-400 dark:text-gray-500">+</span>
              </div>
              <div className="p-3 w-full">
                <p className="text-center font-medium text-gray-700 dark:text-gray-300 text-xs">
                  Ver Mais
                </p>
              </div>
            </div>
          )}
        </div>
        
        {/* Load More Button - only show if we're currently showing limited items */}
        {!showAllImages && filteredItems.length > displayItems.length && (
          <div className="text-center mt-6">
            <button 
              onClick={() => {
                // Find the first item that's not currently displayed
                const firstHiddenItem = filteredItems.find(item => 
                  !displayItems.some(displayItem => displayItem.id === item.id)
                );
                if (firstHiddenItem) {
                  setSelectedImage(firstHiddenItem.id);
                }
              }}
              className="px-5 py-2 bg-white dark:bg-gray-800 rounded-full font-medium text-gray-900 dark:text-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 text-xs"
            >
              Ver Mais Projetos
            </button>
          </div>
        )}
      </div>
      
      {/* Modal for individual image viewing */}
      {selectedItem !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className={`relative max-w-4xl w-full max-h-[90vh] ${selectedItem.category === 'Design Gráfico' ? '' : 'rounded-2xl'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation Arrows */}
            {prevImage && (
              <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            
            {nextImage && (
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
            
            <button 
              className={`absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors ${selectedItem.category === 'Design Gráfico' ? 'top-4 right-4' : ''}`}
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className={`${selectedItem.category === 'Design Gráfico' ? '' : 'bg-white dark:bg-gray-800 rounded-2xl'} overflow-hidden`}>
              <div className="h-96 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                {selectedItem.category === 'Design Gráfico' && selectedItem.image ? (
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title} 
                    className="w-full h-full object-contain"
                    loading="eager"
                  />
                ) : (
                  <div className="bg-gray-200 dark:bg-gray-700 border-2 border-dashed rounded-xl w-32 h-32" />
                )}
              </div>
              {/* Show details only for non-Design Gráfico categories */}
              {selectedItem.category !== 'Design Gráfico' && (
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedItem.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        {selectedItem.description}
                      </p>
                    </div>
                    <span className="text-xs px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full capitalize">
                      {selectedItem.category}
                    </span>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                      Ver Projeto
                    </button>
                    <button className="px-5 py-2.5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                      Detalhes
                    </button>
                  </div>
                </div>
              )}
              {/* For Design Gráfico, show only a simple close button */}
              {selectedItem.category === 'Design Gráfico' && (
                <div className="p-4 flex justify-end">
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Fechar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;