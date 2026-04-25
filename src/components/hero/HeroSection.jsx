import HeroAside from './HeroAside';
import HeroIntro from './HeroIntro';

export default function HeroSection({ profile, highlights, socialLinks }) {
  return (
    <section id="home" className="px-5 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[180px_minmax(0,1fr)]">
        <HeroAside availability={profile.availability} highlights={highlights} />
        <HeroIntro profile={profile} socialLinks={socialLinks} />
      </div>
    </section>
  );
}
