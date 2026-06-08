import { useEffect } from 'react';

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

/**
 * Hook para rastrear e armazenar parâmetros UTM
 * Persiste os parâmetros no localStorage para serem usados em conversões
 */
export function useUTMTracking() {
  useEffect(() => {
    // Extrair parâmetros UTM da URL
    const params = new URLSearchParams(window.location.search);
    const utmParams: UTMParams = {
      utm_source: params.get('utm_source') || undefined,
      utm_medium: params.get('utm_medium') || undefined,
      utm_campaign: params.get('utm_campaign') || undefined,
      utm_content: params.get('utm_content') || undefined,
      utm_term: params.get('utm_term') || undefined,
    };

    // Se houver parâmetros UTM, armazenar no localStorage
    if (Object.values(utmParams).some(v => v)) {
      localStorage.setItem('utm_params', JSON.stringify(utmParams));
      
      // Rastrear no Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'page_view', {
          utm_source: utmParams.utm_source,
          utm_medium: utmParams.utm_medium,
          utm_campaign: utmParams.utm_campaign,
          utm_content: utmParams.utm_content,
          utm_term: utmParams.utm_term,
        });
      }

      // Rastrear no Facebook Pixel
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'ViewContent', {
          content_name: 'Landing Page',
          content_type: 'product',
          utm_source: utmParams.utm_source,
          utm_campaign: utmParams.utm_campaign,
        });
      }
    }
  }, []);

  // Retornar função para obter UTM params armazenados
  const getUTMParams = (): UTMParams => {
    try {
      const stored = localStorage.getItem('utm_params');
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  };

  return { getUTMParams };
}
