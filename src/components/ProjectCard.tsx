import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Project } from '../data/portfolio-data';

interface ProjectCardProps {
  project: Project;
  layout: 'left' | 'right';
  index: number;
}

export function ProjectCard({ project, layout, index }: ProjectCardProps) {
  const isLeft = layout === 'left';
  
  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: isLeft ? -40 : 40 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut" as const
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: isLeft ? 40 : -40 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1 + 0.15,
        ease: "easeOut" as const
      }
    }
  };

  const ImageContent = (
    <motion.div
      variants={imageVariants}
      className="w-full md:w-1/2"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="rounded-xl overflow-hidden shadow-lg bg-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"%3E%3Crect width="400" height="250" fill="%23333"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%23666"%3E${project.title}%3C/text%3E%3C/svg%3E`;
          }}
        />
      </div>
    </motion.div>
  );

  const TextContent = (
    <motion.div
      variants={textVariants}
      className="w-full md:w-1/2 flex flex-col"
    >
      <h3 className="project-title mb-4">{project.title}</h3>
      <p className="body-text mb-6">{project.description}</p>
      <div>
        <Link
          to={`/project/${project.id}`}
          className="btn-outline inline-block"
        >
          MORE
        </Link>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {ImageContent}
      {TextContent}
    </motion.div>
  );
}
