import { CreditCard, Banknote, Wallet } from "lucide-react";
import { useScrollReveal } from "../../Hooks/useScrollReveal";

export default function PaymentMethods() {
  const headerRef = useScrollReveal();
  const stepsRef = useScrollReveal(0.1);
  const methodsRef = useScrollReveal(0.1);
  const notesRef = useScrollReveal();

  const paymentMethods = [
    {
      id: 1,
      name: "Transferencia Bancaria",
      icon: CreditCard,
      description: "Transferencia a cuenta bancaria. Segura y rápida.",
      details: "CBU/CVU disponibles",
      color: "from-neutral-200 to-neutral-300",
      iconColor: "text-black",
    },
    {
      id: 2,
      name: "Efectivo",
      icon: Banknote,
      description: "Pago en efectivo en el taller. Sin intermediarios.",
      details: "En pesos argentinos",
      color: "from-amber-100 to-amber-200",
      iconColor: "text-amber-700",
    },
    {
      id: 3,
      name: "Cuotas",
      icon: Wallet,
      description: "Dividí el pago en cuotas sin interés (según monto).",
      details: "Consulta condiciones",
      color: "from-amber-200 to-amber-300",
      iconColor: "text-black",
    },
  ];

  return (
    <section id="presupuesto" className="py-20 bg-black">
      <div className="container-custom">
        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wide">Presupuesto y Pago</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">Sistema de Pago Flexible</h2>
          <p className="text-lg text-neutral-400 mt-4 max-w-2xl mx-auto">
            Trabajamos con diferentes métodos de pago para tu comodidad
          </p>
        </div>

        {/* System de Pago 50/50 */}
        <div ref={stepsRef} className="reveal mb-16 bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Nuestro Sistema de Trabajo</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Paso 1 */}
            <div className="text-center card-hover">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <span className="text-black font-bold text-2xl">1</span>
              </div>
              <h4 className="text-white font-bold mb-2">Traes tu auto</h4>
              <p className="text-neutral-400 text-sm">Presupuesto sin cargo y evaluación del trabajo necesario</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="text-amber-500 text-4xl animate-float" style={{ animationDelay: "0.5s" }}>→</div>
            </div>

            {/* Paso 2 */}
            <div className="text-center card-hover">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: "0.3s" }}>
                <span className="text-black font-bold text-2xl">2</span>
              </div>
              <h4 className="text-white font-bold mb-2">Adelantas 50%</h4>
              <p className="text-neutral-400 text-sm">Incluye repuestos y mano de obra. Comenzamos con el trabajo.</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center md:col-start-2">
              <div className="text-amber-500 text-4xl animate-float" style={{ animationDelay: "1s" }}>→</div>
            </div>

            {/* Paso 3 */}
            <div className="text-center card-hover md:col-start-3">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: "0.6s" }}>
                <span className="text-black font-bold text-2xl">3</span>
              </div>
              <h4 className="text-white font-bold mb-2">Retiras 50%</h4>
              <p className="text-neutral-400 text-sm">Trabajo finalizado. Pagas el saldo restante y te llevas el auto.</p>
            </div>
          </div>

          {/* Nota importante */}
          <div className="mt-8 pt-8 border-t border-amber-500/30">
            <p className="text-neutral-400 text-center text-sm">
              ✓ <span className="text-white font-semibold">No hacemos entregas a domicilio</span> • Retiro en taller de
              Ituzaingó Zona Sur
            </p>
          </div>
        </div>

        {/* Métodos de Pago */}
        <div ref={methodsRef} className="reveal">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Métodos de Pago Aceptados</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.id}
                  className={`card-hover bg-gradient-to-br ${method.color} rounded-xl p-8 border border-neutral-300 hover:border-amber-500/50 transition-all hover:shadow-lg`}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className={`${method.iconColor} mb-4 icon-spin`}>
                    <Icon size={40} />
                  </div>

                  <h4 className="text-xl font-bold text-black mb-2">{method.name}</h4>

                  <p className="text-neutral-700 text-sm mb-3">{method.description}</p>

                  <div className="pt-3 border-t border-neutral-300/50">
                    <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wide">{method.details}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Notas finales */}
        <div ref={notesRef} className="reveal mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-hover bg-white/5 border border-white/10 rounded-lg p-6">
            <h4 className="text-white font-bold mb-2">Información</h4>
            <p className="text-neutral-400 text-sm">
              Todos los precios incluyen IVA. El presupuesto es válido por 7 días.
            </p>
          </div>

          <div className="card-hover bg-white/5 border border-white/10 rounded-lg p-6">
            <h4 className="text-white font-bold mb-2">Garantía</h4>
            <p className="text-neutral-400 text-sm">
              Garantizamos nuestro trabajo. Consultá detalles al solicitar presupuesto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
