'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';
import { getLenis } from '@/lib/lenisStore';

export interface QuestionOption {
  key: string; // 'A' | 'B' | ...
  text: string;
  correct?: boolean;
}

interface InteractiveQuestionProps {
  id?: string;
  eyebrow?: string;
  question: string;
  /** Không có options = câu hỏi mở (bấm nút để hiện góc nhìn). */
  options?: QuestionOption[];
  /** Phần trả lời/kết luận hiện sau khi chọn. */
  answer: string;
  /** Sau khi trả lời, hiện nút cuộn tới section này (vd '#kc-54-toanthang'). */
  continueTo?: string;
  continueLabel?: string;
}

/**
 * CÂU HỎI TƯƠNG TÁC — thẻ hỏi đáp giữa hành trình. Trắc nghiệm (A/B/C/D) hoặc
 * câu hỏi mở. Chọn xong: đáp án đúng sáng vàng, lời giải hiện ra; tùy chọn nút
 * "tiếp tục" cuộn tới màn kế (vd màn lá cờ toàn thắng).
 */
export default function InteractiveQuestion({
  id,
  eyebrow = 'Câu hỏi tương tác',
  question,
  options,
  answer,
  continueTo,
  continueLabel = 'Tiếp tục hành trình',
}: InteractiveQuestionProps) {
  const [chosen, setChosen] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const answered = chosen !== null || revealed;

  const goOn = () => {
    if (!continueTo) return;
    const el = document.querySelector(continueTo);
    if (!el) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(el as HTMLElement, { duration: 1.4 });
    else (el as HTMLElement).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id={id}
      className="relative flex min-h-screen items-center justify-center px-6 py-[14vh]"
      style={{ background: 'radial-gradient(ellipse at 50% 40%, #16100c 0%, #080808 70%)' }}
    >
      <Reveal className="w-full max-w-3xl border border-vn-gold-antique/25 bg-[rgba(8,8,8,0.55)] p-8 backdrop-blur-[2px] md:p-12">
        <p className="eyebrow mb-6 text-vn-gold">✦ {eyebrow}</p>
        <h3 className="font-serif-hist text-2xl font-bold leading-snug text-vn-ivory md:text-3xl">
          {question}
        </h3>

        {options ? (
          <div className="mt-8 flex flex-col gap-3">
            {options.map((o) => {
              const isChosen = chosen === o.key;
              const showCorrect = answered && o.correct;
              const showWrong = answered && isChosen && !o.correct;
              return (
                <button
                  key={o.key}
                  type="button"
                  disabled={answered}
                  onClick={() => setChosen(o.key)}
                  className={[
                    'flex items-start gap-4 border px-5 py-4 text-left transition-all duration-300',
                    showCorrect
                      ? 'border-vn-gold bg-vn-gold/10'
                      : showWrong
                        ? 'border-vn-red/70 bg-vn-red/10'
                        : answered
                          ? 'border-white/10 opacity-40'
                          : 'border-white/20 hover:border-vn-gold-antique/70 hover:bg-white/[0.03]',
                  ].join(' ')}
                >
                  <span
                    className={[
                      'flex h-7 w-7 shrink-0 items-center justify-center border font-body text-[13px] font-semibold',
                      showCorrect ? 'border-vn-gold text-vn-gold' : showWrong ? 'border-vn-red text-vn-red' : 'border-white/30 text-vn-ivory/70',
                    ].join(' ')}
                  >
                    {o.key}
                  </span>
                  <span
                    className={[
                      'font-body text-sm leading-relaxed md:text-base',
                      showCorrect ? 'text-vn-gold' : showWrong ? 'text-vn-red/90' : 'text-vn-ivory/85',
                    ].join(' ')}
                  >
                    {o.text}
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          !revealed && (
            <button
              type="button"
              onClick={() => setRevealed(true)}
              className="mt-8 border border-vn-gold-antique/60 px-7 py-3.5 font-body text-[12px] uppercase tracking-[0.22em] text-vn-ivory transition-colors duration-300 hover:bg-vn-gold-antique hover:text-vn-black"
            >
              Hiện câu trả lời
            </button>
          )
        )}

        {answered && (
          <div className="mt-8 border-l-2 border-vn-gold pl-5">
            <p className="font-serif-hist text-base italic leading-relaxed text-vn-ivory/85 md:text-lg">
              {answer}
            </p>
            {continueTo && (
              <button
                type="button"
                onClick={goOn}
                className="mt-6 border border-vn-gold px-7 py-3.5 font-body text-[12px] uppercase tracking-[0.22em] text-vn-gold transition-colors duration-300 hover:bg-vn-gold hover:text-vn-black"
              >
                {continueLabel} →
              </button>
            )}
          </div>
        )}
      </Reveal>
    </section>
  );
}
