'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const galleryImages = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600',
  'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1600',
  'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1600',
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1600',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1600',
  'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1600'
];

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const mobileLoopSwiperRef = useRef<SwiperType | null>(null);
  const desktopLoopSwiperRef = useRef<SwiperType | null>(null);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <>
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#F5F1E8]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <h2 className="text-[28px] md:text-[32px] font-medium text-center text-[#4A4A4A] mb-4 tracking-[2px]">
            우리의 순간들
          </h2>
          <div className="w-[60px] h-[2px] bg-gradient-to-r from-transparent via-[#E8C4C4] to-transparent mx-auto mb-[40px]" />
          
          {/* 모바일 레이아웃: 세로 분할 (상단: Infinity Loop / 하단: 그리드) */}
          <div className="md:hidden">
            {/* Infinity Loop - 상단 40% */}
            <div className="mb-8">
              <Swiper
                modules={[Autoplay, EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                onSwiper={(swiper) => { mobileLoopSwiperRef.current = swiper; }}
                className="infinity-loop-swiper"
              >
                {galleryImages.map((img, index) => (
                  <SwiperSlide key={index} className="!w-[60%]">
                    <div 
                      className="rounded-2xl overflow-hidden shadow-lg cursor-pointer aspect-[4/3]"
                      onClick={() => openLightbox(index)}
                    >
                      <img
                        src={img}
                        alt={`Wedding Photo ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
            {/* Grid Gallery - 하단 60% */}
            <div className="grid grid-cols-4 gap-6">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="cursor-pointer rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] aspect-square group"
                  onClick={() => {
                    if (mobileLoopSwiperRef.current) {
                      mobileLoopSwiperRef.current.slideToLoop(index);
                    }
                  }}
                >
                  <img
                    src={img}
                    alt={`Wedding Photo ${index + 1}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* 데스크톱 레이아웃: 가로 분할 (좌측: Infinity Loop / 우측: 그리드) */}
          <div className="hidden md:flex gap-8">
            {/* Infinity Loop - 좌측 40% */}
            <div className="w-2/5">
              <Swiper
                modules={[Autoplay]}
                direction="vertical"
                slidesPerView={3}
                spaceBetween={20}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop={true}
                onSwiper={(swiper) => { desktopLoopSwiperRef.current = swiper; }}
                className="h-[400px] rounded-2xl"
              >
                {[...galleryImages, ...galleryImages, ...galleryImages].map((img, index) => (
                  <SwiperSlide key={index}>
                    <div 
                      className="rounded-xl overflow-hidden shadow-lg cursor-pointer h-full aspect-[4/3]"
                      onClick={() => openLightbox(index % galleryImages.length)}
                    >
                      <img
                        src={img}
                        alt={`Wedding Photo ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
            {/* Grid Gallery - 우측 60% */}
            <div className="w-3/5 grid grid-cols-6 gap-6 content-start">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="cursor-pointer rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] aspect-square group"
                  onClick={() => {
                    if (desktopLoopSwiperRef.current) {
                      desktopLoopSwiperRef.current.slideToLoop(index);
                    }
                  }}
                >
                  <img
                    src={img}
                    alt={`Wedding Photo ${index + 1}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors"
            onClick={closeLightbox}
          >
            <i className="fas fa-times text-2xl"></i>
          </button>
          
          <button
            className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <i className="fas fa-chevron-left text-2xl"></i>
          </button>
          
          <button
            className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <i className="fas fa-chevron-right text-2xl"></i>
          </button>
          
          <div className="max-w-[90%] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[currentImageIndex]}
              alt="Gallery"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
