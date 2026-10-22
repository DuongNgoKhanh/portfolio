import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CorePillars } from './components/CorePillars';
import { CaseStudies } from './components/CaseStudies';
import { InteractiveDemo } from './components/InteractiveDemo';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CorePillars />
        <CaseStudies />
        <InteractiveDemo />
        <SkillsMatrix />
      </main>
      <Footer />
    </div>
  );
}

export default App;
