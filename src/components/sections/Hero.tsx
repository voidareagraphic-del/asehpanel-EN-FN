'use client';
import { useEffect, useRef } from 'react';
import { useI18n } from '@/context/I18nContext';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const { t, dir } = useI18n();
  const videoRef = useRef<HTMLDivElement>(null);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-corridor.png"
          alt="ASEH Panel industrial facility"
          className="w-full h-full object-cover object-center"
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1A]/80 via-[#0D0D1A]/50 to-[#0D0D1A]/90"/>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D1A]/60 via-transparent to-[#0D0D1A]/30"/>
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '60px 60px'}}/>

      {/* Brand accent lines */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#7AB648] to-transparent opacity-60"/>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2D4FA3] to-transparent opacity-40"/>

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 pt-28 pb-20 w-full" dir={dir}>
        <div className={`max-w-3xl ${dir === 'rtl' ? 'mr-0 ml-auto md:ml-0 md:mr-0' : ''}`}>

          {/* Tag */}
          <div className="section-tag fade-up delay-1">
            {t('تولیدکننده پیشرو', 'Leading Manufacturer')}
          </div>

          {/* Main headline */}
          <h1 className="fade-up delay-2 text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="block text-white">
              {t('پانل ساندویچی', 'Sandwich Panels')}
            </span>
            <span className="block shimmer-text">
              {t('با استانداردهای جهانی', 'World-Class Standards')}
            </span>
          </h1>

          {/* Sub */}
          <p className="fade-up delay-3 text-base md:text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
            {t(
              'طراحی، تولید و نصب پانل‌های ساندویچی و سیستم‌های سردخانه صنعتی با بیش از ۲۰ سال تجربه. مطابق استانداردهای EN 14509 و ISO 9001.',
              'Design, manufacturing and installation of sandwich panels and industrial cold storage systems with 20+ years of experience. Compliant with EN 14509 and ISO 9001 standards.'
            )}
          </p>

          {/* CTAs */}
          <div className={`fade-up delay-4 flex flex-wrap gap-4 ${dir === 'rtl' ? 'flex-row-reverse justify-end' : ''}`}>
            <a href="#products"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#7AB648] text-white
                         font-bold text-sm hover:bg-[#6aa038] transition-all duration-200
                         shadow-xl shadow-[#7AB648]/30 hover:shadow-[#7AB648]/50">
              {t('مشاهده محصولات', 'View Products')}
              {dir === 'rtl' ? <ArrowLeft size={16}/> : <ArrowRight size={16}/>}
            </a>
            <a href="#contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full glass text-white/90
                         font-bold text-sm hover:bg-white/10 transition-all duration-200 border border-white/20">
              {t('درخواست مشاوره', 'Get Consultation')}
            </a>
          </div>

          {/* Stats strip */}
          <div className={`fade-up delay-4 mt-16 grid grid-cols-3 gap-0 max-w-lg
                           border border-white/10 rounded-2xl overflow-hidden glass-dark`}>
            {[
              { num: '۲۰+', fa: 'سال تجربه',      en: 'Years Exp.' },
              { num: '۵۰۰+', fa: 'پروژه',          en: 'Projects' },
              { num: '۸۰۰K', fa: 'm² سالانه',       en: 'm²/Year' },
            ].map((s, i) => (
              <div key={i} className={`px-5 py-5 text-center ${i < 2 ? 'border-e border-white/10' : ''}`}>
                <div className="text-2xl font-black text-[#A8CCE0]">{s.num}</div>
                <div className="text-xs text-white/50 mt-0.5">{t(s.fa, s.en)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors flex flex-col items-center gap-1">
        <span className="text-[10px] tracking-widest uppercase">{t('ادامه', 'Scroll')}</span>
        <ChevronDown size={18} className="animate-bounce"/>
      </a>
    </section>
  );
}

