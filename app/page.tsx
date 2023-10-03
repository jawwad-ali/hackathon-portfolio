import About from "@/HOC/About";
import Experience from "@/HOC/Experience";
import Feedback from "@/HOC/Feedback";
import Tech from "@/HOC/Tech";
import Works from "@/HOC/Works";
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

      <Experience />
      <Tech />
      <Works />
      <Feedback />

      {/*<div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div> */}
    </>
  );
}