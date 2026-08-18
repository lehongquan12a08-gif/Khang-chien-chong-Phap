'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { verifiedQuote } from '@/data/timeline';
import { playChime } from '@/lib/uiSound';

// NGUYÊN VĂN Lời kêu gọi Toàn quốc kháng chiến — không thêm bớt chữ.
// Tách theo nhịp đọc; hai vế "nhất định..." tô đỏ.
const GROUPS: { text: string; accent?: boolean }[] = [
  { text: 'THÀ HY SINH TẤT CẢ,' },
  { text: 'CHỨ NHẤT ĐỊNH KHÔNG CHỊU MẤT NƯỚC,', accent: true },
  { text: 'NHẤT ĐỊNH KHÔNG CHỊU LÀM NÔ LỆ.', accent: true },
];

/**
 * "PHẦN GIỮA — LƯỚT XUỐNG": câu trích hiện TỪNG VẾ theo cuộn (scrub) và ở lại
 * trên màn hình; kết bằng nguồn trích dẫn.
 */
export default function QuoteSection() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom bottom', scrub: 1 },
      });
      tl.fromTo(q('.q-mark'), { opacity: 0 }, { opacity: 1, duration: 0.05 }, 0.04);
      q('.qline').forEach((el, i) => {
        const at = 0.12 + i * 0.2;
        tl.call(playChime, [i], at);
        tl.fromTo(el, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 0.09 }, at);
      });
      tl.fromTo(q('.qattr'), { opacity: 0 }, { opacity: 1, duration: 0.08 }, 0.76);
      tl.to(q('.q-stage'), { opacity: 1, duration: 0.01 }, 0.99); // đệm tới ~1
    },
    { scope: root }
  );

  return (
    <section id="quote" ref={root} className="relative h-[300vh]" style={{ backgroundColor: '#F4EBD8' }}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-6">
        <div className="q-stage mx-auto max-w-5xl text-center">
          <blockquote className="font-serif-hist font-black leading-[1.15] text-vn-charcoal">
            <span className="q-mark mb-5 block text-3xl text-vn-red/60 opacity-0">“</span>
            {GROUPS.map((g) => (
              <span
                key={g.text}
                className={[
                  'qline will-transform block whitespace-normal opacity-0 md:whitespace-nowrap',
                  g.accent ? 'text-vn-red' : 'text-vn-charcoal',
                ].join(' ')}
                style={{ fontSize: 'clamp(21px, 3.4vw, 60px)', marginTop: '0.35em' }}
              >
                {g.text}
              </span>
            ))}
          </blockquote>

          <p className="qattr mt-12 font-body text-sm uppercase tracking-[0.28em] text-vn-brown opacity-0">
            — {verifiedQuote.attribution}
          </p>
          <p className="qattr mt-2 font-body text-[11px] uppercase tracking-[0.2em] text-vn-brown/60 opacity-0">
            {verifiedQuote.context}
          </p>
        </div>
      </div>
    </section>
  );
}
