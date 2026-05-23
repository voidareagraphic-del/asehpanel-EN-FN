'use client';
import { useI18n } from '@/context/I18nContext';
import { MapPin, Calendar, Ruler } from 'lucide-react';

const projects = [
  {
    img: '/images/hero-construction.png',
    fa: { name: 'مرکز لجستیک تهران', type: 'سردخانه + صنعتی', location: 'تهران' },
    en: { name: 'Tehran Logistics Hub', type: 'Cold Storage + Industrial', location: 'Tehran' },
    area: '42,000 m²', year: '2023', tag: 'CS + WA',
  },
  {
    img: '/images/hero-manufacturing.png',
    fa: { name: 'کارخانه فرآوری مواد غذایی اصفهان', type: 'صنایع غذایی', location: 'اصفهان' },
    en: { name: 'Isfahan Food Processing Plant', type: 'Food Industry', location: 'Isfahan' },
    area: '28,000 m²', year: '2022', tag: 'CS-200',
  },
  {
    img: '/images/section-exterior.png',
    fa: { name: 'مرکز توزیع مشهد', type: 'لجستیک', location: 'مشهد' },
    en: { name: 'Mashhad Distribution Center', type: 'Logistics', location: 'Mashhad' },
    area: '35,500 m²', year: '2022', tag: 'RO + WA',
  },
  {
    img: '/images/section-coldroom.png',
    fa: { name: 'سردخانه داروخانه شیراز', type: 'داروسازی', location: 'شیراز' },
    en: { name: 'Shiraz Pharma Cold Store', type: 'Pharmaceutical', location: 'Shiraz' },
    area: '8,200 m²', year: '2023', tag: 'CS-100',
  },
];

export default function Projects() {
  const { t, dir } = useI18n();
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#0a0d16]" dir={dir}>
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className={`mb-14 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
          <div className="section-tag">{t('پروژه‌های ما', 'Our Projects')}</div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            {t('پروژه‌های تکمیل‌شده', 'Completed Projects')}
          </h2>
          <p className="text-white/50 text-base">
            {t('بیش از ۵۰۰ پروژه صنعتی در سراسر ایران',
               'Over 500 industrial projects across Iran')}
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i}
              className="glow-card group relative rounded-2xl overflow-hidden border border-white/8
                         bg-[#11141f] cursor-pointer">
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img src={p.img} alt={t(p.fa.name, p.en.name)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#11141f] via-[#11141f]/30 to-transparent"/>
                {/* Tag */}
                <span className="absolute top-4 end-4 px-2.5 py-1 rounded-full text-[10px] font-bold
                                 bg-[#2D4FA3]/90 text-white backdrop-blur-sm">
                  {p.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-black text-white mb-3 leading-snug">
                  {t(p.fa.name, p.en.name)}
                </h3>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/45">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-[#7AB648]"/>
                    {t(p.fa.location, p.en.location)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-[#7AB648]"/>
                    {p.year}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Ruler size={12} className="text-[#7AB648]"/>
                    {p.area}
                  </span>
                </div>
                <div className="mt-3 text-xs font-medium" style={{color:'#A8CCE0'}}>
                  {t(p.fa.type, p.en.type)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

