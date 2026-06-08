import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useUTMTracking } from './useUTMTracking';

describe('useUTMTracking', () => {
  beforeEach(() => {
    // Limpar localStorage antes de cada teste
    localStorage.clear();
    
    // Mock do gtag
    (window as any).gtag = vi.fn();
    
    // Mock do fbq
    (window as any).fbq = vi.fn();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('deve extrair e armazenar parâmetros UTM da URL', () => {
    // Simular URL com parâmetros UTM
    const originalLocation = window.location;
    delete (window as any).location;
    (window as any).location = {
      search: '?utm_source=google&utm_medium=cpc&utm_campaign=summer_sale',
      href: 'https://example.com?utm_source=google&utm_medium=cpc&utm_campaign=summer_sale',
    };

    const { result } = renderHook(() => useUTMTracking());
    
    const utmParams = result.current.getUTMParams();
    
    expect(utmParams.utm_source).toBe('google');
    expect(utmParams.utm_medium).toBe('cpc');
    expect(utmParams.utm_campaign).toBe('summer_sale');

    // Restaurar location
    (window as any).location = originalLocation;
  });

  it('deve rastrear no Google Analytics quando houver parâmetros UTM', () => {
    const originalLocation = window.location;
    delete (window as any).location;
    (window as any).location = {
      search: '?utm_source=facebook&utm_medium=social',
      href: 'https://example.com?utm_source=facebook&utm_medium=social',
    };

    renderHook(() => useUTMTracking());
    
    expect((window as any).gtag).toHaveBeenCalledWith(
      'event',
      'page_view',
      expect.objectContaining({
        utm_source: 'facebook',
        utm_medium: 'social',
      })
    );

    (window as any).location = originalLocation;
  });

  it('deve rastrear no Facebook Pixel quando houver parâmetros UTM', () => {
    const originalLocation = window.location;
    delete (window as any).location;
    (window as any).location = {
      search: '?utm_source=instagram&utm_campaign=promo',
      href: 'https://example.com?utm_source=instagram&utm_campaign=promo',
    };

    renderHook(() => useUTMTracking());
    
    expect((window as any).fbq).toHaveBeenCalledWith(
      'track',
      'ViewContent',
      expect.objectContaining({
        utm_source: 'instagram',
        utm_campaign: 'promo',
      })
    );

    (window as any).location = originalLocation;
  });

  it('deve retornar objeto vazio quando não houver parâmetros UTM', () => {
    const originalLocation = window.location;
    delete (window as any).location;
    (window as any).location = {
      search: '',
      href: 'https://example.com',
    };

    const { result } = renderHook(() => useUTMTracking());
    
    const utmParams = result.current.getUTMParams();
    
    expect(Object.values(utmParams).filter(v => v).length).toBe(0);

    (window as any).location = originalLocation;
  });

  it('deve persistir parâmetros UTM no localStorage', () => {
    const originalLocation = window.location;
    delete (window as any).location;
    (window as any).location = {
      search: '?utm_source=email&utm_medium=newsletter&utm_campaign=march',
      href: 'https://example.com?utm_source=email&utm_medium=newsletter&utm_campaign=march',
    };

    renderHook(() => useUTMTracking());
    
    const stored = localStorage.getItem('utm_params');
    expect(stored).toBeDefined();
    
    const parsed = JSON.parse(stored!);
    expect(parsed.utm_source).toBe('email');
    expect(parsed.utm_medium).toBe('newsletter');
    expect(parsed.utm_campaign).toBe('march');

    (window as any).location = originalLocation;
  });
});
