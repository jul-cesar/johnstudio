import { Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
  CC: {
    fullName: "Creación de Contenido",
    description:
      "Paquetes diseñados para potenciar tu presencia digital con contenido de alta calidad.",
    plans: [
      {
        title: "Paquete 1",
        price: "$300K",
        description: "Ideal para emprendedores que están comenzando.",
        features: [
          "Optimización de redes sociales",
          "Community Manager",
          "Calendario de contenido",
          "5 diseños de historias",
          "2 reels",
          "2 posts/carruseles",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el paquete 1 del plan Creación de Contenido",
        popular: false,
      },
      {
        title: "Paquete 2",
        price: "$500K",
        description: "Perfecto para emprendedores en crecimiento.",
        features: [
          "Optimización de redes sociales",
          "Community Manager",
          "Calendario de contenido",
          "8 diseños de historias",
          "4 reels",
          "4 posts/carruseles",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el paquete 2 del plan Creación de Contenido",
        popular: false,
      },
      {
        title: "Paquete 3",
        price: "$700K",
        description: "Para emprendedores que buscan destacar.",
        features: [
          "Optimización de redes sociales",
          "Community Manager",
          "Calendario de contenido",
          "15 diseños de historias",
          "6 reels",
          "6 posts/carruseles",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el paquete 3 del plan Creación de Contenido",
        popular: true,
      },
    ],
  },
  "SM+": {
    fullName: "Social Media + Creación de Contenido",
    description:
      "Soluciones integrales que combinan gestión de redes sociales y creación de contenido personalizado.",
    plans: [
      {
        title: "Paquete Básico",
        price: "$500K",
        description: "Gestión básica de redes sociales.",
        features: [
          "Optimización de redes sociales",
          "Community Manager",
          "Calendario de contenido",
          "Informe mensual de estadísticas",
          "1 historia semi-diaria",
          "5 diseños + 3 reels + 3 posts/carruseles",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el Paquete Básico del plan Social Media + Creación de Contenido",
        popular: false,
      },
      {
        title: "Paquete Intermedio",
        price: "$900K",
        description: "Gestión completa de redes sociales.",
        features: [
          "Optimización de redes sociales",
          "Community Manager",
          "Calendario de contenido",
          "Informe mensual de estadísticas",
          "2 historias diarias",
          "8 diseños + 6 reels + 6 posts/carruseles",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el Paquete Intermedio del plan Social Media + Creación de Contenido",
        popular: false,
      },
      {
        title: "Paquete Pro Avanzado",
        price: "Negociable",
        description: "Solución integral para empresas.",
        features: [
          "Optimización de redes sociales",
          "Community Manager",
          "Calendario de contenido",
          "Informe mensual de estadísticas",
          "4 historias diarias",
          "15 diseños + 9 reels + 9 posts/carruseles",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el Paquete Pro Avanzado del plan Social Media + Creación de Contenido",
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
        title: "Paquete Emprendedor",
        price: "$200K",
        description: "Establece tu presencia de marca.",
        features: [
          "Diseño de logo",
          "Paleta de colores y tipografía",
          "Tarjetas de presentación (mockups)",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el Paquete Emprendedor del plan Branding",
        popular: false,
      },
      {
        title: "Paquete Básico",
        price: "$400K",
        description: "Crea una marca coherente y profesional.",
        features: [
          "Branding",
          "Logo",
          "Paleta de colores",
          "Tipografía",
          "Tarjetas de presentación",
          "Manual de identidad",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el Paquete Básico del plan Branding",
        popular: false,
      },
      {
        title: "Paquete Medio",
        price: "$600K",
        description: "Desarrolla una marca poderosa y memorable.",
        features: [
          "Moodboard",
          "Logo",
          "Paleta de colores",
          "Tipografía",
          "Tarjetas de presentación",
          "Dotación",
          "Post de presentación de marca",
          "Manual de identidad",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el Paquete Medio del plan Branding",
        popular: false,
      },
      {
        title: "Paquete Avanzado",
        price: "Negociable",
        description: "Estrategia completa de branding.",
        features: [
          "Logotipo profesional",
          "Sistema de colores corporativos",
          "Selección de tipografía",
          "Imágenes y eslogan de marca",
          "Diseño de empaque",
          "Estándares de calidad",
          "Experiencia de diseño integral",
          "Definición de valor de marca",
          "Desarrollo de personalidad de marca",
          "Estrategia de reputación",
          "Declaración de propósito",
          "Diseño de experiencia del cliente",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el Paquete Avanzado del plan Branding",
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
  type PricingDataKey = "CC" | "SM+" | "Brand";
  const [activeTab, setActiveTab] = useState<PricingDataKey>("CC");

  return (
    <section className="w-full py-16 text-white">
      <div className="max-w-full px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-magz">
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
                {pricingData[activeTab].fullName}
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
                      className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-zinc-800/80 border-zinc-700 ${
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
                      <CardContent className="pb-6">
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
                      <CardFooter>
                        <Link
                          className="w-full"
                          to={`https://api.whatsapp.com/send?phone=573154034105&text=${encodeURIComponent(
                            plan.message
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 transition-all duration-300">
                            Elegir plan
                          </Button>
                        </Link>
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
