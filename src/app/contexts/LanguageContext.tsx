import React, { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';

export type Language = 'EN' | 'KR' | 'JA' | 'ZH';

interface LanguageContextType {
  language: Language;
  setLang: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (en: string, kr?: string, ja?: string, zh?: string) => string;
}

const LANG_ORDER: Language[] = ['EN', 'KR', 'JA', 'ZH'];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN');

  const setLang = useCallback((lang: Language) => {
    setLanguage(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const idx = LANG_ORDER.indexOf(prev);
      return LANG_ORDER[(idx + 1) % LANG_ORDER.length];
    });
  }, []);

  const t = useCallback((en: string, kr?: string, ja?: string, zh?: string): string => {
    switch (language) {
      case 'KR': return kr || en;
      case 'JA': return ja || en;
      case 'ZH': return zh || en;
      default:   return en;
    }
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLang,
    toggleLanguage,
    t
  }), [language, setLang, toggleLanguage, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
