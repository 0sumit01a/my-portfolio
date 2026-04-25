import { motion } from 'framer-motion';
import SkillRow from '../components/about/SkillRow';
import SectionHeading from '../components/shared/SectionHeading';
import { about, skillGroups } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="section-frame px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="About" title="" className="mx-auto max-w-5xl text-center">
          <p className="mx-auto max-w-5xl text-xl font-medium leading-10 text-white sm:text-2xl">{about.lead}</p>
          <p className="mt-8 text-lg leading-9 text-white/[0.64]">{about.secondary}</p>
        </SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="panel mt-16"
        >
          <p className="text-sm uppercase tracking-[0.24em] text-white">Skill sets I bring along</p>
          <div className="mt-8 space-y-5">
            {skillGroups.map((group) => (
              <SkillRow key={group.title} title={group.title} items={group.items} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
