# 웨딩 청첩장 웹사이트 💒

모던하고 우아한 모바일 중심의 웨딩 청첩장 웹사이트입니다. 파스텔 톤의 미니멀한 디자인으로 제작되었으며, 모바일과 데스크톱 모두에서 완벽하게 작동합니다.

## 🎨 주요 특징

### ✅ 완성된 기능

1. **히어로 섹션 (Hero Section)**
   - 전체 화면 커버 이미지
   - 신랑신부 이름 및 예식 날짜 표시
   - 부드러운 파스텔 필터 효과
   - 스크롤 인디케이터 애니메이션

2. **초대 메시지 섹션**
   - 웨딩 초대 메시지
   - 양가 부모님 정보 표시
   - 깔끔한 카드 레이아웃

3. **신랑신부 약력**
   - 간단한 프로필 정보 표시
   - 반응형 카드 레이아웃
   - 모바일: 세로 배치 / 데스크톱: 가로 배치
   - 파스텔 배경과 우아한 디자인

4. **이미지 갤러리**
   - **Infinity Loop 갤러리**: 자동 무한 루프 스크롤
   - **그리드 갤러리**: 클릭 가능한 썸네일 그리드
   - **모바일**: 세로 분할 (상단: Infinity Loop / 하단: 그리드)
   - **데스크톱**: 가로 분할 (좌측: Infinity Loop / 우측: 그리드)
   - 라이트박스 미리보기 기능
   - 키보드 네비게이션 지원 (← → ESC)
   - 부드러운 호버 효과

5. **예식장 정보**
   - 날짜, 시간, 장소 정보
   - 지도 표시 영역 (카카오맵 통합 가능)
   - 길찾기 버튼 (카카오맵/구글맵 연동)
   - 아이콘을 활용한 직관적인 UI

6. **방명록 (Guestbook)**
   - 이름 + 메시지 입력 폼
   - 실시간 메시지 목록 표시
   - RESTful API 연동
   - 상대 시간 표시 (방금 전, N분 전 등)
   - 깔끔한 카드 스타일 메시지

7. **연락처 섹션**
   - 신랑/신부측 가족 연락처
   - 전화/문자 바로가기 버튼
   - 카드 레이아웃

8. **카카오톡 공유 버튼**
   - 우측 하단 플로팅 버튼
   - 펄스 애니메이션 효과
   - 카카오톡 SDK 연동 준비 완료

9. **반응형 디자인**
   - 모바일 최적화
   - 태블릿 및 데스크톱 지원
   - 부드러운 전환 효과

## 🎯 기술 스택

### 현재 버전 (Vanilla JS)

- **HTML5**: 시맨틱 마크업
- **CSS3**: 
  - CSS Variables (커스텀 속성)
  - Flexbox & Grid
  - 애니메이션 & 트랜지션
  - 반응형 미디어 쿼리
- **JavaScript (ES6+)**:
  - Fetch API
  - Async/Await
  - DOM 조작
  - 이벤트 핸들링
- **외부 라이브러리**:
  - Font Awesome (아이콘)
  - Google Fonts (Noto Serif KR, Nanum Myeongjo)
  - Kakao SDK (공유 기능)

### 다음 버전 계획 (Next.js)

- **Frontend**: Next.js (v14+), TailwindCSS
- **Backend**: Supabase (인증·DB·스토리지)
- **지도**: 카카오 지도 SDK
- **이미지 저장**: Supabase Storage
- **공유**: 카카오톡 JavaScript SDK
- **배포**: Vercel

## 📁 프로젝트 구조

```
wedding-invitation/
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css      # 모든 스타일 (파스텔 테마)
├── js/
│   └── script.js      # 모든 JavaScript 기능
└── README.md          # 프로젝트 문서
```

## 🗄️ 데이터 구조

### Guestbook Table Schema

| 필드명 | 타입 | 설명 |
|--------|------|------|
| id | text | 고유 식별자 (자동 생성) |
| name | text | 방명록 작성자 이름 |
| message | text | 축하 메시지 |
| created_at | datetime | 작성 시간 (자동 생성) |
| updated_at | datetime | 수정 시간 (자동 생성) |

## 🚀 사용 방법

### 1. 웹사이트 정보 수정

`index.html` 파일에서 다음 정보를 수정하세요:

- **신랑신부 이름**: `.groom-name`, `.bride-name` 클래스
- **예식 날짜**: `.hero-date` 클래스
- **예식장 정보**: `.info-card` 섹션
- **연락처**: `.contact-card` 섹션
- **부모님 정보**: `.parents-info` 섹션

### 2. 이미지 변경

`index.html`의 갤러리 섹션과 `js/script.js`의 `galleryImages` 배열에서 이미지 URL을 변경하세요.

