'use client';

import { motion } from 'framer-motion';
import { projects } from '@/src/data/projects';
import { ArrowUpRight } from 'lucide-react';
import SectionReveal from './SectionReveal';

export default function SelectedProjects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-cyan-glow uppercase tracking-widest">
              03
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
              Selected Projects
            </h2>
          </div>
          <p className="text-gray-400 max-w-xl mb-10">
            Case studies and important collaborations. These are the builds and
            campaigns that define my signal.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group glass rounded-2xl overflow-hidden hover:border-white/20 transition-colors"
            >
              <div className="relative h-56 bg-gradient-to-br from-void-light to-surface overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(139,92,246,0.15),transparent_60%)] group-hover:bg-[radial-gradient(circle_at_30%_40%,rgba(139,92,246,0.25),transparent_60%)] transition-all duration-500" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-xs font-mono text-acid uppercase tracking-widest mb-2 block">
                    {project.role}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 max-w-sm">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-cyan-glow hover:text-white transition-colors"
                >
                  View{' '}
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
