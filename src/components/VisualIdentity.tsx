import { ArrowRight } from "lucide-react";
import { GradientHeading } from "./ui/gradient-heading";

const VisualIdentity = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-center">
          <GradientHeading size="xl" variant={"perso"} weight={"thin"}>
            John Studio Visual Identity
          </GradientHeading>

          <p className="mb-6 text-lg font-normal text-gray-600 dark:text-gray-300 mt-4">
            JohnStudio (identidad visual) estara enfocado en la creación grafica
            de la empresa, como lo es: branding (Identidad, Nombre, Logotipos,
            colores, tipografía, slogan, producto) y motion graphics (animación
            de logo, publicidad animada) Flyer, post y sitios we
          </p>

          <ul className="mb-8 space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-center">
              <ArrowRight className="mr-2 h-5 w-5 text-primary" />
              Diseñadores graficos
            </li>
            <li className="flex items-center">
              <ArrowRight className="mr-2 h-5 w-5 text-primary" />
              Diseñadores web
            </li>
            <li className="flex items-center">
              <ArrowRight className="mr-2 h-5 w-5 text-primary" />
              Animadores 2d y 3d
            </li>
          </ul>

          {/* <Button className="mt-4 w-full sm:w-auto">
            Conoce más sobre nosotros
          </Button> */}
        </div>

        <div className="relative h-32 sm:h-36 lg:h-auto">
          <img
            src="/logoEntidad2.png"
            alt="John Studio Imagen"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default VisualIdentity;
