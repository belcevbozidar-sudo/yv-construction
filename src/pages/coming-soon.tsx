import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const PHONE_LINK = "tel:+359876998859";

export default function ComingSoon() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="size-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
          <span className="text-3xl">🔧</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground">
          Тази страница се подготвя
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          Работим по нея! Междувременно, обадете ни се за повече информация или
          се върнете на началната страница.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={PHONE_LINK}
            className="inline-flex items-center gap-2 bg-[#e67e22] hover:bg-[#d35400] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all"
          >
            <Phone className="size-4" />
            Обади се
          </a>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-full shadow-lg transition-all"
          >
            Начална страница
          </Link>
        </div>
      </div>
    </div>
  );
}
