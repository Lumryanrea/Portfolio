import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Quote } from 'lucide-react';
import { useEffect } from 'react';
import { portfolioData } from '../data/portfolio-data';
import { ScrollReveal } from './ScrollReveal';
import { SocialButton } from './SocialButton';

export function TeachingPage() {
  const teaching = portfolioData.teaching;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-24 pb-12 px-6 md:px-10 overflow-x-hidden"
    >
      {/* Fixed Back Button */}
      {createPortal(
        <Link
          to="/"
          className="btn-outline fixed top-6 left-6 z-[90] inline-flex items-center gap-2 backdrop-blur-sm bg-[#3D3D4E]/60"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK
        </Link>,
        document.body
      )}

      <div className="w-full max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="w-11 h-11 rounded-full bg-[#5DADE2]/15 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-[#5DADE2]" />
            </span>
            <h1 className="text-2xl md:text-3xl font-medium tracking-[0.15em] text-white uppercase">
              Teaching
            </h1>
          </div>
          <div className="w-16 h-0.5 bg-[#5DADE2] mt-4" />
        </motion.div>

        {/* Intro */}
        <ScrollReveal>
          <p className="body-text max-w-3xl mb-10">{teaching.intro}</p>
        </ScrollReveal>

        {/* Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {teaching.images.map((img, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="rounded-xl overflow-hidden shadow-lg bg-gray-800 aspect-video">
                <img
                  src={img}
                  alt={`Umar teaching ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {teaching.stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <motion.div
                className="rounded-2xl bg-[#3D3D4E]/60 backdrop-blur-sm shadow-lg p-6 text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl md:text-4xl font-semibold text-[#5DADE2] mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-300 tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonials */}
        <ScrollReveal>
          <h2 className="text-xl font-medium text-white mb-6 text-center">
            What Students Say
          </h2>
        </ScrollReveal>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {teaching.testimonials.map((t, index) => (
            <ScrollReveal key={t.name} delay={index * 0.1} className="w-full max-w-2xl">
              <div className="rounded-2xl bg-[#3D3D4E]/60 backdrop-blur-sm shadow-lg p-7 h-full flex flex-col">
                <Quote className="w-8 h-8 text-[#5DADE2]/60 mb-3" />
                <p className="body-text text-sm md:text-base italic mb-5 flex-1">"{t.quote}"</p>
                <div>
                  <div className="text-white font-medium">{t.name}</div>
                  <div className="text-gray-400 text-sm">
                    {t.role}
                    {'company' in t && t.company ? `, ${t.company}` : ''}
                  </div>
                  {'email' in t && t.email && (
                    <a href={`mailto:${t.email}`} className="text-[#5DADE2] text-sm hover:underline">
                      {t.email}
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer */}
        <ScrollReveal delay={0.2}>
          <div className="border-t border-white/10 pt-12 mt-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-medium text-white mb-4">
                Want to learn with me?
              </h2>
              <p className="body-text">
                Reach out and let's talk about your learning goals.
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
    </motion.div>
  );
}
