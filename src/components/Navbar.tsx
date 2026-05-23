'use client';
import { useState, useEffect } from 'react';
import { useI18n } from '@/context/I18nContext';
import { Menu, X, Globe } from 'lucide-react';

const navItems = [
  { fa: 'خانه',       en: 'Home',       href: '#hero' },
  { fa: 'محصولات',   en: 'Products',    href: '#products' },
  { fa: 'سردخانه',   en: 'Cold Storage',href: '#cold' },
  { fa: 'پروژه‌ها',  en: 'Projects',    href: '#projects' },
  { fa: 'درباره ما', en: 'About',       href: '#about' },
  { fa: 'تماس',      en: 'Contact',     href: '#contact' },
];

export default function Navbar() {
  const { lang, toggle, t, dir } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      dir={dir}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            {/* Hex logo SVG */}
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
              <polygon points="20,2 37,11 37,29 20,38 3,29 3,11"
                stroke="url(#hexGrad)" strokeWidth="1.5" fill="none"/>
              <polygon points="20,8 32,15 32,25 20,32 8,25 8,15"
                fill="url(#hexGrad)" opacity="0.15"/>
              {[0,1,2,3,4,5].map(i => {
                const a = (i * 60 - 90) * Math.PI / 180;
                const r = 10;
                const x = 20 + r * Math.cos(a);
                const y = 20 + r * Math.sin(a);
                return <circle key={i} cx={x} cy={y} r="2.2"
                  fill={['#7AB648','#2D4FA3','#8B5EA4','#A8CCE0','#2D4FA3','#7AB648'][i]}/>;
              })}
              <defs>
                <linearGradient id="hexGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop offset="0%"   stopColor="#7AB648"/>
                  <stop offset="50%"  stopColor="#2D4FA3"/>
                  <stop offset="100%" stopColor="#8B5EA4"/>
                </linearGradient>
              </defs>
            </svg>
            <div>
              <div className="font-bold text-white text-base leading-tight tracking-wide">
                {t('آسه پانل', 'ASEH Panel')}
              </div>
              <div className="text-[10px] text-[#A8CCE0] leading-tight">
                {t('پانل ساندویچی و سردخانه', 'Sandwich Panel & Cold Storage')}
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <a key={item.href} href={item.href}
                className="px-4 py-2 text-sm text-white/70 hover:text-white rounded-lg
                           hover:bg-white/5 transition-all duration-200 font-medium">
                {t(item.fa, item.en)}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold
                         border border-white/15 text-white/80 hover:text-white hover:border-[#7AB648]
                         transition-all duration-200 glass"
            >
              <Globe size={13}/>
              <span>{lang === 'fa' ? 'EN' : 'FA'}</span>
            </button>

            {/* CTA */}
            <a href="#contact"
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold
                         bg-[#7AB648] text-white hover:bg-[#6aa038] transition-all duration-200 shadow-md shadow-[#7AB648]/20">
              {t('مشاوره رایگان', 'Free Consultation')}
            </a>

            {/* Mobile menu toggle */}
            <button onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-white/80 hover:text-white">
              {open ? <X size={20}/> : <Menu size={20}/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div dir={dir} className="md:hidden glass-dark border-t border-white/10 px-6 py-4">
          {navItems.map(item => (
            <a key={item.href} href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-white/80 hover:text-white border-b border-white/5 text-sm">
              {t(item.fa, item.en)}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="mt-4 flex justify-center items-center py-3 rounded-xl bg-[#7AB648] text-white text-sm font-bold">
            {t('درخواست مشاوره', 'Request Consultation')}
          </a>
        </div>
      )}
    </header>
  );
}

