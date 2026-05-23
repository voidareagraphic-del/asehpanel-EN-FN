'use client';
import { useI18n } from '@/context/I18nContext';
import { Layers, Shield, Snowflake, Flame, Wind, Check } from 'lucide-react';

const products = [
  {
    id: 'RO',
    icon: Layers,
    color: '#7AB648',
    fa: { name: 'پانل سقفی', core: 'هسته پلی‌یورتان', desc: 'پانل سقفی با عملکرد بالا برای سالن‌های صنعتی، لجستیک و سردخانه. عایق حرارتی فوق‌العاده با وزن سبک.' },
    en: { name: 'Roof Panel', core: 'Polyurethane Core', desc: 'High-performance insulated roof panels for industrial buildings, logistics centers and cold storage. Exceptional thermal insulation at low weight.' },
    specs: [
      { fa: 'ضخامت: ۴۰–۱۰۰ میل',   en: 'Thickness: 40–100 mm' },
      { fa: 'عرض: ۱۰۰۰ میل',         en: 'Width: 1000 mm' },
      { fa: 'طول تا ۱۳ متر',          en: 'Length up to 13 m' },
      { fa: 'U = ≤۰.۲۳ W/m²K',        en: 'U ≤ 0.23 W/m²K' },
    ],
  },
  {
    id: 'WA',
    icon: Shield,
    color: '#2D4FA3',
    fa: { name: 'پانل دیواری', core: 'هسته پشم معدنی', desc: 'پانل دیواری غیرقابل‌احتراق با مقاومت بالا در برابر آتش. مطابق REI 60 برای ساختمان‌های صنعتی و تجاری.' },
    en: { name: 'Wall Panel', core: 'Mineral Wool Core', desc: 'Non-combustible wall panels with superior fire resistance. REI 60 rated for demanding industrial and commercial buildings.' },
    specs: [
      { fa: 'ضخامت: ۶۰–۱۲۰ میل',   en: 'Thickness: 60–120 mm' },
      { fa: 'رتبه آتش: REI 60',       en: 'Fire rating: REI 60' },
      { fa: 'عرض ۱۰۰۰/۱۱۵۰ میل',    en: 'Width 1000/1150 mm' },
      { fa: 'EN 14509 تأیید شده',     en: 'EN 14509 certified' },
    ],
  },
  {
    id: 'CS',
    icon: Snowflake,
    color: '#A8CCE0',
    fa: { name: 'پانل سردخانه', core: 'هسته PIR', desc: 'پانل تخصصی برای سردخانه‌های صنعتی با دمای -۴۰°C تا +۱۵°C. سیستم اتصال هوابند با رطوبت‌بندی کامل.' },
    en: { name: 'Cold Storage Panel', core: 'PIR Core', desc: 'Specialized panels for industrial cold rooms at -40°C to +15°C. Airtight tongue & groove joint system with complete vapour barrier.' },
    specs: [
      { fa: 'ضخامت: ۸۰–۲۰۰ میل',   en: 'Thickness: 80–200 mm' },
      { fa: 'دما: -۴۰ تا +۱۵°C',     en: 'Temp: -40 to +15°C' },
      { fa: 'λ = ۰.۰۲۲ W/mK',        en: 'λ = 0.022 W/mK' },
      { fa: 'اتصال زبانه و شیار',    en: 'Tongue & groove joint' },
    ],
  },
  {
    id: 'SF',
    icon: Flame,
    color: '#8B5EA4',
    fa: { name: 'پانل ضدحریق', core: 'هسته ویژه A1', desc: 'پانل ضدحریق کلاس A1 برای محیط‌های با ریسک بالا. بدون آزاد شدن دود مضر. مورد تأیید FM Global.' },
    en: { name: 'Fire Shield Panel', core: 'Class A1 Core', desc: 'Class A1 fire-rated panels for high-risk environments. Zero toxic smoke release. FM Global approved for insured facilities.' },
    specs: [
      { fa: 'کلاس A1 / REI 120',       en: 'Class A1 / REI 120' },
      { fa: 'تأیید FM Global',           en: 'FM Global approved' },
      { fa: 'بدون دود سمی',              en: 'Zero toxic smoke' },
      { fa: 'ضخامت: ۱۰۰–۱۵۰ میل',     en: 'Thickness: 100–150 mm' },
    ],
  },
];

export default function Products() {
  const { t, dir } = useI18n();
  return (
    <section id="products" className="py-24 md:py-32 relative" dir={dir}>
      {/* Background image with strong overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/images/hero-manufacturing.png" alt=""
          className="w-full h-full object-cover opacity-10"/>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1A] via-[#0D0D1A]/95 to-[#0D0D1A]"/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className={`mb-16 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
          <div className="section-tag">{t('محصولات ما', 'Our Products')}</div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            {t('سیستم‌های پانل ساندویچی', 'Sandwich Panel Systems')}
          </h2>
          <p className="text-white/50 text-base max-w-2xl">
            {t(
              'چهار خط محصول تخصصی برای هر نیاز صنعتی — از سردخانه تا سالن ضدحریق',
              'Four specialized product lines for every industrial need — from cold storage to fire-rated buildings'
            )}
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.id}
                className="glow-card glass rounded-2xl overflow-hidden border border-white/8 group">
                {/* Color top bar */}
                <div className="h-1" style={{background: p.color}}/>

                <div className="p-7 md:p-8">
                  <div className="flex items-start gap-5 mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{background: `${p.color}22`}}>
                      <Icon size={22} style={{color: p.color}}/>
                    </div>
                    <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
                      <div className="text-xs font-bold uppercase tracking-widest mb-0.5"
                        style={{color: p.color}}>
                        {p.id} Series
                      </div>
                      <h3 className="text-xl font-black text-white leading-tight">
                        {t(p.fa.name, p.en.name)}
                      </h3>
                      <div className="text-sm text-white/40">{t(p.fa.core, p.en.core)}</div>
                    </div>
                  </div>

                  <p className="text-white/55 text-sm leading-relaxed mb-6">
                    {t(p.fa.desc, p.en.desc)}
                  </p>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-2">
                    {p.specs.map((s, i) => (
                      <div key={i}
                        className="flex items-center gap-2 text-xs text-white/60">
                        <Check size={12} style={{color: p.color, flexShrink: 0}}/>
                        {t(s.fa, s.en)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Download CTA */}
        <div className="mt-12 text-center">
          <a href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2D4FA3] text-white
                       font-bold text-sm hover:bg-[#2545a0] transition-all duration-200 shadow-xl shadow-[#2D4FA3]/30">
            {t('دانلود کاتالوگ فنی', 'Download Technical Catalogue')}
          </a>
        </div>
      </div>
    </section>
  );
}

