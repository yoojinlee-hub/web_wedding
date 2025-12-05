'use client';

export default function ProfileSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#F5F1E8] to-white">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-[28px] md:text-[32px] font-medium text-center text-[#4A4A4A] mb-4 tracking-[2px]">
          신랑 & 신부
        </h2>
        <div className="w-[60px] h-[2px] bg-gradient-to-r from-transparent via-[#E8C4C4] to-transparent mx-auto mb-10" />
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* 신랑 프로필 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-6">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#FFF5F5] flex items-center justify-center">
                <i className="fas fa-user text-4xl text-[#E8C4C4]"></i>
              </div>
              <h3 className="text-2xl font-medium text-[#4A4A4A] mb-2">김민수</h3>
              <p className="text-sm text-[#8B8B8B]">신랑</p>
            </div>
            
            <div className="space-y-3 text-center">
              <div className="border-t border-[#F5F1E8] pt-3">
                <p className="text-sm text-[#8B8B8B] mb-1">직업</p>
                <p className="text-base text-[#4A4A4A]">소프트웨어 엔지니어</p>
              </div>
              <div className="border-t border-[#F5F1E8] pt-3">
                <p className="text-sm text-[#8B8B8B] mb-1">소개</p>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">
                  평범한 일상 속에서 특별한 사랑을 찾았습니다
                </p>
              </div>
            </div>
          </div>
          
          {/* 신부 프로필 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-6">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#FFF5F5] flex items-center justify-center">
                <i className="fas fa-user text-4xl text-[#E8C4C4]"></i>
              </div>
              <h3 className="text-2xl font-medium text-[#4A4A4A] mb-2">이지현</h3>
              <p className="text-sm text-[#8B8B8B]">신부</p>
            </div>
            
            <div className="space-y-3 text-center">
              <div className="border-t border-[#F5F1E8] pt-3">
                <p className="text-sm text-[#8B8B8B] mb-1">직업</p>
                <p className="text-base text-[#4A4A4A]">UI/UX 디자이너</p>
              </div>
              <div className="border-t border-[#F5F1E8] pt-3">
                <p className="text-sm text-[#8B8B8B] mb-1">소개</p>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">
                  함께라면 어떤 길도 행복한 여정이 될 것 같습니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
