import "./App.css";
import { InfiniteSliderVertical } from "./components/examples";
import { LogoCarouselDemo } from "./components/LogoCarrousel";
import PricingSection from "./components/PricingSection";
import { BackgroundPaths } from "./components/ui/background-paths";

function App() {
  return (
    <section className="w-full">
      <BackgroundPaths title="John Studio" />
      <LogoCarouselDemo />
      <InfiniteSliderVertical />
      <PricingSection />
    </section>
  );
}

export default App;
