import { InfiniteSlider } from "./ui/infinite-slider";

export function InfiniteSliderVertical() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#060606] text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-[#E13D21] to-[#57176A] text-transparent bg-clip-text">
          Nuestras Obras Maestras
        </span>
      </h2>
      <p className="text-xl md:text-2xl mb-12 text-center max-w-2xl">
        Una muestra de los proyectos que nos enorgullecen
      </p>
      <div className="flex h-[350px] space-x-5">
        <InfiniteSlider direction="vertical">
          <img
            src="/images/barliza/barliza1.jpg"
            alt="Branding Barliza 1"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="/images/barliza/barliza2.jpg"
            alt="Branding Barliza 2"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="/images/barliza/barliza3.jpg"
            alt="Branding Barliza 3"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="/images/barliza/barliza4.jpg"
            alt="Branding Barliza 4"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="/images/barliza/barliza5.jpg"
            alt="Branding Barliza 5"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="/images/barliza/barliza6.jpg"
            alt="Branding Barliza 6"
            className="aspect-square w-[120px] rounded-[4px]"
          />
        </InfiniteSlider>
        <InfiniteSlider direction="vertical" reverse>
          <img
            src="/images/andrea/andrea1.jpg"
            alt="Branding Andrea Torres 1"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="/images/andrea/andrea2.jpg"
            alt="Branding Andrea Torres 2"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="/images/andrea/andrea3.jpg"
            alt="Branding Andrea Torres 3"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="/images/andrea/andrea4.jpg"
            alt="Branding Andrea Torres 4"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="/images/andrea/andrea5.jpg"
            alt="Branding Andrea Torres 5"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="/images/andrea/andrea6.jpg"
            alt="Branding Andrea Torres 6"
            className="aspect-square w-[120px] rounded-[4px]"
          />
        </InfiniteSlider>

        <InfiniteSlider direction="vertical" reverse>
          <img
            src="/images/delmar/delmar1.jpg"
            alt="Branding Andrea Torres 1"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="/images/delmar/delmar2.jpeg"
            alt="Branding Andrea Torres 1"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="/images/delmar/delmar3.jpeg"
            alt="Branding Andrea Torres 1"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="/images/delmar/delmar4.jpeg"
            alt="Branding Andrea Torres 1"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="/images/delmar/delmar1.jpg"
            alt="Branding Andrea Torres 1"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="/images/andrea/andrea6.jpg"
            alt="Branding Andrea Torres 6"
            className="aspect-square w-[120px] rounded-[4px]"
          />
        </InfiniteSlider>
      </div>
    </div>
  );
}
