import { motion } from 'framer-motion';
import SectionHeading from '../components/shared/SectionHeading';
import { buildingNow, credentials } from '../data/portfolioData';

export default function JourneySection() {
  return (
    <section id="experience" className="section-frame px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading kicker="Experience" title={buildingNow.title} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="panel mt-14"
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_260px]">
            <div>
              <h3 className="font-display text-3xl font-semibold uppercase text-white">{buildingNow.featured.name}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/[0.5]">
                {buildingNow.featured.company} | {buildingNow.featured.period} | {buildingNow.featured.location}
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-9 text-white/[0.72]">{buildingNow.featured.description}</p>
              <ul className="mt-8 space-y-4 text-base leading-8 text-white/[0.8]">
                {buildingNow.featured.bullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 rounded-full bg-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-white/[0.46]">Certification</p>
              <div className="mt-6 space-y-3">
                {buildingNow.learning.map((item) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/[0.72]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {credentials.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45 }}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.12] text-white">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/[0.45]">{item.label}</p>
                    <h4 className="mt-2 text-base font-semibold text-white">{item.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-white/[0.62]">{item.meta}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
