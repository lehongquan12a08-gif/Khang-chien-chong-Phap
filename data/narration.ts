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
//   c1951.m4a     = "X. Hòa Lạc 5"        40s — 1951–53 "Sau thắng lợi của Chiến dịch Biên giới…"
//   dbp-intro.m4a = "X. Hòa Lạc 10"       32s — ĐBP mở màn "Sau những thắng lợi liên tiếp…"
//   dbp.m4a       = "X. Hòa Lạc 11"       50s — ĐBP chính "Cuối năm 1953, thực dân Pháp…"
//   ketluan.m4a   = "X. Hòa Lạc 12"       20s — Kết luận "Sau 9 năm chiến đấu gian khổ…"
export interface NarrationCue {
  id: string; // id của <section>/<div bọc> mà giọng đọc thuộc về
  src: string; // file audio của chương
  start?: number; // giây bắt đầu trong file (mặc định 0)
  end?: number; // giây kết thúc (mặc định: hết file)
  // dải cuộn con (0..1) của element mà giọng quét qua. Mặc định [0, 1].
  scroll?: [number, number];
}

const VV = 'v=1'; // đổi khi thay file cùng tên (phá cache trình duyệt)

export const NARRATION: NarrationCue[] = [
  // Mở đầu — màn TĨNH: căn khung chuẩn rồi ĐỨNG YÊN suốt lúc đọc ([0.5, 0.5]
  // = giữ nguyên vị trí giữa màn), hết lời mới lướt tiếp — không trôi vào vùng
  // chuyển tiếp trống khi giọng còn đang nói
  { id: 'modau', src: `/audio/voice/modau.m4a?${VV}`, scroll: [0.5, 0.5] },
  // 1946 — giọng dẫn suốt slide Toàn quốc kháng chiến (chữ hiện theo lời đọc)
  { id: 'chapter-1946', src: `/audio/voice/c1946.m4a?${VV}`, scroll: [0.02, 0.88] },
  // 1947–1949 — slide Việt Bắc (v=2: bản thu lại "1947-1949.m4a")
  { id: 'chapter-1947', src: `/audio/voice/c1947.m4a?v=2`, scroll: [0.02, 0.9] },
  // 1950 — slide Bước ngoặt
  { id: 'chapter-1950', src: `/audio/voice/c1950.m4a?${VV}`, scroll: [0.02, 0.9] },
  // 1951–1953 — bọc từ màn mốc "Phát triển thế và lực" hết slide 1952 (Ảnh 1–3;
  // câu về Ảnh 4 rơi cuối slide 1952, câu hỏi tương tác đứng ngoài phần lồng tiếng)
  { id: 'arc-1951', src: `/audio/voice/c1951.m4a?${VV}`, scroll: [0.01, 0.97] },
  // ĐBP mở màn — màn TĨNH: đứng yên căn giữa suốt lúc đọc (như Mở đầu)
  { id: 'chapter-1954', src: `/audio/voice/dbp-intro.m4a?${VV}`, scroll: [0.5, 0.5] },
  // ĐBP chính — bọc từ slide "Pháp xây dựng tập đoàn cứ điểm" hết màn 56 ngày đêm
  { id: 'arc-dbp', src: `/audio/voice/dbp.m4a?${VV}`, scroll: [0.01, 0.97] },
  // Kết luận — màn TĨNH "Dấu ấn lịch sử" (ảnh giải phóng): đứng yên lúc đọc
  { id: 'y-nghia', src: `/audio/voice/ketluan.m4a?${VV}`, scroll: [0.5, 0.5] },
];
