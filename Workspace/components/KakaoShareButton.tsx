'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function KakaoShareButton() {
  useEffect(() => {
    // Initialize Kakao SDK
    const KAKAO_APP_KEY = 'YOUR_KAKAO_APP_KEY'; // Replace with your actual key
    
    if (window.Kakao && !window.Kakao.isInitialized()) {
      try {
        window.Kakao.init(KAKAO_APP_KEY);
        console.log('Kakao SDK initialized');
      } catch (error) {
        console.warn('Kakao SDK initialization failed. Please set your Kakao App Key.');
      }
    }
  }, []);

  const handleShare = () => {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      alert('카카오톡 공유 기능을 사용하려면 카카오 개발자 키가 필요합니다.\n\nKakaoShareButton.tsx 파일에서 KAKAO_APP_KEY를 설정해주세요.\nhttps://developers.kakao.com/');
      return;
    }

    try {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '웨딩 청첩장 - 김민수 ♥ 이지현',
          description: '저희 두 사람의 소중한 날에 초대합니다.\n2024년 12월 25일 토요일 오후 2시',
          imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
          link: {
            mobileWebUrl: typeof window !== 'undefined' ? window.location.href : '',
            webUrl: typeof window !== 'undefined' ? window.location.href : ''
          }
        },
        buttons: [
          {
            title: '청첩장 보기',
            link: {
              mobileWebUrl: typeof window !== 'undefined' ? window.location.href : '',
              webUrl: typeof window !== 'undefined' ? window.location.href : ''
            }
          }
        ]
      });
    } catch (error) {
      console.error('Kakao share error:', error);
      alert('카카오톡 공유에 실패했습니다.');
    }
  };

  return (
    <button
      onClick={handleShare}
      className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-[#FFE812] to-[#FFD700] text-[#3C1E1E] shadow-lg flex items-center justify-center text-2xl z-50 hover:scale-110 transition-transform animate-[pulse_2s_infinite]"
      aria-label="카카오톡 공유"
    >
      <i className="fas fa-share-alt"></i>
    </button>
  );
}
