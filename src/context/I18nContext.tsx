'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'fa' | 'en';
interface I18nCtx {
  lang: Lang;
  toggle: () => void;
  t: (fa: string, en: string) => string;
  dir: 'rtl' | 'ltr';
}
const I18nContext = createContext<I18nCtx>({
  lang: 'fa', toggle: () => {}, t: (fa) => fa, dir: 'rtl',
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fa');
  const toggle = () => setLang(l => l === 'fa' ? 'en' : 'fa');
  const t = (fa: string, en: string) => lang === 'fa' ? fa : en;
  const dir = lang === 'fa' ? 'rtl' : 'ltr';
  return (
    <I18nContext.Provider value={{ lang, toggle, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);

