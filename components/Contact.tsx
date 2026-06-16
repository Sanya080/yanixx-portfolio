'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import SectionReveal from './SectionReveal';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-acid uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse" />
            Open Channel
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Let&apos;s Build <span className="text-gradient">Signal</span> Together
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Got a collab, meme idea, or community gig? My DMs are open. I&apos;m
            always down for authentic Web3 partnerships.
          </p>
        </SectionReveal>

        <SectionReveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="https://x.com/AnikSanya"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 rounded-full bg-white text-black font-bold font-display flex items-center gap-2"
            >
              DM on X
              <ArrowUpRight size={18} />
              <span className="absolute inset-0 rounded-full bg-white blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="px-8 py-4 rounded-full glass text-white font-display flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <MessageCircle size={18} />
              Telegram (soon)
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:hello@yanixx.ip"
              className="px-8 py-4 rounded-full glass text-white font-display flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Mail size={18} />
              hello@yanixx.ip
            </motion.a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
