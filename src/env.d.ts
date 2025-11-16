/// <reference types="astro/client" />
/// <reference types="vite-imagetools/client" />

// Google Analytics dataLayer
interface Window {
  dataLayer?: any[];
}

// Type declarations for image imports with query parameters
declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*?h=400' {
  const content: any;
  export default content;
}

declare module '*?h=400&webp' {
  const content: any;
  export default content;
}

declare module '*?format=webp&w=384' {
  const content: any;
  export default content;
}

declare module '*?format=webp&w=640' {
  const content: any;
  export default content;
}

declare module '*?format=webp&w=750' {
  const content: any;
  export default content;
}

declare module '*?format=webp&w=828' {
  const content: any;
  export default content;
}

declare module '*?format=webp&w=1080' {
  const content: any;
  export default content;
}

declare module '*?format=webp&w=1200' {
  const content: any;
  export default content;
}

declare module '*?format=webp&w=1920' {
  const content: any;
  export default content;
}

declare module '*?format=webp&w=2048' {
  const content: any;
  export default content;
}

declare module '*?format=webp&w=3840' {
  const content: any;
  export default content;
}
