import { Search, FileText, Hammer, CheckCircle2, Phone } from "lucide-react";
import { PHONE_LINK } from "@/lib/business.ts";

const STEPS = [
  {
    icon: Search,
    number: "01",
    title: "Безплатен оглед",
    description:
      "Идваме на място, оглеждаме стените, таваните, фасадата или проблемните зони с влага.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Ясна оферта",
    description:
      "Изготвяме конкретна цена, срокове и списък с нужните материали преди началото на работата.",
  },
  {
    icon: Hammer,
    number: "03",
    title: "Прецизно изпълнение",
    description:
      "Подготвяме основата, работим чисто и спазваме технологията за всяка услуга.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Предаване на обекта",
    description:
      "Проверяваме детайлите заедно с клиента и оставяме готова, завършена повърхност.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-[#e67e22] uppercase tracking-wider">
            Процес
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Как работим
          </h2>
          <p className="text-muted-foreground">
            Нашият процес е прост, прозрачен и гарантира резултат от най-високо
            качество.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <div key={step.title} className="relative text-center">
              {/* Connection line (desktop) */}
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}

              <div className="relative inline-flex items-center justify-center size-20 rounded-2xl bg-white border-2 border-primary/20 mb-5 shadow-md">
                <step.icon className="size-8 text-primary" />
                <span className="absolute -top-2 -right-2 size-7 bg-[#e67e22] text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {step.number}
                </span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={PHONE_LINK}
            className="inline-flex items-center gap-2 bg-[#e67e22] hover:bg-[#d35400] text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-[#e67e22]/30 hover:shadow-2xl transition-all text-lg cursor-pointer"
          >
            <Phone className="size-5" />
            Заяви безплатен оглед
          </a>
        </div>
      </div>
    </section>
  );
}
