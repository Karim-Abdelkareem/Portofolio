import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ParallaxSlider from "@/components/ParallaxSlider";
import Experince from "@/components/Experince";
import Projects from "@/components/Projects";
import ContactWithMe from "@/components/ContentWithMe";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <section id="home" className="w-full">
        <Hero />
      </section>
      <section id="about" className="w-full">
        <ParallaxSlider />
      </section>
      <section id="experience" className="w-full">
        <Experince />
      </section>
      <section id="projects" className="w-full">
        <Projects />
      </section>
      <section id="contact" className="w-full">
        <ContactWithMe />
      </section>
    </main>
  );
}
