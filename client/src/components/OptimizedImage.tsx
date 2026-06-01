import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  decoding?: 'sync' | 'async' | 'auto';
}

/**
 * Componente de imagem otimizado com suporte a WebP e fallback
 * Converte automaticamente URLs de JPG/PNG para WebP com fallback
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  decoding = 'async',
}) => {
  // Converter URL para WebP (substitui extensão)
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  // Manter a URL original como fallback
  const originalSrc = src;

  return (
    <picture>
      {/* Fonte WebP para navegadores modernos */}
      <source 
        srcSet={webpSrc}
        type="image/webp"
      />
      {/* Fallback para navegadores antigos */}
      <img
        src={originalSrc}
        alt={alt}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
      />
    </picture>
  );
};

export default OptimizedImage;
