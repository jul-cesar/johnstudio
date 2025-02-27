import {
  BarChart2,
  FileText,
  Palette,
  SeparatorHorizontal,
  Users,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

const AboutUsConformada = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Sobre{" "}
          <span className="text-primary font-magz font-normal">JohnStudio</span>
        </h1>
        <h2 className="mb-6 text-2xl font-bold text-gray-700 md:text-3xl lg:text-4xl dark:text-gray-200">
          ¿Cómo estará conformada?
        </h2>
      </div>

      <div className="relative h-auto sm:h-80 lg:h-full my-4">
        <img
          src="/entidades.png"
          alt="John Studio Imagen"
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Users className="mr-2 h-6 w-6 text-primary" />
              Nuestro Equipo
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              John Studio está conformado por un equipo multidisciplinario de
              profesionales apasionados, cada uno especializado en diferentes
              áreas del diseño, estrategia y contenido.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Palette className="mr-2 h-6 w-6 text-primary" />
              Diseño
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Nuestro equipo de diseño trabaja para crear identidades visuales
              únicas y atractivas que representen la esencia de cada
              emprendimiento.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <BarChart2 className="mr-2 h-6 w-6 text-primary" />
              Estrategia
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Desarrollamos estrategias personalizadas para cada cliente,
              asegurando que sus sueños de emprendimiento se materialicen de
              manera efectiva y sostenible.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FileText className="mr-2 h-6 w-6 text-primary" />
              Contenido
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Creamos contenido impactante y relevante que ayuda a nuestros
              clientes a conectar con su audiencia y comunicar su mensaje de
              manera efectiva.
            </p>
          </CardContent>
        </Card>
      </div>

      <SeparatorHorizontal className="my-8" />

      <div className="text-center">
        <blockquote className="p-4 my-4 border-l-4 border-primary  max-w-2xl mx-auto">
          <p className="italic text-gray-700 dark:text-gray-300">
            "Le prometí a Moisés que les daría a ustedes todo lugar por donde
            pasen."
          </p>
          <cite className="block mt-2 text-sm text-gray-600 dark:text-gray-400">
            Josué 1:1-9
          </cite>
        </blockquote>
      </div>
    </section>
  );
};

export default AboutUsConformada;
