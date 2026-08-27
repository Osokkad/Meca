import { useState } from "react";
import { X } from "lucide-react";
import { useScrollReveal } from "../../Hooks/useScrollReveal";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const headerRef = useScrollReveal();
  const filtersRef = useScrollReveal();
  const gridRef = useScrollReveal(0.05);

  const images = [
    {
      id: 1,
      title: "Trabajo 1",
      category: "Mecánica General",
      src: "/imagen1.jpg",
      before: true,
    },
    {
      id: 2,
      title: "Trabajo 2",
      category: "Mecánica General",
      src: "/imagen2.jpg",
      before: false,
    },
    {
      id: 3,
      title: "Trabajo 3",
      category: "Chapa y Pintura",
      src: "/imagen3.jpg",
      before: true,
    },
    {
      id: 4,
      title: "Trabajo 4",
      category: "Chapa y Pintura",
      src: "/imagen4.jpg",
      before: false,
    },
    {
      id: 5,
      title: "Trabajo 5",
      category: "Mecánica General",
      src: "/imagen5.jpg",
      before: true,
    },
    {
      id: 6,
      title: "Chapa y Pintura",
      category: "Chapa y Pintura",
      src: "/chapaypintura.jpg",
      before: false,
    },
  ];

  const categories = ["Todos", "Mecánica General", "Chapa y Pintura"];
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredImages = activeCategory === "Todos" ? images : images.filter((img) => img.category === activeCategory);

  return (
    <section id="galeria" className="py-20 bg-neutral-100">
      <div className="container-custom">
        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">Galería</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-black">Nuestros Trabajos</h2>
          <p className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto">
            Mira algunos de los trabajos que realizamos. Antes y después de nuestras reparaciones.
          </p>
        </div>

        {/* Filter Buttons */}
        <div ref={filtersRef} className="reveal flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`btn-press px-6 py-2 rounded-full font-semibold transition-all ${
                activeCategory === category
                  ? "bg-amber-500 text-black shadow-lg"
                  : "bg-white text-neutral-700 border border-neutral-300 hover:border-amber-500 hover:text-amber-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div ref={gridRef} className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(idx)}
              className="card-hover group relative overflow-hidden rounded-lg cursor-pointer h-64"
              style={{ transitionDelay: `${idx * 0.05}s` }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className={`text-xs font-bold mb-1 ${image.before ? "text-amber-400" : "text-neutral-300"}`}>
                  {image.before ? "ANTES" : "DESPUÉS"}
                </p>
                <p className="text-white font-bold text-sm mb-1">{image.title}</p>
                <p className="text-neutral-400 text-xs">{image.category}</p>
              </div>

              {/* Badge */}
              <div
                className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${image.before ? "bg-amber-500 text-black" : "bg-white text-black"}`}
              >
                {image.before ? "Antes" : "Después"}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors z-50 btn-press"
            >
              <X size={32} />
            </button>

            <div
              className="max-w-4xl w-full reveal-scale revealed"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="bg-neutral-900 rounded-lg p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-bold ${filteredImages[selectedImage].before ? "bg-amber-500 text-black" : "bg-white text-black"}`}
                  >
                    {filteredImages[selectedImage].before ? "Antes" : "Después"}
                  </span>
                  <span className="text-amber-400 text-sm">{filteredImages[selectedImage].category}</span>
                </div>
                <h3 className="text-2xl font-bold">{filteredImages[selectedImage].title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
