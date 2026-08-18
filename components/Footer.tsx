'use client';

import Reveal from '@/components/Reveal';

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-vn-black px-6 py-[16vh] text-center"
    >
      {/* thin golden horizon line */}
      <Reveal className="gold-line mb-16 w-full max-w-2xl" y={0} />

      <Reveal as="p" className="eyebrow mb-8 text-vn-gold-antique">
        Toàn dân · Toàn diện · Trường kỳ · Tự lực cánh sinh · Tranh thủ quốc tế
      </Reveal>

      <Reveal
        as="h2"
        className="font-display text-4xl font-semibold uppercase leading-tight tracking-[0.12em] text-vn-ivory md:text-6xl"
      >
        Đường lối kháng chiến chống Pháp
      </Reveal>

      <Reveal
        as="p"
        className="mx-auto mt-10 max-w-2xl font-serif-hist text-lg italic leading-relaxed text-vn-ivory/70 md:text-xl"
      >
        Từ mùa đông 1946 khói lửa tại Thủ đô đến mùa xuân 1954 rực rỡ tại lòng chảo
        Điện Biên — tìm hiểu lịch sử để hiểu giá trị của hòa bình, độc lập hôm nay.
      </Reveal>

      <Reveal className="mt-14 flex flex-col items-center gap-5 sm:flex-row">
        <a
          href="#chapter-1946"
          className="group relative border border-vn-gold-antique/60 px-9 py-4 font-body text-[12px] uppercase tracking-[0.24em] text-vn-ivory transition-colors duration-500 hover:bg-vn-gold-antique hover:text-vn-black"
        >
          Khám phá dòng thời gian
        </a>
        <a
          href="#media"
          className="group relative border border-white/20 px-9 py-4 font-body text-[12px] uppercase tracking-[0.24em] text-vn-ivory/80 transition-colors duration-500 hover:border-white/60 hover:text-vn-ivory"
        >
          Nghe &amp; Xem
        </a>
      </Reveal>

      <Reveal as="p" className="mt-20 max-w-3xl font-body text-[11px] leading-relaxed text-vn-ivory/35" y={0}>
        Triển lãm số mang tính giáo dục, lịch sử và tri ân. Trang sử dụng ảnh, bản thu
        tư liệu lịch sử (do nhóm biên soạn cung cấp) cùng các hoạ tiết đồ hoạ gốc.
        Vui lòng bảo đảm quyền sử dụng hình ảnh, và đối chiếu trích dẫn cùng dữ kiện
        lịch sử với nguồn chính thống trước khi sử dụng chính thức.
      </Reveal>

      {/* Credits — small & quiet */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-body text-[11px] tracking-[0.14em] text-vn-ivory/35">
        <span>Thực hiện · <span className="text-vn-ivory/55">Lê Hồng Quân</span></span>
      </div>
    </footer>
  );
}
