// ===========================
// Gallery & Lightbox Functionality
// ===========================

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

const galleryImages = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1600',
    'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1600',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1600',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1600',
    'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1600'
];

let currentImageIndex = 0;

// Open lightbox
function openLightbox(index) {
    currentImageIndex = index;
    lightboxImage.src = galleryImages[index];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Navigate to previous image
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImage.src = galleryImages[currentImageIndex];
}

// Navigate to next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    lightboxImage.src = galleryImages[currentImageIndex];
}

// Event listeners for lightbox
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', prevImage);
lightboxNext.addEventListener('click', nextImage);

// Close on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
});

// Add click handlers to gallery items (desktop)
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
        const index = parseInt(item.dataset.index);
        openLightbox(index);
    });
});

// Add click handlers to carousel items (mobile)
const carouselItems = document.querySelectorAll('.carousel-item');
carouselItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        openLightbox(index);
    });
});

// ===========================
// Carousel Dots for Mobile
// ===========================
const carouselContainer = document.querySelector('.carousel-container');
const carouselTrack = document.querySelector('.carousel-track');
const carouselDotsContainer = document.querySelector('.carousel-dots');

if (carouselContainer && carouselItems.length > 0) {
    // Create dots
    carouselItems.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        carouselDotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.carousel-dot');

    // Update dots on scroll
    carouselContainer.addEventListener('scroll', () => {
        const scrollLeft = carouselContainer.scrollLeft;
        const itemWidth = carouselItems[0].offsetWidth;
        const currentIndex = Math.round(scrollLeft / itemWidth);

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    });
}

// ===========================
// Guestbook Functionality
// ===========================

const guestbookForm = document.getElementById('guestbookForm');
const guestbookList = document.getElementById('guestbookList');
const TABLE_NAME = 'guestbook';

// Load guestbook messages
async function loadGuestbook() {
    try {
        const response = await fetch(`tables/${TABLE_NAME}?sort=-created_at&limit=100`);
        
        if (!response.ok) {
            throw new Error('Failed to load messages');
        }

        const result = await response.json();
        const messages = result.data || [];

        // Clear loading message
        guestbookList.innerHTML = '';

        if (messages.length === 0) {
            guestbookList.innerHTML = '<div class="empty-message">아직 메시지가 없습니다. 첫 번째 축하 메시지를 남겨주세요!</div>';
            return;
        }

        // Display messages
        messages.forEach(message => {
            const messageCard = createMessageCard(message);
            guestbookList.appendChild(messageCard);
        });
    } catch (error) {
        console.error('Error loading guestbook:', error);
        guestbookList.innerHTML = '<div class="empty-message">메시지를 불러올 수 없습니다. 나중에 다시 시도해주세요.</div>';
    }
}

// Create message card element
function createMessageCard(message) {
    const card = document.createElement('div');
    card.classList.add('guestbook-message');

    const date = new Date(message.created_at);
    const formattedDate = formatDate(date);

    card.innerHTML = `
        <div class="message-header">
            <span class="message-author">${escapeHtml(message.name)}</span>
            <span class="message-date">${formattedDate}</span>
        </div>
        <div class="message-content">${escapeHtml(message.message)}</div>
    `;

    return card;
}

// Format date
function formatDate(date) {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return '방금 전';
    if (minutes < 60) return `${minutes}분 전`;
    if (hours < 24) return `${hours}시간 전`;
    if (days < 7) return `${days}일 전`;

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Submit guestbook message
guestbookForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('guestName');
    const messageInput = document.getElementById('guestMessage');

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !message) {
        alert('이름과 메시지를 모두 입력해주세요.');
        return;
    }

    try {
        const response = await fetch(`tables/${TABLE_NAME}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                message: message
            })
        });

        if (!response.ok) {
            throw new Error('Failed to submit message');
        }

        // Clear form
        nameInput.value = '';
        messageInput.value = '';

        // Show success message
        alert('축하 메시지가 등록되었습니다. 감사합니다!');

        // Reload guestbook
        await loadGuestbook();

        // Scroll to guestbook list
        guestbookList.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } catch (error) {
        console.error('Error submitting message:', error);
        alert('메시지 등록에 실패했습니다. 나중에 다시 시도해주세요.');
    }
});

// ===========================
// KakaoTalk Share Functionality
// ===========================

// Initialize Kakao SDK
// Note: You need to replace 'YOUR_KAKAO_APP_KEY' with your actual Kakao JavaScript key
// Get it from: https://developers.kakao.com/
const KAKAO_APP_KEY = 'YOUR_KAKAO_APP_KEY';

if (window.Kakao && !window.Kakao.isInitialized()) {
    try {
        window.Kakao.init(KAKAO_APP_KEY);
        console.log('Kakao SDK initialized');
    } catch (error) {
        console.warn('Kakao SDK initialization failed. Please set your Kakao App Key.');
    }
}

const kakaoShareBtn = document.getElementById('kakaoShareBtn');

kakaoShareBtn.addEventListener('click', () => {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
        alert('카카오톡 공유 기능을 사용하려면 카카오 개발자 키가 필요합니다.\n\njs/script.js 파일에서 KAKAO_APP_KEY를 설정해주세요.\nhttps://developers.kakao.com/');
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
                    mobileWebUrl: window.location.href,
                    webUrl: window.location.href
                }
            },
            buttons: [
                {
                    title: '청첩장 보기',
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href
                    }
                }
            ]
        });
    } catch (error) {
        console.error('Kakao share error:', error);
        alert('카카오톡 공유에 실패했습니다.');
    }
});

// ===========================
// Map & Directions
// ===========================

function openDirections() {
    const address = '서울특별시 강남구 테헤란로 123';
    const placeName = '더 클래식 웨딩홀';
    
    // Try Kakao Map first (most popular in Korea)
    const kakaoMapUrl = `https://map.kakao.com/link/search/${encodeURIComponent(placeName + ' ' + address)}`;
    
    // Fallback to Google Maps
    const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    
    // Try to open Kakao Map, fallback to Google Maps
    window.open(kakaoMapUrl, '_blank');
}

// ===========================
// Smooth Scroll for Internal Links
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// Initialize on Page Load
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Load guestbook messages
    loadGuestbook();

    // Add fade-in animation to sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Show hero section immediately
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
});

// ===========================
// Kakao Map Integration (Optional)
// ===========================

// If you want to integrate Kakao Map, add this script to your HTML head:
// <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_APP_KEY"></script>

// Then uncomment and use this code:
/*
function initKakaoMap() {
    if (typeof kakao !== 'undefined' && kakao.maps) {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.5665, 126.9780), // Replace with actual coordinates
            level: 3
        };

        const map = new kakao.maps.Map(container, options);

        // Add marker
        const markerPosition = new kakao.maps.LatLng(37.5665, 126.9780);
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);

        // Add info window
        const infowindow = new kakao.maps.InfoWindow({
            content: '<div style="padding:5px;font-size:12px;">더 클래식 웨딩홀</div>'
        });
        infowindow.open(map, marker);
    }
}

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', initKakaoMap);
*/