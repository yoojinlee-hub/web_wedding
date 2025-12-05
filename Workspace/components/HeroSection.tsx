export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F9E5E5] to-[#F5F1E8]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1600')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFEF7]/70 to-[#F9E5E5]/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p className="text-xs tracking-[4px] text-[#8B8B8B] mb-6 font-light uppercase">
          WE&apos;RE GETTING MARRIED
        </p>
        
        <h1 className="flex items-center justify-center gap-4 flex-wrap mb-6">
          <span className="text-[36px] md:text-[48px] lg:text-[56px] font-normal">김민수</span>
          <span className="text-[28px] md:text-[36px] lg:text-[42px] text-[#E8C4C4] animate-[heartbeat_1.5s_ease-in-out_infinite]">♥</span>
          <span className="text-[36px] md:text-[48px] lg:text-[56px] font-normal">이지현</span>
        </h1>
        
        <p className="text-base md:text-lg font-light text-[#4A4A4A] tracking-[1px]">
          2024년 12월 25일 토요일 오후 2시
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-[bounce_2s_infinite]">
        <i className="fas fa-chevron-down text-2xl text-[#E8C4C4]"></i>
      </div>
    </section>
  );
}
