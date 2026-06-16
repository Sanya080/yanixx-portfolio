'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex items-center justify-center gap-2"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-glow uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse" />
            Signal Active
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6"
        >
          yanixx<span className="text-violet-glow">.</span>ip
          <span className="inline-block w-1.5 h-12 md:h-16 bg-cyan-glow ml-2 align-middle cursor-blink" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Content, Memes & Web3 Signals. I publish life situations, memes, and
          crypto-native content. Building community through humor, honesty, and
          internet culture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#works"
            className="group relative px-8 py-4 rounded-full bg-white text-black font-bold font-display hover:scale-105 transition-transform flex items-center gap-2"
          >
            View Works
            <ArrowDown
              size={18}
              className="group-hover:translate-y-1 transition-transform"
            />
            <span className="absolute inset-0 rounded-full bg-white blur-lg opacity-0 group-hover:opacity-40 transition-opacity" />
          </a>
          <a
            href="https://x.com/AnikSanya"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full glass text-white font-display hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            Open X
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted font-mono text-xs">
        <span className="uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"
        />
      </div>
    </section>
  );
}
