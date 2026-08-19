// LỒNG TIẾNG THEO CHƯƠNG — mỗi chương MỘT file (thu bởi Nguyên, studio Hòa Lạc).
// Khi cuộn tới section mang `id`, hệ thống phát file `src`; tự lướt KHÓA cuộn
// theo đồng hồ giọng đọc (dải `scroll` của section), giọng ngừng thì cuộn đứng.
//
// ⚠️ GHÉP FILE ↔ ĐOẠN đang theo thứ tự số file + đối chiếu thời lượng với số từ
// kịch bản (chưa nghe kiểm bằng tai). Nếu đoạn nào SAI GIỌNG: chỉ cần đổi tên
// file trong cột `src` cho nhau. Danh sách gốc:
//   modau.m4a     = "lồng tiếng.m4a"      36s — Mở đầu "1946–1954, chín năm…"
//   c1946.m4a     = "X. Hòa Lạc 2 (1)"    60s — 1946 "…tưởng tượng Việt Nam cuối 1946…"
//   c1947.m4a     = "1947-1949.m4a" (thu lại) 71s — 1947–49 "Vào Thu – Đông năm 1947…"
//   c1950.m4a     = "X. Hòa Lạc 4"        74s — 1950 "Năm 1950, cuộc kháng chiến…"
//   c1951.m4a     = "1951-1953.m4a" (thu lại) 66s — 1951–53 "Sau thắng lợi của Chiến dịch Biên giới…"
//   dbp-intro.m4a = "X. Hòa Lạc 10"       32s — ĐBP mở màn "Sau những thắng lợi liên tiếp…"
//   dbp.m4a       = "X. Hòa Lạc 11"       50s — ĐBP chính "Cuối năm 1953, thực dân Pháp…"
//   ketluan.m4a   = "X. Hòa Lạc 12"       20s — Các mốc sự kiện (Hiệp định Giơ-ne-vơ…)
export interface NarrationCue {
  id: string; // id của <section>/<div bọc> mà giọng đọc thuộc về
  src: string; // file audio của chương
  start?: number; // giây bắt đầu trong file (mặc định 0)
  end?: number; // giây kết thúc (mặc định: hết file)
  // dải cuộn con (0..1) của element mà giọng quét qua. Mặc định [0, 1].
  scroll?: [number, number];
  /** Cân bằng âm lượng RIÊNG đoạn này (mặc định 1). Đã đo mức nói (RMS) của
   *  từng file và đặt hệ số để mọi đoạn nghe ĐỀU nhau (~ -26.5 dBFS). */
  vol?: number;
}

const VV = 'v=1'; // đổi khi thay file cùng tên (phá cache trình duyệt)

