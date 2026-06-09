import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolio-data';
import { ScrollReveal } from './ScrollReveal';
import { SocialButton } from './SocialButton';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = portfolioData.projects.find(p => p.id === id);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

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
      className="min-h-screen py-12 px-6 md:px-10 overflow-x-hidden"
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

      {/* Main Content Container */}
      <div className="w-full max-w-6xl mx-auto">

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

      {/* Project Images Grid */}
      <div className="mb-12">
        <div className="grid grid-cols-2 gap-4">
          {(project.detailImages || [project.image]).map((img, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.button
                onClick={() => setExpandedImage(img)}
                className="rounded-xl overflow-hidden shadow-lg bg-gray-800 w-full cursor-pointer group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"%3E%3Crect width="800" height="500" fill="%23333"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23666"%3E${project.title} Dashboard%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white/0 group-hover:text-white/100 text-sm font-medium transition-all duration-300">Click to expand</span>
                  </div>
                </div>
              </motion.button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Expanded Image Modal */}
      {expandedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setExpandedImage(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[90vh] w-full"
          >
            <img
              src={expandedImage}
              alt="Expanded project image"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setExpandedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </motion.div>
        </motion.div>
      )}

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
      </div>
      {/* End Main Content Container */}
    </motion.div>
  );
}
