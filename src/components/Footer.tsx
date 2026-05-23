'use client';
import { useI18n } from '@/context/I18nContext';

export default function Footer() {
  const { t, dir } = useI18n();
  return (
    <footer className="bg-[#070a10] border-t border-white/5" dir={dir}>
      <div className="tri-bar"/>
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                <polygon points="20,2 37,11 37,29 20,38 3,29 3,11"
                  stroke="url(#fg)" strokeWidth="1.5" fill="none"/>
                {[0,1,2,3,4,5].map(i => {
                  const a = (i*60-90)*Math.PI/180, r=10;
                  return <circle key={i} cx={20+r*Math.cos(a)} cy={20+r*Math.sin(a)} r="2"
                    fill={['#7AB648','#2D4FA3','#8B5EA4','#A8CCE0','#2D4FA3','#7AB648'][i]}/>;
                })}
                <defs>
                  <linearGradient id="fg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#7AB648"/><stop offset="100%" stopColor="#8B5EA4"/>
                  </linearGradient>
                </defs>
              </svg>
              <div>
                <div className="font-black text-white">{t('شرکت آسه پانل', 'ASEH Panel Co.')}</div>
                <div className="text-[11px] text-white/40">{t('پانل ساندویچی و سردخانه', 'Sandwich Panel & Cold Storage')}</div>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-sm">
              {t(
                'تولیدکننده پیشرو پانل‌های ساندویچی با بیش از ۲۰ سال تجربه، مطابق استانداردهای بین‌المللی EN 14509 و ISO 9001.',
                'Leading sandwich panel manufacturer with 20+ years experience, compliant with EN 14509 and ISO 9001 international standards.'
              )}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">{t('دسترسی سریع', 'Quick Links')}</h4>
            <ul className="space-y-2.5">
              {[
                { fa: 'محصولات',   en: 'Products',    href: '#products' },
                { fa: 'سردخانه',   en: 'Cold Storage', href: '#cold' },
                { fa: 'پروژه‌ها',  en: 'Projects',    href: '#projects' },
                { fa: 'درباره ما', en: 'About',       href: '#about' },
                { fa: 'تماس',      en: 'Contact',     href: '#contact' },
              ].map(item => (
                <li key={item.href}>
                  <a href={item.href}
                    className="text-sm text-white/40 hover:text-[#7AB648] transition-colors">
                    {t(item.fa, item.en)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">{t('گواهینامه‌ها', 'Certifications')}</h4>
            <div className="flex flex-wrap gap-2">
              {['EN 14509', 'ISO 9001', 'FM Global', 'CE Mark', 'ISIRI 6245', 'HACCP'].map(c => (
                <span key={c}
                  className="px-2.5 py-1 rounded-full text-[10px] font-bold border border-white/15 text-white/50">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            {t(
              '© ۱۴۰۳ شرکت آسه پانل — تمامی حقوق محفوظ است',
              '© 2024 ASEH Panel Co. — All rights reserved'
            )}
          </p>
          <p className="text-xs text-white/20">
            {t('طراحی و توسعه با فناوری AI', 'Designed & developed with AI technology')}
          </p>
        </div>
      </div>
    </footer>
  );
}

