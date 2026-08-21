const PROGRAMS = [
  {
    tag: "01",
    title: "Strength & Powerlifting",
    copy: "Squat, bench, deadlift — programmed in blocks, tested on a platform, not a guess.",
  },
  {
    tag: "02",
    title: "Athletic Performance",
    copy: "Sprint, jump, lift, repeat — training built to make you faster, stronger, and more explosive.",
  },
  {
    tag: "03",
    title: "Mobility & Movement",
    copy: "Move better, lift cleaner, and build the range of motion needed to train hard without moving poorly.",
  },

  {
    tag: "04",
    title: "Fat Loss",
    copy: "Structured training, smart conditioning, and sustainable progression — no crash diets, no random workouts.",
  },
];

function ProgranCards() {
  return (
    <section
      id="programs"
      className="mx-auto max-w-6xl px-6 py-24 border-b border-iron-line"
    >
      <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
        <h2 className="font-display text-5xl md:text-6xl text-iron-paper">
          THE PROGRAMS
        </h2>

        <div className="grid md:grid-cols-2 gap-px bg-iron-line border border-iron-line">
          {PROGRAMS.map((p, i) => (
            <div key={p.tag}>
              <div className="bg-iron-bg p-8 hover:bg-iron-surface transition-colors group h-full">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-mono text-iron-hazard text-sm">
                    {p.tag}
                  </span>
                  <span className="h-px w-16 bg-iron-line group-hover:bg-iron-hazard transition-colors" />
                </div>
                <h3 className="font-display text-3xl text-iron-paper tracking-wide mb-3">
                  {p.title}
                </h3>
                <p className="text-iron-steel text-[15px] leading-relaxed">
                  {p.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgranCards;
