import { InfiniteSliderVertical } from "../components/examples";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PricingSection from "../components/PricingSection";
import TeamSection from "../components/TeamSection";
import { BackgroundPaths } from "../components/ui/background-paths";

const Landing = () => {
  return (
    <section className="w-full">
      <Navbar />
      <BackgroundPaths title="JohnStudio" />
      {/* <LogoCarouselDemo /> */}
      <InfiniteSliderVertical />
      <div id="team">
        <TeamSection />
      </div>

      <div id="pricing">
        <PricingSection />
      </div>

      <Footer />
    </section>
  );
};

export default Landing;
