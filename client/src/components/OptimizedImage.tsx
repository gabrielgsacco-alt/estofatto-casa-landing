import React from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  decoding?: "sync" | "async" | "auto";
  width?: number;
  height?: number;
}

/**
 * Componente de imagem otimizado com suporte a AVIF, WebP e fallback
 * Prioriza AVIF > WebP > JPG/PNG para máxima compressão
 * Evita conversão para URLs que já são WebP/AVIF ou que usam /manus-storage/
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  loading = "lazy",
  fetchPriority = "auto",
  decoding = "async",
  width,
  height,
}) => {
  // Se a URL já é WebP/AVIF, usar como está
  const isWebP = src.endsWith(".webp");
  const isAVIF = src.endsWith(".avif");
  const isManusStor = src.includes("/manus-storage/");

  // Converter URL para AVIF e WebP apenas se for JPG/PNG e NÃO for /manus-storage/
  const shouldConvert = !isWebP && !isAVIF && !isManusStor && /\.(jpg|jpeg|png)$/i.test(src);
  const avifSrc = shouldConvert ? src.replace(/\.(jpg|jpeg|png)$/i, ".avif") : null;
  const webpSrc = shouldConvert ? src.replace(/\.(jpg|jpeg|png)$/i, ".webp") : null;

  return (
    <picture className="w-full h-full block">
      {/* Fonte AVIF para navegadores modernos (melhor compressão) */}
      {avifSrc && <source srcSet={avifSrc} type="image/avif" />}
      {/* Fonte WebP para navegadores que suportam (fallback) */}
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      {/* Imagem principal com fallback */}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        width={width}
        height={height}
        style={{
          contentVisibility: "auto",
          containIntrinsicSize: width && height ? `${width}px ${height}px` : undefined,
        }}
      />
    </picture>
  );
};

export default OptimizedImage;
