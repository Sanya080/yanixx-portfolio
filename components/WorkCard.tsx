'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Work } from '@/src/data/works';

const gradientMap: Record<string, string> = {
  Crypto: 'from-violet-glow/20 via-purple-500/10 to-transparent',
  Memes: 'from-acid/20 via-emerald-500/10 to-transparent',
  Projects: 'from-cyan-glow/20 via-blue-500/10 to-transparent',
  Threads: 'from-orange-500/20 via-amber-500/10 to-transparent',
};

export default function WorkCard({ work }: { work: Work }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      className="relative glass rounded-2xl overflow-hidden group cursor-pointer"
    >
      <div
        className={`h-40 bg-gradient-to-br ${
          gradientMap[work.category] || 'from-white/5 to-transparent'
        } relative p-4`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white">
            <ExternalLink size={14} />
          </span>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/70 bg-black/20 px-2 py-1 rounded backdrop-blur">
            {work.category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-gray-500">{work.date}</span>
        </div>
        <h3 className="font-display text-lg font-medium text-white mb-2 leading-snug group-hover:text-cyan-glow transition-colors">
          {work.title}
        </h3>
        <p className="text-sm text-gray-400 line-clamp-2 mb-4">
          {work.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {work.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <a
        href={work.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-20"
        aria-label={`Open ${work.title}`}
      />
    </motion.div>
  );
}
