import React from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  decoding?: "sync" | "async" | "auto";
}

/**
 * Componente de imagem otimizado com suporte a WebP e fallback
 * Converte automaticamente URLs de JPG/PNG para WebP com fallback
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  loading = "lazy",
  fetchPriority = "auto",
  decoding = "async",
}) => {
  // Se a URL já é WebP, usar como está
  const isWebP = src.endsWith(".webp");

  // Converter URL para WebP apenas se for JPG/PNG
  const shouldConvertToWebP = !isWebP && /\.(jpg|jpeg|png)$/i.test(src);
  const webpSrc = shouldConvertToWebP ? src.replace(/\.(jpg|jpeg|png)$/i, ".webp") : src;
  
  // Para imagens locais em /images/, usar a versão WebP se disponível
  const isLocalImage = src.startsWith("/images/");
  const localWebpSrc = isLocalImage && shouldConvertToWebP ? src.replace(/\.(jpg|jpeg|png)$/i, ".webp") : webpSrc;

  return (
    <picture>
      {/* Fonte WebP para navegadores modernos (apenas se convertido) */}
      {shouldConvertToWebP && <source srcSet={webpSrc} type="image/webp" />}
      {/* Imagem principal */}
      <img
        src={src}
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
