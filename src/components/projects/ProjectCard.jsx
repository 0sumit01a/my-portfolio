import { motion } from 'framer-motion';

export default function ProjectCard({ project, index }) {
  const Icon = project.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="panel group flex min-h-[420px] w-[min(82vw,34rem)] shrink-0 flex-col justify-between"
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/[0.12] text-white">
          <Icon size={20} />
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-2xl font-semibold uppercase text-white">{project.name}</h3>
          <p className="mt-1 text-sm uppercase tracking-[0.18em] text-white/[0.46]">{project.type}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>

      <p className="mt-6 max-w-xl text-base leading-8 text-white/[0.72]">{project.summary}</p>

      <div className="mt-8 flex flex-wrap gap-5 text-sm uppercase tracking-[0.18em] text-white/[0.78]">
        {project.links.map((link) => (
          <a key={link.label} href={link.href} className="transition hover:text-white/[0.55]">
            {link.label}
          </a>
        ))}
      </div>
    </motion.article>
  );
}
