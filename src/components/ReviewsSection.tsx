import { ArrowUpRight, Instagram, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SALON } from "@/lib/salon";

export function ReviewsSection() {
  return (
    <section id="avaliacoes" aria-labelledby="nanna-reviews-title" className="nanna-reviews">
      <div className="nanna-reviews-inner">
        <p className="nanna-reviews-eyebrow">Avaliações</p>
        <h2 id="nanna-reviews-title" className="nanna-reviews-title">O que dizem <em>as clientes.</em></h2>
        <div className="nanna-reviews-prompt">
          <Quote className="nanna-reviews-quote" aria-hidden="true" />
          <div className="nanna-reviews-copy">
            <p className="nanna-reviews-prompt-title">O próximo depoimento pode ser o seu.</p>
            <p className="nanna-reviews-prompt-copy">Cada beleza tem uma história. Queremos conhecer a sua.</p>
          </div>
          <Button asChild variant="reviewSocial" size="service">
            <a href={SALON.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram aria-hidden="true" />
              Conheça a Nanna no Instagram
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}