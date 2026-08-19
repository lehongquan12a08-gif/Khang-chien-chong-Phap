'use client';

import Reveal from '@/components/Reveal';

interface ClosingTextProps {
  id?: string;
  eyebrow?: string;
  paragraphs: string[]; // câu cuối được tô vàng nhấn mạnh
  background?: string;
  /** Ảnh nền mờ phía sau (vd đoạn mở đầu phần Ý nghĩa). */
  bgImage?: string;
}

/** "PHẦN CUỐI" — các câu kết của một giai đoạn, hiện dần, câu chốt tô vàng.
 *  data-dwell: tự động lướt DỪNG lại ~7s ở màn này cho người xem kịp đọc. */
export default function ClosingText({ id, eyebrow, paragraphs, background, bgImage }: ClosingTextProps) {
  return (
    <section
      id={id}
      data-dwell="7"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-[16vh]"
      style={{ background: background ?? 'radial-gradient(ellipse at 50% 45%, #150d0a 0%, #080808 72%)' }}
    >
      {bgImage && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bgImage}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
            style={{ objectPosition: 'center 25%', filter: 'contrast(1.05) brightness(0.8)' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-vn-black/60" />
        </>
      )}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {eyebrow && (
          <Reveal as="p" className="eyebrow mb-10 text-vn-gold-antique">
            {eyebrow}
          </Reveal>
        )}
        <div className="flex flex-col gap-8">
          {paragraphs.map((p, i) => {
            const last = i === paragraphs.length - 1;
            return (
              <Reveal
                key={i}
                as="p"
                className={
                  last
                    ? 'text-balance font-serif-hist text-2xl font-bold leading-snug text-vn-gold text-glow-gold md:text-4xl'
                    : 'text-balance font-serif-hist text-lg italic leading-relaxed text-vn-ivory/85 md:text-2xl'
                }
              >
                {p}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
