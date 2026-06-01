/**
 * Otimizações de imagem específicas para mobile
 * Reduz tamanho e melhora carregamento em conexões lentas
 */

export const getResponsiveImageSizes = () => {
  return {
    mobile: {
      width: 640,
      quality: 75,
    },
    tablet: {
      width: 1024,
      quality: 80,
    },
    desktop: {
      width: 1920,
      quality: 85,
    },
  };
};

export const getImageSrcSet = (baseUrl: string) => {
  const sizes = getResponsiveImageSizes();
  return `
    ${baseUrl}?w=${sizes.mobile.width}&q=${sizes.mobile.quality} 640w,
    ${baseUrl}?w=${sizes.tablet.width}&q=${sizes.tablet.quality} 1024w,
    ${baseUrl}?w=${sizes.desktop.width}&q=${sizes.desktop.quality} 1920w
  `;
};

export const getImageSizes = () => {
  return '(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw';
};

export const shouldLoadImageEagerly = (imageName: string): boolean => {
  // Carregar eagerly apenas para imagens críticas (hero, above the fold)
  const criticalImages = ['hero', 'banner', 'main'];
  return criticalImages.some(name => imageName.toLowerCase().includes(name));
};

export default {
  getResponsiveImageSizes,
  getImageSrcSet,
  getImageSizes,
  shouldLoadImageEagerly,
};
