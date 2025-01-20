import Benefit from "@/app/Components/LandingPageComponents/Benefits";
import Featured from "@/app/Components/LandingPageComponents/Featured";
import Footer from "@/app/Components/LandingPageComponents/Footer";
import HeroSection from "@/app/Components/LandingPageComponents/HeroSection";

export default function Landing() {
    return (
        <div>
            <HeroSection />
            <Benefit />
            <Featured />
            <Footer />
        </div>
    );
}
