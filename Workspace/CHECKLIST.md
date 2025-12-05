# ✅ 커스터마이징 체크리스트

이 체크리스트를 따라 청첩장을 완성하세요!

## 1단계: 기본 정보 입력 ⭐ 필수

### lib/weddingData.ts 파일 수정
- [ ] 신랑 이름: `couple.groom.name`
- [ ] 신부 이름: `couple.bride.name`
- [ ] 예식 날짜: `wedding.date`
- [ ] 예식 시간: `wedding.time`
- [ ] 웨딩홀 이름: `wedding.venue.name`
- [ ] 웨딩홀 주소: `wedding.venue.address`
- [ ] 신랑 부모님 이름: `parents.groom.father.name`, `parents.groom.mother.name`
- [ ] 신부 부모님 이름: `parents.bride.father.name`, `parents.bride.mother.name`
- [ ] 전화번호 (신랑신부, 부모님 각각)

## 2단계: 사진 준비 ⭐ 필수

### 이미지 교체
- [ ] 히어로 배경 이미지 준비 (권장: 1920x1080 이상)
- [ ] 갤러리 사진 6장 준비 (권장: 1600x1200 이상)
- [ ] 카카오톡 공유 썸네일 이미지 준비 (권장: 800x800)

### 이미지 업로드
```bash
Workspace/public/images/ 폴더에 이미지 저장
```

### weddingData.ts 수정
- [ ] `hero.backgroundImage` 경로 변경
- [ ] `gallery.images` 배열 수정
- [ ] `kakao.share.imageUrl` 경로 변경

## 3단계: 카카오톡 공유 설정 ⭐ 필수

### 카카오 개발자 설정
- [ ] https://developers.kakao.com/ 접속
- [ ] 애플리케이션 추가하기
- [ ] JavaScript 키 복사
- [ ] lib/weddingData.ts의 `kakao.appKey`에 붙여넣기
- [ ] 플랫폼 설정 > Web 플랫폼 추가
- [ ] 사이트 도메인 등록 (배포 후)

## 4단계: 개인 정보 커스터마이징 (선택)

### components/ProfileSection.tsx
- [ ] 신랑 직업: `job`
- [ ] 신부 직업: `job`
- [ ] 신랑 소개: `introduction`
- [ ] 신부 소개: `introduction`

### components/InvitationSection.tsx
- [ ] 초대 메시지 내용 확인/수정

## 5단계: 테스트 🧪

### 로컬 테스트
```bash
npm run dev
```
- [ ] http://localhost:3000 접속 확인
- [ ] 모든 섹션 확인
- [ ] 정보가 올바르게 표시되는지 확인

### 반응형 테스트
- [ ] 데스크톱 (1920x1080)
- [ ] 태블릿 (768x1024)
- [ ] 모바일 (375x667)

### 기능 테스트
- [ ] 갤러리 이미지 클릭 → 라이트박스
- [ ] 라이트박스 네비게이션 (← → ESC)
- [ ] 길찾기 버튼 → 카카오맵 열림
- [ ] 전화 버튼 → 전화 앱 열림
- [ ] 문자 버튼 → 문자 앱 열림
- [ ] 방명록 입력 폼 작동

## 6단계: 배포 🚀

### GitHub에 푸시
```bash
git add .
git commit -m "웨딩 청첩장 완성"
git push origin main
```

### Vercel 배포
- [ ] https://vercel.com/ 접속
- [ ] GitHub 연동
- [ ] Repository Import
- [ ] Deploy 버튼 클릭
- [ ] 배포 완료 확인

### 배포 후 확인
- [ ] 배포된 URL 접속
- [ ] 모든 기능 다시 테스트
- [ ] 카카오톡 공유 테스트

## 7단계: 방명록 연동 (선택)

### Supabase 설정
- [ ] https://supabase.com/ 프로젝트 생성
- [ ] 데이터베이스 테이블 생성 (SQL 참고)
- [ ] API 키 복사
- [ ] .env.local 파일에 키 추가
- [ ] Vercel에 환경 변수 추가
- [ ] GuestbookSection.tsx 수정

## 8단계: 최종 점검 ✨

### 정보 확인
- [ ] 신랑신부 이름 오타 없음
- [ ] 날짜, 시간 정확함
- [ ] 주소 정확함
- [ ] 전화번호 정확함

### 디자인 확인
- [ ] 이미지가 선명하게 보임
- [ ] 색상이 마음에 듦
- [ ] 레이아웃이 깨지지 않음

### 공유 테스트
- [ ] 카카오톡으로 공유 테스트
- [ ] 친구/가족에게 미리 보여주기
- [ ] 피드백 받고 수정

## 9단계: 공유하기 🎉

### 청첩장 URL 공유
- [ ] 카카오톡 단체방
- [ ] 카카오톡 개별 메시지
- [ ] 문자 메시지
- [ ] SNS (Instagram, Facebook 등)

## 완료! 🎊

축하합니다! 멋진 웨딩 청첩장이 완성되었습니다.

---

## 💡 자주 묻는 질문

### Q: 이미지는 몇 장까지 추가할 수 있나요?
A: weddingData.ts의 gallery.images 배열에 원하는 만큼 추가할 수 있습니다.

### Q: 색상을 바꾸고 싶어요
A: tailwind.config.ts에서 색상을 수정하거나, 각 컴포넌트의 색상 클래스를 직접 변경하세요.

### Q: 섹션 순서를 바꾸고 싶어요
A: app/page.tsx에서 컴포넌트 순서를 변경하세요.

### Q: 일부 섹션을 제거하고 싶어요
A: app/page.tsx에서 해당 컴포넌트를 주석 처리하거나 삭제하세요.

### Q: 배포 비용이 드나요?
A: Vercel의 Hobby 플랜은 무료입니다.

---

## 📞 도움이 필요하면

- QUICKSTART.md - 빠른 시작 가이드
- IMPLEMENTATION.md - 상세 구현 가이드
- SUMMARY.md - 전체 요약
