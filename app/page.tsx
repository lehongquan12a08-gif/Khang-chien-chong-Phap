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
import PhotoStrip from '@/components/PhotoStrip';
import QuoteSection from '@/components/QuoteSection';
import ConclusionSection from '@/components/ConclusionSection';
import MediaSection from '@/components/MediaSection';
import Footer from '@/components/Footer';
import { MILESTONES } from '@/data/milestones';

/**
 * Bố cục bám SÁT kịch bản docx "Đường lối kháng chiến chống Pháp (1946–1954)":
 * mỗi giai đoạn = [Slide nội dung] → [Hình ảnh] → [Phần giữa: lướt xuống] →
 * [Câu hỏi] → [Phần cuối]. Không thêm màn ngoài kịch bản.
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
            'Năm 1945, nước Việt Nam Dân chủ Cộng hòa vừa ra đời sau thắng lợi của Cách mạng Tháng Tám. Tuy nhiên, nền độc lập non trẻ ngay lập tức phải đối mặt với nhiều khó khăn.',
            'Thực dân Pháp quay trở lại xâm lược nước ta với âm mưu tái lập ách thống trị.',
            'Trước tình thế đó, Đảng và Chủ tịch Hồ Chí Minh đã xác định một đường lối kháng chiến đúng đắn, đưa dân tộc Việt Nam đi đến thắng lợi vẻ vang.',
          ]}
        />

        {/* ═══ GIAI ĐOẠN 1946: TOÀN QUỐC KHÁNG CHIẾN BÙNG NỔ ═══ */}
        {/* Phần đầu — slide nội dung */}
        <SlideSection
          id="chapter-1946"
          eyebrow="Giai đoạn 1946 · Toàn quốc kháng chiến bùng nổ"
          title="Ngày 19/12/1946 — Toàn quốc kháng chiến"
          groups={[
            {
              bullets: [
                'Pháp liên tiếp gây hấn, lấn chiếm.',
                '18–19/12/1946: Quyết định phát động toàn quốc kháng chiến. (H1)',
                '19/12/1946: Toàn quốc kháng chiến bùng nổ. (H2)',
                'Đường lối: Toàn dân – Toàn diện – Trường kỳ – Tự lực cánh sinh – Tranh thủ quốc tế.',
                'Nhân dân cả nước nhất tề đứng lên bảo vệ độc lập.',
              ],
            },
          ]}
        />
        <MilestoneChapter milestone={MILESTONES.loiKeuGoi} />
        <MilestoneChapter milestone={MILESTONES.phaoDaiLang} />
        {/* Phần giữa — LƯỚT XUỐNG: câu trích nguyên văn, từng vế một màn */}
        <QuoteSection />
        <InteractiveQuestion
          question="Nếu chỉ có quân đội chiến đấu mà không có nhân dân, hậu phương, kinh tế, chính trị và ngoại giao hỗ trợ, liệu một cuộc kháng chiến lâu dài có thể thành công không?"
          answer="Không. Một dân tộc có thể vượt qua sự chênh lệch về vật chất khi biết phát huy sức mạnh của toàn dân, có đường lối đúng đắn và có ý chí kiên định với mục tiêu độc lập."
        />
        {/* Phần cuối */}
        <ClosingText
          eyebrow="Tinh thần 19/12/1946"
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
              title: '1947 — Việt Bắc Thu – Đông (H1)',
              bullets: [
                '07/10/1947: Pháp tiến công Việt Bắc.',
                'Mục tiêu: tiêu diệt đầu não – chủ lực – phá căn cứ.',
                'Quân dân ta phản công, bẻ gãy các mũi tiến công. (H2)',
                '19–20/12/1947: Pháp rút khỏi Việt Bắc.',
                '"Đánh nhanh, thắng nhanh" thất bại.',
              ],
            },
            {
              title: '1948 – 1949 — Củng cố và phát triển',
              bullets: [
                'Giữ vững căn cứ địa Việt Bắc. (H3)',
                'Lực lượng kháng chiến ngày càng trưởng thành.',
                'Đẩy mạnh chiến tranh du kích, xây dựng hậu phương.',
                'Pháp buộc phải chuyển sang đánh lâu dài.',
              ],
            },
          ]}
        />
        <MilestoneChapter milestone={MILESTONES.vietBac} />
        <MilestoneChapter milestone={MILESTONES.songLo} />
        <MilestoneChapter milestone={MILESTONES.cungCo4849} />
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
          eyebrow="Giai đoạn 1950 · Bước ngoặt của cuộc kháng chiến (H1)"
          groups={[
            {
              title: '01/1950 — Bước ngoặt ngoại giao',
              bullets: [
                'Trung Quốc công nhận Việt Nam.',
                'Liên Xô và các nước xã hội chủ nghĩa thiết lập quan hệ.',
              ],
            },
            {
              title: '16/09 – 14/10/1950 — Chiến dịch Biên giới (H2)',
              bullets: [
                'Phá thế bao vây của Pháp.',
                'Khai thông biên giới Việt – Trung.',
                'Mở rộng, củng cố căn cứ Việt Bắc.',
              ],
            },
            {
              title: 'Sau 1950',
              bullets: [
                'Ta giành và giữ vững quyền chủ động chiến lược.',
                'Kháng chiến chuyển dần sang phản công và tiến công.',
              ],
            },
          ]}
        />
        <MilestoneChapter milestone={MILESTONES.dongKhe} />
        <MilestoneChapter milestone={MILESTONES.bienGioi} />
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
            'Đánh dấu bước trưởng thành vượt bậc của lực lượng kháng chiến, tạo thế và lực cho những thắng lợi lớn tiếp theo.',
          ]}
        />

        {/* ═══ GIAI ĐOẠN 1951–1953: PHÁT TRIỂN THẾ VÀ LỰC ═══ */}
        {/* Phần I. Mở đầu — 1 ảnh lớn */}
        <MilestoneChapter milestone={MILESTONES.theVaLuc} />
        {/* Phần II. Các mốc thời gian */}
        <SlideSection
          eyebrow="Giai đoạn 1951 – 1953 · Phát triển thế và lực"
          groups={[
            {
              title: '1951 — Củng cố lực lượng',
              bullets: [
                'Đại hội đại biểu toàn quốc lần thứ II của Đảng.',
                'Củng cố tổ chức và lực lượng kháng chiến.',
                'Đẩy mạnh xây dựng hậu phương.',
              ],
            },
            {
              title: '1952 — Mở rộng hoạt động quân sự',
              bullets: [
                'Quân ta tiếp tục mở các chiến dịch trên nhiều chiến trường.',
                'Phát triển lực lượng quân sự.',
                'Hậu phương đẩy mạnh sản xuất, chi viện tiền tuyến.',
              ],
            },
            {
              title: '1953 — Tạo thế cho bước ngoặt',
              bullets: [
                'Tiếp tục giữ và phát triển thế chủ động.',
                'Hậu phương ngày càng được củng cố.',
                'Pháp ngày càng gặp khó khăn, chiến tranh ngày càng sa lầy.',
              ],
            },
          ]}
        />
        <MilestoneChapter milestone={MILESTONES.daiHoi2} />
        <MilestoneChapter milestone={MILESTONES.vuKhi52} />
        <MilestoneChapter milestone={MILESTONES.hanhQuan52} />
        {/* Câu hỏi tương tác (sau Ảnh 2 và 3 — 1952) */}
        <InteractiveQuestion
          question="Ai tạo nên sức mạnh kháng chiến?"
          options={[
            { key: 'A', text: 'Chỉ người lính tiền tuyến' },
            { key: 'B', text: 'Toàn thể nhân dân', correct: true },
          ]}
          answer="Toàn thể nhân dân. Kháng chiến là sự kết hợp giữa tiền tuyến và hậu phương, giữa quân đội và nhân dân."
        />
        <MilestoneChapter milestone={MILESTONES.taoThe53} />
        {/* Phần III. Kết luận — LƯỚT XUỐNG (đưa ra ý nghĩa) */}
        <WordCascade
          eyebrow="1951 – 1953 · Kết luận"
          words={['THẾ VÀ LỰC CỦA TA', 'NGÀY CÀNG ĐƯỢC CỦNG CỐ', 'TẠO TIỀN ĐỀ CHO', 'BƯỚC NGOẶT 1953–1954']}
          accentWords={['BƯỚC NGOẶT 1953–1954']}
          perWordVh={70}
        />

        {/* ═══ GIAI ĐOẠN 1953–1954: ĐIỆN BIÊN PHỦ ═══ */}
        {/* Phần I. Mở đầu (dành cho lồng tiếng — ảnh background) */}
        <ClosingText
          id="chapter-1954"
          eyebrow="Giai đoạn 1953 – 1954 · Điện Biên Phủ"
          bgImage="/images/kc/y54-keophao.webp"
          paragraphs={[
            'Sau những thắng lợi liên tiếp và quá trình phát triển thế, lực trong giai đoạn 1951–1953, cuộc kháng chiến chống thực dân Pháp bước vào một bước ngoặt quyết định.',
            'Cuối năm 1953, Điện Biên Phủ trở thành nơi tập trung lực lượng lớn nhất của quân Pháp. Từ đây, một chiến dịch lịch sử bắt đầu và kéo dài suốt 56 ngày đêm.',
            'Hãy cùng nhìn lại những dấu mốc quan trọng dẫn đến Chiến thắng Điện Biên Phủ năm 1954.',
          ]}
        />
        {/* Phần II. Các mốc thời gian */}
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
        />
        <MilestoneChapter milestone={MILESTONES.cuDiem} />
        <MilestoneChapter milestone={MILESTONES.soDoCuDiem} />
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
        />
        <MilestoneChapter milestone={MILESTONES.keoPhao} />
        <MilestoneChapter milestone={MILESTONES.truocGioG} />
        {/* LƯỚT XUỐNG (đưa ra ý chính) */}
        <DateReveal id="kc-54-batdau" parts={['13', '03', '1954']} heading="CHIẾN DỊCH BẮT ĐẦU" />
        <SlideSection
          eyebrow="Điện Biên Phủ"
          groups={[
            {
              title: '13/03 → 07/05/1954 — 56 ngày đêm',
              bullets: [
                'Bộ đội, dân công, thanh niên xung phong vượt núi, băng rừng.',
                'Vận chuyển lương thực, vũ khí, đạn dược ra mặt trận.',
                'Ba đợt tiến công từng bước phá vỡ tập đoàn cứ điểm.',
              ],
            },
          ]}
        />
        <PhotoStrip
          eyebrow="Hàng chục vạn người cùng hướng về Điện Biên Phủ"
          images={[
            { src: '/images/kc/d56-1.webp', caption: 'Bộ đội kéo pháo vào trận địa' },
            { src: '/images/kc/d56-2.webp', caption: 'Công tác giao thông vận tải' },
            { src: '/images/kc/d56-3.webp', caption: 'Người dân vận chuyển lương thực ra mặt trận' },
            { src: '/images/kc/d56-4.webp', caption: 'Thanh niên xung phong mở đường' },
            { src: '/images/kc/d56-5.webp', caption: 'Đội quân xe thồ lên Điện Biên Phủ' },
          ]}
        />
        {/* LƯỚT XUỐNG (đưa ra ý chính) */}
        <WordCascade
          eyebrow="56 ngày đêm"
          words={['HẬU PHƯƠNG LỚN', 'TIỀN TUYẾN LỚN']}
          accentWords={['TIỀN TUYẾN LỚN']}
          perWordVh={75}
        />
        <SlideSection
          eyebrow="Điện Biên Phủ"
          groups={[
            {
              title: '07/05/1954 — Chiến thắng Điện Biên Phủ',
              bullets: [
                'Tập đoàn cứ điểm Điện Biên Phủ bị tiêu diệt.',
                'Tướng De Castries và bộ chỉ huy bị bắt.',
              ],
            },
          ]}
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
        {/* Phần I. Mở đầu — Dấu ấn lịch sử (dành cho lồng tiếng — ảnh background) */}
        <ClosingText
          id="y-nghia"
          eyebrow="Dấu ấn lịch sử · 1946 – 1954"
          bgImage="/images/kc/yn-dbp.webp"
          paragraphs={[
            'Trải qua 9 năm gian khổ với bao hy sinh, mất mát — từ mùa đông năm 1946 khói lửa tại Thủ đô Hà Nội cho đến mùa xuân năm 1954 rực rỡ tại lòng chảo Điện Biên — dân tộc Việt Nam ta đã viết nên một bản anh hùng ca bất diệt.',
            'Thắng lợi vang dội của cuộc kháng chiến chống thực dân Pháp không chỉ là một mốc son chói lọi trong lịch sử dân tộc, mà còn mang lại những kết quả và ý nghĩa vô cùng to lớn.',
          ]}
        />
        {/* Phần II. Các mốc sự kiện trọng tâm */}
        <MilestoneChapter milestone={MILESTONES.geneve} />
        <MilestoneChapter milestone={MILESTONES.mienBac} />
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
