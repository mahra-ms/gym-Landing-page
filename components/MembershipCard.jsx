import { Button } from "@/components/ui/button";
const Membership = [
  {
    name: "BASIC MEMBERSHIP",
    price: "₹999",
    blurb:
      "Everything you need to train consistently with full gym access and essential facilities.",
    features: [
      "Full gym access",
      "Strength & cardio equipment",
      "Locker & changing room access",
      "Free fitness assessment",
      "Flexible monthly billing",
    ],
  },
  {
    name: "PREMIUM MEMBERSHIP",
    price: "₹1,499",
    blurb:
      "For serious members who want more from every session with coaching, group training, and personalized support.",
    features: [
      "Unlimited gym access",
      "All strength & cardio equipment",
      "Personalized workout plan",
      "Unlimited group training",
      "Locker & changing room access",
    ],
  },
  {
    name: "ELITE MEMBERSHIP",
    price: "₹2,499",
    blurb:
      "The complete fitness experience with personal coaching, nutrition guidance, performance tracking, and premium benefits.",
    features: [
      "24/7 gym access",
      "Unlimited group training",
      "4 personal training sessions/month",
      "Customized workout programming",
      "Nutrition guidance",
    ],
  },
];
function MembershipCard() {
  return (
    <section
        id="membership"
        className="mx-auto max-w-6xl px-6 py-24 border-b border-iron-line"
      >
        <div>
          <div className="mb-14">
            <span className="font-mono text-[12px] uppercase tracking-widest text-iron-steel">
              Membership
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-iron-paper mt-3">
              PLANS
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {Membership.map((tier) => (
            <div key={tier.name}>
              <div
                className={`p-8 border flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 ${
                  tier.featured
                    ? "border-iron-hazard bg-iron-surface shadow-[0_0_0_1px_rgba(255,90,31,0.15)]"
                    : "border-iron-line bg-iron-bg hover:border-iron-steel"
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div>
                    <div className="font-display text-2xl tracking-wide text-iron-paper">
                      {tier.name}
                    </div>
                    {tier.featured && (
                      <div className="font-mono text-[11px] text-iron-hazard uppercase tracking-wide">
                        Most loaded
                      </div>
                    )}
                  </div>
                </div>
                <div className="font-mono text-4xl text-iron-paper mb-1">
                  {tier.price}
                  <span className="text-sm text-iron-steel">/mo</span>
                </div>
                <p className="text-iron-steel text-sm mt-3 mb-6 leading-relaxed">
                  {tier.blurb}
                </p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-2.5 text-[13px] text-iron-paper/90"
                    >
                      <span className="text-iron-hazard mt-0.5">＋</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.featured ? "default" : "outline"}
                  className="w-full cursor-pointer hover: text-amber-50 bg-amber-800"
                >
                  Choose {tier.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default MembershipCard
