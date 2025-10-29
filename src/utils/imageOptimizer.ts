// Utility functions for optimized image loading
export interface ImageOptimizationOptions {
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
  maxWidth?: number;
  maxHeight?: number;
}

/**
 * Preload images to improve perceived performance
 */
export const preloadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Lazy load images with Intersection Observer
 */
export const lazyLoadImage = (
  imgElement: HTMLImageElement,
  placeholderSrc?: string
): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (placeholderSrc) {
              img.src = placeholderSrc;
            }
            observer.unobserve(img);
            resolve(img);
          }
        });
      });

      observer.observe(imgElement);
    } else {
      // Fallback for browsers that don't support Intersection Observer
      imgElement.src = placeholderSrc || imgElement.dataset.src || '';
      resolve(imgElement);
    }
  });
};

/**
 * Generate responsive image attributes
 */
export const getResponsiveImageAttributes = (
  baseSrc: string,
  sizes: { width: number; height?: number }[]
) => {
  const srcSet = sizes
    .map(size => `${baseSrc}?w=${size.width} ${size.width}w`)
    .join(', ');
  
  const sizesAttr = sizes
    .map(size => `(max-width: ${size.width}px) ${size.width}px`)
    .join(', ');
  
  return { srcSet, sizes: sizesAttr };
};

/**
 * Optimize image loading with modern techniques
 */
export class ImageOptimizer {
  private static observer: IntersectionObserver | null = null;
  
  static init() {
    if (!this.observer && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.dataset.src;
            if (src) {
              // Add loading class for smooth transition
              img.classList.add('loading');
              
              // Create a new image to preload
              const preloadImg = new Image();
              preloadImg.onload = () => {
                img.src = src;
                img.classList.remove('lazy', 'loading');
                img.classList.add('loaded');
              };
              preloadImg.onerror = () => {
                img.src = src;
                img.classList.remove('lazy', 'loading');
                img.classList.add('loaded');
              };
              preloadImg.src = src;
              
              this.observer?.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px 0px', // Start loading 50px before entering viewport
        threshold: 0.01
      });
    }
  }
  
  static observe(img: HTMLImageElement) {
    if (this.observer) {
      this.observer.observe(img);
    } else {
      // Fallback: load immediately
      const src = img.dataset.src;
      if (src) {
        img.src = src;
        img.classList.remove('lazy');
        img.classList.add('loaded');
      }
    }
  }
  
  static destroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}

/**
 * Compress image client-side (basic implementation)
 */
export const compressImage = async (
  file: File,
  options: { quality?: number; maxWidth?: number; maxHeight?: number } = {}
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const { quality = 0.8, maxWidth = 1920, maxHeight = 1080 } = options;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      reject(new Error('Canvas context not available'));
      return;
    }
    
    const img = new Image();
    img.onload = () => {
      // Calculate new dimensions maintaining aspect ratio
      let { width, height } = img;
      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }
      if (height > maxHeight) {
        width = (width * maxHeight) / height;
        height = maxHeight;
      }
      
      canvas.width = width;
      canvas.height = height;
      
      // Draw image on canvas
      ctx.drawImage(img, 0, 0, width, height);
      
      // Convert to blob with compression
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Canvas toBlob failed'));
          }
        },
        'image/jpeg',
        quality
      );
    };
    
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};