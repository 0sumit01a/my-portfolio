import { navItems, profile } from '../../data/portfolioData';

export default function Header() {
  return (
    <header className="site-shell sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
        <a href="#home" className="text-base font-bold text-white">
          {profile.name}
        </a>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-white/[0.8] md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white/[0.55]">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
