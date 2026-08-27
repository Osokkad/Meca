import { MapPin, Phone, Mail, Clock, Globe, Heart, MessageCircle, ArrowRight } from "lucide-react";
import { useScrollReveal } from "../../Hooks/useScrollReveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const ctaRef = useScrollReveal();
  const contentRef = useScrollReveal();

  return (
    <footer className="bg-black text-neutral-400">
      {/* CTA Section */}
      <div ref={ctaRef} className="reveal bg-amber-500">
        <div className="container-custom py-12 text-center">
          <h3 className="text-3xl font-bold text-black mb-4">¿Necesitas un presupuesto?</h3>
          <p className="text-amber-900 mb-6 max-w-2xl mx-auto">
            Contactanos hoy y obtén un presupuesto sin cargo para tu auto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5491122759966?text=Hola%2C%20quisiera%20solicitar%20un%20presupuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center justify-center gap-2 bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Solicitar Presupuesto
              <ArrowRight size={20} />
            </a>
            <a
              href="https://wa.me/5491122759966?text=Hola%2C%20quisiera%20solicitar%20un%20presupuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center justify-center gap-2 border-2 border-black text-black font-bold py-3 px-8 rounded-lg hover:bg-black hover:text-amber-500 transition-colors"
            >
              <MessageCircle size={20} />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div ref={contentRef} className="reveal container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Sobre Nosotros */}
          <div className="card-hover p-2 rounded-xl">
            <h4 className="text-white font-bold text-lg mb-6">Boxes Competicion</h4>
            <p className="text-neutral-500 text-sm mb-4 leading-relaxed">
              Taller mecánico de confianza con servicios integrales: mecánica general, chapa, pintura y diagnóstico
              computerizado.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-amber-400 transition-colors icon-spin"
              >
                <Globe size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-amber-400 transition-colors icon-spin"
              >
                <Heart size={20} />
              </a>
              <a
                href="https://wa.me/5491122759966"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-amber-400 transition-colors icon-spin"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Links Rápidos */}
          <div className="card-hover p-2 rounded-xl">
            <h4 className="text-white font-bold text-lg mb-6">Links Rápidos</h4>
            <nav className="space-y-3">
              <a
                href="#servicios"
                className="text-neutral-500 hover:text-amber-400 transition-colors text-sm flex items-center gap-2"
              >
                <span>→</span> Servicios
              </a>
              <a
                href="#presupuesto"
                className="text-neutral-500 hover:text-amber-400 transition-colors text-sm flex items-center gap-2"
              >
                <span>→</span> Métodos de Pago
              </a>
              <a
                href="#galeria"
                className="text-neutral-500 hover:text-amber-400 transition-colors text-sm flex items-center gap-2"
              >
                <span>→</span> Galería
              </a>
              <a
                href="#ubicacion"
                className="text-neutral-500 hover:text-amber-400 transition-colors text-sm flex items-center gap-2"
              >
                <span>→</span> Ubicación
              </a>
            </nav>
          </div>

          {/* Column 3: Horarios */}
          <div className="card-hover p-2 rounded-xl">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <Clock size={20} /> Horarios
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-neutral-500">Lunes a Viernes</p>
                <p className="text-white font-semibold">8:00 - 18:00</p>
              </div>
              <div>
                <p className="text-neutral-500">Sábados</p>
                <p className="text-white font-semibold">8:00 - 13:00</p>
              </div>
              <div>
                <p className="text-neutral-500">Domingos</p>
                <p className="text-amber-500 font-semibold">Cerrado</p>
              </div>
            </div>
          </div>

          {/* Column 4: Contacto */}
          <div className="card-hover p-2 rounded-xl">
            <h4 className="text-white font-bold text-lg mb-6">Contacto</h4>
            <div className="space-y-4">
              <a
                href="https://maps.google.com/?q=Ituzaingó+Zona+Sur+Buenos+Aires"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 text-neutral-500 hover:text-amber-400 transition-colors text-sm"
              >
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>
                  Ituzaingó, Zona Sur
                  <br />
                  Buenos Aires
                </span>
              </a>

              <a
                href="tel:+5491122759966"
                className="flex gap-3 text-neutral-500 hover:text-amber-400 transition-colors text-sm"
              >
                <Phone size={18} className="flex-shrink-0 mt-1" />
                <span>+54 9 11 2275-9966</span>
              </a>

              <a
                href="mailto:info@tallermec.com"
                className="flex gap-3 text-neutral-500 hover:text-amber-400 transition-colors text-sm"
              >
                <Mail size={18} className="flex-shrink-0 mt-1" />
                <span>info@tallermec.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-600 text-sm mb-4 md:mb-0">
            © {currentYear} Boxes Competicion. Todos los derechos reservados.
          </div>

          <div className="flex gap-6 text-neutral-600 text-sm">
            <a href="#" className="hover:text-amber-400 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="container-custom py-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="btn-press w-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-3 rounded-lg transition-colors text-center"
        >
          ↑ Volver al inicio
        </button>
      </div>
    </footer>
  );
}
