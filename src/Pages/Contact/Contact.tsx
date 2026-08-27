import { useState } from "react";
import { Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useScrollReveal } from "../../Hooks/useScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const headerRef = useScrollReveal();
  const infoRef = useScrollReveal();
  const formRef = useScrollReveal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const whatsappNumber = "5491122759966";
  const whatsappMessage = "Hola, quisiera solicitar un presupuesto para mi auto";

  return (
    <>
      <section id="contacto" className="py-20 bg-white">
        <div className="container-custom">
          {/* Header */}
          <div ref={headerRef} className="reveal text-center mb-16">
            <span className="text-neutral-500 font-semibold text-sm uppercase tracking-wide">Contacto</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-black">Ponte en contacto con nosotros</h2>
            <p className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto">
              Envianos un mensaje o llámanos. Te responderemos a la brevedad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div ref={infoRef} className="reveal-left space-y-8">
              {/* Ubicación */}
              <div className="flex gap-4 card-hover p-2 rounded-xl">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-neutral-100 icon-spin">
                    <MapPin className="text-black" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-1">Ubicación</h3>
                  <p className="text-neutral-600">
                    Ituzaingó, Zona Sur
                    <br />
                    Buenos Aires, Argentina
                  </p>
                  <p className="text-sm text-neutral-500 mt-2">
                    ⚠️ <span className="font-semibold">No hacemos a domicilio</span>
                  </p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex gap-4 card-hover p-2 rounded-xl">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-neutral-100 icon-spin">
                    <Phone className="text-black" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-1">Teléfono</h3>
                  <a href="tel:+5491122759966" className="text-black hover:text-neutral-700 font-semibold underline">
                    +54 9 11 2275-9966
                  </a>
                  <p className="text-sm text-neutral-600 mt-1">Llamadas y WhatsApp</p>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex gap-4 card-hover p-2 rounded-xl">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-neutral-100 icon-spin">
                    <Clock className="text-black" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-1">Horarios</h3>
                  <p className="text-neutral-600">
                    Lunes a Viernes: 8:00 - 18:00
                    <br />
                    Sábados: 8:00 - 13:00
                    <br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div ref={formRef} className="reveal-right lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-neutral-50 rounded-xl p-8 border border-neutral-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all bg-white"
                      placeholder="Tu nombre"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all bg-white"
                      placeholder="+54 9 11 2275-9966"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all bg-white"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all resize-none bg-white"
                    placeholder="Cuéntame sobre tu auto y qué necesitas..."
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-press w-full bg-black hover:bg-neutral-800 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Send size={20} />
                  Enviar Mensaje
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="mt-4 bg-neutral-100 border border-neutral-300 rounded-lg p-4 animate-fade-in">
                    <p className="text-black font-semibold">✓ Mensaje enviado correctamente</p>
                    <p className="text-neutral-600 text-sm">Te contactaremos pronto</p>
                  </div>
                )}
              </form>

              {/* Alternative Contact */}
              <div className="mt-8 bg-neutral-100 border border-neutral-200 rounded-lg p-6 card-hover">
                <p className="text-black font-semibold mb-3">También puedes contactarnos por:</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    <MessageCircle size={20} />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+5491122759966"
                    className="btn-press flex items-center justify-center gap-2 border-2 border-black text-black hover:bg-black hover:text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    <Phone size={20} />
                    Llamar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-black hover:bg-neutral-800 text-white rounded-full p-4 shadow-lg transition-all transform hover:scale-110 z-40 flex items-center justify-center group animate-float"
        title="Contactanos por WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-16 bg-black text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          ¡Chateá con nosotros!
        </span>
      </a>
    </>
  );
}
