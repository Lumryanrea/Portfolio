import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { portfolioData } from '../data/portfolio-data';
import { ScrollReveal } from './ScrollReveal';
import { SocialButton } from './SocialButton';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = portfolioData.projects.find(p => p.id === id);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Project not found</h1>
          <Link to="/" className="btn-primary">
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen py-12 px-6 md:px-10"
    >
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <Link
          to="/"
          className="btn-outline inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK
        </Link>
      </motion.div>

      {/* Project Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h1 className="text-2xl md:text-3xl font-medium tracking-[0.15em] text-white uppercase mb-2">
          {project.title}
        </h1>
        <p className="text-gray-400 tracking-[0.1em] uppercase">
          {project.tech.join(' · ')}
        </p>
        <div className="w-16 h-0.5 bg-[#5DADE2] mt-4" />
      </motion.div>

      {/* Project Images */}
      <div className="space-y-8 mb-12">
        {(project.detailImages || [project.image]).map((img, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg bg-gray-800"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={img}
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"%3E%3Crect width="800" height="500" fill="%23333"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23666"%3E${project.title} Dashboard%3C/text%3E%3C/svg%3E`;
                }}
              />
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      {/* Project Content */}
      <div className="max-w-3xl">
        {/* Overview */}
        {project.overview && (
          <ScrollReveal>
            <div className="mb-8">
              <h2 className="text-xl font-medium text-white mb-3 flex items-center gap-2">
                <span className="text-[#5DADE2]">📊</span> Overview
              </h2>
              <p className="body-text">{project.overview}</p>
            </div>
          </ScrollReveal>
        )}

        {/* Objectives */}
        {project.objectives && project.objectives.length > 0 && (
          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <h2 className="text-xl font-medium text-white mb-3 flex items-center gap-2">
                <span className="text-[#5DADE2]">🎯</span> Objectives
              </h2>
              <p className="body-text mb-3">
                The dashboard was designed to explore and answer key operational questions central to any mobility platform:
              </p>
              <ol className="list-decimal list-inside space-y-2">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="body-text">{objective}</li>
                ))}
              </ol>
            </div>
          </ScrollReveal>
        )}

        {/* Dashboard Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ScrollReveal delay={0.15}>
            <div className="mb-8">
              <h2 className="text-xl font-medium text-white mb-3 flex items-center gap-2">
                <span className="text-[#5DADE2]">✨</span> Dashboard Highlights
              </h2>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="body-text flex items-start gap-2">
                    <span className="text-[#5DADE2] mt-1">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        )}

        {/* Business Impact */}
        {project.businessImpact && project.businessImpact.length > 0 && (
          <ScrollReveal delay={0.2}>
            <div className="mb-8">
              <h2 className="text-xl font-medium text-white mb-3 flex items-center gap-2">
                <span className="text-[#5DADE2]">💼</span> Business Impact
              </h2>
              <ul className="space-y-2">
                {project.businessImpact.map((impact, index) => (
                  <li key={index} className="body-text flex items-start gap-2">
                    <span className="text-[#5DADE2] mt-1">-</span>
                    {impact}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        )}

        {/* Technical Summary */}
        {project.technicalSummary && project.technicalSummary.length > 0 && (
          <ScrollReveal delay={0.25}>
            <div className="mb-8">
              <h2 className="text-xl font-medium text-white mb-3 flex items-center gap-2">
                <span className="text-[#5DADE2]">🔧</span> Technical Summary
              </h2>
              <ul className="space-y-2">
                {project.technicalSummary.map((tech, index) => (
                  <li key={index} className="body-text flex items-start gap-2">
                    <span className="text-[#5DADE2] mt-1">-</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        )}

        {/* Outcome */}
        {project.outcome && (
          <ScrollReveal delay={0.3}>
            <div className="mb-12">
              <h2 className="text-xl font-medium text-white mb-3 flex items-center gap-2">
                <span className="text-[#5DADE2]">🎉</span> Outcome
              </h2>
              <p className="body-text">{project.outcome}</p>
            </div>
          </ScrollReveal>
        )}
      </div>

      {/* Footer */}
      <ScrollReveal delay={0.35}>
        <div className="border-t border-white/10 pt-12 mt-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-medium text-white mb-4">Thanks!</h2>
            <p className="body-text mb-2">
              Thank you for taking the time to view this project!
            </p>
            <p className="body-text">
              If you'd like to chat about me joining your team, feel free to connect
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <SocialButton 
              type="linkedin" 
              href={portfolioData.socialLinks.linkedin}
              label="LinkedIn"
            />
            <SocialButton 
              type="email" 
              href={portfolioData.socialLinks.email}
              label="Email"
            />
          </div>
        </div>
      </ScrollReveal>
    </motion.div>
  );
}
