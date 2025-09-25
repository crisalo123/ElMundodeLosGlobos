import React from "react";
import { motion } from "framer-motion";
import { useImageSlider } from "../useImageSlider";

type Props = {
  inmobiliarioImages: string[];
  estampadosGlobos: string[];
  decoracionGlobos: string[];
};

export const Servicios: React.FC<Props> = ({
  decoracionGlobos,
  estampadosGlobos,
  inmobiliarioImages,
}) => {
  const currentIndex = useImageSlider(inmobiliarioImages);
  const currentStampado = useImageSlider(estampadosGlobos);
  const currentDecoracion = useImageSlider(decoracionGlobos);

  return (
    <section
      id="services"
      className="flex flex-col justify-center items-center py-16 relative"
    >
      <h2 className="text-4xl font-bold text-purple-700 mb-14 font-['Cinzel'] tracking-wide">
        Servicios
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl w-full px-6">
        {/* Servicio 1 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center"
        >
          <div className="relative w-full h-72 overflow-hidden rounded-3xl shadow-lg group">
            {estampadosGlobos.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`Estampado ${i + 1}`}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:scale-110 ${
                  i === currentStampado ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <h3 className="text-2xl font-semibold text-purple-700 mt-6 font-['Cinzel']">
            Globos Publicitarios
          </h3>
          <p className="text-gray-600 mt-2 max-w-xs font-['Playfair Display']">
            Personaliza tus globos con logos y mensajes para eventos y campañas.
          </p>
        </motion.div>

        {/* Servicio 2 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center"
        >
          <div className="relative w-full h-72 overflow-hidden rounded-3xl shadow-lg group">
            {inmobiliarioImages.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`Inmobiliario ${i + 1}`}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:scale-110 ${
                  i === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <h3 className="text-2xl font-semibold text-purple-700 mt-6 font-['Cinzel']">
            Alquiler de Mobiliario
          </h3>
          <p className="text-gray-600 mt-2 max-w-xs font-['Playfair Display']">
            Accesorios decorativos para complementar tus eventos.
          </p>
        </motion.div>

        {/* Servicio 3 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center"
        >
          <div className="relative w-full h-72 overflow-hidden rounded-3xl shadow-lg group">
            {decoracionGlobos.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`Decoración ${i + 1}`}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:scale-110 ${
                  i === currentDecoracion ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <h3 className="text-2xl font-semibold text-purple-700 mt-6 font-['Cinzel']">
            Decoración con Globos
          </h3>
          <p className="text-gray-600 mt-2 max-w-xs font-['Playfair Display']">
            Diseños creativos en arcos, columnas y centros de mesa únicos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
