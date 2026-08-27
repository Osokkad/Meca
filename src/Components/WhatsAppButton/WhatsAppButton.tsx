import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const number = "5491122759966";
  const message = "Hola, quisiera solicitar un presupuesto para mi auto";

  return (
    <a
      href={`https://wa.me/${number}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-green-500/40 transition-all transform hover:scale-110 z-50 flex items-center justify-center group animate-float"
      title="Contactanos por WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
      <span className="absolute right-16 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        ¡Chateá con nosotros!
      </span>
    </a>
  );
}
