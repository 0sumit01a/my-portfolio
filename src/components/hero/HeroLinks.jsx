import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

export default function HeroLinks({ socialLinks, resumeHref, resumeLabel }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-10 flex flex-wrap items-center justify-center gap-4"
    >
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <a key={item.label} href={item.href} className="social-link" aria-label={item.label}>
            <Icon size={16} />
          </a>
        );
      })}
      <span className="h-6 w-px bg-white/[0.35]" />
      <a href={resumeHref} className="inline-flex items-center gap-2 text-lg text-white transition hover:text-white/[0.55]">
        {resumeLabel}
        <ArrowDownRight size={18} />
      </a>
    </motion.div>
  );
}
