'use client';

import { useEffect, useRef, useState } from 'react';
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
  /** 'contain' cho TÀI LIỆU (lược đồ, sơ đồ, bút tích) — hiện trọn, không cắt.
   *  Mặc định 'cover' (ảnh chụp) theo thiết kế chung. */
  fit?: 'cover' | 'contain';
}

interface SlideSectionProps {
  id?: string;
  eyebrow: string;
  title?: string;
  groups: SlideGroup[];
  /** Ảnh của slide — hiện NGAY TRONG slide (cột phải desktop / dưới mobile). */
  images?: SlideImage[];
  background?: string;
  backgroundImage?: string;
  /** true = ẢNH TO nằm TRÊN (cạnh nhau), ghi chú + gạch đầu dòng ở DƯỚI. */
  imagesTop?: boolean;
}

/**
 * "NỘI DUNG HIỆN TRÊN SLIDE" — tiêu đề + gạch đầu dòng hiện lần lượt khi lướt,
 * ẢNH của slide nằm cùng màn hình (gộp một nơi), gắn thẻ H1/H2… và chú thích.
 */
export default function SlideSection({ id, eyebrow, title, groups, images = [], background = '#0b0a09', backgroundImage, imagesTop = false }: SlideSectionProps) {
  const root = useRef<HTMLDivElement>(null);
  const rows = groups.reduce((n, g) => n + (g.title ? 1 : 0) + g.bullets.length, 0) + (title ? 1 : 0);
  const heightVh = 130 + rows * 26 + images.length * 16;

  // ĐIỆN THOẠI: slide KHÔNG ghim (nội dung dài hơn màn hình sẽ bị cắt nếu ghim)
  // — chảy tự nhiên, từng dòng/ảnh hiện khi lướt tới. Desktop giữ kiểu ghim.
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const on = () => setIsMobile(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  // MOBILE: reveal bằng IntersectionObserver thuần (không GSAP) — dòng/ảnh
  // hiện dần khi lướt tới, hoạt động với mọi kiểu cuộn.
  useEffect(() => {
    if (!isMobile || !root.current) return;
    const els = [
      ...root.current.querySelectorAll<HTMLElement>('.sl-row, .sl-img, .sl-line'),
    ];
    for (const el of els) {
      el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
      if (el.classList.contains('sl-line')) el.style.transform = 'scaleX(0)';
      else if (el.classList.contains('sl-img')) el.style.transform = 'translateY(26px)';
      else el.style.transform = 'translateX(-20px)';
    }
    const pending = new Set<HTMLElement>(els);
    const reveal = (el: HTMLElement) => {
      if (!pending.has(el)) return;
      pending.delete(el);
      el.style.opacity = '1';
      el.style.transform = el.classList.contains('sl-line') ? 'scaleX(1)' : 'none';
      io.unobserve(el);
    };
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) reveal(e.target as HTMLElement);
      },
      { rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
    // Fallback theo sự kiện cuộn — phòng webview không bắn IO đều
    let lastCheck = 0;
    const onScroll = () => {
      const now = Date.now();
      if (now - lastCheck < 120 || pending.size === 0) return;
      lastCheck = now;
      const vh = window.innerHeight;
      for (const el of [...pending]) {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.94 && r.bottom > 0) reveal(el);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      for (const el of els) {
        el.style.transition = '';
        el.style.transform = '';
        el.style.opacity = '';
      }
    };
  }, [isMobile]);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      if (isMobile) return; // mobile dùng IntersectionObserver ở trên

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
      // đường kẻ vàng tự vẽ dưới eyebrow — "đóng dấu" mở màn slide
      tl.fromTo(q('.sl-line'), { scaleX: 0 }, { scaleX: 1, ease: 'power2.out', duration: 0.08 }, 0.03);
      // ảnh hiện xen kẽ trong lúc bullets chạy
      const imgs = q('.sl-img');
      imgs.forEach((el, i) => {
        const at = 0.18 + i * (0.5 / Math.max(1, imgs.length));
        tl.fromTo(el, { opacity: 0, y: 30, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.12 }, at);
      });
      tl.to(q('.sl-stage'), { opacity: 1, duration: 0.01 }, 0.99); // đệm tới ~1
    },
    { scope: root, dependencies: [isMobile], revertOnUpdate: true }
  );

  return (
    <section
      id={id}
      ref={root}
      className="relative"
      style={{ height: isMobile ? 'auto' : `${heightVh}vh`, background }}
    >
      <div
        className={
          isMobile
            ? 'relative overflow-hidden py-24'
            : 'sticky top-0 flex h-screen items-center overflow-hidden'
        }
      >
        {backgroundImage && (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center opacity-45 grayscale"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,8,8,0.28),rgba(8,8,8,0.88)_74%),linear-gradient(90deg,rgba(8,8,8,0.78),rgba(8,8,8,0.4)_52%,rgba(8,8,8,0.78))]"
            />
          </>
        )}
        {imagesTop ? (
          /* BỐ CỤC ẢNH-TO-TRÊN: 2 ảnh lớn cạnh nhau, ghi chú + nội dung ở dưới */
          <div className="sl-stage relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10">
            <div className="mb-7 text-center">
              <p className="eyebrow mb-3 text-vn-gold-antique">{eyebrow}</p>
              <div className="sl-line gold-line mx-auto w-28 origin-center" style={{ transform: 'scaleX(0)' }} />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {images.map((im, i) => (
                <figure key={i} className="sl-img will-transform relative w-full opacity-0">
                  <div className="relative overflow-hidden rounded-[3px] border border-vn-gold-antique/25 bg-vn-black/60 shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={im.src}
                      alt={im.caption ?? ''}
                      className={im.fit === 'contain' ? 'w-full object-contain' : 'w-full object-cover'}
                      style={{ height: '40vh' }}
                    />
                  </div>
                  {im.caption && (
                    <figcaption className="mt-2.5 text-balance text-center font-body text-[12px] leading-snug text-vn-ivory/60">
                      {im.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
            <div className="mx-auto mt-9 w-fit">
              {groups.map((g, gi) => (
                <ul key={gi} className="flex flex-col gap-2.5">
                  {g.bullets.map((b, bi) => (
                    <li key={bi} className="sl-row will-transform flex items-start gap-3 opacity-0">
                      <span className="mt-[9px] h-[7px] w-[7px] shrink-0 rotate-45 bg-vn-gold-antique/80" />
                      <span className="text-pretty font-body text-[14px] leading-relaxed text-vn-ivory/90 md:text-[17px]">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ) : (
        <div
          className={[
            'sl-stage relative z-10 mx-auto grid w-full items-center gap-10 px-6 md:px-10',
            images.length ? 'max-w-6xl md:grid-cols-[1.1fr_0.9fr]' : 'max-w-4xl',
          ].join(' ')}
        >
          {/* cột chữ */}
          <div>
            <p className="eyebrow mb-4 text-vn-gold-antique">{eyebrow}</p>
            <div className="sl-line gold-line mb-6 w-28 origin-left" style={{ transform: 'scaleX(0)' }} />
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
                        <span className="text-pretty font-body text-[13.5px] leading-relaxed text-vn-ivory/85 md:text-[16px]">
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
            <div className="sl-imgcol will-transform flex flex-col items-center gap-5">
              {images.map((im, i) => (
                <figure key={i} className="sl-img will-transform relative w-full max-w-md opacity-0">
                  <div className="relative overflow-hidden rounded-[3px] border border-vn-gold-antique/25 bg-vn-black/60 shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={im.src}
                      alt={im.caption ?? ''}
                      className={im.fit === 'contain' ? 'w-full object-contain' : 'w-full object-cover'}
                      style={{ height: images.length > 2 ? '24vh' : '32vh' }}
                    />
                  </div>
                  {im.caption && (
                    <figcaption className="mt-2 text-balance text-center font-body text-[11px] leading-snug text-vn-ivory/50">
                      {im.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}
        </div>
        )}
      </div>
    </section>
  );
}
