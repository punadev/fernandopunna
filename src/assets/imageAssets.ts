// Image assets imported as ES6 modules
import profileImage from './images/1757937033859.jpg';
import jobVissocaImage from './images/job_vissoca.jfif';
import henriqueSanjulucaImage from './images/henrique_sanjuluca.jfif';
import marioPedroImage from './images/mario_pedro.jfif';
import image10 from './images/10.jpg';
import image12 from './images/12.jpg';
import image2 from './images/2.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.png';
import image8 from './images/8.jpg';
import resumePdf from './images/FERNANDO PUNA - Técnico de Marketing.pdf';

// Export all images
export const imageAssets = {
  profile: profileImage,
  testimonials: {
    jobVissoca: jobVissocaImage,
    henriqueSanjuluca: henriqueSanjulucaImage,
    marioPedro: marioPedroImage
  },
  gallery: {
    design1: image10,
    design2: image12,
    design3: image2,
    design4: image4,
    design5: image5,
    design6: image8
  },
  documents: {
    resume: resumePdf
  }
};

// Export individual images for direct import
export { 
  profileImage,
  jobVissocaImage,
  henriqueSanjulucaImage,
  marioPedroImage,
  image10,
  image12,
  image2,
  image4,
  image5,
  image8,
  resumePdf
};

// Type definitions for better TypeScript support
export type ImageAsset = string;

export interface TestimonialImages {
  jobVissoca: ImageAsset;
  henriqueSanjuluca: ImageAsset;
  marioPedro: ImageAsset;
}

export interface GalleryImages {
  design1: ImageAsset;
  design2: ImageAsset;
  design3: ImageAsset;
  design4: ImageAsset;
  design5: ImageAsset;
  design6: ImageAsset;
}