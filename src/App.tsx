import "./App.css";
import { InfiniteSliderVertical } from "./components/examples";
import { LogoCarouselDemo } from "./components/LogoCarrousel";
import { BackgroundPaths } from "./components/ui/background-paths";

function App() {
  return (
    <section className="bg-black">
      <BackgroundPaths title="John Studio" />
      <LogoCarouselDemo />
      <InfiniteSliderVertical />
    </section>
  );
}

export default App;
