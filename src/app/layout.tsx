import type { Metadata } from 'next';
import './globals.css';
import { I18nProvider } from '@/context/I18nContext';

export const metadata: Metadata = {
  title: 'آسه پانل | ASEH Panel – پانل ساندویچی و سردخانه',
  description: 'تولیدکننده پیشرو پانل ساندویچی و راهکارهای سردخانه صنعتی | Leading manufacturer of sandwich panels and cold storage solutions',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" suppressHydrationWarning>
      <body>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}

