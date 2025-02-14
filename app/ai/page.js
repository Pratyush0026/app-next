import AiHero from "../components/AiHero";
import AiSection from "../components/AiSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhyChooseSection from "../components/WhyChooseSection";


export default function Ai() {
    return (
        <div className="bg-[#FAFAFA]">
            <Navbar />
            <AiHero />
            <WhyChooseSection/>
            <AiSection/>
            <Footer/>
        </div>
    );
}
