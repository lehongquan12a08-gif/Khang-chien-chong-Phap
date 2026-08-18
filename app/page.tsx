import Navbar from '@/components/Navbar';
import TimelineIndicator from '@/components/TimelineIndicator';
import AutoScrollButton from '@/components/AutoScrollButton';
import AudioController from '@/components/AudioController';
import Hero from '@/components/Hero';
import WordCascade from '@/components/WordCascade';
import DateReveal from '@/components/DateReveal';
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
        <DateReveal
          id="chapter-1946"
          parts={['19', '12', '1946']}
          heading="TOÀN QUỐC KHÁNG CHIẾN"
          sub="Pháp liên tiếp gây hấn, lấn chiếm — tối hậu thư đòi ta giải tán lực lượng tự vệ, giao quyền kiểm soát Hà Nội."
        />
        <MilestoneChapter milestone={MILESTONES.loiKeuGoi} />
        <MilestoneChapter milestone={MILESTONES.phaoDaiLang} />
        <WordCascade
          id="kc-duongloi"
          eyebrow="Đường lối kháng chiến"
          words={['TOÀN DÂN', 'TOÀN DIỆN', 'TRƯỜNG KỲ', 'TỰ LỰC CÁNH SINH', 'TRANH THỦ QUỐC TẾ']}
          perWordVh={70}
        />
        <QuoteSection />
        <InteractiveQuestion
          question="Nếu chỉ có quân đội chiến đấu mà không có nhân dân, hậu phương, kinh tế, chính trị và ngoại giao hỗ trợ — liệu một cuộc kháng chiến lâu dài có thể thành công không?"
          answer="Không. Một dân tộc chỉ có thể vượt qua sự chênh lệch về vật chất khi biết phát huy sức mạnh của toàn dân, có đường lối đúng đắn và ý chí kiên định với mục tiêu độc lập. Toàn quốc kháng chiến không chỉ là một sự kiện quân sự — đó là biểu tượng của lòng yêu nước và sức mạnh đại đoàn kết dân tộc."
        />

        {/* ══ GIAI ĐOẠN 1947–1949 · GIỮ VỮNG CĂN CỨ KHÁNG CHIẾN ══ */}
        <MilestoneChapter milestone={MILESTONES.vietBac} />
        <MilestoneChapter milestone={MILESTONES.songLo} />
        <MilestoneChapter milestone={MILESTONES.cungCo4849} />
        <WordCascade
          eyebrow="1947 – 1949"
          words={['GIỮ VỮNG VIỆT BẮC', 'LỰC LƯỢNG', 'TRƯỞNG THÀNH']}
          perWordVh={70}
        />
        <InteractiveQuestion
          question="Chiến thắng Việt Bắc 1947 chủ yếu nhờ điều gì?"
          options={[
            { key: 'A', text: 'Ưu thế về vũ khí, phương tiện' },
            { key: 'B', text: 'Sức mạnh của thế trận kháng chiến toàn dân', correct: true },
          ]}
          answer="Việt Bắc không chỉ có những người lính cầm súng — phía sau bộ đội là cả một thế trận nhân dân. Càng tiến sâu, quân Pháp càng bị kéo dài đội hình, càng khó phát huy ưu thế vũ khí. Chiến lược 'đánh nhanh, thắng nhanh' thất bại — Pháp buộc phải bước vào cuộc chiến lâu dài."
        />
        <WordCascade
          words={['"ĐÁNH NHANH, THẮNG NHANH"', 'THẤT BẠI']}
          accentWords={['THẤT BẠI']}
          perWordVh={75}
        />

        {/* ══ GIAI ĐOẠN 1950 · BƯỚC NGOẶT CỦA CUỘC KHÁNG CHIẾN ══ */}
        <MilestoneChapter milestone={MILESTONES.dongKhe} />
        <MilestoneChapter milestone={MILESTONES.bienGioi} />
        <WordCascade
          eyebrow="Nghệ thuật quân sự"
          words={['ĐÁNH ĐIỂM', 'DIỆT VIỆN']}
          accentWords={['DIỆT VIỆN']}
          perWordVh={75}
        />
        <InteractiveQuestion
          question="Tại sao Chiến thắng Biên giới năm 1950 được xem là bước ngoặt của cuộc kháng chiến, chứ không chỉ là một chiến thắng quân sự?"
          answer="Bởi vì chiến thắng này đã làm thay đổi thế trận của cả cuộc chiến. Tháng 1/1950, Trung Quốc rồi Liên Xô và các nước xã hội chủ nghĩa lần lượt thiết lập quan hệ ngoại giao với Việt Nam — thế cô lập bị phá vỡ. Biên giới được khai thông, căn cứ được mở rộng: từ thế bị bao vây đến phá vỡ vòng vây, từ phòng ngự đến giành quyền chủ động."
        />
        <WordCascade
          words={['TỪ PHÒNG NGỰ', 'ĐẾN CHỦ ĐỘNG', 'TIẾN CÔNG']}
          perWordVh={70}
        />

        {/* ══ GIAI ĐOẠN 1951–1953 · PHÁT TRIỂN THẾ VÀ LỰC ══ */}
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
        <WordCascade
          eyebrow="1951 – 1953"
          words={['THẾ VÀ LỰC', 'NGÀY CÀNG CỦNG CỐ', 'HƯỚNG TỚI', 'BƯỚC NGOẶT']}
          accentWords={['BƯỚC NGOẶT']}
          perWordVh={70}
        />

        {/* ══ 1953–1954 · ĐIỆN BIÊN PHỦ ══ */}
        <MilestoneChapter milestone={MILESTONES.cuDiem} />
        <MilestoneChapter milestone={MILESTONES.soDoCuDiem} />
        <DateReveal
          id="kc-54-batdau"
          parts={['13', '03', '1954']}
          heading="CHIẾN DỊCH BẮT ĐẦU"
          sub="Bộ Chính trị quyết định mở Chiến dịch Điện Biên Phủ — những trận đánh đầu tiên chính thức nổ súng."
        />
        <MilestoneChapter milestone={MILESTONES.keoPhao} />
        <MilestoneChapter milestone={MILESTONES.truocGioG} />
        <PhotoStrip
          eyebrow="13/03 → 07/05/1954 · 56 ngày đêm · Hàng chục vạn người cùng hướng về Điện Biên Phủ"
          images={[
            { src: '/images/kc/d56-1.webp', caption: 'Bộ đội kéo pháo vào trận địa' },
            { src: '/images/kc/d56-2.webp', caption: 'Công tác giao thông vận tải' },
            { src: '/images/kc/d56-3.webp', caption: 'Người dân vận chuyển lương thực ra mặt trận' },
            { src: '/images/kc/d56-4.webp', caption: 'Thanh niên xung phong mở đường' },
            { src: '/images/kc/d56-5.webp', caption: 'Đội quân xe thồ lên Điện Biên Phủ' },
          ]}
          keyText="HẬU PHƯƠNG LỚN — TIỀN TUYẾN LỚN"
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
