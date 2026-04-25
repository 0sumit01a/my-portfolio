import { motion } from 'framer-motion';

export default function SectionHeading({ kicker, title, className = '', align = 'center', children }) {
  const alignmentClass = align === 'left' ? '' : 'text-center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className={`${alignmentClass} ${className}`.trim()}
    >
      <p className={`section-kicker ${align === 'left' ? '!text-left' : ''}`.trim()}>{kicker}</p>
      {title ? <h2 className={`section-title ${align === 'left' ? '!mx-0 !text-left' : ''}`.trim()}>{title}</h2> : null}
      {children}
    </motion.div>
  );
}
