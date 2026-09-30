import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import VideoSection from "@/components/VideoSection";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Works />
        <VideoSection />
        <About />
        <Philosophy />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
