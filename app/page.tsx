import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import Navbar from "@/components/widgets/Navbar";

export default function Home() {
  return (
    <main className='relative'>
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
