// Các màn ảnh điện ảnh full-screen còn giữ riêng (ảnh khác đã GỘP vào slide).
export type MilestoneSymbol = 'letter' | 'flag' | 'sickle' | 'star';

export interface Milestone {
  id: string;
  year: string;
  eyebrow: string;
  heading: string;
  keyText: string; // câu "nhấn" lớn
  caption: string;
  image: string;
  symbol: MilestoneSymbol;
  background: string;
  contain?: boolean;
  /** object-position cho ảnh full-bleed (vd 'center 10%') — mặc định 'center 22%'. */
  pos?: string;
}

const BG_RED = 'linear-gradient(180deg, #080808 0%, #2a0f0d 55%, #080808 100%)';
const BG_RADIAL = 'radial-gradient(ellipse at center, #2a0f0d 0%, #080808 72%)';

export const MILESTONES: Record<string, Milestone> = {
  // PHẦN I giai đoạn 1951–1953 — "1 ảnh lớn" theo kịch bản
  theVaLuc: {
    id: 'chapter-1951',
    year: '1951–1953',
    eyebrow: 'Sau Chiến thắng Biên giới 1950',
    heading: 'Phát triển thế và lực',
    keyText: 'TÍCH LŨY SỨC MẠNH',
    caption:
      'Cuộc kháng chiến bước sang giai đoạn mới: củng cố lực lượng, xây dựng hậu phương, giữ vững quyền chủ động — Pháp ngày càng sa lầy.',
    image: '/images/kc/y51-hcm.webp',
    symbol: 'star',
    background: BG_RADIAL,
    pos: 'center 20%',
  },

  // Màn lá cờ — hiện sau khi trả lời câu hỏi (đúng kịch bản "click chuyển màn hình")
  toanThang: {
    id: 'kc-54-toanthang',
    year: '07/05/1954',
    eyebrow: 'Lá cờ "Quyết chiến – Quyết thắng" trên nóc hầm De Castries',
    heading: 'Chiến dịch Điện Biên Phủ',
    keyText: 'TOÀN THẮNG',
    caption:
      'Tập đoàn cứ điểm Điện Biên Phủ hoàn toàn bị tiêu diệt. Tướng De Castries cùng toàn bộ bộ chỉ huy bị bắt sống — đỉnh cao của cuộc kháng chiến chống thực dân Pháp.',
    image: '/images/kc/y54-a5.webp',
    symbol: 'flag',
    background: BG_RED,
  },
};
