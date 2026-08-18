'use client';

import Reveal from '@/components/Reveal';

interface ClosingTextProps {
  id?: string;
  eyebrow?: string;
  paragraphs: string[]; // câu cuối được tô vàng nhấn mạnh
  background?: string;
}

/** "PHẦN CUỐI" — các câu kết của một giai đoạn, hiện dần, câu chốt tô vàng. */
export default function ClosingText({ id, eyebrow, paragraphs, background }: ClosingTextProps) {
  return (
    <section
      id={id}
      className="relative flex min-h-screen items-center justify-center px-6 py-[16vh]"
      style={{ background: background ?? 'radial-gradient(ellipse at 50% 45%, #150d0a 0%, #080808 72%)' }}
    >
      <div className="mx-auto max-w-3xl text-center">
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
                    ? 'font-serif-hist text-xl font-bold leading-relaxed text-vn-gold text-glow-gold md:text-3xl'
                    : 'font-serif-hist text-lg italic leading-relaxed text-vn-ivory/85 md:text-2xl'
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
