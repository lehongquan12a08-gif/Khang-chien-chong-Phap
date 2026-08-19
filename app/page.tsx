import Navbar from '@/components/Navbar';
import TimelineIndicator from '@/components/TimelineIndicator';
import AutoScrollButton from '@/components/AutoScrollButton';
import AudioController from '@/components/AudioController';
import Hero from '@/components/Hero';
import WordCascade from '@/components/WordCascade';
import DateReveal from '@/components/DateReveal';
import SlideSection from '@/components/SlideSection';
import ClosingText from '@/components/ClosingText';
import MilestoneChapter from '@/components/MilestoneChapter';
import InteractiveQuestion from '@/components/InteractiveQuestion';
import FiftySixDays from '@/components/FiftySixDays';
import QuoteSection from '@/components/QuoteSection';
import ConclusionSection from '@/components/ConclusionSection';
import MediaSection from '@/components/MediaSection';
import Footer from '@/components/Footer';
import { MILESTONES } from '@/data/milestones';

/**
 * Bố cục bám SÁT kịch bản docx — ảnh của mỗi slide được GỘP vào cùng màn slide
 * (thẻ H1/H2… gắn trên ảnh). Chỉ giữ riêng các màn điện ảnh: ảnh Bác 1951,
 * bộ ảnh 56 ngày đêm, màn lá cờ Toàn thắng.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <TimelineIndicator />
      <AutoScrollButton />
      <AudioController />

      <main>
        {/* ═══ MỞ ĐẦU (Ảnh mở đầu) ═══ */}
        <Hero />
        <ClosingText
          eyebrow="Mở đầu"
          paragraphs={[
            'Sau Cách mạng Tháng Tám, nền độc lập vừa giành được đã phải đối mặt với sự trở lại của thực dân Pháp.',
            'Và hành trình chín năm ấy bắt đầu từ đây.',
          ]}
        />

        {/* ═══ GIAI ĐOẠN 1946: TOÀN QUỐC KHÁNG CHIẾN BÙNG NỔ ═══ */}
        <SlideSection
          id="chapter-1946"
          eyebrow="Giai đoạn 1946 · Toàn quốc kháng chiến bùng nổ"
          title="Ngày 19/12/1946 — Toàn quốc kháng chiến"
          backgroundImage="/images/kc/toan-quoc-khang-chien.jpg"
          groups={[
            {
              bullets: [
                'Pháp liên tiếp gây hấn, lấn chiếm.',
                '18–19/12/1946: Pháp gửi tối hậu thư, buộc ta lựa chọn chiến đấu để bảo vệ độc lập.',
                '19/12/1946: Toàn quốc kháng chiến bùng nổ.',
                'Đường lối: Toàn dân – Toàn diện – Trường kỳ – Tự lực cánh sinh – Tranh thủ quốc tế.',
                'Nhân dân cả nước nhất tề đứng lên bảo vệ độc lập.',
              ],
            },
          ]}
          images={[
            { src: '/images/kc/y46-h1.webp', tag: 'H1', fit: 'contain', caption: 'Bút tích "Lời kêu gọi Toàn quốc kháng chiến" của Chủ tịch Hồ Chí Minh' },
            { src: '/images/kc/y46-h2.webp', tag: 'H2', caption: 'Pháo đài Láng khai hỏa — khoảng 20 giờ, 19/12/1946' },
          ]}
        />
        {/* Phần giữa — LƯỚT XUỐNG: câu trích nguyên văn, từng vế một màn */}
        <QuoteSection />
        <InteractiveQuestion
          question="Nếu chỉ có quân đội chiến đấu mà không có nhân dân, hậu phương, kinh tế, chính trị và ngoại giao hỗ trợ, liệu một cuộc kháng chiến lâu dài có thể thành công không?"
          answer="Không. Một dân tộc có thể vượt qua sự chênh lệch về vật chất khi biết phát huy sức mạnh của toàn dân, có đường lối đúng đắn và có ý chí kiên định với mục tiêu độc lập."
        />
        {/* Phần cuối */}
        <ClosingText
          eyebrow="Tinh thần 19/12/1946"
          bgImage="/images/kc/y46-h2.webp"
          paragraphs={[
            'Ngày 19 tháng 12 năm 1946 không chỉ đánh dấu một cuộc chiến bắt đầu. Đó là thời khắc cả dân tộc cùng đứng lên bảo vệ nền độc lập vừa giành được.',
            'Từ một dân tộc đứng trước thử thách sống còn, Việt Nam đã lựa chọn đoàn kết, trường kỳ và tự lực để chiến đấu vì độc lập, tự do.',
            'Đó chính là tinh thần của Toàn quốc kháng chiến.',
          ]}
        />

        {/* ═══ GIAI ĐOẠN 1947–1949: GIỮ VỮNG CĂN CỨ KHÁNG CHIẾN ═══ */}
        <SlideSection
          id="chapter-1947"
          eyebrow="Giai đoạn 1947 – 1949 · Giữ vững căn cứ kháng chiến"
          groups={[
            {
              title: '1947 — Việt Bắc Thu – Đông',
              bullets: [
                '07/10/1947: Pháp tiến công Việt Bắc.',
                'Mục tiêu: tiêu diệt đầu não – chủ lực – phá căn cứ.',
                'Quân dân ta phản công, bẻ gãy các mũi tiến công.',
                '19–20/12/1947: Pháp rút khỏi Việt Bắc.',
                '"Đánh nhanh, thắng nhanh" thất bại.',
              ],
            },
            {
              title: '1948 – 1949 — Củng cố và phát triển',
              bullets: [
                'Giữ vững căn cứ địa Việt Bắc.',
                'Lực lượng kháng chiến ngày càng trưởng thành.',
                'Đẩy mạnh chiến tranh du kích, xây dựng hậu phương.',
                'Pháp buộc phải chuyển sang đánh lâu dài.',
              ],
            },
          ]}
          images={[
            { src: '/images/kc/y47-h1.webp', tag: 'H1', fit: 'contain', caption: 'Lược đồ Chiến dịch Việt Bắc Thu – Đông 1947' },
            { src: '/images/kc/y47-h2.webp', tag: 'H2', caption: 'Bộ đội pháo binh trên sông Lô' },
            { src: '/images/kc/y47-h3.webp', tag: 'H3', caption: 'Chủ tịch Hồ Chí Minh và Hội đồng Chính phủ nghe Đại tướng Võ Nguyên Giáp báo cáo chiến sự' },
          ]}
        />
        {/* Phần giữa */}
        <WordCascade
          eyebrow="1947 – 1949"
          words={['VIỆT BẮC ĐƯỢC GIỮ VỮNG', 'CĂN CỨ KHÁNG CHIẾN ĐƯỢC CỦNG CỐ', 'LỰC LƯỢNG NGÀY CÀNG TRƯỞNG THÀNH']}
          perWordVh={70}
        />
        <InteractiveQuestion
          question="Chiến thắng Việt Bắc 1947 chủ yếu nhờ ưu thế vũ khí hay sức mạnh của thế trận kháng chiến toàn dân?"
          options={[
            { key: 'A', text: 'Ưu thế vũ khí' },
            { key: 'B', text: 'Sức mạnh của thế trận kháng chiến toàn dân', correct: true },
          ]}
          answer="Việt Bắc không chỉ có những người lính cầm súng — phía sau bộ đội là cả một thế trận nhân dân. Sức mạnh của một dân tộc không chỉ nằm trong vũ khí, mà còn nằm trong ý chí đứng lên bảo vệ độc lập của chính mình."
        />
        {/* Phần cuối */}
        <ClosingText
          eyebrow="Việt Bắc Thu – Đông 1947"
          paragraphs={[
            'Đập tan "đánh nhanh, thắng nhanh", tạo thế và lực cho kháng chiến lâu dài.',
          ]}
        />

        {/* ═══ GIAI ĐOẠN 1950: BƯỚC NGOẶT CỦA CUỘC KHÁNG CHIẾN ═══ */}
        <SlideSection
          id="chapter-1950"
          eyebrow="Giai đoạn 1950 · Bước ngoặt của cuộc kháng chiến"
          groups={[
            {
              title: '01/1950 — Bước ngoặt ngoại giao',
              bullets: [
                'Trung Quốc thiết lập quan hệ ngoại giao với Việt Nam.',
                'Liên Xô và các nước xã hội chủ nghĩa thiết lập quan hệ.',
              ],
            },
            {
              title: '16/09 – 14/10/1950 — Chiến dịch Biên giới',
              bullets: [
                'Phá thế bao vây của Pháp.',
                'Khai thông biên giới Việt – Trung.',
                'Mở rộng, củng cố căn cứ Việt Bắc.',
              ],
            },
            {
              accent: true,
              bullets: [
                'Sau 1950: Ta giành và giữ vững quyền chủ động chiến lược, từng bước chuyển sang thế phản công và tiến công.',
              ],
            },
          ]}
          images={[
            { src: '/images/kc/y50-h1.webp', tag: 'H1', caption: 'Chủ tịch Hồ Chí Minh tại mặt trận Đông Khê' },
            { src: '/images/kc/y50-h2.webp', tag: 'H2', fit: 'contain', caption: 'Lược đồ Chiến dịch Biên giới Thu – Đông 1950' },
          ]}
        />
        {/* Phần giữa */}
        <WordCascade
          eyebrow="1950"
          words={['QUÂN SỰ THẮNG LỢI', 'NGOẠI GIAO MỞ RỘNG', 'KHÁNG CHIẾN BƯỚC SANG THẾ CHỦ ĐỘNG']}
          accentWords={['KHÁNG CHIẾN BƯỚC SANG THẾ CHỦ ĐỘNG']}
          perWordVh={70}
        />
        <InteractiveQuestion
          question="Tại sao Chiến thắng Biên giới năm 1950 được xem là bước ngoặt của cuộc kháng chiến, chứ không chỉ đơn thuần là một chiến thắng quân sự?"
          answer="Bởi vì chiến thắng này đã làm thay đổi thế trận của cả cuộc chiến. Từ thế bị bao vây đến phá vỡ vòng vây. Từ phòng ngự đến giành quyền chủ động."
        />
        {/* Phần cuối */}
        <ClosingText
          eyebrow="Biên giới Thu – Đông 1950"
          paragraphs={[
            'Chiến thắng Biên giới 1950 đánh dấu bước trưởng thành của lực lượng kháng chiến, phá thế bao vây và tạo thế, lực cho những thắng lợi lớn tiếp theo.',
          ]}
        />

        {/* ═══ GIAI ĐOẠN 1951–1953: PHÁT TRIỂN THẾ VÀ LỰC ═══ */}
        {/* Phần I. Mở đầu — 1 ảnh lớn */}
        <MilestoneChapter milestone={MILESTONES.theVaLuc} />
        {/* Phần II. Các mốc thời gian — slide + ảnh gộp, xen kẽ đúng docx */}
        <SlideSection
          eyebrow="Giai đoạn 1951 – 1953 · Phát triển thế và lực"
          backgroundImage="/images/kc/1951.jpg"
          groups={[
            {
              title: '1951 — Củng cố lực lượng',
              bullets: [
                'Đại hội đại biểu toàn quốc lần thứ II của Đảng.',
                'Củng cố tổ chức và lực lượng kháng chiến.',
                'Đẩy mạnh xây dựng hậu phương.',
              ],
            },
          ]}
          images={[
            { src: '/images/kc/y51-a1.webp', tag: 'Ảnh 1', caption: 'Đại hội đại biểu toàn quốc lần thứ II của Đảng, năm 1951' },
          ]}
        />
        <SlideSection
          eyebrow="Giai đoạn 1951 – 1953 · Phát triển thế và lực"
          backgroundImage="/images/kc/1952.jpg"
          groups={[
            {
              title: '1952 — Mở rộng hoạt động quân sự',
              bullets: [
                'Quân ta tiếp tục mở các chiến dịch trên nhiều chiến trường.',
                'Phát triển lực lượng quân sự.',
                'Hậu phương đẩy mạnh sản xuất, chi viện tiền tuyến.',
              ],
            },
          ]}
          images={[
            { src: '/images/kc/y51-a2.webp', tag: 'Ảnh 2', caption: 'Công tác bảo đảm vũ khí, trang bị kỹ thuật' },
            { src: '/images/kc/y51-a3.webp', tag: 'Ảnh 3', caption: 'Bộ đội hành quân, chiến đấu' },
          ]}
        />
        {/* Câu hỏi tương tác (sau Ảnh 2 và 3 — 1952) */}
        <InteractiveQuestion
          question="Ai tạo nên sức mạnh kháng chiến?"
          options={[
            { key: 'A', text: 'Chỉ người lính tiền tuyến' },
            { key: 'B', text: 'Toàn thể nhân dân', correct: true },
          ]}
          answer="Toàn thể nhân dân. Kháng chiến là sự kết hợp giữa tiền tuyến và hậu phương, giữa quân đội và nhân dân."
        />
        <SlideSection
          eyebrow="Giai đoạn 1951 – 1953 · Phát triển thế và lực"
          groups={[
            {
              title: '1953 — Tạo thế cho bước ngoặt',
              bullets: [
                'Tiếp tục giữ và phát triển thế chủ động.',
                'Hậu phương ngày càng được củng cố.',
                'Pháp ngày càng gặp khó khăn, chiến tranh ngày càng sa lầy.',
              ],
            },
          ]}
          images={[
            { src: '/images/kc/y51-a4.webp', tag: 'Ảnh 4', caption: 'Bộ đội, dân công, hậu phương trong thời kỳ chuẩn bị cho những chiến dịch lớn' },
          ]}
        />
        {/* Phần III. Kết luận — LƯỚT XUỐNG (đưa ra ý nghĩa) */}
        <WordCascade
          eyebrow="1951 – 1953 · Kết luận"
          words={['THẾ VÀ LỰC CỦA TA', 'NGÀY CÀNG ĐƯỢC CỦNG CỐ', 'TẠO TIỀN ĐỀ CHO', 'BƯỚC NGOẶT 1953–1954']}
          accentWords={['BƯỚC NGOẶT 1953–1954']}
          perWordVh={70}
        />

        {/* ═══ GIAI ĐOẠN 1953–1954: ĐIỆN BIÊN PHỦ ═══ */}
        <ClosingText
          id="chapter-1954"
          eyebrow="Giai đoạn 1953 – 1954 · Điện Biên Phủ"
          bgImage="/images/kc/y54-keophao.webp"
          paragraphs={[
            'Cuối năm 1953, Điện Biên Phủ trở thành nơi tập trung lực lượng lớn nhất của quân Pháp. Từ đây, một chiến dịch lịch sử bắt đầu và kéo dài suốt 56 ngày đêm.',
          ]}
        />
        <SlideSection
          eyebrow="Điện Biên Phủ"
          groups={[
            {
              title: 'Cuối năm 1953 — Pháp xây dựng tập đoàn cứ điểm',
              bullets: [
                'Pháp xây dựng Điện Biên Phủ thành tập đoàn cứ điểm lớn.',
                'Âm mưu biến nơi đây thành "pháo đài bất khả xâm phạm".',
              ],
            },
          ]}
          images={[
            { src: '/images/kc/y54-a1.webp', tag: 'Ảnh 1', caption: 'Quân Pháp xây dựng cứ điểm' },
            { src: '/images/kc/y54-a2.webp', tag: 'Ảnh 2', fit: 'contain', caption: 'Sơ đồ tập đoàn cứ điểm Điện Biên Phủ' },
          ]}
        />
        <SlideSection
          eyebrow="Điện Biên Phủ"
          groups={[
            {
              title: '13/03/1954 — Chiến dịch bắt đầu',
              bullets: [
                'Bộ Chính trị quyết định mở Chiến dịch Điện Biên Phủ.',
                'Quân ta bắt đầu tiến công tập đoàn cứ điểm.',
              ],
            },
          ]}
          images={[
            { src: '/images/kc/y54-a3.webp', tag: 'Ảnh 3', caption: 'Pháo binh Việt Nam kéo pháo vào trận địa' },
            { src: '/images/kc/y54-a4.webp', tag: 'Ảnh 4', caption: 'Quân ta trước giờ chiến đấu' },
          ]}
        />
        {/* LƯỚT XUỐNG (đưa ra ý chính) */}
        <DateReveal id="kc-54-batdau" parts={['13', '03', '1954']} heading="CHIẾN DỊCH BẮT ĐẦU" />
        {/* 56 NGÀY ĐÊM — bộ đếm ngày chạy theo cuộn + ảnh tư liệu thay nhau làm nền */}
        <FiftySixDays id="kc-54-56ngaydem" />
        {/* LƯỚT XUỐNG (đưa ra ý chính) */}
        <WordCascade
          eyebrow="56 ngày đêm"
          words={['HẬU PHƯƠNG LỚN', 'TIỀN TUYẾN LỚN']}
          accentWords={['TIỀN TUYẾN LỚN']}
          perWordVh={75}
        />
        {/* 07/05/1954 — màn công bố chiến thắng: ngày ghép số + 2 dòng đóng dấu */}
        <DateReveal
          id="kc-54-chienthang"
          parts={['07', '05', '1954']}
          heading="CHIẾN THẮNG ĐIỆN BIÊN PHỦ"
          lines={[
            { text: 'Tập đoàn cứ điểm Điện Biên Phủ bị tiêu diệt.' },
            { text: 'Tướng De Castries và bộ chỉ huy bị bắt.', accent: true },
          ]}
          background="radial-gradient(ellipse at 50% 42%, #23100c 0%, #080808 70%)"
        />
        {/* Câu hỏi tương tác (trước khi hiện màn chiến thắng) */}
        <InteractiveQuestion
          question="Sau 56 ngày đêm, điều gì đã xảy ra tại Điện Biên Phủ?"
          options={[
            { key: 'A', text: 'Pháp tiếp tục giữ được tập đoàn cứ điểm' },
            { key: 'B', text: 'Hai bên ký hiệp định ngay tại Điện Biên Phủ' },
            { key: 'C', text: 'Tập đoàn cứ điểm Điện Biên Phủ bị tiêu diệt', correct: true },
            { key: 'D', text: 'Quân ta rút khỏi Điện Biên Phủ' },
          ]}
          answer="Tập đoàn cứ điểm Điện Biên Phủ bị tiêu diệt. Và đây chính là khoảnh khắc đánh dấu thắng lợi của chiến dịch."
          continueTo="#kc-54-toanthang"
          continueLabel="Xem thời khắc lịch sử"
        />
        {/* Sau khi trả lời → chuyển màn hình sang ảnh lá cờ · LƯỚT XUỐNG (ý nghĩa) */}
        <MilestoneChapter milestone={MILESTONES.toanThang} />

        {/* ═══ KẾT LUẬN VÀ Ý NGHĨA ═══ */}
        <ClosingText
          id="y-nghia"
          eyebrow="Dấu ấn lịch sử · 1946 – 1954"
          bgImage="/images/kc/giai-phong-ket-cuoi.webp"
          paragraphs={[
            'Từ tiếng súng mở đầu ở Hà Nội năm 1946 đến chiến thắng Điện Biên Phủ năm 1954 — đó chính là hành trình biến ý chí độc lập của cả dân tộc thành sức mạnh để đi đến thắng lợi.',
          ]}
        />
        {/* Phần II. Các mốc sự kiện trọng tâm — slide + 2 ảnh gộp */}
        <SlideSection
          eyebrow="Các mốc sự kiện trọng tâm"
          imagesTop
          groups={[
            {
              bullets: [
                '21/07/1954: Hiệp định Giơ-ne-vơ về Đông Dương được ký kết.',
                '10/10/1954: Giải phóng hoàn toàn miền Bắc (tiếp quản Thủ đô).',
              ],
            },
          ]}
          images={[
            { src: '/images/kc/yn-a1.webp', tag: 'Ảnh 1', caption: 'Hiệp định Giơ-ne-vơ được ký kết' },
            { src: '/images/kc/yn-a2.webp', tag: 'Ảnh 2', caption: 'Miền Bắc hoàn toàn giải phóng — tiếp quản Thủ đô, 10/10/1954' },
          ]}
        />
        {/* 5 thành tựu + khẳng định đường lối */}
        <ConclusionSection />

        {/* Nghe & Xem — bài hát tư liệu */}
        <MediaSection />

        {/* Ending */}
        <Footer />
      </main>
    </>
  );
}
