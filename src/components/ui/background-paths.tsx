"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import HeroVideoDialog from "../magicui/hero-video-dialog";

function FloatingPaths({ position }: { position: number }) {
  const colors = [
    "#FCA04D",
    "#DD2B78",
    "#9730AA",
    "#57176A",
    "#200025",
    "#B601FF",
    "#E13D21",
  ];

  const paths = Array.from({ length: 36 }, (_, i) => {
    const gradientStart = colors[i % colors.length];
    const gradientEnd = colors[(i + 1) % colors.length];
    return {
      id: i,
      d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
        380 - i * 5 * position
      } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
        152 - i * 5 * position
      } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
        684 - i * 5 * position
      } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
      gradientId: `gradient-${i}`,
      gradientStart,
      gradientEnd,
      width: 0.5 + i * 0.03,
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        <defs>
          {paths.map((path) => (
            <linearGradient
              key={path.gradientId}
              id={path.gradientId}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={path.gradientStart} />
              <stop offset="100%" stopColor={path.gradientEnd} />
            </linearGradient>
          ))}
        </defs>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={`url(#${path.gradientId})`}
            strokeWidth={path.width}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({
  title = "Background Paths",
  subtitle = "Diseños, estrategia y contenidos.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const words = title.split(" ");

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#060606]">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold  tracking-tighter">
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
                    className="inline-block text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(#FCA04D, #DD2B78, #9730AA, #57176A, #200025, #B601FF, #E13D21)",
                      backgroundSize: "200% 200%",
                      animation: "gradientAnimation 10s ease infinite",
                    }}
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

          <div
            className="inline-block group 
                       p-px rounded-2xl  overflow-hidden shadow-lg hover:shadow-xl 
                       transition-shadow duration-300"
          >
            <div className=" items-center justify-center">
              <AnimatedGradientText className="bg-black">
                🎉 <hr className="mx-2 h-4 w-px shrink-0" />
                <span
                  className={cn(
                    `inline animate-gradient text-2xl bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  Comienza ya!
                </span>
                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedGradientText>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-full max-w-md mx-auto mt-8"
        >
          <HeroVideoDialog
            className="w-full aspect-[9/16]"
            animationStyle="from-center"
            videoSrc="video.mp4"
            thumbnailSrc="tn.png"
            thumbnailAlt="Hero Video"
          />
        </motion.div>
      </div>
    </div>
  );
}
