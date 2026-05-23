'use client';
import { useI18n } from '@/context/I18nContext';
import { Thermometer, Droplets, Zap, Settings } from 'lucide-react';

const rooms = [
  { fa: 'انجماد عمیق',    en: 'Deep Freeze',     temp: '-40°C / -18°C', icon: '❄', color: '#A8CCE0' },
  { fa: 'سردخانه تازه',   en: 'Chill Room',      temp: '0°C / +8°C',    icon: '🌡', color: '#7AB648' },
  { fa: 'اتاق داروخانه',  en: 'Pharma Cold',     temp: '+2°C / +8°C',   icon: '💊', color: '#8B5EA4' },
  { fa: 'اتاق تمیز',      en: 'Clean Room',      temp: 'ISO 6–8',       icon: '⚗', color: '#2D4FA3' },
  { fa: 'انجماد سریع',    en: 'Blast Freezing',  temp: '-35°C blast',   icon: '⚡', color: '#A8CCE0' },
  { fa: 'رسیدن میوه',     en: 'Ripening Room',   temp: '+14°C / +18°C', icon: '🍌', color: '#7AB648' },
];

export default function ColdStorage() {
  const { t, dir } = useI18n();
  return (
    <section id="cold" className="py-24 md:py-32 relative overflow-hidden" dir={dir}>

      {/* Full-bleed BG image */}
      <div className="absolute inset-0">
        <img src="/images/section-coldroom.png" alt=""
          className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1A]/95 via-[#0D0D1A]/70 to-[#0D0D1A]/95"/>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D1A]/80 via-transparent to-[#0D0D1A]/80"/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className={`max-w-2xl mb-16 ${dir === 'rtl' ? 'ms-auto text-right' : 'me-auto text-left'}`}>
          <div className="section-tag" style={{color:'#A8CCE0'}}>
            {t('سردخانه صنعتی', 'Cold Storage')}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
            {t(
              'راهکارهای یکپارچه\nزنجیره سرد',
              'Integrated Cold Chain\nEngineering'
            )}
          </h2>
          <p className="text-white/55 text-base leading-relaxed">
            {t(
              'از طراحی تا نصب و راه‌اندازی — سردخانه‌های صنعتی با پانل‌های PIR آسه پانل برای هر دما و کاربرد. تیم مهندسی ما تمامی مراحل پروژه را پوشش می‌دهد.',
              'From design to installation and commissioning — industrial cold rooms with ASEH Panel PIR panels for every temperature and application. Our engineering team covers every project phase.'
            )}
          </p>
        </div>

        {/* Room types grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
          {rooms.map((r, i) => (
            <div key={i}
              className="glass glow-card rounded-xl p-5 flex flex-col gap-3 border border-white/8">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{r.icon}</span>
                <div>
                  <div className="font-bold text-white text-sm">{t(r.fa, r.en)}</div>
                  <div className="text-xs font-mono" style={{color: r.color}}>{r.temp}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Thermometer, fa: 'کنترل دمای دقیق', en: 'Precise Temperature Control',
              desc_fa: 'پایش ۲۴ ساعته با سیستم BMS', desc_en: '24/7 monitoring with BMS' },
            { icon: Droplets, fa: 'هوابندی کامل', en: 'Full Airtightness',
              desc_fa: 'سیستم زبانه و شیار با رطوبت‌بند', desc_en: 'T&G system with vapour barrier' },
            { icon: Zap, fa: 'بهینه‌سازی انرژی', en: 'Energy Optimization',
              desc_fa: 'تا ۴۰٪ کاهش مصرف برق', desc_en: 'Up to 40% electricity saving' },
            { icon: Settings, fa: 'نصب و نگهداری', en: 'Install & Maintain',
              desc_fa: 'تیم متخصص در سراسر کشور', desc_en: 'Expert teams nationwide' },
          ].map(({ icon: Icon, fa, en, desc_fa, desc_en }, i) => (
            <div key={i}
              className="glass-dark rounded-xl p-6 border border-white/8 hover:border-[#A8CCE0]/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#A8CCE0]/10 flex items-center justify-center mb-4">
                <Icon size={18} className="text-[#A8CCE0]"/>
              </div>
              <h4 className="text-white font-bold text-sm mb-1.5">{t(fa, en)}</h4>
              <p className="text-white/45 text-xs leading-relaxed">{t(desc_fa, desc_en)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

