import Community from "@/components/Community";
import Footer from "@/components/Footer";
import MembershipCard from "@/components/MembershipCard";
import Navbar from "@/components/Navbar";
import ProgranCards from "@/components/ProgranCards";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <div id="top" className="min-h-screen bg-iron-bg">
      <Navbar />

      <section className="relative overflow-hidden border-b border-iron-line">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.28] bg-no-repeat bg-cover "
          style={{
            backgroundImage: "url('/bgimage.png')",
          }}
        />
        <div
          className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full opacity-[0.12] blur-3xl"
          style={{
            background: "radial-gradient(circle, #FF5A1F, transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 relative">
          <div className="flex items-center gap-3 mb-4 font-mono text-[12px] uppercase tracking-widest text-iron-steel">
            <span className="h-px w-8 bg-iron-hazard" />
            Est. 2026 
          </div>
          <h1 className="font-display text-[16vw] leading-[0.90] sm:text-[90px] md:text-[100px] tracking-tight text-iron-paper max-w-3xl">
            STRENGTH IS
            <br />
            BUILT, <span className="text-iron-hazard">NOT BORN.</span>
          </h1>
          <p className="mt-8 max-w-xl text-iron-steel text-[17px] leading-relaxed">
            Train with purpose, build real strength, and become the strongest
            version of yourself at TitanForge. Whether you're looking to lose
            weight, gain muscle, improve fitness, or simply feel more confident,
            we provide the equipment, expert guidance, and motivating
            environment you need to make progress.
          </p>
          <Button className="mt-4 p-5 bg-iron-hazard" size="lg">
            Book a Free Session
          </Button>
        </div>
      </section>

      <ProgranCards/>

      <MembershipCard />

      <Community />

      <section className="mx-auto max-w-6xl px-6 py-24 border-b border-iron-line text-center">
        <div>
          <h2 className="font-display text-6xl md:text-7xl text-iron-paper leading-[0.9]">
            YOUR FIRST SESSION
            <br />
            <span className="text-iron-hazard">IS ON US.</span>
          </h2>
          <p className="mt-6 text-iron-steel max-w-md mx-auto text-[15px]">
            Walk the floor, meet a coach, load a bar. No card required to book.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-iron-hazard">Book a Free Session</Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
