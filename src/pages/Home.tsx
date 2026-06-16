import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { AboutMe } from '../components/AboutMe';
import { TechStack } from '../components/TechStack';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { Services } from '../components/Services';
import { Certifications } from '../components/Certifications';
import { Footer } from '../components/Footer';

export function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  // Remember/restore scroll position so returning from a detail page
  // lands you back where you were (e.g. the projects section), not the top.
  useEffect(() => {
    const saved = sessionStorage.getItem('homeScrollY');
    if (saved) {
      const y = parseInt(saved, 10);
      // Wait for the page to finish its entrance transition before restoring.
      const id = window.setTimeout(() => window.scrollTo(0, y), 60);
      return () => window.clearTimeout(id);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => sessionStorage.setItem('homeScrollY', String(window.scrollY));
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div ref={topRef} />
      
      <Hero onScrollToAbout={scrollToAbout} />
      
      <div className="horizontal-rule mx-6 md:mx-10" />
      
      <div ref={aboutRef}>
        <AboutMe />
      </div>
      
      <div className="horizontal-rule mx-6 md:mx-10" />
      
      <TechStack />
      
      <div className="horizontal-rule mx-6 md:mx-10" />
      
      <FeaturedProjects />

      <div className="horizontal-rule mx-6 md:mx-10" />

      <Services />

      <div className="horizontal-rule mx-6 md:mx-10" />

      <Certifications />
      
      <div className="horizontal-rule mx-6 md:mx-10" />
      
      <Footer onScrollToTop={scrollToTop} />
    </motion.div>
  );
}
