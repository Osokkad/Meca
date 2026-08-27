import { MapPin } from "lucide-react";
import { useScrollReveal } from "../../Hooks/useScrollReveal";

export default function LocationBanner() {
  const ref = useScrollReveal();

  return (
    <section id="ubicacion" className="py-24 bg-white">
      <div ref={ref} className="reveal container-custom text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-500 mb-8 animate-float">
          <MapPin className="text-black" size={40} />
        </div>

        <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-black uppercase tracking-tight leading-none mb-6">
          Ituzaingó
          <span className="block text-amber-500">Zona Sur</span>
        </h2>

        <div className="inline-block bg-black text-white px-8 py-4 rounded-xl text-lg sm:text-xl font-bold mt-4">
          ⚠️ No hacemos trabajos a domicilio
        </div>
      </div>
    </section>
  );
}
