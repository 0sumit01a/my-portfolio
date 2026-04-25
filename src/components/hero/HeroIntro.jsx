import { motion } from 'framer-motion';
import HeroLinks from './HeroLinks';

export default function HeroIntro({ profile, socialLinks }) {
  return (
    <div className="flex min-h-[72vh] flex-col items-center justify-center text-center">
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="inline-flex rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 text-sm font-medium text-white"
      >
        {profile.location}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.12 }}
        className="mt-8 max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl"
      >
        Hey, I&apos;m {profile.name}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.18 }}
        className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.72] sm:text-xl"
      >
        {profile.tagline}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.24 }}
        className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-medium text-white/[0.62]"
      >
        <span className="rounded-lg border border-white/[0.1] px-3 py-2">{profile.education}</span>
        <a className="rounded-lg border border-white/[0.1] px-3 py-2 transition hover:text-white" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </motion.div>

      <HeroLinks socialLinks={socialLinks} resumeHref={profile.resumeHref} resumeLabel={profile.resumeLabel} />
    </div>
  );
}