export const NARRATION: NarrationCue[] = [
  // Mở đầu — màn TĨNH: căn khung chuẩn rồi ĐỨNG YÊN suốt lúc đọc ([0.5, 0.5]
  // = giữ nguyên vị trí giữa màn), hết lời mới lướt tiếp — không trôi vào vùng
  // chuyển tiếp trống khi giọng còn đang nói
  { id: 'modau', src: `/audio/voice/modau.m4a?${VV}`, scroll: [0.5, 0.5], vol: 1.4 },
  // 1946 — giọng dẫn suốt slide Toàn quốc kháng chiến (chữ hiện theo lời đọc)
  { id: 'chapter-1946', src: `/audio/voice/c1946.m4a?${VV}`, scroll: [0.02, 0.88] },
  // 1947–1949 — slide Việt Bắc (v=2: bản thu lại "1947-1949.m4a")
  { id: 'chapter-1947', src: `/audio/voice/c1947.m4a?v=2`, scroll: [0.02, 0.9], vol: 0.62 },
  // 1950 — slide Bước ngoặt
  { id: 'chapter-1950', src: `/audio/voice/c1950.m4a?${VV}`, scroll: [0.02, 0.9], vol: 0.95 },
  // 1951–1953 — bản thu lại 66s CHIA 5 KHÚC bám đúng 5 màn (điểm cắt nằm giữa
  // các khoảng lặng, dò bằng sóng âm): câu nào vang lên thì màn đó trên hình.
  // 1) "Sau thắng lợi Biên giới 1950… phát triển thế và lực" → màn mốc
  { id: 'chapter-1951', src: `/audio/voice/c1951.m4a?v=2`, end: 15.85, scroll: [0.05, 0.92], vol: 0.65 },
  // 2) "Đảng tập trung củng cố… Đại hội II năm 1951…" → slide 1951
  { id: 'sl-1951', src: `/audio/voice/c1951.m4a?v=2`, start: 15.9, end: 34.65, scroll: [0.03, 0.95], vol: 0.65 },
  // 3) "Ở hậu phương, nhân dân tích cực tăng gia sản xuất…" → slide 1952
  { id: 'sl-1952', src: `/audio/voice/c1951.m4a?v=2`, start: 34.7, end: 43.3, scroll: [0.03, 0.75], vol: 0.65 },
  // 4) "Trên chiến trường, quân ta tiếp tục mở các chiến dịch…" → slide 1953
  { id: 'sl-1953', src: `/audio/voice/c1951.m4a?v=2`, start: 43.35, end: 52.65, scroll: [0.03, 0.8], vol: 0.65 },
  // 5) "Như vậy, từ năm 1951 đến 1953…" → chữ lướt KẾT LUẬN (sau câu hỏi)
  { id: 'casc-1951-ket', src: `/audio/voice/c1951.m4a?v=2`, start: 52.85, scroll: [0.05, 0.9], vol: 0.65 },
  // ĐBP mở màn — màn TĨNH: đứng yên căn giữa suốt lúc đọc (như Mở đầu)
  { id: 'chapter-1954', src: `/audio/voice/dbp-intro.m4a?${VV}`, scroll: [0.5, 0.5] },
  // ĐBP chính — chia 3 khúc để THAY câu đọc nhầm "13 tháng 8" (22.3–27.4s trong
  // file) bằng bản vá "voice 13thang3" (điểm cắt nằm GIỮA khoảng lặng, không
  // chạm chữ nào — dò bằng phân tích sóng âm):
  // 1) 2 slide ĐBP: phát dbp.m4a từ đầu, DỪNG ở 21.8s (hết "…ra mặt trận")
  { id: 'arc-dbp', src: `/audio/voice/dbp.m4a?${VV}`, end: 21.8, scroll: [0.02, 0.96], vol: 0.64 },
  // 2) màn ngày 13/03/1954: đoạn vá đọc ĐÚNG "Ngày 13 tháng 3 năm 1954…"
  { id: 'kc-54-batdau', src: `/audio/voice/13thang3.m4a?${VV}`, scroll: [0.25, 0.7], vol: 0.88 },
  // 3) màn 56 ngày đêm: đọc tiếp dbp.m4a từ 27.65s ("Chiến dịch kéo dài suốt…")
  { id: 'kc-54-56ngaydem', src: `/audio/voice/dbp.m4a?${VV}`, start: 27.65, scroll: [0.02, 0.9], vol: 0.64 },
  // Các mốc sự kiện trọng tâm (Giơ-ne-vơ · tiếp quản Thủ đô · giải phóng miền
  // Bắc) — slide ghim: ảnh + 3 mốc hiện dần theo giọng đọc
  { id: 'moc-su-kien', src: `/audio/voice/ketluan.m4a?${VV}`, scroll: [0.03, 0.92] },
  // Lá cờ "Quyết chiến – Quyết thắng" trên nóc hầm De Castries ("X. Hòa Lạc 16", 19s)
  // — màn mốc ghim: giữ khung lá cờ, chữ hiện theo giọng đọc
  { id: 'kc-54-toanthang', src: `/audio/voice/laco.m4a?${VV}`, scroll: [0.15, 0.75] },
];
