'use client';

import { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import { Twitter, Hash, TrendingUp, MessageCircle } from 'lucide-react';
import SectionReveal from './SectionReveal';

function AnimatedCounter({
  value,
  suffix = '',
}: {
  value: number;
  suffix?: string;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  { label: 'Followers', value: 925, suffix: '+', icon: Twitter, color: 'text-cyan-glow' },
  { label: 'Content Pieces', value: 300, suffix: '+', icon: Hash, color: 'text-violet-glow' },
  { label: 'Engagement', value: 12, suffix: 'K', icon: TrendingUp, color: 'text-acid' },
  { label: 'Communities', value: 4, suffix: '', icon: MessageCircle, color: 'text-orange-400' },
];

export default function Stats() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-xs font-mono text-cyan-glow uppercase tracking-widest">
              04
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
              Signal Stats
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 md:p-8 text-center hover:glow-violet transition-all duration-500"
            >
              <stat.icon className={`mx-auto mb-4 ${stat.color}`} size={28} />
              <div className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <SectionReveal>
          <div className="mt-12 glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <img
              src="https://pbs.twimg.com/profile_images/1935344455093035008/GZ_61e-o.jpg"
              alt="yanixx.ip"
              className="w-20 h-20 rounded-full border-2 border-white/10 object-cover"
            />
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-xl font-bold text-white mb-1">
                yanixx.ip
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                @AnikSanya · Content & Memes Creator
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {['Memes', 'Life', 'Web3', 'Gaming', 'Community'].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="https://x.com/AnikSanya"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-transform"
            >
              View Profile
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
