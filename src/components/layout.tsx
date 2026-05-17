import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./header.tsx";
import Footer from "./footer.tsx";
import BackToTop from "./back-to-top.tsx";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
