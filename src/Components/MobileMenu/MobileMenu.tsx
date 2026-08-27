interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Presupuesto", href: "#presupuesto" },
    { name: "Ubicación", href: "#ubicacion" },
  ];

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="md:hidden bg-neutral-900 border-b border-amber-500">
      <div className="container-custom py-4 flex flex-col gap-3">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={handleLinkClick}
            className="text-neutral-300 hover:text-amber-400 transition-colors py-2 px-3 rounded-lg hover:bg-neutral-800 font-medium"
          >
            {link.name}
          </a>
        ))}
        <a
          href="https://wa.me/5491122759966?text=Hola%2C%20quisiera%20solicitar%20un%20presupuesto"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-lg font-medium transition-colors text-center mt-2"
        >
          Consultar
        </a>
      </div>
    </div>
  );
}
