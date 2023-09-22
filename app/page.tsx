import About from "@/HOC/About";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="relative z-0 bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <HeroSection />
      </div>
      <About />

      {/*<Experience />
      <Tech />
      <Works />
      <Feedbacks />

      <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div> */}
    </>
  );
}
