import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultProviders } from "./components/providers/default.tsx";
import AuthCallback from "./pages/auth/Callback.tsx";
import Layout from "./components/layout.tsx";
import Index from "./pages/Index.tsx";
import Services from "./pages/Services.tsx";
import Prices from "./pages/Prices.tsx";
import Areas from "./pages/Areas.tsx";
import Gallery from "./pages/Gallery.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

export default function App() {
  return (
    <DefaultProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/callback" element={<AuthCallback />} />

          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/uslugi" element={<Services />} />
            <Route path="/tseni" element={<Prices />} />
            <Route path="/kade-rabotim" element={<Areas />} />
            <Route path="/galeriya" element={<Gallery />} />
            <Route path="/za-nas" element={<About />} />
            <Route path="/kontakti" element={<Contact />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DefaultProviders>
  );
}
