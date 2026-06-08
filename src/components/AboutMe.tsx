import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';
import { SectionDivider } from './SectionDivider';
import { portfolioData } from '../data/portfolio-data';

export function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="px-6 py-16 md:px-10">
      <ScrollReveal>
        <div className="text-center mb-8">
          <h2 className="section-title mb-4">About Me</h2>
          <SectionDivider width={60} />
        </div>
      </ScrollReveal>

      <motion.div
        className="max-w-xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Intro paragraph */}
        <motion.p
          variants={itemVariants}
          className="body-text mb-6"
        >
          {portfolioData.aboutMe.intro}
        </motion.p>

        {/* Additional paragraphs */}
        {portfolioData.aboutMe.paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            variants={itemVariants}
            className="body-text mb-5"
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
}
