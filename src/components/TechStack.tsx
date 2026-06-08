import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';
import { SectionDivider } from './SectionDivider';
import { portfolioData } from '../data/portfolio-data';
import { Database, FileSpreadsheet, BarChart3, Star } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  database: Database,
  spreadsheet: FileSpreadsheet,
  barChart: BarChart3
};

export function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
        <div className="text-center mb-10">
          <h2 className="section-title mb-4">Tech Stack</h2>
          <SectionDivider width={60} />
        </div>
      </ScrollReveal>

      {/* Tech Icons */}
      <motion.div
        className="flex justify-center items-center gap-8 md:gap-12 mb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {portfolioData.techStack.technologies.map((tech) => {
          const Icon = iconMap[tech.icon] || Database;
          return (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-2">
                <Icon className="w-14 h-14 md:w-16 md:h-16 text-[#5DADE2]" strokeWidth={1.5} />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Tech Names */}
      <ScrollReveal delay={0.2}>
        <p className="text-center text-white text-lg mb-10">
          {portfolioData.techStack.technologies.map(t => t.name).join(' | ')}
        </p>
      </ScrollReveal>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {portfolioData.techStack.skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            whileHover={{ x: 5 }}
          >
            <Star className="w-4 h-4 text-[#5DADE2] flex-shrink-0" />
            <span className="text-sm md:text-base">{skill.name} - {skill.years}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
