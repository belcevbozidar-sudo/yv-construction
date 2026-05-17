import { Phone } from "lucide-react";
import { PHONE_LINK } from "@/lib/business.ts";

const PRICE_ITEMS = [
  {
    service: "Шпакловка",
    note: "Цена според състоянието на основата, брой ръце и нужната подготовка.",
  },
  {
    service: "Боядисване",
    note: "Офертата зависи от квадратурата, вида боя и нужните поправки преди нанасяне.",
  },
  {
    service: "Топлоизолация",
    note: "Цената се определя след оглед, избор на система и достъп до фасадата.",
  },
  {
    service: "Хидроизолация",
    note: "Изчислява се според площ, причина за влагата и подходящия материал.",
  },
];

const FACTORS = [
  "квадратура и височина",
  "състояние на стените или фасадата",
  "вид материали и финиш",
  "достъп, срок и обем на обекта",
];

export default function Prices() {
  return (
    <div>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-[#e67e22] uppercase tracking-wider">
              Цени
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mt-3 mb-5">
              Коректна оферта след оглед
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              За да бъде цената точна и честна, Иван Про изготвя оферта след
              оглед на обекта. Така се виждат реалното състояние, нужните
              материали и сроковете.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PRICE_ITEMS.map((item) => (
              <article
                key={item.service}
                className="bg-white/70 backdrop-blur-sm border border-border/50 rounded-2xl p-6"
              >
                <h2 className="text-xl font-bold text-foreground mb-2">
                  {item.service}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-5">
                Какво влияе на цената?
              </h2>
              <div className="flex flex-wrap gap-2">
                {FACTORS.map((factor) => (
                  <span
                    key={factor}
                    className="bg-white/80 border border-border/50 rounded-full px-4 py-2 text-sm font-medium text-foreground"
                  >
                    {factor}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-[#1a2744] text-white rounded-3xl p-8 space-y-4">
              <h2 className="text-2xl font-bold">Получете конкретна цена</h2>
              <p className="text-white/70 leading-relaxed">
                Обадете се, кажете каква услуга ви трябва и ще уговорим удобен
                час за оглед.
              </p>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-2 bg-[#e67e22] hover:bg-[#d35400] text-white font-bold px-7 py-3.5 rounded-full shadow-lg transition-all"
              >
                <Phone className="size-5" />
                Обади се за оферта
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
