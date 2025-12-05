# 모바일 청첩장 웹사이트

Plan 폴더의 디자인 레퍼런스를 기반으로 Next.js + Tailwind CSS로 구현한 모바일 청첩장입니다.

## 🎨 구현된 기능

### 1. Hero Section (메인 화면)
- 전체 화면 커버 이미지
- 신랑신부 이름 및 날짜 정보
- 스크롤 인디케이터 애니메이션
- 반응형 레이아웃

### 2. Invitation Section (초대장)
- 초대 메시지
- 양가 부모님 정보
- 파스텔 톤 카드 디자인

### 3. Profile Section (신랑신부 약력)
- 신랑신부 프로필 카드
- 직업 및 소개 정보
- 아이콘 기반 디자인

### 4. Gallery Section (사진 갤러리)
- 모바일: 가로 스크롤 캐러셀
- 데스크톱: 그리드 레이아웃
- 라이트박스 이미지 뷰어
- 키보드 네비게이션 지원 (← → ESC)

### 5. Venue Section (예식장 안내)
- 날짜, 시간, 장소 정보
- 지도 영역 (카카오맵 연동 준비)
- 길찾기 버튼

### 6. Guestbook Section (방명록)
- 이름 및 메시지 입력 폼
- 실시간 메시지 목록
- Supabase 연동 준비됨

### 7. Contact Section (연락하기)
- 신랑측/신부측 연락처
- 전화 및 문자 버튼
- 반응형 카드 레이아웃

### 8. Kakao Share Button (카카오톡 공유)
- 플로팅 액션 버튼
- 카카오톡 SDK 연동
- 펄스 애니메이션

## 🎨 디자인 시스템

### 색상 팔레트
```
Ivory: #FFFEF7 - 메인 배경
Beige: #F5F1E8 - 보조 배경
Blush: #F9E5E5 - 강조 배경
Rose: #E8C4C4 - 포인트 컬러
Soft Pink: #FFF5F5 - 카드 배경
Gold: #D4AF37 - 액센트
Dark Text: #4A4A4A - 메인 텍스트
Light Text: #8B8B8B - 보조 텍스트
```

### 폰트
- **메인**: Noto Serif KR, Nanum Myeongjo
- **모바일**: 14-16px
- **데스크톱**: 16-18px

### 반응형 브레이크포인트
- 모바일: ~767px
- 태블릿: 768px~1023px
- 데스크톱: 1024px~

## 🚀 시작하기

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## ⚙️ 설정 필요 항목

### 1. 카카오톡 공유 설정
`components/KakaoShareButton.tsx` 파일에서 카카오 앱 키를 설정하세요:
```typescript
const KAKAO_APP_KEY = 'YOUR_KAKAO_APP_KEY';
```
카카오 개발자 사이트에서 JavaScript 키를 발급받으세요: https://developers.kakao.com/

### 2. Supabase 설정 (방명록 기능)
`.env.local` 파일에 Supabase 정보를 추가하세요:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. 카카오 지도 연동 (선택사항)
`components/VenueSection.tsx`에서 실제 지도 연동을 추가할 수 있습니다.

## 📁 프로젝트 구조

```
Workspace/
├── app/
│   ├── globals.css          # 전역 스타일 및 애니메이션
│   ├── layout.tsx            # 레이아웃 및 폰트 설정
│   └── page.tsx              # 메인 페이지
├── components/
│   ├── HeroSection.tsx       # 메인 화면
│   ├── InvitationSection.tsx # 초대장
│   ├── ProfileSection.tsx    # 신랑신부 약력
│   ├── GallerySection.tsx    # 사진 갤러리
│   ├── VenueSection.tsx      # 예식장 안내
│   ├── GuestbookSection.tsx  # 방명록
│   ├── ContactSection.tsx    # 연락하기
│   └── KakaoShareButton.tsx  # 카카오톡 공유 버튼
├── lib/
│   └── supabase.ts           # Supabase 클라이언트
└── public/                   # 정적 파일
```

## 🎯 다음 단계

1. **이미지 교체**: Unsplash 샘플 이미지를 실제 사진으로 교체
2. **정보 수정**: 신랑신부 이름, 날짜, 장소 등 실제 정보로 변경
3. **카카오맵 연동**: 실제 예식장 위치로 지도 표시
4. **Supabase 연동**: 방명록 CRUD 기능 완성
5. **카카오톡 공유**: 앱 키 설정 및 이미지 커스터마이징
6. **배포**: Vercel에 배포

## 📱 기능 구현 상태

- ✅ Hero Section
- ✅ Invitation Section
- ✅ Profile Section
- ✅ Gallery Section (라이트박스 포함)
- ✅ Venue Section
- ✅ Guestbook Section (UI)
- ✅ Contact Section
- ✅ Kakao Share Button
- ⏳ Supabase 방명록 DB 연동
- ⏳ 카카오 지도 API 연동

## 📄 라이선스

이 프로젝트는 개인 사용을 위한 것입니다.

## 🙏 참고

Plan 폴더의 Vanilla JS 디자인 레퍼런스를 기반으로 제작되었습니다.
