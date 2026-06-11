import React from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  decoding?: "sync" | "async" | "auto";
  onClick?: () => void;
  style?: React.CSSProperties;
  [key: string]: any;
}

/**
 * Componente de imagem simples e portável.
 *
 * Importante: usamos o arquivo de imagem exatamente como informado em `src`,
 * sem gerar variações .webp automaticamente. Isso garante que as imagens
 * sempre carreguem corretamente — tanto no preview quanto após exportar o
 * projeto para outro servidor (ex.: Hostinger), onde só existem os arquivos
 * originais enviados (.jpg / .JPG / .webp).
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  loading = "lazy",
  fetchPriority = "auto",
  decoding = "async",
  onClick,
  style,
  ...rest
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding={decoding}
      onClick={onClick}
      style={style}
      {...rest}
    />
  );
};

export default OptimizedImage;
