'use client';
import { useI18n } from '@/context/I18nContext';

const stats = [
  { num: '۲۰+', en_num: '20+', fa: 'سال تجربه',       en: 'Years of Experience',    color: '#7AB648' },
  { num: '۵۰۰+', en_num: '500+', fa: 'پروژه انجام‌شده',en: 'Completed Projects',     color: '#2D4FA3' },
  { num: '۸۰۰K', en_num: '800K', fa: 'مترمربع سالانه', en: 'Annual m² Capacity',     color: '#8B5EA4' },
  { num: '۱۵K',  en_num: '15K',  fa: 'متر کارخانه',    en: 'm² Factory Area',        color: '#A8CCE0' },
  { num: '۶',    en_num: '6',    fa: 'سری محصول',       en: 'Product Series',         color: '#7AB648' },
  { num: '۹۸٪',  en_num: '98%', fa: 'رضایت مشتری',     en: 'Client Satisfaction',    color: '#2D4FA3' },
];

export default function Stats() {
  const { t, dir, lang } = useI18n();
  return (
    <section className="py-20 relative overflow-hidden" dir={dir}>
      <div className="absolute inset-0">
        <img src="/images/hero-construction.png" alt=""
          className="w-full h-full object-cover opacity-15"/>
        <div className="absolute inset-0 bg-[#0a0d16]/90"/>
      </div>
      {/* Tri bar top */}
      <div className="tri-bar relative z-10"/>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className={`text-center mb-14`}>
          <div className="section-tag" style={{justifyContent:'center'}}>
            {t('آمار و ارقام', 'Statistics')}
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            {t('عملکرد ما به اعداد', 'Our Performance in Numbers')}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/8 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <div key={i}
              className="bg-[#0a0d16] flex flex-col items-center justify-center py-10 px-4 text-center
                         hover:bg-[#111520] transition-colors">
              <div className="text-3xl md:text-4xl font-black mb-2 leading-none"
                style={{color: s.color}}>
                {lang === 'fa' ? s.num : s.en_num}
              </div>
              <div className="text-xs text-white/45 leading-tight">{t(s.fa, s.en)}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="tri-bar relative z-10"/>
    </section>
  );
}

