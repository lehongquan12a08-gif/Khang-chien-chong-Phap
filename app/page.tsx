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

export default function Home() {
  return (
    <>
      <Navbar />
      <TimelineIndicator />
      <AutoScrollButton />
      <AudioController />

      <main>
        {/* MỞ ĐẦU — landing: lướt xuống hiện từng chữ */}
        <Hero />
        <WordCascade
          id="kc-intro"
          eyebrow="1945 · Nước Việt Nam Dân chủ Cộng hòa vừa ra đời"
          words={['MỘT NỀN ĐỘC LẬP', 'NON TRẺ', 'THỰC DÂN PHÁP', 'QUAY TRỞ LẠI', 'CẢ DÂN TỘC', 'ĐỨNG LÊN']}
          accentWords={['ĐỨNG LÊN']}
          perWordVh={75}
        />

        {/* ══ GIAI ĐOẠN 1946 · TOÀN QUỐC KHÁNG CHIẾN BÙNG NỔ ══ */}
        {/* Phần đầu — ngày + slide nội dung + hình ảnh */}
        <DateReveal
          id="chapter-1946"
          parts={['19', '12', '1946']}
          heading="TOÀN QUỐC KHÁNG CHIẾN"
        />
        <SlideSection
          eyebrow="Giai đoạn 1946 · Toàn quốc kháng chiến bùng nổ"
          title="Ngày 19/12/1946 — Toàn quốc kháng chiến"
          groups={[
            {
              bullets: [
                'Pháp liên tiếp gây hấn, lấn chiếm.',
                '18–19/12/1946: Quyết định phát động toàn quốc kháng chiến.',
                '19/12/1946: Toàn quốc kháng chiến bùng nổ.',
                'Đường lối: Toàn dân – Toàn diện – Trường kỳ – Tự lực cánh sinh – Tranh thủ quốc tế.',
                'Nhân dân cả nước nhất tề đứng lên bảo vệ độc lập.',
              ],
            },
          ]}
        />
        <MilestoneChapter milestone={MILESTONES.loiKeuGoi} />
        <MilestoneChapter milestone={MILESTONES.phaoDaiLang} />
        <WordCascade
          id="kc-duongloi"
          eyebrow="Đường lối kháng chiến"
          words={['TOÀN DÂN', 'TOÀN DIỆN', 'TRƯỜNG KỲ', 'TỰ LỰC CÁNH SINH', 'TRANH THỦ', 'QUỐC TẾ']}
          perWordVh={70}
        />
        {/* Phần giữa — lướt xuống: trích dẫn + câu hỏi */}
        <QuoteSection />
        <InteractiveQuestion
          question="Nếu chỉ có quân đội chiến đấu mà không có nhân dân, hậu phương, kinh tế, chính trị và ngoại giao hỗ trợ — liệu một cuộc kháng chiến lâu dài có thể thành công không?"
          answer="Không. Một dân tộc chỉ có thể vượt qua sự chênh lệch về vật chất khi biết phát huy sức mạnh của toàn dân, có đường lối đúng đắn và ý chí kiên định với mục tiêu độc lập."
        />
        {/* Phần cuối — kết giai đoạn 1946 */}
        <ClosingText
          eyebrow="Tinh thần 19/12/1946"
          paragraphs={[
            'Ngày 19 tháng 12 năm 1946 không chỉ đánh dấu một cuộc chiến bắt đầu — đó là thời khắc cả dân tộc cùng đứng lên bảo vệ nền độc lập vừa giành được.',
            'Từ một dân tộc đứng trước thử thách sống còn, Việt Nam đã lựa chọn đoàn kết, trường kỳ và tự lực để chiến đấu vì độc lập, tự do.',
            'Đó chính là tinh thần của Toàn quốc kháng chiến.',
          ]}
        />

        {/* ══ GIAI ĐOẠN 1947–1949 · GIỮ VỮNG CĂN CỨ KHÁNG CHIẾN ══ */}
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
        />
        <MilestoneChapter milestone={MILESTONES.vietBac} />
        <MilestoneChapter milestone={MILESTONES.songLo} />
        <MilestoneChapter milestone={MILESTONES.cungCo4849} />
        <WordCascade
          eyebrow="1947 – 1949"
          words={['GIỮ VỮNG VIỆT BẮC', 'CĂN CỨ CỦNG CỐ', 'LỰC LƯỢNG TRƯỞNG THÀNH']}
          perWordVh={70}
        />
        <InteractiveQuestion
          question="Chiến thắng Việt Bắc 1947 chủ yếu nhờ điều gì?"
          options={[
            { key: 'A', text: 'Ưu thế về vũ khí, phương tiện' },
            { key: 'B', text: 'Sức mạnh của thế trận kháng chiến toàn dân', correct: true },
          ]}
          answer="Việt Bắc không chỉ có những người lính cầm súng — phía sau bộ đội là cả một thế trận nhân dân. Càng tiến sâu, quân Pháp càng bị kéo dài đội hình, càng khó phát huy ưu thế vũ khí."
        />
        <WordCascade
          words={['"ĐÁNH NHANH, THẮNG NHANH"', 'THẤT BẠI']}
          accentWords={['THẤT BẠI']}
          perWordVh={75}
        />
        <ClosingText
          eyebrow="Việt Bắc 1947 – 1949"
          paragraphs={[
            'Đập tan chiến lược "đánh nhanh, thắng nhanh" của thực dân Pháp.',
            'Tạo thế và lực cho cuộc kháng chiến lâu dài.',
          ]}
        />

        {/* ══ GIAI ĐOẠN 1950 · BƯỚC NGOẶT CỦA CUỘC KHÁNG CHIẾN ══ */}
        <SlideSection
          id="chapter-1950"
          eyebrow="Giai đoạn 1950 · Bước ngoặt của cuộc kháng chiến"
          groups={[
            {
              title: '01/1950 — Bước ngoặt ngoại giao',
              bullets: [
                'Trung Quốc công nhận và thiết lập quan hệ ngoại giao với Việt Nam.',
                'Liên Xô và các nước xã hội chủ nghĩa lần lượt thiết lập quan hệ.',
              ],
            },
            {
              title: '16/09 – 14/10/1950 — Chiến dịch Biên giới',
              bullets: [
                'Phá thế bao vây của Pháp.',
                'Khai thông biên giới Việt – Trung.',
                'Mở rộng, củng cố căn cứ địa Việt Bắc.',
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
        <WordCascade
          eyebrow="Nghệ thuật quân sự"
          words={['ĐÁNH ĐIỂM', 'DIỆT VIỆN']}
          accentWords={['DIỆT VIỆN']}
          perWordVh={75}
        />
        {/* Phần giữa (LƯỚT XUỐNG): Quân sự thắng lợi + Ngoại giao mở rộng → thế chủ động */}
        <WordCascade
          eyebrow="1950 · Thế trận đổi chiều"
          words={['QUÂN SỰ THẮNG LỢI', 'NGOẠI GIAO MỞ RỘNG', 'TỪ PHÒNG NGỰ', 'SANG THẾ CHỦ ĐỘNG']}
          accentWords={['SANG THẾ CHỦ ĐỘNG']}
          perWordVh={70}
        />
        <InteractiveQuestion
          question="Tại sao Chiến thắng Biên giới năm 1950 được xem là bước ngoặt của cuộc kháng chiến, chứ không chỉ là một chiến thắng quân sự?"
          answer="Bởi vì chiến thắng này đã làm thay đổi thế trận của cả cuộc chiến: thế cô lập bị phá vỡ về ngoại giao, biên giới được khai thông, căn cứ được mở rộng — từ phòng ngự đến giành quyền chủ động."
        />
        <ClosingText
          eyebrow="Biên giới Thu – Đông 1950"
          paragraphs={[
            'Đánh dấu bước trưởng thành vượt bậc của lực lượng kháng chiến — tạo thế và lực cho những thắng lợi lớn tiếp theo.',
          ]}
        />

        {/* ══ GIAI ĐOẠN 1951–1953 · PHÁT TRIỂN THẾ VÀ LỰC ══ */}
        <SlideSection
          id="chapter-1951"
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
        <MilestoneChapter milestone={MILESTONES.theVaLuc} />
        <MilestoneChapter milestone={MILESTONES.daiHoi2} />
        <MilestoneChapter milestone={MILESTONES.vuKhi52} />
        <MilestoneChapter milestone={MILESTONES.hanhQuan52} />
        <InteractiveQuestion
          question="Ai tạo nên sức mạnh kháng chiến?"
          options={[
            { key: 'A', text: 'Chỉ người lính nơi tiền tuyến' },
            { key: 'B', text: 'Toàn thể nhân dân', correct: true },
          ]}
          answer="Kháng chiến là sự kết hợp giữa tiền tuyến và hậu phương, giữa quân đội và nhân dân. Người dân không chỉ trực tiếp tham gia chiến đấu mà còn đóng góp lương thực, nhân lực và vật lực cho tiền tuyến."
        />
        <MilestoneChapter milestone={MILESTONES.taoThe53} />
        {/* KẾT LUẬN (LƯỚT XUỐNG — đưa ra ý nghĩa) */}
        <WordCascade
          eyebrow="1951 – 1953 · Kết luận"
          words={['THẾ VÀ LỰC', 'NGÀY CÀNG CỦNG CỐ', 'TẠO TIỀN ĐỀ', 'BƯỚC NGOẶT 1953–1954']}
          accentWords={['BƯỚC NGOẶT 1953–1954']}
          perWordVh={70}
        />

        {/* ══ 1953–1954 · ĐIỆN BIÊN PHỦ ══ */}
        <SlideSection
          id="chapter-1954"
          eyebrow="Giai đoạn 1953 – 1954 · Điện Biên Phủ"
          groups={[
            {
              title: 'Cuối 1953 — Pháp xây dựng tập đoàn cứ điểm',
              bullets: [
                'Pháp xây dựng Điện Biên Phủ thành tập đoàn cứ điểm lớn nhất Đông Dương.',
                'Âm mưu biến nơi đây thành "pháo đài bất khả xâm phạm".',
              ],
            },
            {
              title: '13/03/1954 — Chiến dịch bắt đầu',
              bullets: [
                'Bộ Chính trị quyết định mở Chiến dịch Điện Biên Phủ.',
                'Quân ta bắt đầu tiến công tập đoàn cứ điểm.',
              ],
            },
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
        <MilestoneChapter milestone={MILESTONES.cuDiem} />
        <MilestoneChapter milestone={MILESTONES.soDoCuDiem} />
        <MilestoneChapter milestone={MILESTONES.keoPhao} />
        <MilestoneChapter milestone={MILESTONES.truocGioG} />
        {/* LƯỚT XUỐNG → ý chính, đúng vị trí trong kịch bản */}
        <DateReveal
          id="kc-54-batdau"
          parts={['13', '03', '1954']}
          heading="CHIẾN DỊCH BẮT ĐẦU"
        />
        <PhotoStrip
          eyebrow="13/03 → 07/05/1954 · 56 ngày đêm · Hàng chục vạn người cùng hướng về Điện Biên Phủ"
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
        <InteractiveQuestion
          question="Sau 56 ngày đêm, điều gì đã xảy ra tại Điện Biên Phủ?"
          options={[
            { key: 'A', text: 'Pháp tiếp tục giữ được tập đoàn cứ điểm' },
            { key: 'B', text: 'Hai bên ký hiệp định ngay tại Điện Biên Phủ' },
            { key: 'C', text: 'Tập đoàn cứ điểm Điện Biên Phủ bị tiêu diệt', correct: true },
            { key: 'D', text: 'Quân ta rút khỏi Điện Biên Phủ' },
          ]}
          answer="Sau 56 ngày đêm, tập đoàn cứ điểm mạnh nhất Đông Dương hoàn toàn bị tiêu diệt — và đây chính là khoảnh khắc đánh dấu thắng lợi của chiến dịch."
          continueTo="#kc-54-toanthang"
          continueLabel="Xem thời khắc lịch sử"
        />
        <MilestoneChapter milestone={MILESTONES.toanThang} />

        {/* ══ KẾT LUẬN & Ý NGHĨA ══ */}
        <ClosingText
          eyebrow="Dấu ấn lịch sử · 1946 – 1954"
          bgImage="/images/kc/yn-dbp.webp"
          paragraphs={[
            'Trải qua 9 năm gian khổ với bao hy sinh, mất mát — từ mùa đông năm 1946 khói lửa tại Thủ đô Hà Nội đến mùa xuân năm 1954 rực rỡ tại lòng chảo Điện Biên — dân tộc Việt Nam đã viết nên một bản anh hùng ca bất diệt.',
            'Thắng lợi vang dội của cuộc kháng chiến chống thực dân Pháp không chỉ là một mốc son chói lọi trong lịch sử dân tộc, mà còn mang lại những kết quả và ý nghĩa vô cùng to lớn.',
          ]}
        />
        <MilestoneChapter milestone={MILESTONES.geneve} />
        <MilestoneChapter milestone={MILESTONES.mienBac} />
        <ConclusionSection />

        {/* Nghe & Xem */}
        <MediaSection />

        {/* Ending */}
        <Footer />
      </main>
    </>
  );
}
