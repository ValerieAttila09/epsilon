import BestChoice from '@/components/sections/BestChoice';
import BestSeller from '@/components/sections/BestSeller';
import BigSales from '@/components/sections/BigSales';
import Brands from '@/components/sections/Brands';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import NewArrivals from '@/components/sections/NewArrivals';
import Navbar from "@/components/widgets/Navbar";

export default function Home() {
  return (
    <main className='relative'>
      <Navbar />
      <Hero />
      <BigSales />
      <BestSeller />
      <BestChoice />
      <NewArrivals />
      <Brands />
      <Footer />
    </main>
  );
}
