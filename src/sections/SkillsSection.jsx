import { motion } from 'framer-motion';
import { skillGroups } from '../data/portfolioData';

export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-accent">Skills</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
            A focused stack for building responsive interfaces and dependable backend systems.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: groupIndex * 0.08 }}
              className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-lg shadow-neutral-950/5 transition hover:-translate-y-1 hover:shadow-glow dark:border-white/10 dark:bg-white/5 dark:shadow-black/20"
            >
              <div className="mb-6 text-xl font-semibold text-neutral-950 dark:text-white">{group.title}</div>
              <div className="space-y-4">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.name}
                      className="group rounded-2xl border border-black/5 bg-neutral-50 p-4 transition hover:border-accent/40 dark:border-white/10 dark:bg-neutral-900/80"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-white transition group-hover:bg-accent dark:bg-white dark:text-neutral-950 dark:group-hover:bg-accent dark:group-hover:text-white">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="font-medium text-neutral-950 dark:text-white">{item.name}</h3>
                          <p className="mt-1 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{item.detail}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

