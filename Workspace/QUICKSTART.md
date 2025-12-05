# 빠른 시작 가이드

Plan 폴더의 디자인을 기반으로 Workspace에 Next.js 웹 청첩장을 구현했습니다.

## 🎉 완성된 항목

### 구현된 컴포넌트
- ✅ `HeroSection.tsx` - 메인 화면 (배경 이미지, 신랑신부 이름, 하트 애니메이션)
- ✅ `InvitationSection.tsx` - 초대 메시지 및 양가 부모님 정보
- ✅ `ProfileSection.tsx` - 신랑신부 약력 카드
- ✅ `GallerySection.tsx` - 사진 갤러리 (모바일 캐러셀 + 데스크톱 그리드, 라이트박스)
- ✅ `VenueSection.tsx` - 예식장 안내 (날짜, 시간, 장소, 길찾기)
- ✅ `GuestbookSection.tsx` - 방명록 (입력 폼 + 목록)
- ✅ `ContactSection.tsx` - 연락처 (신랑측/신부측)
- ✅ `KakaoShareButton.tsx` - 카카오톡 공유 플로팅 버튼

### 디자인 시스템
- ✅ 파스텔 톤 컬러 팔레트 (Ivory, Beige, Blush, Rose, Gold)
- ✅ Google Fonts (Noto Serif KR, Nanum Myeongjo)
- ✅ 반응형 레이아웃 (모바일/태블릿/데스크톱)
- ✅ Font Awesome 아이콘
- ✅ 애니메이션 (heartbeat, bounce, fadeIn, pulse)

## 🚀 개발 서버 실행

```bash
cd Workspace
npm install
npm run dev
```

http://localhost:3000 에서 확인하세요.

## 📝 커스터마이징 필요 항목

### 1. 신랑신부 정보 변경
각 컴포넌트에서 다음 정보를 수정하세요:

**HeroSection.tsx**
```tsx
<span className="text-4xl">김민수</span>  // 신랑 이름
<span className="text-4xl">이지현</span>  // 신부 이름
2024년 12월 25일 토요일 오후 2시        // 예식 날짜/시간
```

**InvitationSection.tsx**
```tsx
김철수 · 박영희 의 장남  // 신랑측 부모님
이상철 · 최순자 의 장녀  // 신부측 부모님
```

**ProfileSection.tsx**
- 신랑신부 이름, 직업, 소개 문구 수정

**VenueSection.tsx**
```tsx
const address = '서울특별시 강남구 테헤란로 123';
const placeName = '더 클래식 웨딩홀';
```

**ContactSection.tsx**
- 전화번호 링크 수정 (`tel:010-xxxx-xxxx`)

### 2. 이미지 교체
**GallerySection.tsx**에서 Unsplash 샘플 이미지를 실제 사진으로 교체:

```tsx
const galleryImages = [
  '/images/photo1.jpg',  // public/images/ 폴더에 이미지 저장
  '/images/photo2.jpg',
  // ...
];
```

**HeroSection.tsx**의 배경 이미지도 교체:
```tsx
style={{
  backgroundImage: "url('/images/hero-bg.jpg')"
}}
```

### 3. 카카오톡 공유 설정
**KakaoShareButton.tsx**에서:

1. [카카오 개발자 사이트](https://developers.kakao.com/)에서 앱 생성
2. JavaScript 키 발급
3. 키 입력:
```tsx
const KAKAO_APP_KEY = 'YOUR_KAKAO_APP_KEY';
```

### 4. Supabase 방명록 연동 (선택사항)
1. [Supabase](https://supabase.com/)에서 프로젝트 생성
2. `.env.local` 파일 생성:
```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

3. 테이블 생성 (SQL):
```sql
create table guestbook (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

4. **GuestbookSection.tsx**에서 Supabase 클라이언트 사용

## 🎨 색상 변경

`tailwind.config.ts`에서 색상 팔레트를 수정할 수 있습니다:

```typescript
colors: {
  ivory: "#FFFEF7",
  beige: "#F5F1E8",
  blush: "#F9E5E5",
  rose: "#E8C4C4",
  // ...
}
```

## 📱 테스트

### 데스크톱
- 갤러리 그리드 레이아웃
- 호버 효과
- 라이트박스 네비게이션

### 모바일
- 갤러리 캐러셀 스크롤
- 터치 인터랙션
- 플로팅 버튼 위치

### 브라우저 개발자 도구
F12 → 디바이스 툴바 토글로 다양한 화면 크기 테스트

## 🚀 배포

### Vercel (추천)
1. GitHub에 코드 푸시
2. [Vercel](https://vercel.com/)에서 Import
3. 자동 배포

### 환경 변수 설정
Vercel 대시보드에서 Environment Variables 추가:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 📞 문제 해결

### 폰트가 안 보여요
- `app/layout.tsx`에서 Google Fonts가 제대로 로드되는지 확인
- 브라우저 캐시 클리어

### 아이콘이 안 보여요
- Font Awesome CDN 링크가 `layout.tsx`에 있는지 확인

### 카카오톡 공유가 안 돼요
- 개발자 키를 정확히 입력했는지 확인
- Kakao SDK가 로드되었는지 확인 (콘솔 로그)

### 모바일에서 레이아웃이 깨져요
- 반응형 클래스 확인 (`md:`, `lg:` 등)
- 브라우저 개발자 도구로 디버깅

## 📚 참고 자료

- Plan 폴더의 원본 디자인 (`Plan/design_ai_origin/`)
- [Next.js 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Font Awesome 아이콘](https://fontawesome.com/icons)
