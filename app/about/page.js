import AboutHero from "../components/AboutHero";
import BrandCarousel from "../components/BrandCarousel";
import Footer from "../components/Footer";
import PartnershipImpact from "../components/PartnershipImpact";
import ProjectSteps from "../components/ProjectSteps";
import TestimonialSection from "../components/TestimonialSection";
import WhyChooseUs from "../components/WhyChooseUs";


export default function About() {
    return (
        <div>

            <AboutHero />
            <BrandCarousel />
            <WhyChooseUs/>
            <PartnershipImpact/>
            <ProjectSteps/>
            <TestimonialSection/>

        


           
            <Footer />
        </div>
    );
}
