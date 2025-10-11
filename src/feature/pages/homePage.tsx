import { BaseLayout } from "../core/ui/base-layout";
import { Balloon } from "../core/component/searchComponent/Balloon";
import { motion   } from "framer-motion";


import globo from "../../assets/img/globo.png";

import { useState } from "react";
import imobiliario_1 from '@/assets/img/imgMoviliario/Inmoviliario_1.png'
import imobiliario_2 from '@/assets/img/imgMoviliario/Inmoviliario_2.png'
import imobiliario_3 from '@/assets/img/imgMoviliario/Inmoviliario_3.png'
import estampado_1 from   '@/assets/img/imgEstampado/estampado_1.png'
import estampado_2 from   '@/assets/img/imgEstampado/estampado_2.png'
import estampado_3 from   '@/assets/img/imgEstampado/estampado_3.png'
import decoracion_1 from   '@/assets/img/imgDecoracion/decoracion_1.png'
import decoracion_2 from   '@/assets/img/imgDecoracion/decoracion_2.png'
import decoracion_3 from   '@/assets/img/imgDecoracion/decoracion_3.png'
import decoracion_4 from   '@/assets/img/imgDecoracion/decoracion_4.png'
import decoracion_5 from    '@/assets/img/imgDecoracion/decoracion_5.png'


import { Contacto } from "./components/contacto";
import { Servicios } from "./components/servicios";
import { Domicilio } from "./components/domicilio";
import { ChatBox } from "./components/chatBox";
import { Ballons } from "./components/ballons";



const inmobiliarioImages = [imobiliario_1, imobiliario_2, imobiliario_3];
const estampadosGlobos = [ estampado_1, estampado_2, estampado_3];
const decoracionGlobos = [ decoracion_1, decoracion_2, decoracion_3, decoracion_4, decoracion_5];


const colors = [
  "#FF0000", "#FFD700", "#00BFFF", "#32CD32", "#FF69B4",
  "#8A2BE2", "#000000", "#C0C0C0", "#FFA500", "#40E0D0",
  "#FF1493", "#FFFFFF",
];

const colorFilters: Record<string, string> = {
  "#FF0000": "hue-rotate(0deg) saturate(150%) brightness(1.1)",
  "#FFD700": "hue-rotate(50deg) saturate(200%) brightness(1.3)",
  "#00BFFF": "hue-rotate(190deg) saturate(180%) brightness(1.2)",
  "#32CD32": "hue-rotate(90deg) saturate(180%) brightness(1.1)",
  "#FF69B4": "hue-rotate(300deg) saturate(160%) brightness(1.2)",
  "#8A2BE2": "hue-rotate(260deg) saturate(200%) brightness(1.1)",
  "#000000": "saturate(0%) brightness(0.4)",
  "#C0C0C0": "saturate(0%) brightness(1.6)",
  "#FFA500": "hue-rotate(30deg) saturate(180%) brightness(1.2)",
  "#40E0D0": "hue-rotate(160deg) saturate(170%) brightness(1.2)",
  "#FF1493": "hue-rotate(310deg) saturate(200%) brightness(1.3)",
  "#FFFFFF": "saturate(0%) brightness(2)",
};

export const HomePage = () => {
  const [globoColors, setGloboColors] = useState([
    0,
    1,
    2,
  ]);

  // Maneja el cambio de color de un globo en específico
  const handleClick = (index: number) => {
    setGloboColors((prev) => {
      const newColors = [...prev];
      newColors[index] = (newColors[index] + 1) % colors.length;
      return newColors;
    });
  };







  return (
    <>
    <BaseLayout header>
       <div className="min-h-screen bg-gradient-to-b from-[#f3e8d6] via-[#f1deb0] to-[#fdf9ed]">
        {/* Hero con el arco */}
        <Balloon />
        {/* Globos dinámicos */}
        <div className="absolute flex -space-x-6 md:-space-x-16 right-3 top-24">
          {globoColors.map((colorIndex, i) => (
            <motion.img
              key={i}
              src={globo}
              loading="lazy"
              alt={`globo-${i}`}
              className="w-20 sm:w-28 md:w-32 h-auto cursor-pointer"
              style={{ filter: colorFilters[colors[colorIndex]] }}
              onClick={() => handleClick(i)}
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 2 + i, ease: "easeInOut" }}
              whileTap={{ scale: 1.2, rotate: 10 }}
            />
          ))}
          <p className="hidden md:flex text-center right-14 absolute top-60 justify-center items-center mx-auto 
           text-2xl font-semibold text-secondary-200 font-['Great Vibes']">
          Helio <br />
          certificado
         </p>
        </div>

        <div className="absolute flex -space-x-6 md:-space-x-16 left-3 top-24">
          {globoColors.map((colorIndex, i) => (
            <motion.img
              key={`left-${i}`}
              src={globo}
              loading="lazy"
              alt={`globo-left-${i}`}
              className="w-20 sm:w-28 md:w-32 h-auto cursor-pointer"
              style={{ filter: colorFilters[colors[(colorIndex + 3) % colors.length]] }}
              onClick={() => handleClick(i)}
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 + i, ease: "easeInOut" }}
              whileTap={{ scale: 1.2, rotate: -10 }}
            />
          ))}
       </div>
       <div>
        <Ballons />
        </div>

        {/* Sección Nosotros */}
        <section id="about" className="flex flex-col justify-center items-center py-10">
        <h2 className="text-4xl font-bold text-purple-700 mb-6 font-['Cinzel']">Nosotros</h2>
        <p className="max-w-2xl text-center text-lg text-gray-700 font-['Playfair Display']">
          Somos expertos en decoración con globos. Creamos arcos, columnas y
          arreglos personalizados para toda ocasión. Nuestro objetivo es llenar
          de color y alegría tus momentos especiales.
        </p>
      </section>

     <Servicios decoracionGlobos={decoracionGlobos} estampadosGlobos={estampadosGlobos} inmobiliarioImages={inmobiliarioImages}/>
      <Domicilio />
      <Contacto />
      
      </div>
    
    </BaseLayout>
    <ChatBox />
     </>
  );
};
