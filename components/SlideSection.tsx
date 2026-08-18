'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { playChime } from '@/lib/uiSound';

export interface SlideGroup {
  title?: string; // vd '1947 — Việt Bắc Thu – Đông'
  bullets: string[];
}

export interface SlideImage {
  src: string;
  caption?: string;
  tag?: string; // 'H1' | 'Ảnh 1' ...
}

interface SlideSectionProps {
  id?: string;
  eyebrow: string;
  title?: string;
  groups: SlideGroup[];
  /** Ảnh của slide — hiện NGAY TRONG slide (cột phải desktop / dưới mobile). */
  images?: SlideImage[];
  background?: string;
}

/**
 * "NỘI DUNG HIỆN TRÊN SLIDE" — tiêu đề + gạch đầu dòng hiện lần lượt khi lướt,
 * ẢNH của slide nằm cùng màn hình (gộp một nơi), gắn thẻ H1/H2… và chú thích.
 */
export default function SlideSection({ id, eyebrow, title, groups, images = [], background = '#0b0a09' }: SlideSectionProps) {
  const root = useRef<HTMLDivElement>(null);
  const rows = groups.reduce((n, g) => n + (g.title ? 1 : 0) + g.bullets.length, 0) + (title ? 1 : 0);
  const heightVh = 130 + rows * 26 + images.length * 16;

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom bottom', scrub: 1 },
      });
      const items = q('.sl-row');
      const span = 0.8;
      const step = span / Math.max(1, items.length);
      items.forEach((el, i) => {
        const at = 0.05 + i * step;
        if ((el as HTMLElement).classList.contains('sl-group')) tl.call(playChime, [i], at);
        tl.fromTo(el, { opacity: 0, x: -26 }, { opacity: 1, x: 0, duration: step * 0.6 }, at);
      });
      // ảnh hiện xen kẽ trong lúc bullets chạy
      const imgs = q('.sl-img');
      imgs.forEach((el, i) => {
        const at = 0.18 + i * (0.5 / Math.max(1, imgs.length));
        tl.fromTo(el, { opacity: 0, y: 30, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.12 }, at);
      });
      tl.to(q('.sl-stage'), { opacity: 1, duration: 0.01 }, 0.99); // đệm tới ~1
    },
    { scope: root }
  );

  return (
    <section id={id} ref={root} className="relative" style={{ height: `${heightVh}vh`, background }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div
          className={[
            'sl-stage mx-auto grid w-full items-center gap-10 px-6 md:px-10',
            images.length ? 'max-w-6xl md:grid-cols-[1.1fr_0.9fr]' : 'max-w-4xl',
          ].join(' ')}
        >
          {/* cột chữ */}
          <div>
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
                        <span className="font-body text-[13.5px] leading-relaxed text-vn-ivory/85 md:text-[16px]">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* cột ảnh — gộp ảnh của slide vào cùng một nơi */}
          {images.length > 0 && (
            <div className="flex flex-col items-center gap-5">
              {images.map((im, i) => (
                <figure key={i} className="sl-img will-transform relative w-full max-w-md opacity-0">
                  <div className="relative overflow-hidden rounded-[3px] border border-vn-gold-antique/25 bg-vn-black/60 shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={im.src}
                      alt={im.caption ?? ''}
                      className="h-auto w-full object-contain"
                      style={{ maxHeight: images.length > 2 ? '24vh' : '32vh' }}
                    />
                    {im.tag && (
                      <span className="absolute left-2 top-2 border border-vn-gold/60 bg-vn-black/70 px-2 py-0.5 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-vn-gold">
                        {im.tag}
                      </span>
                    )}
                  </div>
                  {im.caption && (
                    <figcaption className="mt-2 text-center font-body text-[11px] leading-snug text-vn-ivory/50">
                      {im.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
