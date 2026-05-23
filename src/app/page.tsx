import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Products from '@/components/sections/Products';
import ColdStorage from '@/components/sections/ColdStorage';
import Projects from '@/components/sections/Projects';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <ColdStorage />
      <Stats />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

