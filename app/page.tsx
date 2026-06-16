import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Works from '@/components/Works';
import SelectedProjects from '@/components/SelectedProjects';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-void overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Works />
      <SelectedProjects />
      <Stats />
      <Contact />
      <footer className="py-8 text-center text-xs text-muted font-mono border-t border-white/5">
        <p>yanixx.ip · Built with Next.js & Tailwind · Deployed on Vercel</p>
      </footer>
    </main>
  );
}
