import { MapPin, Clock, MessageCircle, Instagram, Wrench } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative bg-carbon border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-ember shadow-ember">
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
          </div>

          <p className="mt-5 max-w-sm text-sm text-muted-foreground">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h4 className="font-display text-xs uppercase tracking-[0.25em] text-amber-glow">
            Contato
          </h4>

          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <span>
                {siteConfig.address}
                <br />
                {siteConfig.cityState}
              </span>
            </li>

            <li className="flex items-start gap-2">
              <Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <span>
                {siteConfig.openingHours}
                <br />
                {siteConfig.saturdayHours}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs uppercase tracking-[0.25em] text-amber-glow">
            Redes
          </h4>

          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </li>

            <li>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" /> {siteConfig.instagramLabel}
              </a>
            </li>

            <li>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <MapPin className="h-4 w-4" /> Google Maps
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </span>
          <span>Projeto otimizado para performance e responsividade.</span>
        </div>
      </div>
    </footer>
  );
}
