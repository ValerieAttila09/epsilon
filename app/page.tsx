import Hero from '@/components/widgets/Hero';
import Navbar from '@/components/widgets/Navbar';
import NewsAndEvents from '@/components/widgets/NewsAndEvents';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <NewsAndEvents />
    </main>
  );
}
