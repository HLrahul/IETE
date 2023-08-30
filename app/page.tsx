import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroSection";
import Intro from "@/components/IntroSection";

export default function Home() {
    return (
        <div className="relative">
            <Navbar />

            <Hero />

            <Intro />
        </div>
    );
}
