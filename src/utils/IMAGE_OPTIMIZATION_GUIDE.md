# Image Optimization Best Practices

This document outlines the image optimization strategies implemented in this project to ensure fast loading and smooth performance.

## Implemented Optimizations

### 1. Lazy Loading
- Images outside the viewport are only loaded when they're about to enter the viewport
- Uses Intersection Observer API with a 50px root margin for early loading
- Fallback for browsers that don't support Intersection Observer

### 2. Preloading Critical Images
- Hero images and other critical assets are preloaded using `loading="eager"`
- Testimonial avatars and gallery thumbnails use lazy loading

### 3. Blur-up Technique
- Low-quality placeholders are shown while images are loading
- Smooth transition from blurred placeholder to full-quality image
- CSS transitions for opacity and blur effects

### 4. Proper Image Sizing
- Images are sized appropriately for their display context
- Responsive images with `object-fit: cover` for consistent aspect ratios
- SVG placeholders for initial loading states

### 5. Asset Organization
- All images stored in `/public/img/` directory
- Consistent naming conventions
- Appropriate file formats (JPEG for photos, PNG for graphics with transparency)

## Performance Benefits

1. **Reduced Initial Load Time**: Only critical images are loaded initially
2. **Improved Perceived Performance**: Blur-up technique provides immediate visual feedback
3. **Bandwidth Savings**: Images only loaded when needed
4. **Better User Experience**: Smooth transitions and loading states

## Best Practices for Adding New Images

### 1. Image Preparation
- Compress images before adding to the project
- Use appropriate file formats:
  - JPEG for photographs
  - PNG for graphics with transparency
  - WebP when broad browser support is confirmed
- Resize images to appropriate dimensions before uploading

### 2. Implementation
- Use the `ImageOptimizer` utility for lazy loading:
  ```typescript
  import { ImageOptimizer } from '../utils/imageOptimizer';
  
  // In component useEffect
  useEffect(() => {
    ImageOptimizer.init();
    return () => ImageOptimizer.destroy();
  }, []);
  
  // For each image element
  useEffect(() => {
    const images = document.querySelectorAll('.your-image-class');
    images.forEach(img => ImageOptimizer.observe(img as HTMLImageElement));
  }, []);
  ```

### 3. HTML Structure
- Always include a placeholder SVG in the `src` attribute
- Put the actual image path in `data-src`
- Add the `lazy` class for lazy loading
- Use appropriate `alt` attributes

  ```jsx
  <img 
    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 24 24' fill='%23818cf8'%3E%3Cpath d='M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z'/%3E%3C/svg%3E"
    data-src="/img/your-image.jpg" 
    alt="Description of image" 
    className="w-full h-full object-cover gallery-image lazy"
    loading="lazy"
  />
  ```

### 4. CSS Classes
- Use `lazy` class for images that should be lazy loaded
- Use `loading` class for images in the process of loading
- Use `loaded` class for images that have finished loading
- Apply appropriate sizing classes (`w-full`, `h-full`, `object-cover`, etc.)

## Monitoring Performance

### 1. Lighthouse Audits
- Run Lighthouse audits regularly to monitor image performance
- Pay attention to:
  - Eliminate render-blocking resources
  - Efficiently encode images
  - Properly size images
  - Serve images in next-gen formats (when supported)

### 2. Network Monitoring
- Use browser dev tools to monitor image loading
- Check for:
  - Large image files
  - Unnecessary image requests
  - Proper caching headers

## Future Improvements

### 1. Next-Gen Image Formats
- Consider implementing WebP support with fallbacks
- Evaluate AVIF format support

### 2. Responsive Images
- Implement `srcset` and `sizes` attributes for different screen sizes
- Use the `getResponsiveImageAttributes` utility

### 3. Image CDN Integration
- Consider using an image CDN for automatic optimization
- Implement dynamic image resizing based on device characteristics

## Troubleshooting

### Common Issues

1. **Images not loading**
   - Check that `ImageOptimizer.init()` is called in the component
   - Verify `data-src` attribute contains the correct path
   - Ensure the image file exists in the public directory

2. **Blurry images**
   - Check that images have loaded properly (`.loaded` class applied)
   - Verify image dimensions match display dimensions
   - Confirm image files are high enough quality

3. **Poor performance**
   - Check image file sizes
   - Verify lazy loading is working (Intersection Observer)
   - Monitor network requests in browser dev tools

### Debugging Steps

1. Check browser console for errors
2. Verify image paths in `data-src` attributes
3. Use browser dev tools to inspect image elements and their classes
4. Monitor Network tab to ensure images are loading correctly
5. Run performance audits to identify bottlenecks