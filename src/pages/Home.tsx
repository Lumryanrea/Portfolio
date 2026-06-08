import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { AboutMe } from '../components/AboutMe';
import { TechStack } from '../components/TechStack';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { Certifications } from '../components/Certifications';
import { Footer } from '../components/Footer';

export function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

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
      
      <Certifications />
      
      <div className="horizontal-rule mx-6 md:mx-10" />
      
      <Footer onScrollToTop={scrollToTop} />
    </motion.div>
  );
}
