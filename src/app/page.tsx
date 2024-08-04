import FAQSection from "@/components/FAQSection";
import FeaturedGuruJi from "@/components/FeaturedGuruji";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import GuruJiTestimonials from "@/components/TestimonialCards";
// import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-white-500 antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedGuruJi />
      <WhyChooseUs />
      <FAQSection />
      <GuruJiTestimonials />
      {/* <UpcomingWebinars /> */}
      <Footer />
    </main>
  );
}
