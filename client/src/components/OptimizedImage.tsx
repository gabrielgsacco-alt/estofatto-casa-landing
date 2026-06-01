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
 * Evita conversão para URLs que já são WebP ou que usam /manus-storage/
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
  const isManusStor = src.includes("/manus-storage/");

  // Converter URL para WebP apenas se for JPG/PNG e NÃO for /manus-storage/
  const shouldConvertToWebP = !isWebP && !isManusStor && /\.(jpg|jpeg|png)$/i.test(src);
  const webpSrc = shouldConvertToWebP ? src.replace(/\.(jpg|jpeg|png)$/i, ".webp") : src;

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
