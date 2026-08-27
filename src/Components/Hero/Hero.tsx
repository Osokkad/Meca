import { MapPin, Wrench, Zap, Paintbrush, Gauge } from "lucide-react";

export default function Hero() {
  const services = [
    { icon: Wrench, label: "Mecánica General" },
    { icon: Paintbrush, label: "Chapa y Pintura" },
    { icon: Zap, label: "Electricidad Auto" },
    { icon: Gauge, label: "Diagnóstico" },
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden pt-16">
      {/* Background Image */}
      <img
        src="/fondo.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500 rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-600 rounded-full opacity-5 blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>

      {/* Content */}
      <div className="container-custom relative z-10 h-full flex items-center min-h-[calc(100vh-64px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            {/* Badge */}
            <div className="hero-animate hero-animate-1 inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2">
              <MapPin size={16} className="text-amber-400" />
              <span className="text-sm font-medium text-amber-400">Ituzaingó, Zona Sur</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2 hero-animate hero-animate-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Tu auto
                <span className="block shimmer-text">
                  en buenas manos
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="hero-animate hero-animate-3 text-lg sm:text-xl text-neutral-400 max-w-md">
              Servicio integral de mecánica, chapa, pintura y diagnóstico. Profesionalismo y confianza garantizados.
            </p>

            {/* Payment Info Badge */}
            <div className="hero-animate hero-animate-4 bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 inline-block animate-border">
              <p className="text-sm font-semibold text-amber-400">Sistema de pago flexible</p>
              <p className="text-xs text-neutral-400 mt-1">50% al inicio • 50% al finalizar</p>
            </div>

            {/* CTA Buttons */}
            <div className="hero-animate hero-animate-5 flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/5491122759966?text=Hola%2C%20quisiera%20solicitar%20un%20presupuesto"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-amber-500/30 pulse-glow"
              >
                Solicitar Presupuesto
              </a>
              <a
                href="#servicios"
                className="btn-press inline-flex items-center justify-center px-8 py-4 border-2 border-amber-500 text-amber-400 hover:bg-amber-500/10 font-bold rounded-lg transition-colors"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Right Side - Services Grid */}
          <div className="grid grid-cols-2 gap-4 mt-8 lg:mt-0">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="hero-animate card-hover bg-white/5 border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/50 transition-all group cursor-pointer"
                  style={{ animationDelay: `${0.8 + idx * 0.15}s` }}
                >
                  <div className="bg-amber-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors icon-spin">
                    <Icon className="text-amber-400" size={24} />
                  </div>
                  <h3 className="text-white font-semibold text-sm leading-snug">{service.label}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-40"></div>
    </div>
  );
}
