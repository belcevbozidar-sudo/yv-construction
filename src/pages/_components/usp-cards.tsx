import { Award, ShieldCheck, BadgeCheck, MapPin } from "lucide-react";

const USP_ITEMS = [
  {
    icon: Award,
    title: "Качествени материали",
    description:
      "Работим с доказани смеси, бои и изолационни системи за гладък и дълготраен резултат.",
  },
  {
    icon: ShieldCheck,
    title: "Коректна оферта",
    description:
      "Описваме ясно работата, материалите, сроковете и цената преди започване на обекта.",
  },
  {
    icon: BadgeCheck,
    title: "Гарантирано качество",
    description:
      "Внимание към детайла при подготовка, шпакловка, грундиране, боядисване и довършителни работи.",
  },
  {
    icon: MapPin,
    title: "Работа по договорка",
    description:
      "Поемаме малки и големи обекти според локацията, обема и нужните срокове.",
  },
];

export default function UspCards() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {USP_ITEMS.map((item) => (
            <div
              key={item.title}
              className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <item.icon className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
