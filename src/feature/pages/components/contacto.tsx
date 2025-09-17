import { FaInstagram, FaFacebookF, FaMapMarkerAlt } from "react-icons/fa";
import logoNequi from "@/assets/img/mediosPago/nequi.png";
import logoDaviplata from "@/assets/img/mediosPago/daviplata.png";

export const Contacto = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center py-10 px-6 "
    >
      {/* Globo de "Síguenos" */}
      <div className="relative mb-10">
        <div className="bg-purple-700 text-white text-2xl md:text-4xl px-10 py-6 rounded-full font-['Playfair_Display'] shadow-lg">
          ¡Síguenos!
        </div>
        {/* El piquito del globo */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-purple-700"></div>
      </div>

      {/* Redes sociales */}
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col gap-4 text-blue-800">
          <a
            href="https://www.instagram.com/elmundoglobos/?igsh=MWZpamRxZXZnOTk3YQ%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:scale-105 transition"
          >
            <FaInstagram size={35} className="text-pink-600" />
            <span className="text-xl font-['Playfair_Display']">
              @mundodelosglobos
            </span>
          </a>
          <a
            href="https://facebook.com/mundodelosglobos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:scale-105 transition"
          >
            <FaFacebookF size={35} className="text-blue-600" />
            <span className="text-xl font-['Playfair_Display']">
              /mundodelosglobos
            </span>
          </a>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:scale-105 transition"
          >
            <FaMapMarkerAlt size={35} className="text-red-600" />
            <span className="text-xl font-['Playfair_Display']">
              Bogotá - Colombia
            </span>
          </a>
        </div>
      </div>

      {/* Medios de pago */}
      <div className="mt-14 w-full max-w-md">
        <h3 className="text-lg md:text-3xl font-semibold text-purple-700 text-center mb-6 font-['Playfair_Display']">
          Nuestros medios de pago
        </h3>
        <div className="flex justify-center gap-12">
          <div className="flex flex-col items-center hover:scale-110 transition">
            <img src={logoNequi} alt="Nequi" className="w-20 h-auto" />
            <span className="text-base mt-2 font-medium text-gray-700 font-['Playfair_Display']">
              Nequi
            </span>
          </div>
          <div className="flex flex-col items-center hover:scale-110 transition">
            <img src={logoDaviplata} alt="Daviplata" className="w-20 h-auto" />
            <span className="text-base mt-2 font-medium text-gray-700 font-['Playfair_Display']">
              Daviplata
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
