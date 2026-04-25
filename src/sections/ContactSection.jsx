import SectionHeading from '../components/shared/SectionHeading';
import { contact, socialLinks } from '../data/portfolioData';

export default function ContactSection() {
  return (
    <section id="contact" className="section-frame px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="panel text-center">
          <SectionHeading
            kicker="Contact"
            title="Let&apos;s build something thoughtful and useful."
            className="mx-auto max-w-3xl"
          />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/[0.68]">{contact.message}</p>

          <a
            href={`mailto:${contact.email}`}
            className="mt-8 inline-flex rounded-full border border-white/[0.25] px-6 py-3 text-sm uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
          >
            {contact.email}
          </a>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm uppercase tracking-[0.18em] text-white/[0.72]">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white/[0.55]">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
