import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Process from "@/components/Process";
import Products from "@/components/Products";
import Reveal from "@/components/Reveal";
import Showroom from "@/components/Showroom";
import Students from "@/components/Students";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <TrustBar />
        <Reveal>
          <Products />
        </Reveal>
        <Reveal>
          <Showroom />
        </Reveal>
        <Reveal>
          <Process />
        </Reveal>
        <Reveal>
          <Students />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
