// 웨딩 청첩장 데이터 설정 파일
// 이 파일에서 모든 정보를 한 곳에서 관리할 수 있습니다.

export const weddingData = {
  // 신랑신부 정보
  couple: {
    groom: {
      name: '김민수',
      englishName: 'Kim Minsu',
      job: '소프트웨어 엔지니어',
      education: '서울대학교 졸업',
      introduction: '평범한 일상 속에서 특별한 사랑을 찾았습니다',
      phone: '010-1234-5678',
    },
    bride: {
      name: '이지현',
      englishName: 'Lee Jihyun',
      job: 'UI/UX 디자이너',
      education: '연세대학교 졸업',
      introduction: '함께라면 어떤 길도 행복한 여정이 될 것 같습니다',
      phone: '010-5678-9012',
    },
  },

  // 예식 정보
  wedding: {
    date: '2024년 12월 25일 토요일',
    time: '오후 2시',
    venue: {
      name: '더 클래식 웨딩홀',
      address: '서울특별시 강남구 테헤란로 123',
      floor: '그랜드홀 3층',
      // 카카오맵 좌표 (실제 좌표로 변경 필요)
      lat: 37.5665,
      lng: 126.9780,
    },
  },

  // 양가 부모님 정보
  parents: {
    groom: {
      father: {
        name: '김철수',
        phone: '010-1111-2222',
      },
      mother: {
        name: '박영희',
        phone: '010-3333-4444',
      },
      relation: '의 장남',
    },
    bride: {
      father: {
        name: '이상철',
        phone: '010-5555-6666',
      },
      mother: {
        name: '최순자',
        phone: '010-7777-8888',
      },
      relation: '의 장녀',
    },
  },

  // 초대 메시지
  invitation: {
    message: `서로가 마주보며 다져온 사랑을
이제 함께 한 곳을 바라보며
걸어갈 수 있는 큰 사랑으로 키우고자 합니다.

저희 두 사람의 앞날을 축복해 주시고
격려해 주시면 감사하겠습니다.`,
  },

  // 갤러리 이미지
  gallery: {
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600',
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1600',
      'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1600',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1600',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1600',
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1600',
    ],
    // 실제 이미지로 교체 시:
    // images: [
    //   '/images/photo1.jpg',
    //   '/images/photo2.jpg',
    //   '/images/photo3.jpg',
    //   '/images/photo4.jpg',
    //   '/images/photo5.jpg',
    //   '/images/photo6.jpg',
    // ],
  },

  // 히어로 섹션 배경 이미지
  hero: {
    backgroundImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600',
    // 실제 이미지로 교체 시:
    // backgroundImage: '/images/hero-background.jpg',
  },

  // 카카오톡 공유 설정
  kakao: {
    appKey: 'YOUR_KAKAO_APP_KEY', // https://developers.kakao.com/
    share: {
      title: '웨딩 청첩장 - 김민수 ♥ 이지현',
      description: '저희 두 사람의 소중한 날에 초대합니다.\n2024년 12월 25일 토요일 오후 2시',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
    },
  },
};

// 타입 정의 (TypeScript용)
export type WeddingData = typeof weddingData;
