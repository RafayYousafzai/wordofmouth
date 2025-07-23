import NavigationBar from "./components/navbar";
import HeroSection from "./components/hero-section";
import AboutSection from "./components/about-section";
import TeamSection from "./components/team-section";
import TestimonialsSection from "./components/testimonials-section";
import HeatmapSection from "./components/heatmap-section";
import DownloadCTA from "./components/download-cta";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <TestimonialsSection />
      <HeatmapSection />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
