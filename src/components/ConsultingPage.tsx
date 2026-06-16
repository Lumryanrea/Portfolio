import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { portfolioData } from '../data/portfolio-data';
import { LumryLockup } from './LumryBrand';

const ACCENT = '#059669';

// Benefit icons (recreated from the flier)
function BenefitIcon({ name }: { name: string }) {
  const common = { width: 32, height: 32, fill: 'none', viewBox: '0 0 24 24' };
  switch (name) {
    case 'money':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" stroke={ACCENT} strokeWidth="2" />
          <text x="12" y="16.6" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fontSize="13" fill={ACCENT}>$</text>
        </svg>
      );
    case 'search':
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6.5" stroke={ACCENT} strokeWidth="2" />
          <line x1="20" y1="20" x2="15.8" y2="15.8" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'chart':
      return (
        <svg {...common}>
          <line x1="4" y1="20" x2="20" y2="20" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
          <rect x="6" y="11" width="3.4" height="6.4" rx="1" fill={ACCENT} />
          <rect x="11.3" y="7" width="3.4" height="10.4" rx="1" fill={ACCENT} />
          <rect x="16.6" y="13.6" width="3.4" height="3.8" rx="1" fill={ACCENT} />
        </svg>
      );
    case 'check':
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" stroke={ACCENT} strokeWidth="2" />
          <path d="M8 12.2l2.6 2.6L16 9.4" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

// Service icons (recreated from the flier)
function ServiceIcon({ name }: { name: string }) {
  const common = { width: 38, height: 38, fill: 'none', viewBox: '0 0 24 24' };
  const c = '#047857';
  switch (name) {
    case 'report':
      return (
        <svg {...common}>
          <path d="M4 16l4-4 3 3 5.5-6.5" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 8.5h3.2V11.7" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'grid':
      return (
        <svg {...common}>
          <rect x="4" y="4" width="7" height="7" rx="1.6" stroke={c} strokeWidth="2" />
          <rect x="13" y="4" width="7" height="7" rx="1.6" stroke={c} strokeWidth="2" />
          <rect x="4" y="13" width="7" height="7" rx="1.6" stroke={c} strokeWidth="2" />
          <rect x="13" y="13" width="7" height="7" rx="1.6" stroke={c} strokeWidth="2" />
        </svg>
      );
    case 'automation':
      return (
        <svg {...common}>
          <circle cx="6" cy="6.5" r="2.6" stroke={c} strokeWidth="2" />
          <circle cx="18" cy="6.5" r="2.6" stroke={c} strokeWidth="2" />
          <circle cx="12" cy="18" r="2.6" stroke={c} strokeWidth="2" />
          <path d="M8.5 6.5h7M7.4 8.7l3.4 7M16.6 8.7l-3.4 7" stroke={c} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'database':
      return (
        <svg {...common}>
          <ellipse cx="12" cy="6" rx="7" ry="3" stroke={c} strokeWidth="2" />
          <path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6" stroke={c} strokeWidth="2" />
          <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" stroke={c} strokeWidth="2" />
        </svg>
      );
    case 'ai':
      return (
        <svg {...common}>
          <path d="M12 3l1.6 4.3L18 9l-4.4 1.7L12 15l-1.6-4.3L6 9l4.4-1.7L12 3z" stroke={c} strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M18 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z" stroke={c} strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case 'workspace':
    default:
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2.4" stroke={c} strokeWidth="2" />
          <line x1="4" y1="10" x2="20" y2="10" stroke={c} strokeWidth="2" />
          <line x1="10" y1="10" x2="10" y2="20" stroke={c} strokeWidth="2" />
        </svg>
      );
  }
}

export function ConsultingPage() {
  const c = portfolioData.consulting;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen overflow-x-hidden"
    >
      {/* Fixed Back Button */}
      {createPortal(
        <Link
          to="/"
          className="fixed top-6 left-6 z-[90] inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium text-sm tracking-wider uppercase backdrop-blur-sm"
          style={{ background: 'rgba(6,59,44,0.85)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          BACK
        </Link>,
        document.body
      )}

      {/* Branded canvas (mirrors the flier) */}
      <div className="relative bg-[#f4f8f6] text-[#102a22] rounded-2xl overflow-hidden">
        {/* decorative blobs */}
        <div
          className="absolute -top-40 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.13), rgba(5,150,105,0) 70%)' }}
        />
        <div
          className="absolute bottom-24 -left-40 w-[440px] h-[440px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.08), rgba(5,150,105,0) 70%)' }}
        />

        <div className="relative z-[1] px-7 md:px-16 pt-24 pb-16">
          {/* Logo lockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <LumryLockup markSize={64} titleClass="text-3xl md:text-4xl" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-12 font-extrabold tracking-tight leading-[1.05] text-4xl md:text-6xl"
          >
            {c.headlineLead}
            <br />
            <span style={{ color: ACCENT }}>{c.headlineAccent}</span>
          </motion.h1>

          {/* Tagline */}
          <p className="mt-6 text-lg md:text-2xl font-medium text-[#48584f] max-w-3xl leading-relaxed">
            {c.tagline}
          </p>

          {/* Benefit cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {c.benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-[#e5ece8] rounded-[22px] p-7 flex flex-col gap-5 shadow-[0_10px_28px_rgba(16,42,34,0.05)]"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#ecfdf5] border border-[#d1fae5] flex items-center justify-center">
                  <BenefitIcon name={b.icon} />
                </div>
                <div className="font-bold text-lg md:text-xl leading-snug">{b.text}</div>
              </motion.div>
            ))}
          </div>

          {/* Our Services */}
          <div className="mt-14 flex items-center gap-5">
            <div className="font-bold text-sm tracking-[4px] uppercase" style={{ color: ACCENT }}>
              Our Services
            </div>
            <div className="h-px flex-1 bg-[#d7e2dc]" />
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {c.services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.06 }}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="w-20 h-20 rounded-[20px] bg-white border border-[#e5ece8] flex items-center justify-center shadow-[0_8px_20px_rgba(16,42,34,0.05)]">
                  <ServiceIcon name={s.icon} />
                </div>
                <div className="font-semibold text-sm leading-snug">{s.title}</div>
                {'note' in s && s.note && (
                  <div className="text-xs text-[#7c8a83] -mt-2">{s.note}</div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-14 rounded-[26px] p-9 md:p-11 shadow-[0_18px_40px_rgba(5,95,70,0.28)]"
            style={{ background: `linear-gradient(135deg, ${ACCENT}, #064e3b)` }}
          >
            <div className="font-extrabold text-2xl md:text-4xl leading-tight text-white">
              {c.ctaTitle}
            </div>
            <div className="mt-3 text-base md:text-xl font-medium text-[#d1fae5]">
              {c.ctaSubtitle}
            </div>
            <a
              href="https://wa.me/2348037166515?text=Hi%20Umar%2C%20I'd%20like%20a%20free%20consultation%20with%20Lumry%20Analytics."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-white text-[#064e3b] font-semibold text-sm tracking-wide uppercase px-7 py-3 rounded-full hover:bg-[#ecfdf5] transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Contact footer bar */}
        <div className="relative z-[1] px-7 md:px-16 py-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10" style={{ background: '#063b2c' }}>
          <a href={`mailto:${c.contactEmail}`} className="flex items-center gap-3.5 group">
            <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="#a7f3d0" strokeWidth="2" />
                <path d="M4 7l8 6 8-6" stroke="#a7f3d0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-white font-semibold group-hover:text-[#a7f3d0] transition-colors break-all">
              {c.contactEmail}
            </span>
          </a>
          <a href={`tel:${c.contactPhone.replace(/\s/g, '')}`} className="flex items-center gap-3.5 group">
            <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="#a7f3d0">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3a8.2 8.2 0 1 1 7.1 3.7z" />
              </svg>
            </span>
            <span className="text-white font-semibold group-hover:text-[#a7f3d0] transition-colors">
              {c.contactPhone}
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
