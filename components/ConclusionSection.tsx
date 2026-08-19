'use client';

import Reveal from '@/components/Reveal';

const ACHIEVEMENTS = [
  'Đập tan hoàn toàn âm mưu xâm lược và ách thống trị kéo dài gần một thế kỷ của thực dân Pháp trên đất nước ta.',
  'Buộc chính phủ Pháp phải ký Hiệp định Giơ-ne-vơ năm 1954 — công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam.',
  'Giải phóng hoàn toàn miền Bắc, chấm dứt ách bóc lột của thực dân, đưa miền Bắc bước vào thời kỳ quá độ lên chủ nghĩa xã hội.',
  'Tạo tiền đề vững chắc cho cuộc đấu tranh giải phóng miền Nam, thống nhất đất nước sau này.',
  'Cổ vũ mạnh mẽ phong trào giải phóng dân tộc trên toàn thế giới — mở đầu cho sự sụp đổ của chủ nghĩa thực dân cũ.',
];

/** 5 thành tựu lịch sử + lời khẳng định đường lối — phần kết của hành trình. */
export default function ConclusionSection() {
  return (
    <section
      id="ket-luan"
      className="relative px-6 py-[18vh]"
      style={{ background: 'linear-gradient(180deg, #080808 0%, #1a0d0b 50%, #080808 100%)' }}
    >
      <div className="mx-auto max-w-4xl">
        <Reveal as="p" className="eyebrow mb-6 text-center text-vn-gold-antique">
          Trải qua 9 năm gian khổ · 1946 — 1954
        </Reveal>
        <Reveal
          as="h2"
          className="text-center font-serif-hist text-4xl font-black uppercase leading-tight text-vn-ivory md:text-6xl"
        >
          5 thành tựu <span className="text-vn-gold text-glow-gold">lịch sử</span>
        </Reveal>
        <Reveal className="gold-line mx-auto mt-10 w-40" y={0} />

        <ol className="mt-16 flex flex-col gap-8">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={i} className="flex items-start gap-6 border-l-2 border-vn-gold-antique/40 pl-6">
              <span className="font-serif-hist text-4xl font-black leading-none text-vn-gold/60 md:text-5xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-pretty pt-1 font-serif-hist text-base leading-relaxed text-vn-ivory/85 md:text-xl">
                {a}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-20 border border-vn-gold-antique/30 bg-[rgba(218,37,29,0.06)] p-8 text-center md:p-12">
          <p className="text-balance font-serif-hist text-lg italic leading-relaxed text-vn-ivory/90 md:text-2xl">
            Thắng lợi lịch sử này đã khẳng định tính đúng đắn ngời sáng của đường lối
            kháng chiến do Đảng ta đề ra:
          </p>
          <p className="mt-6 font-body text-[12px] font-medium uppercase tracking-[0.22em] text-vn-gold md:text-sm">
            Toàn dân · Toàn diện · Trường kỳ · Tự lực cánh sinh · Tranh thủ sự ủng hộ quốc tế
          </p>
        </Reveal>
      </div>
    </section>
  );
}
