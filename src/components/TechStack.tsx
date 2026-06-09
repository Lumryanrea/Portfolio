import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';
import { SectionDivider } from './SectionDivider';
import { portfolioData } from '../data/portfolio-data';
import { Database, FileSpreadsheet, BarChart3, Star } from 'lucide-react';

// Official Python logo (two snakes)
function PythonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 255" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
      <path fill="currentColor" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072ZM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13Z"/>
      <path fill="currentColor" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897ZM162.87 234.537a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13Z" opacity=".6"/>
    </svg>
  );
}

const iconMap: Record<string, React.ElementType> = {
  database: Database,
  spreadsheet: FileSpreadsheet,
  barChart: BarChart3,
  code: PythonIcon,
  python: PythonIcon
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
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mb-2">
                <Icon className="w-9 h-9 md:w-11 md:h-11 text-[#5DADE2]" strokeWidth={1.5} />
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
