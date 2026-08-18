// ---------------------------------------------------------------------------
//  DÒNG THỜI GIAN — Đường lối kháng chiến chống Pháp (1946–1954)
//  Chỉ dùng các dữ kiện & năm đã được kiểm chứng theo kịch bản biên soạn.
// ---------------------------------------------------------------------------

export interface TimelineEntry {
  id: string;
  year: string;
  short: string;
}

/** Các mốc hiển thị trên thanh Timeline Indicator (phải màn hình desktop). */
export const timelineMarkers: TimelineEntry[] = [
  { id: 'hero', year: '1945', short: 'Mở đầu' },
  { id: 'chapter-1946', year: '1946', short: 'Toàn quốc kháng chiến' },
  { id: 'chapter-1947', year: '1947', short: 'Việt Bắc Thu – Đông' },
  { id: 'chapter-1950', year: '1950', short: 'Chiến dịch Biên giới' },
  { id: 'chapter-1951', year: '1951', short: 'Phát triển thế và lực' },
  { id: 'chapter-1954', year: '1954', short: 'Điện Biên Phủ' },
  { id: 'y-nghia', year: 'Ý NGHĨA', short: 'Kết quả & Ý nghĩa' },
];

/** Trích dẫn đã được kiểm chứng, dùng cho Quote Section. */
export const verifiedQuote = {
  text: 'Thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ.',
  attribution: 'Chủ tịch Hồ Chí Minh',
  context: 'Lời kêu gọi Toàn quốc kháng chiến · 19/12/1946',
};

export const NAV_LINKS = [
  { label: 'Mở đầu', href: '#hero' },
  { label: 'Dòng thời gian', href: '#chapter-1946' },
  { label: 'Điện Biên Phủ', href: '#chapter-1954' },
  { label: 'Nghe & Xem', href: '#media' },
  { label: 'Về dự án', href: '#footer' },
];
