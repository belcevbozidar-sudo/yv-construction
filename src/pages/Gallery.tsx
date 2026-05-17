import { SERVICES } from "@/lib/business.ts";

const EXTRA_IMAGES = [
  {
    image:
      "https://images.pexels.com/photos/7218002/pexels-photo-7218002.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Интериорно боядисване",
  },
  {
    image:
      "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Подготовка и довършване",
  },
];

export default function Gallery() {
  const items = [
    ...SERVICES.map((service) => ({
      image: service.image,
      title: service.title,
    })),
    ...EXTRA_IMAGES,
  ];

  return (
    <div>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-[#e67e22] uppercase tracking-wider">
              Галерия
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mt-3 mb-5">
              Посока на работа и изпълнение
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Снимките показват типа услуги и финиш, към който се стремим: чисти
              повърхности, равномерно покритие и внимание към детайла.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <article
                key={`${item.title}-${item.image}`}
                className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[16/11] object-cover"
                />
                <div className="p-4">
                  <h2 className="font-bold text-foreground">{item.title}</h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
