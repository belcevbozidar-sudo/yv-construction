import {
  AlertTriangle,
  Droplets,
  PaintRoller,
  ThermometerSun,
  Layers,
  BrickWall,
} from "lucide-react";

const WARNING_SIGNS = [
  { icon: Droplets, text: "Петна и влага по стени или тавани" },
  { icon: PaintRoller, text: "Олющена боя и неравни повърхности" },
  { icon: AlertTriangle, text: "Пукнатини след стар ремонт" },
  { icon: ThermometerSun, text: "Студени външни стени и конденз" },
  { icon: Layers, text: "Стара или компрометирана изолация" },
  { icon: BrickWall, text: "Ронеща се мазилка по фасадата" },
];

export default function WhyRepairSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <div>
              <span className="text-sm font-semibold text-[#e67e22] uppercase tracking-wider">
                Важно
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
                Защо довършителните ремонти не трябва да се отлагат?
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Напуканата шпакловка, влагата и слабата изолация бързо развалят
              вида и комфорта в помещението. Навременната обработка на основата,
              правилният грунд и качествените материали спестяват повторни
              ремонти и излишни разходи.
            </p>
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Признаци, че е време за ремонт:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {WARNING_SIGNS.map((sign) => (
                  <div
                    key={sign.text}
                    className="flex items-center gap-3 bg-destructive/5 rounded-xl px-4 py-3"
                  >
                    <sign.icon className="size-5 text-destructive shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      {sign.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/7218002/pexels-photo-7218002.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Боядисване и довършителни работи"
              className="w-full rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-[#e67e22] text-white rounded-2xl px-5 py-3 shadow-lg text-sm font-semibold">
              Не чакайте – обадете се навреме!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
