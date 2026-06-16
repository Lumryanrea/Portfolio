import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, TrendingUp, Users, Globe, ExternalLink, ArrowRight, Handshake } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { SectionDivider } from './SectionDivider';
import { LumryLockup } from './LumryBrand';
import { portfolioData } from '../data/portfolio-data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from './ui/carousel';

// Animated handshake illustration for "Projects for Contract"
function ContractIllustration() {
  return (
    <div className="w-full h-full bg-[#2E2E3D] flex items-center justify-center">
      <motion.div
        animate={{ y: [0, -8, 0, -8, 0], rotate: [0, -3, 0, -3, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1.2, ease: 'easeInOut' }}
      >
        <Handshake className="w-24 h-24 text-[#5DADE2]" strokeWidth={1.5} />
      </motion.div>
    </div>
  );
}

// Upwork-branded illustration for "Freelance"
function FreelanceIllustration() {
  return (
    <svg viewBox="0 0 400 280" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="280" rx="16" fill="#14A800" />
      {/* Upwork "up" logomark: the looped "u" */}
      <g transform="translate(200,118)">
        <circle cx="34" cy="0" r="22" fill="none" stroke="#ffffff" strokeWidth="13" />
        <path
          d="M-50 -28 v30 a26 26 0 0 0 52 0 v-30"
          fill="none"
          stroke="#ffffff"
          strokeWidth="13"
          strokeLinecap="round"
        />
      </g>
      <text x="200" y="200" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fontSize="40" fill="#ffffff" letterSpacing="0.5">Upwork</text>
    </svg>
  );
}

interface Service {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  image?: string;
  illustration?: React.ReactNode;
  brand?: boolean;
  route?: string;
  link?: { href: string; label: string };
}

export function Services() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    setSnaps(api.scrollSnapList());
    onSelect();
    api.on('select', onSelect);
    api.on('reInit', () => {
      setSnaps(api.scrollSnapList());
      onSelect();
    });
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  const services: Service[] = [
    {
      id: 'teaching',
      title: 'TEACHING',
      icon: GraduationCap,
      description:
        "I teach data analytics and business intelligence in a way that sticks, from SQL and Excel to Power BI and data storytelling. I've trained beginners and upskilled professionals, helping them become confident, hands-on practitioners.",
      image: '/images/Tutor1.jpeg',
      route: '/teaching',
    },
    {
      id: 'consulting',
      title: 'BUSINESS CONSULTING',
      icon: TrendingUp,
      description:
        "Through Lumry Analytics, I help businesses turn raw data into real growth. I track sales, expenses, and performance clearly so owners can make confident, data-driven decisions.",
      brand: true,
      route: '/consulting',
    },
    {
      id: 'contract',
      title: 'PROJECTS FOR CONTRACT',
      icon: Users,
      description:
        "I'm open to joining teams on a contract basis. I have experience working with Agile methodologies, collaborate well across roles, and integrate quickly into existing workflows, bringing structure, clear communication, and dependable execution.",
      illustration: <ContractIllustration />,
    },
    {
      id: 'freelance',
      title: 'FREELANCE',
      icon: Globe,
      description:
        "Need flexible, on-demand analytics support? I take on freelance work for dashboards, reporting, data cleaning, and one-off analysis. Hire me directly through my Upwork profile.",
      illustration: <FreelanceIllustration />,
      link: {
        href: portfolioData.socialLinks.upwork || 'https://www.upwork.com/',
        label: 'VIEW UPWORK',
      },
    },
  ];

  const renderCardInner = (service: Service) => {
    const Icon = service.icon;
    return (
      <>
        {/* Visual on top */}
        {service.brand ? (
          <div className="relative aspect-video overflow-hidden bg-[#f4f8f6] flex items-center justify-center p-6">
            <div
              className="absolute -top-12 -right-10 w-44 h-44 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.18), rgba(5,150,105,0) 70%)' }}
            />
            <LumryLockup markSize={48} titleClass="text-xl" />
          </div>
        ) : service.image ? (
          <div className="relative aspect-video overflow-hidden bg-gray-800">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover object-top group-hover:brightness-110 transition-all duration-300"
            />
          </div>
        ) : (
          <div className="aspect-video overflow-hidden">{service.illustration}</div>
        )}

        {/* Write-up under */}
        <div className="flex flex-col flex-1 p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-9 h-9 rounded-full bg-[#5DADE2]/15 flex items-center justify-center flex-shrink-0">
              <Icon className="w-4 h-4 text-[#5DADE2]" />
            </span>
            <h3 className="project-title text-sm">{service.title}</h3>
          </div>
          <p className="body-text text-sm mb-6">{service.description}</p>
          <div className="mt-auto">
            {service.route && (
              <span className="inline-flex items-center gap-1.5 text-[#5DADE2] text-xs font-medium tracking-wider uppercase group-hover:gap-2.5 transition-all">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </span>
            )}
            {service.link && (
              <a
                href={service.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-1.5 text-xs px-4 py-2"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {service.link.label}
              </a>
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <section className="px-6 py-16 md:px-10">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">My Services</h2>
          <SectionDivider width={60} />
          <p className="body-text max-w-xl mx-auto mt-4">
            How I help individuals and businesses get more out of their data.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="max-w-6xl mx-auto">
          <Carousel opts={{ align: 'start', loop: false }} setApi={setApi} className="w-full">
            <CarouselContent className="-ml-4">
              {services.map((service) => {
                const cardClass =
                  'h-full flex flex-col rounded-2xl overflow-hidden bg-[#3D3D4E]/60 backdrop-blur-sm shadow-lg group';
                return (
                  <CarouselItem key={service.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    {service.route ? (
                      <Link to={service.route} className={`${cardClass} cursor-pointer`}>
                        {renderCardInner(service)}
                      </Link>
                    ) : (
                      <div className={cardClass}>{renderCardInner(service)}</div>
                    )}
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex left-0 bg-[#3D3D4E]/80 border-white/30 text-white hover:bg-[#3D3D4E]" />
            <CarouselNext className="hidden md:flex right-0 bg-[#3D3D4E]/80 border-white/30 text-white hover:bg-[#3D3D4E]" />
          </Carousel>

          {/* Dot indicators */}
          {snaps.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {snaps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    selected === i ? 'w-6 bg-[#5DADE2]' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
          <p className="text-center text-white/40 text-xs mt-3 md:hidden">Swipe to see more</p>
        </div>
      </ScrollReveal>
    </section>
  );
}
