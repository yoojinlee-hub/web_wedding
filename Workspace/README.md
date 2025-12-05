# Wedding Invitation Website

모던하고 우아한 Next.js 기반 웨딩 청첩장 웹사이트입니다.

## 기술 스택

- **Frontend**: Next.js 14+ (App Router), TypeScript
- **Styling**: TailwindCSS (파스텔 컬러 테마)
- **Backend**: Supabase (준비 중)
- **Fonts**: Noto Serif KR, Nanum Myeongjo

## 시작하기

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
npm run build
npm start
```

## 프로젝트 구조

```
├── app/
│   ├── layout.tsx       # 루트 레이아웃 (폰트 설정)
│   ├── page.tsx         # 메인 페이지
│   └── globals.css      # 전역 스타일
├── components/
│   ├── HeroSection.tsx
│   ├── InvitationSection.tsx
│   ├── ProfileSection.tsx
│   ├── GallerySection.tsx
│   ├── VenueSection.tsx
│   ├── GuestbookSection.tsx
│   └── ContactSection.tsx
└── lib/
    └── supabase.ts      # Supabase 클라이언트
```

## 디자인 시스템

### 색상

- Ivory (#FFFEF7) - 메인 배경
- Beige (#F5F1E8) - 보조 배경
- Blush (#F9E5E5) - 강조 배경
- Rose (#E8C4C4) - 포인트 컬러
- Gold (#D4AF37) - 액센트

### 반응형 브레이크포인트

- Mobile: ~767px
- Tablet: 768-1023px
- Desktop: 1024px+

## 다음 단계

- [ ] Supabase 프로젝트 생성 및 환경 변수 설정
- [ ] Infinity Loop 갤러리 구현
- [ ] 카카오 지도 SDK 통합
- [ ] 방명록 CRUD 기능 구현
- [ ] 카카오톡 공유 버튼 추가
- [ ] 반응형 최적화
- [ ] 이미지 최적화

## 환경 변수

`.env.local` 파일을 생성하고 다음 값을 설정하세요:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```
