// LỒNG TIẾNG THEO CHƯƠNG — phát đúng ĐOẠN trong file voice (không cần cắt file).
// Khi cuộn tới một chương, hệ thống đặt currentTime = start, phát tới end rồi dừng.
//
// ⚠️ CHƯA CÓ FILE LỒNG TIẾNG. Khi bạn Nguyên thu xong:
//   1. Đặt file vào public/audio/voice/part-1.m4a (và part-2.m4a nếu có 2 phần)
//   2. Điền các mốc giây vào NARRATION bên dưới (id = id của <section> chương)
//   Ví dụ: { id: 'chapter-1946', part: 1, start: 0, end: 42 },
export interface NarrationCue {
  id: string; // id của <section> chương
  part: 1 | 2;
  start: number; // giây
  end: number; // giây
  // dải cuộn con (0..1) của section mà đoạn này quét qua. Mặc định cả section.
  scroll?: [number, number];
}

export const NARRATION_FILES: Record<1 | 2, string> = {
  1: '/audio/voice/part-1.m4a',
  2: '/audio/voice/part-2.m4a',
};

export const NARRATION: NarrationCue[] = [
  // (trống — chờ file lồng tiếng của kịch bản Kháng chiến chống Pháp)
];
