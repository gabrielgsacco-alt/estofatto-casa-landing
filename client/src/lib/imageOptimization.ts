/**
 * Utilitários para otimização de imagens
 * Converte URLs de imagens para WebP com fallback automático
 */

/**
 * Converte uma URL de imagem para WebP
 * Substitui extensões .jpg, .jpeg, .png por .webp
 */
export function toWebP(imagePath: string): string {
  return imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
}

/**
 * Retorna um objeto com srcSet para WebP e fallback
 */
export function getImageSources(imagePath: string) {
  return {
    webp: toWebP(imagePath),
    fallback: imagePath,
  };
}

/**
 * Verifica se o navegador suporta WebP
 */
export function supportsWebP(): boolean {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  return canvas.toDataURL('image/webp').indexOf('image/webp') === 5;
}

export default {
  toWebP,
  getImageSources,
  supportsWebP,
};
