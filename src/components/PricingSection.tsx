import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const pricingData = {
  SM: {
    fullName: "Plan de Social Media",
    description:
      "Paquetes de publicaciones diseñados para mantener tu presencia activa en redes sociales.",
    plans: [
      {
        title: "6 Posts",
        price: "$300.000",
        description: "Ideal para mantener presencia constante.",
        features: [
          "6 publicaciones mensuales",
          "Diseño profesional",
          "Contenido adaptado a tu marca",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el plan de 6 Posts de Social Media",
        popular: false,
      },
      {
        title: "12 Posts",
        price: "$550.000",
        description: "Perfecto para mayor engagement.",
        features: [
          "12 publicaciones mensuales",
          "Diseño profesional",
          "Contenido adaptado a tu marca",
          "Mayor frecuencia de publicación",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el plan de 12 Posts de Social Media",
        popular: true,
      },
    ],
  },
  EM: {
    fullName: "Estrategia Mensual",
    description:
      "Soluciones integrales que incluyen estrategia, gestión y creación de contenido.",
    plans: [
      {
        title: "Plan Básico",
        price: "$1.000.000",
        description: "Estrategia completa para tu marca.",
        features: [
          "Optimización de redes sociales",
          "Calendario de contenido",
          "Evaluación de métricas",
          "1 historia diaria",
          "8 publicaciones mensuales (4 reels + 4 posts)",
          "15 fotografías",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el Plan Básico de Estrategia Mensual",
        popular: false,
      },
      {
        title: "Plan Avanzado",
        price: "$2.000.000",
        description: "Estrategia premium para máximo impacto.",
        features: [
          "Optimización de redes sociales",
          "Calendario de contenido",
          "Evaluación de métricas",
          "Portafolio estratégico",
          "3 historias diarias",
          "16 publicaciones mensuales (8 reels + 8 posts)",
          "35 fotografías",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el Plan Avanzado de Estrategia Mensual",
        popular: true,
      },
    ],
  },
  Brand: {
    fullName: "Paquetes de Branding",
    description:
      "Servicios de branding profesional para construir una identidad de marca sólida y memorable.",
    plans: [
      {
        title: "Paquete Branding",
        price: "$1.000.000",
        description: "Identidad de marca completa.",
        features: [
          "Moodboard",
          "Logo",
          "Paleta de colores",
          "Tipografías",
          "Tarjeta de presentación",
          "Dotaciones",
          "Presentación de marca",
          "Manual de identidad",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el Paquete Branding",
        popular: false,
      },
      {
        title: "Branding Completo",
        price: "$4.000.000",
        description: "Solución integral de branding profesional.",
        features: [
          "Brief y análisis de marca",
          "Creación de logotipo + variantes",
          "Paleta de colores y tipografía",
          "Elementos gráficos (íconos, patrones, texturas)",
          "Aplicaciones visuales (mockups, redes, papelería)",
          "Manual de marca digital (PDF + archivos editables)",
          "Presentación profesional del proyecto",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el Paquete de Branding Completo",
        popular: true,
      },
    ],
  },
  DW: {
    fullName: "Diseño y desarrollo de paginas webs.",
    description:
      "Desde simples landing pages hasta complejas aplicaciones web, damos vida a tu visión digital. Elige el nivel de servicio que se ajuste a tus necesidades y observa cómo tu presencia en línea se eleva.",
    plans: [
      {
        title: "Paquete Básico",
        price: "600mil",
        description: "Perfecto para pequeñas empresas y sitios web personales.",
        features: [
          "Sitio web 1-3 páginas",
          "Diseño responsivo",
          "Optimización SEO básica",
          "1 mes de soporte",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el Paquete Básico de desarrollo web",
        popular: false,
      },
      {
        title: "Paquete Intermedio",
        price: "900mil+",
        description: "Ideal para negocios en crecimiento",
        features: [
          "Sitio web de múltiples páginas",
          "Funcionalidades personalizadas",
          "Diseño personalizado",
          "Optimización SEO avanzada",
          "1 meses de soporte",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el Paquete Intermedio de desarrollo web",
        popular: false,
      },
      {
        title: "Paquete Avanzado",
        price: "Negociable",
        description: "Para empresas que necesitan aplicaciones web complejas.",
        features: [
          "Aplicación web full-stack",
          "Integración de base de datos",
          "Autenticación de usuarios",
          "Desarrollo de API",
          "Funcionalidad personalizada",
          "2 meses de soporte y mantenimiento",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el Paquete Avanzado de desarrollo web",
        popular: true,
      },
    ],
  },
};

export default function CoolDarkPricingSection() {
  type PricingDataKey = "SM" | "EM" | "Brand" | "DW";
  const [activeTab, setActiveTab] = useState<PricingDataKey>("SM");

  return (
    <section className="w-full py-16 text-white">
      <div className="max-w-full px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-bold">
            Nuestros Planes
          </h2>
          <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Elige el plan que mejor se adapte a tus necesidades y lleva tu marca
            al siguiente nivel.
          </p>
        </div>

        <div className="mx-auto max-w-full">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-4 mb-2 p-1 rounded-lg bg-zinc-800/50">
              {Object.entries(pricingData).map(([key, { fullName }]) => (
                <TooltipProvider key={key}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <TabsTrigger
                        value={key}
                        className={`text-lg font-semibold transition-all duration-300 ${
                          activeTab === key
                            ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        {key}
                      </TabsTrigger>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{fullName}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </TabsList>

            {/* Title display below tabs */}
            <div className="w-full text-center mb-8 mt-2">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500">
                {pricingData[activeTab as keyof typeof pricingData].fullName}
              </h3>
            </div>

            {Object.entries(pricingData).map(([key, { plans }]) => (
              <TabsContent key={key} value={key} className="mt-4">
                <div
                  className={`grid gap-6 ${
                    key === "Brand"
                      ? "sm:grid-cols-2 lg:grid-cols-4"
                      : "sm:grid-cols-2 lg:grid-cols-3"
                  }`}
                >
                  {plans.map((plan, index) => (
                    <Card
                      key={index}
                      className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-zinc-800/80 border-zinc-700 flex flex-col ${
                        plan.popular ? "ring-2 ring-pink-500/50" : ""
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                          Popular
                        </div>
                      )}
                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl text-white">
                          {plan.title}
                        </CardTitle>
                        <CardDescription className="text-zinc-400">
                          {plan.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-6 flex-grow">
                        <div className="mb-4">
                          <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500">
                            {plan.price}
                          </span>
                          <span className="text-zinc-400 text-sm ml-1">
                            / mes
                          </span>
                        </div>

                        <div className="h-px w-full bg-zinc-700/50 my-4"></div>

                        <ul className="mt-4 space-y-3">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="mr-2 size-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-zinc-300">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter className="mt-auto">
                        <a
                          className="w-full"
                          href={`https://api.whatsapp.com/send?phone=573154034105&text=${encodeURIComponent(
                            plan.message
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 transition-all duration-300">
                            Elegir plan
                          </Button>
                        </a>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
