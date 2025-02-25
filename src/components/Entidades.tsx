const LogosSection = () => {
  return (
    <div className="flex h-96 md:h-screen w-full">
      {/* Panel 1 - Branding */}
      <div className="w-1/3 bg-gradient-to-b from-[#5000C3] to-[#B601FF] relative flex flex-col items-center justify-center">
        <img src={`jsticon.svg`} alt="JS Logo" className="object-contain" />
        <p className="absolute bottom-12 text-white text-center text-sm font-light tracking-wider">
          BRANDING, DESING, WEB SITE, FLYER
        </p>
      </div>

      {/* Panel 2 - Gastronomía */}
      <div className="w-1/3 bg-[#060606] relative flex flex-col items-center justify-center">
        <img src={`jsticon.svg`} alt="JS Logo" className="object-contain" />
        <p className="absolute bottom-12 text-white text-center text-sm font-light tracking-wider">
          GASTRONOMIA, EVENTOS, BODAS
        </p>
      </div>

      {/* Panel 3 - Community */}
      <div className="w-1/3 bg-gradient-to-br from-[#B601FF] via-[#E13D21] to-[#FF8E53] relative flex flex-col items-center justify-center">
        <img src={`jsticon.svg`} alt="JS Logo" className="object-contain" />
        <p className="absolute bottom-12 text-white text-center text-sm font-light tracking-wider">
          COMUNITY MANAGER, SOCIAL MEDIA, CONTENIDO
        </p>
      </div>
    </div>
  );
};

export default LogosSection;
