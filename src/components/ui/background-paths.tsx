"use client";

import { motion } from "framer-motion";
import HeroVideoDialog from "../magicui/hero-video-dialog";
import { Button } from "./button";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 1.2 + i * 0.05, // Líneas más gruesas para más intensidad
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <defs>
          {/* Gradiente con los colores personalizados */}
          <linearGradient
            id="customGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#5000C3", stopOpacity: 1 }}
            />
            <stop
              offset="14%"
              style={{ stopColor: "#B601FF", stopOpacity: 1 }}
            />
            <stop
              offset="28%"
              style={{ stopColor: "#200025", stopOpacity: 1 }}
            />
            <stop
              offset="42%"
              style={{ stopColor: "#231F20", stopOpacity: 1 }}
            />
            <stop
              offset="57%"
              style={{ stopColor: "#0F1819", stopOpacity: 1 }}
            />
            <stop
              offset="71%"
              style={{ stopColor: "#9730AA", stopOpacity: 1 }}
            />
            <stop
              offset="85%"
              style={{ stopColor: "#DD2B78", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#FCA04D", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="url(#customGradient)"
            strokeWidth={path.width}
            strokeOpacity={1} // Opacidad total para que los colores sean vivos
            initial={{ pathLength: 0.5 }} // Se inicia más avanzado para evitar la oscuridad
            animate={{
              pathLength: 1,
              opacity: [0.9, 1, 0.95], // Evita opacidad baja al inicio
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({
  title = "Background Paths",
  subtitle = "Discover the power of innovative design and seamless functionality.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const words = title.split(" ");

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#231F20]">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text 
                               bg-gradient-to-r 
                            from-white to-white/80"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>

          <div className="mb-12">
            <div
              className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                          dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                          overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Button
                variant="ghost"
                className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                              bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                              text-black dark:text-white transition-all duration-300 
                              group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                              hover:shadow-md dark:hover:shadow-neutral-800/50"
              >
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                  Discover Excellence
                </span>
                <span
                  className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                  transition-all duration-300"
                >
                  →
                </span>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-full max-w-md mx-auto"
        >
          <HeroVideoDialog
            className="block dark:hidden w-full aspect-video"
            animationStyle="from-center"
            videoSrc="https://www.instagram.com/reel/DEir56GRarJ/?utm_source=ig_embed&amp%3Butm_campaign=loading"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block w-full aspect-video"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
            thumbnailAlt="Hero Video"
          />
        </motion.div>
      </div>
    </div>
  );
}
