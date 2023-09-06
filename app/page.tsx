import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroSection";
import Intro from "@/components/IntroSection";
import FeaturedEvents from "@/components/FeaturedEvents";
import Colleges from "@/components/Colleges";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="relative">
            <Navbar />

            <Hero />

            <Intro />

            <FeaturedEvents />

            <Colleges />

            <Footer />
        </div>
    );
}
