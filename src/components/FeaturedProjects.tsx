import { ScrollReveal } from './ScrollReveal';
import { SectionDivider } from './SectionDivider';
import { ProjectCard } from './ProjectCard';
import { portfolioData } from '../data/portfolio-data';

export function FeaturedProjects() {
  return (
    <section className="px-6 py-16 md:px-10">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Featured Projects</h2>
          <SectionDivider width={60} />
        </div>
      </ScrollReveal>

      <div className="space-y-16">
        {portfolioData.projects.map((project, index) => (
          <div key={project.id}>
            <ProjectCard
              project={project}
              layout={index % 2 === 0 ? 'left' : 'right'}
              index={index}
            />
            {index < portfolioData.projects.length - 1 && (
              <div className="horizontal-rule mt-16" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
