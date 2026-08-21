"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "#programs", label: "Programs" },
  { href: "#membership", label: "Membership" },
  { href: "#Community", label: "Community" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 bg-iron-hazard" />
          <span className="font-display text-2xl tracking-wide text-iron-paper">
            TitanForge.
          </span>
        </a>

        <nav className="hidden items-center gap-8 font-mono text-[12px] uppercase tracking-wider text-iron-steel md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative transition-colors hover:text-iron-paper after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-iron-hazard after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          className="bg-iron-hazard hidden md:inline-flex shadow-[0_0_24px_rgba(255,90,31,0.35)] hover:shadow-[0_0_32px_rgba(255,90,31,0.55)] transition-shadow"
          size="lg"
        >
          Book a Session
        </Button>

        <button
          type="button"
          className="text-iron-paper md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-iron-line bg-iron-bg px-6 py-5 font-mono text-[12px] uppercase tracking-wider text-iron-steel md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-iron-paper"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <Button
            size="sm"
            className="mt-2 w-fit"
            onClick={() => setOpen(false)}
          >
            Book a Session
          </Button>
        </div>
      )}
    </header>
  );
}
