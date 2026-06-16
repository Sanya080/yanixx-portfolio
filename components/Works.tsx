'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { works } from '@/src/data/works';
import WorkCard from './WorkCard';
import SectionReveal from './SectionReveal';

const categories = ['All', 'Crypto', 'Memes', 'Projects', 'Threads'];

export default function Works() {
  const [active, setActive] = useState('All');
  const filtered =
    active === 'All' ? works : works.filter((w) => w.category === active);

  return (
    <section id="works" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-cyan-glow uppercase tracking-widest">
              02
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
              Works
            </h2>
          </div>
          <p className="text-gray-400 max-w-xl mb-10">
            A filtered feed of my X posts. Select a category to browse memes,
            threads, crypto takes, and project highlights.
          </p>
        </SectionReveal>

        <SectionReveal>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? 'text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {active === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </SectionReveal>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-gray-500 font-mono text-sm">
            No signals in this frequency yet.
          </div>
        )}
      </div>
    </section>
  );
}
