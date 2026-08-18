'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { playChime } from '@/lib/uiSound';

export interface SlideGroup {
  title?: string; // vd '1947 — Việt Bắc Thu – Đông'
  bullets: string[];
}

interface SlideSectionProps {
  id?: string;
  eyebrow: string; // vd 'Giai đoạn 1946 · Toàn quốc kháng chiến bùng nổ'
  title?: string; // tiêu đề lớn của slide
  groups: SlideGroup[];
  background?: string;
}

/**
 * "NỘI DUNG HIỆN TRÊN SLIDE" — đúng kịch bản: tiêu đề giai đoạn + các gạch đầu
 * dòng hiện LẦN LƯỢT khi lướt xuống và Ở LẠI trên màn hình (màn hình dính).
 */
export default function SlideSection({ id, eyebrow, title, groups, background = '#0b0a09' }: SlideSectionProps) {
  const root = useRef<HTMLDivElement>(null);
  const rows = groups.reduce((n, g) => n + (g.title ? 1 : 0) + g.bullets.length, 0) + (title ? 1 : 0);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom bottom', scrub: 1 },
      });
      const items = q('.sl-row');
      const span = 0.86; // phần timeline dành cho các dòng
      const step = span / Math.max(1, items.length);
      items.forEach((el, i) => {
        const at = 0.05 + i * step;
        if ((el as HTMLElement).classList.contains('sl-group')) tl.call(playChime, [i], at);
        tl.fromTo(el, { opacity: 0, x: -26 }, { opacity: 1, x: 0, duration: step * 0.6 }, at);
      });
      tl.to(q('.sl-stage'), { opacity: 1, duration: 0.01 }, 0.99); // đệm tới ~1
    },
    { scope: root }
  );

  return (
    <section
      id={id}
      ref={root}
      className="relative"
      style={{ height: `${140 + rows * 32}vh`, background }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="sl-stage mx-auto w-full max-w-4xl px-6 md:px-10">
          <p className="eyebrow mb-6 text-vn-gold-antique">{eyebrow}</p>
          {title && (
            <h2 className="sl-row will-transform mb-8 font-serif-hist text-2xl font-black uppercase leading-tight text-vn-ivory opacity-0 md:text-4xl">
              {title}
            </h2>
          )}
          <div className="flex flex-col gap-7">
            {groups.map((g, gi) => (
              <div key={gi}>
                {g.title && (
                  <h3 className="sl-row sl-group will-transform mb-3 font-display text-lg font-semibold uppercase tracking-[0.14em] text-vn-gold opacity-0 md:text-2xl">
                    {g.title}
                  </h3>
                )}
                <ul className="flex flex-col gap-2.5">
                  {g.bullets.map((b, bi) => (
                    <li key={bi} className="sl-row will-transform flex items-start gap-3 opacity-0">
                      <span className="mt-[9px] h-[7px] w-[7px] shrink-0 rotate-45 bg-vn-gold-antique/80" />
                      <span className="font-body text-[14px] leading-relaxed text-vn-ivory/85 md:text-[16.5px]">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
