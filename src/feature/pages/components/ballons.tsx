import { useState } from "react";
import ballon_1 from "@/assets/img/globosHelio/01.jpeg";
import ballon_2 from "@/assets/img/globosHelio/03.jpeg";
import ballon_3 from "@/assets/img/globosHelio/04.jpeg";
import ballon_4 from "@/assets/img/globosHelio/05.jpeg";
import ballon_5 from "@/assets/img/globosHelio/06.jpeg";

export const Ballons = () => {
  const images = [ballon_1, ballon_2, ballon_3, ballon_4, ballon_5];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-5  text-center px-4 md:px-16 overflow-hidden relative">
      <h2 className="text-3xl font-bold text-purple-700 mb-14 font-['Cinzel'] tracking-wide">
        Globos con Helio - Domicilio
      </h2>

      {/* Carrusel */}
      <div className="flex gap-6 animate-scrollX hover:pause-scroll justify-center">
        {images.concat(images).map((src, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-64 h-96 cursor-pointer rounded-xl overflow-hidden border border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-lg transition-transform duration-500 hover:scale-110"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Globo ${index + 1}`}
              className="w-full h-full object-cover"
            />
            
          </div>
        ))}
      </div>

      {/* Modal de imagen ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-primary-700 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Globo ampliado"
            className="max-w-[90%] max-h-[80vh] rounded-xl shadow-2xl border-2 border-[#D4AF37]"
          />
        </div>
      )}

     
    </section>
  );
};
