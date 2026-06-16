'use client';

import { motion } from 'framer-motion';
import { Terminal, Zap, Users, Globe } from 'lucide-react';
import SectionReveal from './SectionReveal';

const cards = [
  {
    icon: Zap,
    label: 'Content',
    desc: 'Daily memes, reactions, and life signals.',
  },
  {
    icon: Globe,
    label: 'Web3',
    desc: 'Crypto-native tone and community awareness.',
  },
  {
    icon: Users,
    label: 'Community',
    desc: 'Engaging with followers through humor.',
  },
  {
    icon: Terminal,
    label: 'Memes',
    desc: 'Minimalist, high-impact visual language.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-xs font-mono text-cyan-glow uppercase tracking-widest">
              01
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
              Identity
            </h2>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <SectionReveal>
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Terminal size={120} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Who is yanixx.ip?
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I&apos;m a content creator and meme strategist operating at the
                intersection of internet culture and Web3. My signal is simple:
                life situations, honest reactions, and community-first energy.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                I believe crypto doesn&apos;t have to be boring. Whether it&apos;s a
                game guess streak, a minimal reaction post, or a shoutout to the
                broskis keeping the timeline alive — every post is a pulse in a
                larger ecosystem.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Content', 'Memes', 'Web3', 'Community', 'Crypto'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-6 hover:border-white/20 transition-colors"
                >
                  <item.icon className="text-cyan-glow mb-4" size={24} />
                  <h4 className="font-display font-bold text-white mb-1">
                    {item.label}
                  </h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
