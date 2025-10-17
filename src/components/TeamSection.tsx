"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { GradientHeading } from "./ui/gradient-heading";
import { StarsBackground } from "./ui/stars-background";

const TeamSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const team = [
    {
      avatar:
        "https://ugc.production.linktr.ee/92c8406d-6d3d-4367-949f-2c73fffa2d74_WhatsApp-Image-2023-12-29-at-5.23.02-PM.jpeg?io=true&size=avatar-v3_0",
      name: "John S Rivero",
      title: "CEO, Director creativo Y Diseñador grafico",
      words: "Creativo, apasionado, alegre y eficiente.",
      social: [
        { name: "Twitter", url: "#" },
        { name: "LinkedIn", url: "#" },
      ],
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Gira Serrano",
      title: "Community Manager",
      words: "Creativa, innovadora, atenta",
      social: [
        { name: "Twitter", url: "#" },
        { name: "LinkedIn", url: "#" },
      ],
    },
    // {
    //   avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    //   name: "Juan David Montes",
    //   title: "Productor audiovisual",
    //   words: "Empático, Creativo, Responsable",
    //   social: [
    //     { name: "Twitter", url: "#" },
    //     { name: "LinkedIn", url: "#" },
    //   ],
    // },
    {
      avatar:
        "https://media.licdn.com/dms/image/v2/D4E03AQGh3iMMHpvGTw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1725992842307?e=1746057600&v=beta&t=g2_WJYdXfHKJzQd0DwquVFl9EJIetXI93EdY-qa9Eg0",
      name: "Julio Cesar Martinez",
      title: "Desarrollador/Diseñador Web",
      words: "Creativo, ambicioso, innovador",
      social: [
        { name: "Twitter", url: "#" },
        { name: "LinkedIn", url: "#" },
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden py-20">
      <StarsBackground />

      <div className="max-w-7xl mx-auto px-4 text-center md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <GradientHeading
            size="xl"
            variant={"perso"}
            weight={"thin"}
            className="mb-6"
          >
            Conoce nuestro equipo
          </GradientHeading>
          <p className="text-zinc-300 text-lg md:text-xl leading-relaxed">
            Somos un grupo apasionado de profesionales dedicados a crear
            experiencias digitales excepcionales que transforman ideas en
            realidades impactantes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="relative p-4">
                {/* Glowing background effect */}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r  from-[#E13D21] to-[#57176A] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`}
                ></div>

                {/* Avatar with border */}
                {/* <div className="relative mx-auto size-40 md:size-44 mb-6 overflow-hidden">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E13D21] to-[#57176A]">
                    <div className="absolute inset-0.5 rounded-full bg-black"></div>
                  </div>
                  <img
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    className="rounded-full object-cover size-full relative z-10 p-1.5"
                  />
                </div> */}

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300 mb-1">
                    {member.name}
                  </h3>
                  <p className="font-medium text-zinc-200 mb-2 tracking-wide">
                    {member.title}
                  </p>
                  <div className="h-px w-16 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto my-3"></div>
                  <p className="text-zinc-400 italic">"{member.words}"</p>

                  {/* Social links */}
                  {/* <div className="flex justify-center gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.social.map((link, linkIdx) => (
                      <a
                        key={linkIdx}
                        href={link.url}
                        className="text-zinc-400 hover:text-zinc-200 transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div> */}
                </div>
              </div>

              {/* Hover card effect */}
              <motion.div
                className="absolute inset-0 -z-10 rounded-xl bg-zinc-900/50 border border-zinc-800 opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredIndex === idx ? 1 : 0,
                  scale: hoveredIndex === idx ? 1 : 0.95,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </div>
  );
};

export default TeamSection;
