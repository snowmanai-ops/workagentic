import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import OfferSection from '@/components/OfferSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <OfferSection />
      <Footer />
    </main>
  );
}
