import { ArrowRight } from "lucide-react";
const AboutUsFirst = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Sobre{" "}
            <span className="text-primary font-magz font-normal">
              JohnStudio
            </span>
          </h1>

          <p className="mb-6 text-lg font-normal text-gray-600 dark:text-gray-300">
            JohnStudio es una marca (una firma) nacida de una promesa divina,
            con el propósito de ser un nombre que bendecirá a muchos. Nos
            enfocamos en las personas que tienen un sueño de emprender pero no
            saben cómo materializarlo.
          </p>

          <p className="mb-8 text-lg font-normal text-gray-600 dark:text-gray-300">
            Creamos los sueños de esas personas, enfocándonos en:
          </p>

          <ul className="mb-8 space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-center">
              <ArrowRight className="mr-2 h-5 w-5 text-primary" />
              Diseño innovador
            </li>
            <li className="flex items-center">
              <ArrowRight className="mr-2 h-5 w-5 text-primary" />
              Estrategia efectiva
            </li>
            <li className="flex items-center">
              <ArrowRight className="mr-2 h-5 w-5 text-primary" />
              Contenido impactante
            </li>
          </ul>

          <blockquote className="p-4 my-4 border-l-4 border-primary ">
            <p className="italic text-gray-700 dark:text-gray-300">
              "Le prometí a Moisés que les daría a ustedes todo lugar por donde
              pasen."
            </p>
            <cite className="block mt-2 text-sm text-gray-600 dark:text-gray-400">
              Josué 1:1-9
            </cite>
          </blockquote>

          {/* <Button className="mt-4 w-full sm:w-auto">
            Conoce más sobre nosotros
          </Button> */}
        </div>

        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            src="/jsticon.svg"
            alt="John Studio Imagen"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsFirst;
