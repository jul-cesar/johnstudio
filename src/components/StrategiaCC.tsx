import { ArrowRight } from "lucide-react";
import { GradientHeading } from "./ui/gradient-heading";

const StrategiaCC = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-center">
          <GradientHeading size="xl" variant={"perso"}>
            John Studio Diseños, estrategia y contenidos
          </GradientHeading>

          <p className="mb-6 text-lg font-normal text-gray-600 dark:text-gray-300 mt-4">
            Johnsrivero (Diseño, estrategia y contenido) estara enfocado en la
            creación de las estrategias y contenidos generales, como sacar ideas
            y mostrar resultados de manera estrategica, especialmente los Reels.
            tambien el contenido a realizar sera enfocado y subido desde aqui
          </p>

          <ul className="mb-8 space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-center">
              <ArrowRight className="mr-2 h-5 w-5 text-primary" />
              Todo el equipo de trabajo
            </li>
          </ul>

          {/* <Button className="mt-4 w-full sm:w-auto">
            Conoce más sobre nosotros
          </Button> */}
        </div>

        <div className="relative h-32 sm:h-80 lg:h-full">
          <img
            src="/logoEntidad1.png"
            alt="John Studio Imagen"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default StrategiaCC;
