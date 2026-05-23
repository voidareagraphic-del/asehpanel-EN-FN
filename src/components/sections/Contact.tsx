'use client';
import { useState } from 'react';
import { useI18n } from '@/context/I18nContext';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const { t, dir } = useI18n();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden" dir={dir}>
      <div className="absolute inset-0">
        <img src="/images/section-exterior.png" alt=""
          className="w-full h-full object-cover opacity-10"/>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d16] via-[#0a0d16]/95 to-[#0a0d16]"/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-tag" style={{justifyContent:'center'}}>
            {t('تماس با ما', 'Contact Us')}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            {t('درخواست مشاوره رایگان', 'Request Free Consultation')}
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            {t(
              'کارشناسان ما آماده پاسخگویی به سوالات فنی و ارائه پیشنهاد قیمت هستند.',
              'Our experts are ready to answer technical questions and provide quotations.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {[
              { icon: Phone,  fa: 'تلفن',            en: 'Phone',    val: '+98 (21) 8800 1234' },
              { icon: Mail,   fa: 'ایمیل',            en: 'Email',    val: 'info@asehpanel.com' },
              { icon: MapPin, fa: 'آدرس',             en: 'Address',  val_fa: 'تهران، شهرک غرب، واحد ۱۲', val_en: 'Tehran, Shahrak Gharb, Unit 12' },
              { icon: Clock,  fa: 'ساعات کاری',       en: 'Hours',    val_fa: 'شنبه تا چهارشنبه: ۸–۱۷', val_en: 'Sat–Wed: 08:00–17:00' },
            ].map(({ icon: Icon, fa, en, val, val_fa, val_en }, i) => (
              <div key={i} className="glass rounded-xl px-5 py-4 flex items-start gap-4 border border-white/8">
                <div className="w-9 h-9 rounded-lg bg-[#7AB648]/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-[#7AB648]"/>
                </div>
                <div>
                  <div className="text-[11px] text-white/40 mb-0.5">{t(fa, en)}</div>
                  <div className="text-sm text-white font-medium">
                    {val_fa || val_en ? t(val_fa!, val_en!) : val}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass-dark rounded-2xl p-8 border border-white/8">
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t('پیام شما ارسال شد!', 'Message Sent!')}
                  </h3>
                  <p className="text-white/50">
                    {t('به زودی با شما تماس می‌گیریم.', 'We\'ll get back to you shortly.')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/50 mb-1.5">
                        {t('نام و نام خانوادگی', 'Full Name')}
                      </label>
                      <input type="text" required className="form-input"
                        placeholder={t('علی احمدی', 'John Smith')}/>
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 mb-1.5">
                        {t('شماره تماس', 'Phone Number')}
                      </label>
                      <input type="tel" required className="form-input"
                        placeholder={t('09xx xxx xxxx', '+98 9xx xxx xxxx')}/>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 mb-1.5">
                      {t('ایمیل', 'Email')}
                    </label>
                    <input type="email" className="form-input"
                      placeholder="example@company.com"/>
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 mb-1.5">
                      {t('نوع درخواست', 'Request Type')}
                    </label>
                    <select className="form-input">
                      <option value="">{t('انتخاب کنید...', 'Select...')}</option>
                      <option>{t('پانل سقفی', 'Roof Panel')}</option>
                      <option>{t('پانل دیواری', 'Wall Panel')}</option>
                      <option>{t('سردخانه صنعتی', 'Cold Storage')}</option>
                      <option>{t('پانل ضدحریق', 'Fire Shield Panel')}</option>
                      <option>{t('مشاوره پروژه', 'Project Consultation')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 mb-1.5">
                      {t('توضیحات پروژه', 'Project Details')}
                    </label>
                    <textarea rows={4} className="form-input resize-none"
                      placeholder={t(
                        'متراژ، کاربری، بازه زمانی...',
                        'Area, usage, timeline...'
                      )}/>
                  </div>
                  <button type="submit"
                    className="flex items-center justify-center gap-2 py-3.5 rounded-xl
                               bg-[#7AB648] text-white font-bold text-sm hover:bg-[#6aa038]
                               transition-all duration-200 shadow-lg shadow-[#7AB648]/25">
                    <Send size={15}/>
                    {t('ارسال درخواست', 'Send Request')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

