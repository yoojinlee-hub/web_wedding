'use client';

export default function VenueSection() {
  const openDirections = () => {
    const address = '서울특별시 강남구 테헤란로 123';
    const placeName = '더 클래식 웨딩홀';
    const kakaoMapUrl = `https://map.kakao.com/link/search/${encodeURIComponent(placeName + ' ' + address)}`;
    window.open(kakaoMapUrl, '_blank');
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-[28px] md:text-[32px] font-medium text-center text-[#4A4A4A] mb-4 tracking-[2px]">
          예식 안내
        </h2>
        <div className="w-[60px] h-[2px] bg-gradient-to-r from-transparent via-[#E8C4C4] to-transparent mx-auto mb-10" />
        
        <div className="bg-[#FFF5F5] p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] mb-10">
          <div className="space-y-0">
            <div className="flex items-start gap-6 py-6 border-b border-[#E8C4C4]/30">
              <i className="fas fa-calendar-alt text-2xl text-[#E8C4C4] mt-1 flex-shrink-0"></i>
              <div>
                <h3 className="text-base font-medium text-[#4A4A4A] mb-2">날짜</h3>
                <p className="text-[15px] text-[#4A4A4A] font-light leading-relaxed">2024년 12월 25일 토요일</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 py-6 border-b border-[#E8C4C4]/30">
              <i className="fas fa-clock text-2xl text-[#E8C4C4] mt-1 flex-shrink-0"></i>
              <div>
                <h3 className="text-base font-medium text-[#4A4A4A] mb-2">시간</h3>
                <p className="text-[15px] text-[#4A4A4A] font-light leading-relaxed">오후 2시 00분</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 py-6">
              <i className="fas fa-map-marker-alt text-2xl text-[#E8C4C4] mt-1 flex-shrink-0"></i>
              <div>
                <h3 className="text-base font-medium text-[#4A4A4A] mb-2">장소</h3>
                <p className="text-[15px] text-[#4A4A4A] font-light leading-relaxed">더 클래식 웨딩홀</p>
                <p className="text-sm text-[#8B8B8B] leading-relaxed">서울특별시 강남구 테헤란로 123</p>
                <p className="text-[13px] text-[#8B8B8B] leading-relaxed">그랜드홀 3층</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Container */}
        <div className="my-10 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
          <div className="w-full h-[300px] md:h-[400px] bg-gradient-to-br from-[#F5F1E8] to-[#F9E5E5] flex items-center justify-center">
            <p className="text-[#8B8B8B] text-sm">지도가 여기에 표시됩니다</p>
          </div>
        </div>
        
        <button
          onClick={openDirections}
          className="w-full py-6 bg-gradient-to-r from-[#E8C4C4] to-[#D4AF37] text-white rounded-2xl text-lg font-medium shadow-[0_4px_15px_rgba(232,196,196,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(232,196,196,0.6)] transition-[transform,box-shadow] duration-200 active:translate-y-0"
        >
          <i className="fas fa-directions mr-2"></i>
          길찾기
        </button>
      </div>
    </section>
  );
}
