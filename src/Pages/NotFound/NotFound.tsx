import { Wrench } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <div className="bg-amber-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <Wrench className="text-black" size={40} />
        </div>
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-neutral-400 mb-8">Esta página no existe</p>
        <a
          href="/"
          className="btn-press inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg"
        >
          Volver al Inicio
        </a>
      </div>
    </div>
  );
}
