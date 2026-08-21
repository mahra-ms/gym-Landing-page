export default function Footer() {
  return (
   <footer className="mx-auto max-w-6xl px-6 py-12 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 bg-iron-hazard" />
          <span className="font-display text-xl tracking-wide text-iron-paper">
            TitanForge.
          </span>
        </div>
        <p className="font-mono text-[11px] text-iron-steel uppercase tracking-wide">
           Open 5AM–11PM Daily
        </p>
        <p className="font-mono text-[11px] text-iron-line uppercase tracking-wide">
          © {new Date().getFullYear()} TitanForge Strength Co.
        </p>
      </footer>
  );
}