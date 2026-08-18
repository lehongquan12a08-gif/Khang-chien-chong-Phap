// Các "slide" mốc lịch sử theo kịch bản ĐƯỜNG LỐI KHÁNG CHIẾN CHỐNG PHÁP.
// Ảnh trong public/images/kc/. `contain: true` = ảnh nhỏ trọn vẹn (tài liệu,
// lược đồ, sơ đồ); mặc định = ảnh phủ kín màn hình kiểu điện ảnh.
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
}

const BG_DARK = 'linear-gradient(180deg, #080808 0%, #1a140c 50%, #080808 100%)';
const BG_RED = 'linear-gradient(180deg, #080808 0%, #2a0f0d 55%, #080808 100%)';
const BG_RADIAL = 'radial-gradient(ellipse at center, #2a0f0d 0%, #080808 72%)';
const BG_EARTH = 'linear-gradient(180deg, #080808 0%, #12100e 45%, #080808 100%)';

export const MILESTONES: Record<string, Milestone> = {
  // ── 1946 ────────────────────────────────────────────────────────────────
  loiKeuGoi: {
    id: 'kc-46-loikeugo',
    year: '1946',
    eyebrow: '18 – 19/12/1946 · Quyết định lịch sử',
    heading: 'Lời kêu gọi Toàn quốc kháng chiến',
    keyText: 'LỜI HỊCH NON SÔNG',
    caption:
      'Bút tích "Lời kêu gọi Toàn quốc kháng chiến" của Chủ tịch Hồ Chí Minh — hiệu triệu cả dân tộc đứng lên bảo vệ nền độc lập vừa giành được.',
    image: '/images/kc/y46-h1.webp',
    symbol: 'letter',
    background: BG_DARK,
    contain: true,
  },
  phaoDaiLang: {
    id: 'kc-46-phaodailang',
    year: '19.12',
    eyebrow: 'Khoảng 20 giờ · 19/12/1946 · Hà Nội',
    heading: 'Pháo đài Láng khai hỏa',
    keyText: 'TIẾNG SÚNG MỞ ĐẦU',
    caption:
      'Thành phố tắt điện, Pháo đài Láng bắn những loạt đạn đầu tiên — cuộc kháng chiến toàn quốc chính thức bắt đầu. Không chỉ Hà Nội, nhiều địa phương đồng loạt bước vào chiến đấu.',
    image: '/images/kc/y46-h2.webp',
    symbol: 'star',
    background: BG_RED,
  },

  // ── 1947 – 1949 ─────────────────────────────────────────────────────────
  vietBac: {
    id: 'chapter-1947',
    year: '1947',
    eyebrow: '07/10 – 20/12/1947 · Việt Bắc Thu – Đông',
    heading: 'Bẻ gãy các gọng kìm',
    keyText: 'GIỮ VỮNG CĂN CỨ ĐỊA',
    caption:
      'Lược đồ Chiến dịch Việt Bắc Thu – Đông 1947 — quân Pháp hình thành các gọng kìm bao vây căn cứ; quân dân ta chủ động tránh chỗ mạnh, đánh chỗ sơ hở.',
    image: '/images/kc/y47-h1.webp',
    symbol: 'flag',
    background: BG_DARK,
    contain: true,
  },
  songLo: {
    id: 'kc-47-songlo',
    year: '1947',
    eyebrow: 'Sông Lô · Đường số 3 · Đường số 4',
    heading: 'Phục kích trên các tuyến tiến công',
    keyText: 'CÀNG VÀO SÂU · CÀNG SA LẦY',
    caption:
      'Bộ đội pháo binh trên sông Lô — những trận đánh trên sông và các tuyến giao thông gây cho quân Pháp nhiều tổn thất, kế hoạch hợp điểm từng bước bị phá vỡ.',
    image: '/images/kc/y47-h2.webp',
    symbol: 'star',
    background: BG_EARTH,
  },
  cungCo4849: {
    id: 'kc-4849',
    year: '1948–49',
    eyebrow: 'Củng cố và phát triển',
    heading: 'Lực lượng ngày càng trưởng thành',
    keyText: 'HƠN 30 CHIẾN DỊCH',
    caption:
      'Chủ tịch Hồ Chí Minh và Hội đồng Chính phủ nghe Đại tướng Võ Nguyên Giáp báo cáo chiến sự — đẩy mạnh chiến tranh du kích, xây dựng hậu phương; Pháp buộc phải chuyển sang đánh lâu dài.',
    image: '/images/kc/y47-h3.webp',
    symbol: 'sickle',
    background: BG_DARK,
    contain: true,
  },

  // ── 1950 ────────────────────────────────────────────────────────────────
  dongKhe: {
    id: 'chapter-1950',
    year: '1950',
    eyebrow: '16/09/1950 · Đông Khê',
    heading: 'Chiến dịch Biên giới mở màn',
    keyText: 'BƯỚC NGOẶT',
    caption:
      'Chủ tịch Hồ Chí Minh trực tiếp ra mặt trận Đông Khê — sau 54 giờ chiến đấu, sáng 18/9 quân ta làm chủ hoàn toàn cụm cứ điểm.',
    image: '/images/kc/y50-h1.webp',
    symbol: 'star',
    background: BG_RED,
  },
  bienGioi: {
    id: 'kc-50-biengioi',
    year: '14.10',
    eyebrow: '16/09 – 14/10/1950 · Chiến dịch Biên giới',
    heading: 'Khai thông biên giới Việt – Trung',
    keyText: 'PHÁ THẾ BAO VÂY',
    caption:
      'Lược đồ Chiến dịch Biên giới Thu – Đông 1950 — loại khỏi vòng chiến đấu khoảng 8.300 quân địch; tuyến phòng thủ Đường số 4 bị phá vỡ, căn cứ Việt Bắc được mở rộng.',
    image: '/images/kc/y50-h2.webp',
    symbol: 'flag',
    background: BG_DARK,
    contain: true,
  },

  // ── 1951 – 1953 ─────────────────────────────────────────────────────────
  theVaLuc: {
    id: 'chapter-1951',
    year: '1951–53',
    eyebrow: 'Sau Chiến thắng Biên giới 1950',
    heading: 'Phát triển thế và lực',
    keyText: 'TÍCH LŨY SỨC MẠNH',
    caption:
      'Cuộc kháng chiến bước sang giai đoạn mới: củng cố lực lượng, xây dựng hậu phương, giữ vững quyền chủ động — Pháp ngày càng sa lầy.',
    image: '/images/kc/y51-hcm.webp',
    symbol: 'star',
    background: BG_RADIAL,
  },
  daiHoi2: {
    id: 'kc-51-daihoi',
    year: '1951',
    eyebrow: 'Đại hội đại biểu toàn quốc lần thứ II của Đảng',
    heading: 'Củng cố lực lượng kháng chiến',
    keyText: 'ĐƯỜNG LỐI SOI SÁNG',
    caption:
      'Đại hội II (1951) đánh dấu bước phát triển quan trọng trong việc xác định đường lối tiếp tục đưa cuộc kháng chiến đi đến thắng lợi.',
    image: '/images/kc/y51-a1.webp',
    symbol: 'sickle',
    background: BG_DARK,
    contain: true,
  },
  vuKhi52: {
    id: 'kc-52-vukhi',
    year: '1952',
    eyebrow: 'Hậu phương thi đua sản xuất',
    heading: 'Bảo đảm vũ khí, trang bị kỹ thuật',
    keyText: 'HẬU PHƯƠNG VỮNG CHẮC',
    caption:
      'Nhân dân tăng gia sản xuất, đóng góp lương thực, nhân lực và vật lực — chi viện ngày càng lớn cho tiền tuyến.',
    image: '/images/kc/y51-a2.webp',
    symbol: 'sickle',
    background: BG_EARTH,
    contain: true,
  },
  hanhQuan52: {
    id: 'kc-52-hanhquan',
    year: '1952',
    eyebrow: 'Trên khắp các chiến trường',
    heading: 'Bộ đội hành quân, chiến đấu',
    keyText: 'MỞ RỘNG TIẾN CÔNG',
    caption:
      'Quân ta tiếp tục mở các chiến dịch và giành nhiều thắng lợi, từng bước nâng cao sức mạnh của quân đội.',
    image: '/images/kc/y51-a3.webp',
    symbol: 'star',
    background: BG_DARK,
  },
  taoThe53: {
    id: 'kc-53-taothe',
    year: '1953',
    eyebrow: 'Chuẩn bị cho những chiến dịch lớn',
    heading: 'Bộ đội · dân công · hậu phương',
    keyText: 'TẠO THẾ CHO BƯỚC NGOẶT',
    caption:
      'Thế chủ động được giữ vững và phát triển; hậu phương ngày càng củng cố — Pháp ngày càng khó khăn, chiến tranh ngày càng sa lầy.',
    image: '/images/kc/y51-a4.webp',
    symbol: 'flag',
    background: BG_EARTH,
  },

  // ── 1953 – 1954 · ĐIỆN BIÊN PHỦ ────────────────────────────────────────
  cuDiem: {
    id: 'chapter-1954',
    year: '1953',
    eyebrow: 'Cuối 1953 · Điện Biên Phủ',
    heading: 'Pháp xây dựng tập đoàn cứ điểm',
    keyText: '"PHÁO ĐÀI BẤT KHẢ XÂM PHẠM"',
    caption:
      'Pháp tập trung lực lượng xây dựng Điện Biên Phủ thành tập đoàn cứ điểm mạnh nhất Đông Dương, tin rằng nơi đây không thể bị công phá.',
    image: '/images/kc/y54-a1.webp',
    symbol: 'letter',
    background: BG_DARK,
  },
  soDoCuDiem: {
    id: 'kc-54-sodo',
    year: '1953',
    eyebrow: 'Tập đoàn cứ điểm Điện Biên Phủ',
    heading: 'Hệ thống công sự kiên cố, hỏa lực mạnh',
    keyText: 'THÁCH THỨC LỚN NHẤT',
    caption:
      'Sơ đồ tập đoàn cứ điểm Điện Biên Phủ — trước tình hình đó, Bộ Chính trị quyết định mở Chiến dịch Điện Biên Phủ.',
    image: '/images/kc/y54-a2.webp',
    symbol: 'letter',
    background: BG_EARTH,
    contain: true,
  },
  keoPhao: {
    id: 'kc-54-keophao',
    year: '1954',
    eyebrow: 'Chuẩn bị chiến dịch',
    heading: 'Pháo binh kéo pháo vào trận địa',
    keyText: 'VƯỢT NÚI · BĂNG RỪNG',
    caption:
      'Một khối lượng khổng lồ về người và vật chất được đưa vào chiến trường — hàng chục vạn bộ đội, dân công, thanh niên xung phong hướng về Điện Biên Phủ.',
    image: '/images/kc/y54-a3.webp',
    symbol: 'star',
    background: BG_RED,
  },
  truocGioG: {
    id: 'kc-54-tructien',
    year: '13.03',
    eyebrow: 'Trước giờ nổ súng',
    heading: 'Quân ta sẵn sàng chiến đấu',
    keyText: 'QUYẾT CHIẾN',
    caption: 'Những người lính trước giờ ra trận — ba đợt tiến công sẽ từng bước phá vỡ tập đoàn cứ điểm.',
    image: '/images/kc/y54-a4.webp',
    symbol: 'flag',
    background: BG_DARK,
  },
  toanThang: {
    id: 'kc-54-toanthang',
    year: '07.05.1954',
    eyebrow: 'Lá cờ "Quyết chiến – Quyết thắng" trên nóc hầm De Castries',
    heading: 'Chiến dịch Điện Biên Phủ',
    keyText: 'TOÀN THẮNG',
    caption:
      'Tập đoàn cứ điểm Điện Biên Phủ hoàn toàn bị tiêu diệt. Tướng De Castries cùng toàn bộ bộ chỉ huy bị bắt sống — đỉnh cao của cuộc kháng chiến chống thực dân Pháp.',
    image: '/images/kc/y54-a5.webp',
    symbol: 'flag',
    background: BG_RED,
  },

  // ── KẾT QUẢ & Ý NGHĨA ──────────────────────────────────────────────────
  geneve: {
    id: 'y-nghia',
    year: '21.07',
    eyebrow: '21/07/1954 · Giơ-ne-vơ',
    heading: 'Hiệp định Giơ-ne-vơ được ký kết',
    keyText: 'ĐỘC LẬP ĐƯỢC CÔNG NHẬN',
    caption:
      'Chính phủ Pháp buộc phải công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam.',
    image: '/images/kc/yn-a1.webp',
    symbol: 'letter',
    background: BG_DARK,
    contain: true,
  },
  mienBac: {
    id: 'kc-yn-mienbac',
    year: '10.10',
    eyebrow: '10/10/1954 · Tiếp quản Thủ đô',
    heading: 'Giải phóng hoàn toàn miền Bắc',
    keyText: 'HÀ NỘI NGÀY VỀ',
    caption:
      'Miền Bắc hoàn toàn giải phóng, bước vào thời kỳ mới — tạo tiền đề vững chắc cho cuộc đấu tranh thống nhất đất nước.',
    image: '/images/kc/yn-a2.webp',
    symbol: 'star',
    background: BG_EARTH,
  },
};
