import HeroSection from "@/components/HeroSection";
import InvitationSection from "@/components/InvitationSection";
import ProfileSection from "@/components/ProfileSection";
import GallerySection from "@/components/GallerySection";
import VenueSection from "@/components/VenueSection";
import GuestbookSection from "@/components/GuestbookSection";
import ContactSection from "@/components/ContactSection";
import KakaoShareButton from "@/components/KakaoShareButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <InvitationSection />
      <ProfileSection />
      <GallerySection />
      <VenueSection />
      <GuestbookSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#F9E5E5] to-[#F5F1E8] py-12 text-center">
        <p className="text-sm text-[#4A4A4A] leading-loose mb-2">
          Thank you for celebrating with us<br />
          <span className="text-base font-medium text-[#E8C4C4]">김민수 ♥ 이지현</span>
        </p>
        <p className="text-xs text-[#8B8B8B] font-light mt-4">© 2024 Wedding Invitation</p>
      </footer>
      
      {/* Floating Kakao Share Button */}
      <KakaoShareButton />
    </main>
  );
}

