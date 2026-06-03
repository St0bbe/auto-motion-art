import { useEffect, useState } from "react";
import { Wrench, Menu, X } from "lucide-react";
import { navigationLinks, siteConfig } from "@/config/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-elevated" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <span className="relative grid place-items-center h-10 w-10 rounded-xl bg-gradient-ember shadow-ember">
              <Wrench className="h-5 w-5 text-background" strokeWidth={2.5} />
            </span>
            <div className="leading-tight">
              <div className="font-display text-sm tracking-[0.2em] text-amber-glow">
                {siteConfig.shortName}
              </div>
              <div className="text-[10px] tracking-[0.3em] text-muted-foreground">
                {siteConfig.brandSuffix}
              </div>
            </div>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navigationLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-ember scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-ember px-5 py-2.5 text-sm font-semibold text-background shadow-ember hover:shadow-glow transition-shadow"
          >
            Agendar serviço
          </a>

          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center h-10 w-10 rounded-xl glass"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2">
            {navigationLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center gap-2 rounded-xl bg-gradient-ember px-5 py-3 text-sm font-semibold text-background"
            >
              Agendar serviço
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
