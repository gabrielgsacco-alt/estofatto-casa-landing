import React, { Suspense, lazy } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * Componente wrapper para lazy loading de seções
 * Renderiza um placeholder enquanto carrega
 */
export const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  fallback = <div className="h-96 bg-background animate-pulse" /> 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazySection;
