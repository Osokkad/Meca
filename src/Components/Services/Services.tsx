import { Wrench, Paintbrush, Zap, Gauge } from "lucide-react";
import { useScrollReveal } from "../../Hooks/useScrollReveal";

export default function Services() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal(0.05);

  const services = [
    {
      id: 1,
      title: "Mecánica General",
      icon: Wrench,
      description:
        "Mantenimiento preventivo, reparación de motor, transmisión, frenos y suspensión. Diagnóstico completo de sistemas mecánicos.",
      features: ["Revisión de motor", "Sistema de frenos", "Suspensión y dirección", "Cambio de aceite y filtros"],
      color: "from-amber-600 to-amber-700",
    },
    {
      id: 2,
      title: "Chapa y Pintura",
      icon: Paintbrush,
      description:
        "Reparación de daños en carrocería, enderezado de piezas y pintura profesional con acabado de concesionario.",
      features: ["Reparación de abolladuras", "Enderezado de chapa", "Pintura de calidad", "Acabado profesional"],
      color: "from-neutral-700 to-neutral-800",
    },
    {
      id: 3,
      title: "Electricidad Automotriz",
      icon: Zap,
      description: "Reparación de sistema eléctrico, batería, alternador, starter y sistemas de iluminación avanzados.",
      features: ["Sistema de carga", "Iluminación LED", "Sistemas electrónicos", "Aire acondicionado"],
      color: "from-amber-700 to-amber-800",
    },
    {
      id: 4,
      title: "Diagnóstico con Escáner",
      icon: Gauge,
      description:
        "Diagnóstico computerizado de la computadora del auto. Lectura de códigos de error y análisis completo de sistemas.",
      features: ["Lectura de códigos", "Análisis de sensores", "Verificación de emisiones", "Reporte detallado"],
      color: "from-neutral-600 to-neutral-700",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">Servicios</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-black">Todo lo que tu auto necesita</h2>
          <p className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto">
            Ofrecemos servicios integrales de mecánica, chapa, pintura y diagnóstico con la máxima calidad y
            profesionalismo.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="reveal grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="card-hover group bg-neutral-50 rounded-xl p-8 border border-neutral-200 hover:border-amber-500/50 transition-all hover:shadow-lg"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                {/* Icon */}
                <div
                  className={`bg-gradient-to-br ${service.color} w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform icon-spin`}
                >
                  <Icon className="text-white" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-black mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-neutral-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold text-neutral-700 uppercase tracking-wide">Incluye:</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-neutral-600 text-sm">
                        <span className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/5491122759966?text=Hola%2C%20quisiera%20solicitar%20un%20presupuesto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press inline-block mt-4 text-amber-700 hover:text-amber-800 font-semibold text-sm transition-all"
                >
                  Solicitar presupuesto →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
