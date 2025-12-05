'use client';

import { useState } from 'react';

export default function GuestbookSection() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Supabase integration
    alert('축하 메시지가 등록되었습니다. 감사합니다!');
    setName('');
    setMessage('');
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#F5F1E8]">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-[28px] md:text-[32px] font-medium text-center text-[#4A4A4A] mb-4 tracking-[2px]">
          축하 메시지
        </h2>
        <div className="w-[60px] h-[2px] bg-gradient-to-r from-transparent via-[#E8C4C4] to-transparent mx-auto mb-10" />
        
        <div className="bg-white rounded-2xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] mb-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="w-full">
              <input
                type="text"
                placeholder="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={20}
                className="w-full px-4 py-4 rounded-lg border-2 border-[#F5F1E8] bg-[#FFF5F5] focus:outline-none focus:border-[#E8C4C4] text-[#4A4A4A] text-[15px] transition-colors font-serif"
              />
            </div>
            <div className="w-full">
              <textarea
                placeholder="축하 메시지를 남겨주세요"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                maxLength={200}
                rows={3}
                className="w-full px-4 py-4 rounded-lg border-2 border-[#F5F1E8] bg-[#FFF5F5] focus:outline-none focus:border-[#E8C4C4] text-[#4A4A4A] text-[15px] resize-vertical min-h-[80px] transition-colors font-serif"
              />
            </div>
            <button
              type="submit"
              className="py-4 px-6 bg-gradient-to-r from-[#E8C4C4] to-[#D4AF37] text-white rounded-lg text-base font-medium shadow-[0_4px_15px_rgba(232,196,196,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(232,196,196,0.6)] transition-[transform,box-shadow] duration-200 active:translate-y-0"
            >
              <i className="fas fa-paper-plane mr-2"></i>
              메시지 남기기
            </button>
          </form>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-lg p-6 shadow-[0_2px_10px_rgba(0,0,0,0.08)] animate-[fadeIn_0.5s_ease]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[15px] font-medium text-[#4A4A4A]">홍길동</span>
              <span className="text-xs text-[#8B8B8B]">방금 전</span>
            </div>
            <p className="text-sm text-[#4A4A4A] leading-relaxed font-light">결혼을 진심으로 축하합니다!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
