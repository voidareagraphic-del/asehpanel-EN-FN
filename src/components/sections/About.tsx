'use client';
import { useI18n } from '@/context/I18nContext';
import { Award, Users, Globe, Factory } from 'lucide-react';

export default function About() {
  const { t, dir } = useI18n();
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0D0D1A]" dir={dir}>
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <div className={`relative ${dir === 'rtl' ? 'lg:order-2' : ''}`}>
            <div className="relative rounded-2xl overflow-hidden">
              <img src="/images/section-panel-xray.png"
                alt={t('آسه پانل', 'ASEH Panel')}
                className="w-full h-80 md:h-96 object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A]/60 to-transparent"/>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 end-6 glass-dark rounded-xl px-5 py-4 border border-white/10">
              <div className="text-2xl font-black text-[#7AB648]">ISO 9001</div>
              <div className="text-xs text-white/50">{t('تأیید شده', 'Certified')}</div>
            </div>
            {/* Color accent strip */}
            <div className="absolute -start-2 top-10 bottom-10 w-1 rounded-full
                            bg-gradient-to-b from-[#7AB648] via-[#2D4FA3] to-[#8B5EA4]"/>
          </div>

          {/* Text side */}
          <div className={dir === 'rtl' ? 'lg:order-1 text-right' : 'text-left'}>
            <div className="section-tag">{t('درباره ما', 'About Us')}</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              {t(
                'پیشرو در صنعت پانل\nساندویچی ایران',
                'Leading Iran\'s Sandwich\nPanel Industry'
              )}
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-8">
              {t(
                'شرکت آسه پانل با بیش از ۲۰ سال تجربه در تولید پانل‌های ساندویچی و راهکارهای سردخانه صنعتی، با ظرفیت تولید ۸۰۰,۰۰۰ مترمربع در سال و خطوط تولید کاملاً اتوماتیک در ۱۵,۰۰۰ متر کارخانه، محصولاتی با بالاترین استانداردهای بین‌المللی ارائه می‌دهد.',
                'ASEH Panel Company, with over 20 years of experience in sandwich panel manufacturing and industrial cold storage solutions, delivers products meeting the highest international standards from our 15,000 m² fully automated facility with 800,000 m² annual production capacity.'
              )}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Award, fa: 'استانداردهای EN14509 و ISO 9001', en: 'EN14509 & ISO 9001 Standards' },
                { icon: Factory, fa: 'خط تولید اتوماتیک', en: 'Automated Production Line' },
                { icon: Users, fa: 'تیم مهندسی متخصص', en: 'Expert Engineering Team' },
                { icon: Globe, fa: 'پوشش سراسری ایران', en: 'Nationwide Coverage' },
              ].map(({ icon: Icon, fa, en }, i) => (
                <div key={i} className="flex items-start gap-3 p-4 glass rounded-xl border border-white/8">
                  <Icon size={16} className="text-[#7AB648] mt-0.5 flex-shrink-0"/>
                  <span className="text-sm text-white/70 leading-snug">{t(fa, en)}</span>
                </div>
              ))}
            </div>

            <a href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7AB648] text-white
                         font-bold text-sm hover:bg-[#6aa038] transition-all duration-200">
              {t('ارتباط با ما', 'Contact Us')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

