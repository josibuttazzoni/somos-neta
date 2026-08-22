import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Founders from "@/components/Founders";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import News from "@/components/News";
import Pricing from "@/components/Pricing";
import Problems from "@/components/Problems";
import Process from "@/components/Process";
import ScrollReveal from "@/components/ScrollReveal";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Why from "@/components/Why";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Marquee />
      <Problems />
      <Services />
      <Process />
      <Founders />
      <Why />
      <Testimonial />
      <News />
      <Pricing />
      <Contact />
      <Footer />
      <ScrollReveal />
      <CustomCursor />
    </>
  );
}
