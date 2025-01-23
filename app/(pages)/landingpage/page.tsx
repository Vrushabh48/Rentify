import Benefit from "@/app/components/LandingPageComponents/Benefits";
import Featured from "@/app/components/LandingPageComponents/Featured";
import Footer from "@/app/components/LandingPageComponents/Footer";
import HeroSection from "@/app/components/LandingPageComponents/HeroSection";


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
