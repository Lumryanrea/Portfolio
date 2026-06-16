import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ScrollReveal } from './ScrollReveal';
import { SectionDivider } from './SectionDivider';
import { portfolioData } from '../data/portfolio-data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel';

export function FeaturedProjects() {
  return (
    <section className="px-6 py-16 md:px-10">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Featured Projects</h2>
          <SectionDivider width={60} />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{ align: 'start', loop: false }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {portfolioData.projects.map((project, index) => (
                <CarouselItem
                  key={project.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    className="h-full flex flex-col rounded-2xl overflow-hidden bg-[#3D3D4E]/60 backdrop-blur-sm shadow-lg"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="overflow-hidden bg-gray-800 aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"%3E%3Crect width="400" height="250" fill="%23333"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%23666"%3E${project.title}%3C/text%3E%3C/svg%3E`;
                        }}
                      />
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <h3 className="project-title mb-3">{project.title}</h3>
                      <p className="body-text text-sm mb-6 line-clamp-4">{project.description}</p>
                      <div className="mt-auto">
                        <Link
                          to={`/project/${project.id}`}
                          className="btn-outline inline-block text-xs px-5 py-2"
                        >
                          MORE
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex left-0 bg-[#3D3D4E]/80 border-white/30 text-white hover:bg-[#3D3D4E]" />
            <CarouselNext className="hidden md:flex right-0 bg-[#3D3D4E]/80 border-white/30 text-white hover:bg-[#3D3D4E]" />
          </Carousel>
        </div>
      </ScrollReveal>
    </section>
  );
}
