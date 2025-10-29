# Fernando Puna - Professional Portfolio

A modern, responsive portfolio website showcasing the professional work of Fernando Puna, a Marketing Technician, Graphic Designer, and Web Developer based in Angola.

## Features

- **Horizontal Scrolling Layout**: Unique navigation experience with smooth section transitions
- **Dark/Light Mode**: Automatic theme detection with manual toggle
- **Responsive Design**: Fully responsive across all device sizes
- **Performance Optimized**: Lazy loading images, code splitting, and efficient asset management
- **Modern UI**: Clean, contemporary design with smooth animations and transitions

## Performance Optimizations

This portfolio implements several performance optimizations to ensure fast loading and smooth interactions:

### Image Loading
- **Lazy Loading**: Images outside the viewport are only loaded when needed
- **Blur-up Technique**: Low-quality placeholders with smooth transitions to full-quality images
- **Preloading**: Critical assets preloaded for better perceived performance

### Code Splitting
- **Bundle Optimization**: Vendor libraries separated into distinct chunks
- **Component-based Splitting**: Each section loads independently
- **Tree Shaking**: Unused code automatically removed

### Asset Management
- **Efficient Formats**: Appropriate image formats for different content types
- **Optimized Sizes**: Images properly sized for their display context
- **Centralized Storage**: Organized asset structure for easy management

For detailed information about the performance optimizations, see [PERFORMANCE_OPTIMIZATIONS_SUMMARY.md](PERFORMANCE_OPTIMIZATIONS_SUMMARY.md) and [src/utils/IMAGE_OPTIMIZATION_GUIDE.md](src/utils/IMAGE_OPTIMIZATION_GUIDE.md).

## Tech Stack

- **React** with **TypeScript**
- **Vite** for fast builds and development
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **ESLint** for code quality

## Sections

1. **Hero**: Introduction and overview
2. **Skills**: Professional skill set
3. **Gallery**: Portfolio showcase
4. **Testimonials**: Client feedback
5. **Experience**: Professional background and education
6. **Approach**: Professional methodology
7. **Contact**: Get in touch

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

The site is configured for deployment on Vercel with specific routing for static assets and SPA fallback.

## Image Assets

All images are stored in the `public/img/` directory and optimized for web use. The implementation includes:

- Lazy loading for improved initial load times
- Blur-up technique for smooth image transitions
- Proper sizing to prevent layout shifts
- Efficient formats (JPEG for photos, PNG for graphics)

## Contributing

This is a personal portfolio project. Feel free to fork and use as a template, but please customize it for your own use.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For inquiries about the portfolio or potential collaborations, use the contact form on the website.