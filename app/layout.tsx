import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Be_Vietnam_Pro } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import FilmGrain from '@/components/FilmGrain';

const playfair = Playfair_Display({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-be-vietnam',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ĐƯỜNG LỐI KHÁNG CHIẾN CHỐNG PHÁP · 1946–1954',
  description:
    'Toàn dân – Toàn diện – Trường kỳ – Tự lực cánh sinh – Tranh thủ sự ủng hộ quốc tế. Triển lãm số tương tác về đường lối kháng chiến chống thực dân Pháp (1946–1954).',
  keywords: ['kháng chiến chống Pháp', 'Điện Biên Phủ', 'lịch sử Việt Nam', 'triển lãm số', '1946-1954'],
};

export const viewport: Viewport = {
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${beVietnam.variable}`}
    >
      <body className="bg-vn-black text-vn-ivory antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <FilmGrain />
      </body>
    </html>
  );
}
