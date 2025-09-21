import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useImageSlider } from '../useImageSlider';

type Props = {
  inmobiliarioImages: string[];
  estampadosGlobos: string[];
  decoracionGlobos: string[];
}

export const Servicios: React.FC<Props> = ({ decoracionGlobos, estampadosGlobos, inmobiliarioImages }) => {
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
            <AnimatePresence mode="wait">
              <motion.img
                key={currentStampado}
                src={estampadosGlobos[currentStampado]}
                alt={`Estampado ${currentStampado + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
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
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={inmobiliarioImages[currentIndex]}
                alt={`Inmobiliario ${currentIndex + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
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
            <AnimatePresence mode="wait">
              <motion.img
                key={currentDecoracion}
                src={decoracionGlobos[currentDecoracion]}
                alt={`Decoración ${currentDecoracion + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
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
  )
}
