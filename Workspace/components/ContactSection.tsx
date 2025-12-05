export default function ContactSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#F5F1E8]">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-[28px] md:text-[32px] font-medium text-center text-[#4A4A4A] mb-4 tracking-[2px]">
          연락하기
        </h2>
        <div className="w-[60px] h-[2px] bg-gradient-to-r from-transparent via-[#E8C4C4] to-transparent mx-auto mb-10" />
        
        <div className="flex flex-col gap-6">
          {/* 신랑측 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <h3 className="text-lg font-medium text-center mb-6 text-[#4A4A4A]">신랑측</h3>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex justify-between items-center py-3 md:flex-1">
                <span className="text-[15px] text-[#4A4A4A]">신랑 김민수</span>
                <div className="flex gap-2">
                  <a href="tel:010-1234-5678" className="w-10 h-10 rounded-full bg-[#FFF5F5] shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#E8C4C4] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(232,196,196,0.4)] transition-all active:translate-y-0">
                    <i className="fas fa-phone"></i>
                  </a>
                  <a href="sms:010-1234-5678" className="w-10 h-10 rounded-full bg-[#FFF5F5] shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#E8C4C4] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(232,196,196,0.4)] transition-all active:translate-y-0">
                    <i className="fas fa-sms"></i>
                  </a>
                </div>
              </div>
              <div className="flex justify-between items-center py-3 md:flex-1 md:border-l md:border-[#E8C4C4]/30 md:pl-6">
                <span className="text-[15px] text-[#4A4A4A]">신랑 아버지 김철수</span>
                <div className="flex gap-2">
                  <a href="tel:010-1111-2222" className="w-10 h-10 rounded-full bg-[#FFF5F5] shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#E8C4C4] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(232,196,196,0.4)] transition-all active:translate-y-0">
                    <i className="fas fa-phone"></i>
                  </a>
                  <a href="sms:010-1111-2222" className="w-10 h-10 rounded-full bg-[#FFF5F5] shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#E8C4C4] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(232,196,196,0.4)] transition-all active:translate-y-0">
                    <i className="fas fa-sms"></i>
                  </a>
                </div>
              </div>
              <div className="flex justify-between items-center py-3 md:flex-1 md:border-l md:border-[#E8C4C4]/30 md:pl-6">
                <span className="text-[15px] text-[#4A4A4A]">신랑 어머니 박영희</span>
                <div className="flex gap-2">
                  <a href="tel:010-3333-4444" className="w-10 h-10 rounded-full bg-[#FFF5F5] shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#E8C4C4] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(232,196,196,0.4)] transition-all active:translate-y-0">
                    <i className="fas fa-phone"></i>
                  </a>
                  <a href="sms:010-3333-4444" className="w-10 h-10 rounded-full bg-[#FFF5F5] shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#E8C4C4] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(232,196,196,0.4)] transition-all active:translate-y-0">
                    <i className="fas fa-sms"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* 신부측 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <h3 className="text-lg font-medium text-center mb-6 text-[#4A4A4A]">신부측</h3>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex justify-between items-center py-3 md:flex-1">
                <span className="text-[15px] text-[#4A4A4A]">신부 이지현</span>
                <div className="flex gap-2">
                  <a href="tel:010-5678-9012" className="w-10 h-10 rounded-full bg-[#FFF5F5] shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#E8C4C4] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(232,196,196,0.4)] transition-all active:translate-y-0">
                    <i className="fas fa-phone"></i>
                  </a>
                  <a href="sms:010-5678-9012" className="w-10 h-10 rounded-full bg-[#FFF5F5] shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#E8C4C4] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(232,196,196,0.4)] transition-all active:translate-y-0">
                    <i className="fas fa-sms"></i>
                  </a>
                </div>
              </div>
              <div className="flex justify-between items-center py-3 md:flex-1 md:border-l md:border-[#E8C4C4]/30 md:pl-6">
                <span className="text-[15px] text-[#4A4A4A]">신부 아버지 이상철</span>
                <div className="flex gap-2">
                  <a href="tel:010-5555-6666" className="w-10 h-10 rounded-full bg-[#FFF5F5] shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#E8C4C4] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(232,196,196,0.4)] transition-all active:translate-y-0">
                    <i className="fas fa-phone"></i>
                  </a>
                  <a href="sms:010-5555-6666" className="w-10 h-10 rounded-full bg-[#FFF5F5] shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#E8C4C4] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(232,196,196,0.4)] transition-all active:translate-y-0">
                    <i className="fas fa-sms"></i>
                  </a>
                </div>
              </div>
              <div className="flex justify-between items-center py-3 md:flex-1 md:border-l md:border-[#E8C4C4]/30 md:pl-6">
                <span className="text-[15px] text-[#4A4A4A]">신부 어머니 최순자</span>
                <div className="flex gap-2">
                  <a href="tel:010-7777-8888" className="w-10 h-10 rounded-full bg-[#FFF5F5] shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#E8C4C4] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(232,196,196,0.4)] transition-all active:translate-y-0">
                    <i className="fas fa-phone"></i>
                  </a>
                  <a href="sms:010-7777-8888" className="w-10 h-10 rounded-full bg-[#FFF5F5] shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#E8C4C4] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(232,196,196,0.4)] transition-all active:translate-y-0">
                    <i className="fas fa-sms"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
