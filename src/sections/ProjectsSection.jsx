import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading from '../components/shared/SectionHeading';
import ProjectCard from '../components/projects/ProjectCard';
import { projects } from '../data/portfolioData';

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const horizontalEnd = `-${(projects.length - 1) * 88}vw`;
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', horizontalEnd]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-frame relative"
      style={{ height: `${Math.max(projects.length, 2) * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Projects"
            title="Things I&apos;ve built while learning, experimenting, and solving real problems."
            className="text-center"
          />

          <motion.div style={{ x }} className="mt-16 flex gap-6 will-change-transform">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
