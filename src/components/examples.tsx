import { TextAnimate } from "./magicui/text-animate";
import { GradientHeading } from "./ui/gradient-heading";
import { InfiniteSlider } from "./ui/infinite-slider";
import { StarsBackground } from "./ui/stars-background";

export function InfiniteSliderVertical() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden md:space-x-8 space-x-3">
      <StarsBackground />
      <div className="flex flex-col items-center text-center   justify-center min-h-screen  text-white">
        <GradientHeading size="xl" variant={"perso"}>
          Algunas de nuestras obras maestras
        </GradientHeading>
        <TextAnimate
          animation="blurIn"
          as="h3"
          className="text-[#FCA04D] text-2xl md:text-4xl font-bold my-4"
        >
          Una muestra de los proyectos que nos enorgullecen
        </TextAnimate>

        <div className="flex h-[350px] md:space-x-5 space-x-3 mt-4">
          <InfiniteSlider direction="vertical">
            <img
              src="/images/barliza/barliza1.jpg"
              alt="Branding Barliza 1"
              className="aspect-square w-[120px] rounded-[4px] md:w-[200px]"
            />
            <img
              src="/images/barliza/barliza2.jpg"
              alt="Branding Barliza 2"
              className="aspect-square w-[120px] rounded-[4px] md:w-[200px]"
            />
            <img
              src="/images/barliza/barliza3.jpg"
              alt="Branding Barliza 3"
              className="aspect-square w-[120px] rounded-[4px] md:w-[200px]"
            />
            <img
              src="/images/barliza/barliza4.jpg"
              alt="Branding Barliza 4"
              className="aspect-square w-[120px] rounded-[4px] md:w-[200px]"
            />
            <img
              src="/images/barliza/barliza5.jpg"
              alt="Branding Barliza 5"
              className="aspect-square w-[120px] rounded-[4px] md:w-[200px]"
            />
            <img
              src="/images/barliza/barliza6.jpg"
              alt="Branding Barliza 6"
              className="aspect-square w-[120px] rounded-[4px] md:w-[200px]"
            />
          </InfiniteSlider>
          <InfiniteSlider direction="vertical" reverse>
            <img
              src="/images/andrea/andrea1.jpg"
              alt="Branding Andrea Torres 1"
              className="aspect-square w-[120px] rounded-[4px] md:w-[200px]"
            />
            <img
              src="/images/andrea/andrea2.jpg"
              alt="Branding Andrea Torres 2"
              className="aspect-square w-[120px] rounded-[4px] md:w-[200px]"
            />
            <img
              src="/images/andrea/andrea3.jpg"
              alt="Branding Andrea Torres 3"
              className="aspect-square w-[120px] rounded-[4px] md:w-[200px]"
            />
            <img
              src="/images/andrea/andrea4.jpg"
              alt="Branding Andrea Torres 4"
              className="aspect-square w-[120px] rounded-[4px] md:w-[200px]"
            />
            <img
              src="/images/andrea/andrea5.jpg"
              alt="Branding Andrea Torres 5"
              className="aspect-square w-[120px] rounded-[4px] md:w-[200px]"
            />
            <img
              src="/images/andrea/andrea6.jpg"
              alt="Branding Andrea Torres 6"
              className="aspect-square w-[120px] rounded-[4px] md:w-[200px]"
            />
          </InfiniteSlider>

          <InfiniteSlider direction="vertical" reverse>
            <img
              src="/images/delmar/delmar1.jpg"
              alt="Branding Andrea Torres 1"
              className="aspect-square w-[120px] rounded-[4px] md:w-[200px]"
            />
            <img
              src="/images/delmar/delmar2.jpeg"
              alt="Branding Andrea Torres 1"
              className="aspect-square w-[120px] rounded-[4px] md:w-[200px]"
            />
            <img
              src="/images/delmar/delmar3.jpeg"
              alt="Branding Andrea Torres 1"
              className="aspect-square w-[120px] rounded-[4px] md:w-[200px]"
            />
            <img
              src="/images/delmar/delmar4.jpeg"
              alt="Branding Andrea Torres 1"
              className="aspect-square w-[120px] rounded-[4px] md:w-[200px]"
            />
            <img
              src="/images/delmar/delmar1.jpg"
              alt="Branding Andrea Torres 1"
              className="aspect-square w-[120px] rounded-[4px] md:w-[200px]"
            />
            <img
              src="/images/andrea/andrea6.jpg"
              alt="Branding Andrea Torres 6"
              className="aspect-square w-[120px] rounded-[4px] md:w-[200px]"
            />
          </InfiniteSlider>
        </div>
      </div>
    </div>
  );
}
