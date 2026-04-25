export default function SkillRow({ title, items }) {
  return (
    <div className="grid gap-3 border-b border-white/[0.08] pb-5 last:border-b-0 last:pb-0 sm:grid-cols-[170px_minmax(0,1fr)]">
      <p className="text-lg font-semibold text-white">{title}:</p>
      <p className="text-base leading-8 text-white/[0.68]">{items.join(', ')}</p>
    </div>
  );
}
