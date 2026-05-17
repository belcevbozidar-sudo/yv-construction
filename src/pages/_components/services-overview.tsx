import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/business.ts";

export default function ServicesOverview() {
  return (
    <section id="uslugi" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-[#e67e22] uppercase tracking-wider">
            Услуги, които предлагаме
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Нашите услуги
          </h2>
          <p className="text-muted-foreground">
            Предлагаме шпакловка, боядисване, топлоизолация и хидроизолация с
            коректна оферта и качествени материали.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.title}
              to="/uslugi"
              className="group bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="size-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <service.icon className="size-5" />
                  </div>
                  <h3 className="font-bold text-foreground line-clamp-1">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {service.short}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Научи повече <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
