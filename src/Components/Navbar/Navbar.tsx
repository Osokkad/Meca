import { Menu, X, Wrench } from "lucide-react";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Presupuesto", href: "#presupuesto" },
    { name: "Ubicación", href: "#ubicacion" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-black shadow-lg border-b-2 border-amber-500">
        <div className="container-custom">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-amber-500 p-2 rounded-lg">
                <Wrench className="text-black" size={24} />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white">Boxes Competicion</h1>
                <p className="text-xs text-amber-400">Ituzaingó Zona Sur</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-neutral-300 hover:text-amber-400 transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="https://wa.me/5491122759966?text=Hola%2C%20quisiera%20solicitar%20un%20presupuesto"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Consultar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white p-2 hover:bg-neutral-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
    </>
  );
}