### 3. 카카오톡 공유 설정

**단계별 가이드:**

1. [Kakao Developers](https://developers.kakao.com/)에서 앱 생성
2. JavaScript 키 발급
3. `js/script.js`에서 `KAKAO_APP_KEY` 변경:
   ```javascript
   const KAKAO_APP_KEY = 'YOUR_ACTUAL_KEY_HERE';
   ```

### 4. 카카오맵 통합 (선택사항)

**index.html의 `<head>` 섹션에 추가:**

```html
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_APP_KEY"></script>
```

**js/script.js에서 주석 처리된 `initKakaoMap()` 함수 활성화 후 좌표 수정**

## 🎨 디자인 커스터마이징

### 색상 변경

`css/style.css`의 `:root` 섹션에서 CSS 변수를 수정하세요:

```css
:root {
    --color-ivory: #FFFEF7;      /* 배경색 */
    --color-beige: #F5F1E8;      /* 보조 배경색 */
    --color-blush: #F9E5E5;      /* 강조 배경색 */
    --color-rose: #E8C4C4;        /* 포인트 컬러 */
    --color-dark-text: #4A4A4A;   /* 메인 텍스트 */
    --color-light-text: #8B8B8B;  /* 보조 텍스트 */
}
```

### 폰트 변경

Google Fonts에서 원하는 폰트를 선택하고 `index.html`의 `<head>` 섹션과 `css/style.css`의 `--font-serif` 변수를 수정하세요.

## 📱 반응형 브레이크포인트

- **모바일**: 0 ~ 767px
- **태블릿**: 768px ~ 1023px
- **데스크톱**: 1024px 이상

## 🔌 API 엔드포인트

### Guestbook API

**GET** `tables/guestbook?sort=-created_at&limit=100`
- 방명록 메시지 목록 조회 (최신순)

**POST** `tables/guestbook`
- 새 방명록 메시지 등록
- Body: `{ "name": "이름", "message": "메시지" }`

**응답 예시:**
```json
{
  "data": [
    {
      "id": "uuid",
      "name": "홍길동",
      "message": "결혼을 축하합니다!",
      "created_at": 1234567890000,
      "updated_at": 1234567890000
    }
  ],
  "total": 1,
  "page": 1,
  "limit": 100
}
```

## ⚠️ 아직 구현되지 않은 기능

다음 기능들은 추가 설정이나 개발이 필요합니다:

1. **카카오맵 실제 통합**: Kakao API 키 설정 및 좌표 입력 필요
2. **카카오톡 공유 완전 연동**: Kakao 앱 등록 및 JavaScript 키 필요
3. **실제 결혼식 데이터**: 현재는 샘플 데이터 사용 중

## 🎯 권장 다음 단계

1. **컨텐츠 교체**
   - 실제 신랑신부 이름, 날짜, 장소로 변경
   - 실제 웨딩 사진으로 갤러리 이미지 교체
   - 실제 연락처 정보로 업데이트

2. **카카오 API 설정**
   - Kakao Developers에서 앱 등록
   - JavaScript 키 발급 및 설정
   - 도메인 등록 (배포 후)

3. **지도 통합**
   - 예식장 정확한 좌표 확인
   - Kakao Map API 통합
   - 지도 스타일 커스터마이징

4. **SEO 최적화**
   - Open Graph 메타 태그 완성
   - 파비콘 추가
   - 구조화된 데이터 마크업 추가

5. **성능 최적화**
   - 이미지 최적화 및 압축
   - Lazy loading 구현
   - CDN 사용

6. **Next.js 마이그레이션**
   - Vanilla JS를 React 컴포넌트로 전환
   - TailwindCSS로 스타일 재구현
   - Infinity Loop + 그리드 갤러리 동시 표시
   - 신랑신부 약력 섹션 추가
   - Supabase 백엔드 통합

7. **추가 기능 고려**
   - 갤러리 사진 더 추가
   - 식순 안내 섹션
   - 계좌번호 안내 (축의금)
   - 음악 재생 기능
   - 출석 체크 기능

## 🌐 배포

프로젝트를 배포하려면:

1. **Publish 탭**으로 이동
2. "배포하기" 버튼 클릭
3. 생성된 URL을 통해 접속
4. URL을 청첩장으로 공유

## 📝 라이선스

이 프로젝트는 자유롭게 사용, 수정, 배포할 수 있습니다.

## 💝 감사의 말

이 아름다운 웨딩 청첩장 웹사이트를 사용해 주셔서 감사합니다. 소중한 날을 축하합니다!

---

**제작일**: 2024-12-05  
**버전**: 1.0.0  
**문의**: 프로젝트 관련 문의사항이 있으시면 이슈를 등록해주세요.