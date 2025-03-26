import Hero from "@/components/Hero";
import ParallaxSlider from "@/components/ParallaxSlider";
import Experince from "@/components/Experince";
import Projects from "@/components/Projects";
import ContactWithMe from "@/components/ContentWithMe";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <ParallaxSlider />
        <Experince />
        <Projects />
        <ContactWithMe />
      </div>
    </main>
  );
}
