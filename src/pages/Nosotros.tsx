import AboutUsConformada from "../components/AboutUsConformada";
import AboutUsFirst from "../components/AboutUsFirst";
import Entidades from "../components/Entidades";
import Fotografia from "../components/Fotografia";
import Navbar from "../components/Navbar";
import StrategiaCC from "../components/StrategiaCC";
import VisualIdentity from "../components/VisualIdentity";

export default function SobreNosotros() {
  return (
    <section>
      <Navbar />
      <AboutUsFirst />
      <AboutUsConformada />
      <Entidades />
      <VisualIdentity />
      <Fotografia />
      <StrategiaCC />
    </section>
  );
}
