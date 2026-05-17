import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const GALLERY_ITEMS = [
  {
    image:
      "https://images.pexels.com/photos/7218002/pexels-photo-7218002.jpeg?auto=compress&cs=tinysrgb&w=1200",
    label: "Боядисване на интериорна стена",
  },
  {
    image:
      "https://images.pexels.com/photos/5493665/pexels-photo-5493665.jpeg?auto=compress&cs=tinysrgb&w=1200",
    label: "Шпакловка и подготовка на повърхности",
  },
];

export default function GalleryPreview() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-[#e67e22] uppercase tracking-wider">
            Нашата работа
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Галерия
          </h2>
          <p className="text-muted-foreground">
            Вижте посоката на работа: чисти повърхности, равномерно покритие и
            внимание към всеки детайл.
          </p>
        </div>

        {/* Gallery cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.label} className="space-y-3">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full aspect-[16/10] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-sm font-medium text-muted-foreground text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/galeriya"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3.5 rounded-full shadow-lg transition-all cursor-pointer"
          >
            Виж пълната галерия <ArrowRight className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
