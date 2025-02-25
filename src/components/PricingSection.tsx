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
    plans: [
      {
        title: "Paquete 1",
        price: "$300K",
        description: "Ideal para emprendedores que están comenzando.",
        features: [
          "Optimización de redes sociales.",
          "Community Manager.",
          "Calendario de contenido.",
          "5 diseños de historias.",
          "2 reels.",
          "2 posts/carruseles.",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el paquete 1 del plan Creación de Contenido",
      },
      {
        title: "Paquete 2",
        price: "$500K",
        description: "Perfecto para emprendedores en crecimiento.",
        features: [
          "Optimización de redes sociales.",
          "Community Manager.",
          "Calendario de contenido.",
          "8 diseños de historias.",
          "4 reels.",
          "4 posts/carruseles.",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el paquete 2 del plan Creación de Contenido",
      },
      {
        title: "Paquete 3",
        price: "$700K",
        description: "Para emprendedores que buscan destacar.",
        features: [
          "Optimización de redes sociales.",
          "Community Manager.",
          "Calendario de contenido.",
          "15 diseños de historias.",
          "6 reels.",
          "6 posts/carruseles.",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el paquete 3 del plan Creación de Contenido",
      },
    ],
  },
  "SM+": {
    fullName: "Social Media + Creación de Contenido",
    plans: [
      {
        title: "Paquete Básico",
        price: "$500K",
        description: "Gestión básica de redes sociales.",
        features: [
          "Optimización de redes sociales.",
          "Community Manager.",
          "Calendario de contenido.",
          "Informe mensual de estadísticas.",
          "1 historia semi-diaria.",
          "5 diseños + 3 reels + 3 posts/carruseles.",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el Paquete Básico del plan Social Media + Creación de Contenido",
      },
      {
        title: "Paquete Intermedio",
        price: "$900K",
        description: "Gestión completa de redes sociales.",
        features: [
          "Optimización de redes sociales.",
          "Community Manager.",
          "Calendario de contenido.",
          "Informe mensual de estadísticas.",
          "2 historias diarias.",
          "8 diseños + 6 reels + 6 posts/carruseles.",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el Paquete Paquete Intermedio del plan Social Media + Creación de Contenido",
      },
      {
        title: "Paquete Pro Avanzado",
        price: "Negociable",
        description: "Solución integral para empresas.",
        features: [
          "Optimización de redes sociales.",
          "Community Manager.",
          "Calendario de contenido.",
          "Informe mensual de estadísticas.",
          "4 historias diarias.",
          "15 diseños + 9 reels + 9 posts/carruseles.",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el Paquete Pro Avanzado del plan Social Media + Creación de Contenido",
      },
    ],
  },
  Brand: {
    fullName: "Paquetes de Branding",
    plans: [
      {
        title: "Paquete Emprendedor",
        price: "$200K",
        description: "Establece tu presencia de marca.",
        features: [
          "Diseño de logo.",
          "Paleta de colores y tipografía.",
          "Tarjetas de presentación (mockups).",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el Paquete Emprendedor del plan Branding",
      },
      {
        title: "Paquete Básico",
        price: "$400K",
        description: "Crea una marca coherente y profesional.",
        features: [
          "Branding.",
          "Logo.",
          "Paleta de colores.",
          "Tipografía.",
          "Tarjetas de presentación.",
          "Manual de identidad.",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el Paquete Básico del plan Branding",
      },
      {
        title: "Paquete Medio",
        price: "$600K",
        description: "Desarrolla una marca poderosa y memorable.",
        features: [
          "Moodboard.",
          "Logo.",
          "Paleta de colores.",
          "Tipografía.",
          "Tarjetas de presentación.",
          "Dotación.",
          "Post de presentación de marca.",
          "Manual de identidad.",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el Paquete Medio del plan Branding",
      },
      {
        title: "Paquete Avanzado",
        price: "Negociable",
        description: "Estrategia completa de branding.",
        features: [
          "logotipo",
          "colores",
          "tipografía",
          "imágenes y eslogan",
          "empaque",
          "calidad",
          "diseño, etc.",
          "valor de marca",
          "personalidad",
          "reputación",
          "propósito",
          "experiencia del cliente.",
        ],
        message:
          "Hola, vengo de la web y estoy interesado en el Paquete Avanzado del plan Branding",
      },
    ],
  },
};

export default function CoolDarkPricingSection() {
  const [activeTab, setActiveTab] = useState("CC");

  return (
    <section className="w-full py-8 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            Nuestros Planes
          </h2>
          <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Elige el plan que mejor se adapte a tus necesidades y lleva tu marca
            al siguiente nivel.
          </p>
        </div>
        <div className="mx-auto max-w-5xl pt-12">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 mb-8 p-1 rounded-lg bg-zinc-800/50">
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
            {Object.entries(pricingData).map(([key, { plans }]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <div
                  className={`grid gap-4 sm:grid-cols-2 ${
                    key === "Brand" ? "lg:grid-cols-4 " : "lg:grid-cols-3"
                  }`}
                >
                  {plans.map((plan, index) => (
                    <Card
                      key={index}
                      className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-zinc-800 border-zinc-700"
                    >
                      {index === plans.length - 1 && (
                        <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                          Popular
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-xl text-white">
                          {plan.title}
                        </CardTitle>
                        <CardDescription className="text-zinc-400">
                          {plan.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500">
                          {plan.price}
                        </span>
                        {/* {plan.price !== "Personalizado" && (
                          <span className="text-zinc-400"></span>
                        )} */}
                        <ul className="mt-4 space-y-2">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <Check className="mr-2 size-4 text-green-500" />
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
