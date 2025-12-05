export default function InvitationSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Invitation Card */}
        <div className="bg-[#FFF5F5] p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] mb-10">
          <h2 className="text-[28px] md:text-[32px] font-medium text-center text-[#4A4A4A] mb-4 tracking-[2px]">
            초대합니다
          </h2>
          <div className="w-[60px] h-[2px] bg-gradient-to-r from-transparent via-[#E8C4C4] to-transparent mx-auto mb-10" />
          
          <p className="text-center text-base md:text-lg leading-loose text-[#4A4A4A] font-light">
            서로가 마주보며 다져온 사랑을<br />
            이제 함께 한 곳을 바라보며<br />
            걸어갈 수 있는 큰 사랑으로 키우고자 합니다.<br />
            <br />
            저희 두 사람의 앞날을 축복해 주시고<br />
            격려해 주시면 감사하겠습니다.
          </p>
        </div>
        
        {/* Parents Info */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* 신랑측 */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-sm text-[#8B8B8B] mb-2 font-light">
              신랑측 혼주
            </p>
            <p className="text-base md:text-lg text-[#4A4A4A]">
              김철수 · 박영희 <span className="text-sm text-[#8B8B8B] font-light">의 장남</span>
            </p>
          </div>
          
          {/* 신부측 */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-sm text-[#8B8B8B] mb-2 font-light">
              신부측 혼주
            </p>
            <p className="text-base md:text-lg text-[#4A4A4A]">
              이상철 · 최순자 <span className="text-sm text-[#8B8B8B] font-light">의 장녀</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
