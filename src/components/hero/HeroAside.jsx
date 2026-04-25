import { motion } from 'framer-motion';

export default function HeroAside({ availability, highlights }) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="hidden lg:block"
    >
      <div className="sticky top-28 space-y-8">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/[0.45]">Status</p>
          <p className="mt-3 max-w-[12rem] text-sm leading-6 text-white/[0.72]">{availability}</p>
        </div>
        <div className="space-y-5 border-l border-white/10 pl-5">
          {highlights.map((item) => (
            <div key={item.label}>
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/[0.38]">{item.label}</p>
              <p className="mt-2 text-sm leading-6 text-white/[0.72]">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}
