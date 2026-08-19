'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { playChime } from '@/lib/uiSound';
import EmberField from '@/components/EmberField';

/**
 * HERO — landing page. LƯỚT XUỐNG: từng chữ của tiêu đề hiện ra lần lượt và
 * GIỮ lại trên màn hình (ĐƯỜNG LỐI → KHÁNG CHIẾN → CHỐNG PHÁP → 1946–1954),
 * trên nền ảnh tư liệu mở đầu.
 */
export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      tl.to(q('.hero-bgimg'), { scale: 1.08, ease: 'none', duration: 0.9 }, 0)
        .to(q('.hero-scrollhint'), { opacity: 0, duration: 0.04 }, 0.05)
        // từng chữ hiện và Ở LẠI (class hw-* — KHÔNG trùng utility w-* của Tailwind)
        .call(playChime, [0], 0.06)
        .fromTo(q('.hw-0'), { opacity: 0, y: 44 }, { opacity: 1, y: 0, duration: 0.05 }, 0.06)
        .call(playChime, [1], 0.15)
        .fromTo(q('.hw-1'), { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 0.05 }, 0.15)
        .call(playChime, [2], 0.24)
        .fromTo(q('.hw-2'), { opacity: 0, y: 44 }, { opacity: 1, y: 0, duration: 0.05 }, 0.24)
        .call(playChime, [3], 0.33)
        .fromTo(q('.hw-3'), { opacity: 0, y: 44 }, { opacity: 1, y: 0, duration: 0.05 }, 0.33)
        .call(playChime, [4], 0.45)
        .fromTo(q('.hw-years'), { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 0.05 }, 0.45)
        .fromTo(q('.hw-tagline'), { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.05 }, 0.55)
        // giữ trọn khung, rồi mờ dần nhường chương mở đầu
        .to(q('.hero-stage'), { opacity: 0, duration: 0.08 }, 0.9)
        .to(q('.hero-bgimg'), { scale: 1.1, ease: 'none', duration: 0.02 }, 0.98);
    },
    { scope: root }
  );

  return (
    <section id="hero" ref={root} className="relative h-[340vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-vn-black">
        <div className="hero-stage absolute inset-0">
          {/* ảnh tư liệu mở đầu — full-bleed */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/kc/modau.webp"
            alt=""
            className="hero-bgimg will-transform pointer-events-none absolute inset-0 h-full w-full object-cover"
            style={{ filter: 'sepia(0.35) contrast(1.06) brightness(0.62)', objectPosition: '30% 20%' }}
          />
          {/* scrim: đậm bên PHẢI cho khối chữ — gương mặt Bác bên trái luôn thoáng */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(270deg, rgba(8,8,8,0.94) 0%, rgba(8,8,8,0.8) 30%, rgba(8,8,8,0.45) 55%, rgba(8,8,8,0.12) 78%, rgba(8,8,8,0) 100%)',
            }}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[24vh] bg-gradient-to-t from-vn-black/80 to-transparent" />

          {/* tàn lửa / bụi vàng bay chậm — chất điện ảnh (chỉ desktop) */}
          <EmberField />

          {/* khối chữ — GÓC PHẢI màn hình (mobile: giữa), không che gương mặt */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center md:items-end md:pr-[6vw] md:text-right">
            <p className="hw-0 will-transform eyebrow mb-6 whitespace-nowrap text-vn-gold-antique opacity-0">
              1946 – 1954 · Chín năm trường kỳ
            </p>
            <h1 className="flex w-full flex-col items-center leading-none md:items-end">
              <span
                className="hw-1 will-transform font-display font-semibold uppercase tracking-[0.3em] text-vn-ivory/90 opacity-0"
                style={{ fontSize: 'clamp(22px, 3.4vw, 54px)' }}
              >
                Đường lối
              </span>
              <span
                className="hw-2 will-transform font-display font-bold uppercase text-vn-ivory opacity-0"
                style={{ fontSize: 'clamp(42px, 6.8vw, 124px)', lineHeight: 1.04, letterSpacing: '0.01em' }}
              >
                KHÁNG CHIẾN
              </span>
              <span
                className="hw-3 will-transform font-display font-bold uppercase text-vn-red opacity-0"
                style={{ fontSize: 'clamp(42px, 6.8vw, 124px)', lineHeight: 1.04, letterSpacing: '0.01em', textShadow: '0 0 44px rgba(218,37,29,0.5)' }}
              >
                CHỐNG PHÁP
              </span>
            </h1>
            <p className="hw-years will-transform mt-7 font-display font-semibold text-xl tracking-[0.4em] text-vn-gold text-glow-gold opacity-0 md:text-3xl">
              1946&nbsp;—&nbsp;1954
            </p>
            <p className="hw-tagline will-transform mt-6 max-w-2xl text-balance font-body text-[11px] font-light uppercase leading-relaxed tracking-[0.22em] text-vn-ivory/70 opacity-0 md:text-[13px]">
              Toàn dân · Toàn diện · Trường kỳ · Tự lực cánh sinh · Tranh thủ sự ủng hộ quốc tế
            </p>
          </div>

          {/* gợi ý cuộn */}
          <div className="hero-scrollhint pointer-events-none absolute bottom-5 left-1/2 z-20 -translate-x-1/2">
            <span className="scroll-hint-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
