import { FaInstagram, FaFacebookF, FaMapMarkerAlt } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { MdEmail } from "react-icons/md"; // 👈 Nuevo ícono de correo
import logoNequi from "@/assets/img/mediosPago/nequi.png";
import logoDaviplata from "@/assets/img/mediosPago/daviplata.png";
import logoBancolombia from "@/assets/img/mediosPago/bancolombia.svg"
import logoDavivienda from '@/assets/img/mediosPago/davivienda-37856_logosenvector.com_5.svg'
import visa from '@/assets/img/mediosPago/Visa-Logo-SVG_002.svg'
import masterCard from '@/assets/img/mediosPago/MasterCard_Logo.svg.png'

export const Contacto = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center py-2 md:py-5 px-6 "
    >
      {/* Globo de "Síguenos" */}
      <div className="relative mb-10">
        <div className="bg-purple-700 text-white text-2xl md:text-4xl px-10 py-6 rounded-full font-['Playfair_Display'] shadow-lg">
          ¡Síguenos!
        </div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-purple-700"></div>
      </div>

      {/* Redes sociales */}
      <div className="grid grid-col-1 md:grid-col-2 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800">
          <div>
            <a
              href="https://www.instagram.com/elmundoglobos/?igsh=MWZpamRxZXZnOTk3YQ%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:scale-105 transition"
            >
              <FaInstagram size={35} className="text-pink-600" />
              <span className="text-xl font-['Playfair_Display']">
                elmundodelosglobos
              </span>
            </a>
          </div>

          <div>
            <a
              href="https://facebook.com/mundodelosglobos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:scale-105 transition"
            >
              <FaFacebookF size={35} className="text-blue-600" />
              <span className="text-xl font-['Playfair_Display']">
                elmundodelosglobos
              </span>
            </a>
          </div>

          {/* TikTok */}
          <div>
            <a
              href="https://www.tiktok.com/@elmundodelosglobos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:scale-105 transition"
            >
              <FaTiktok size={35} className="text-black" />
              <span className="text-xl font-['Playfair_Display']">
                el mundo de los globos
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bloque de contacto directo */}
      <div className="mt-12 w-full max-w-2xl text-center">
        <h3 className="text-lg md:text-3xl font-semibold text-purple-700 mb-6 font-['Playfair_Display']">
          Contáctanos directamente
        </h3>
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://www.google.com/maps?q=Cra+16+No+53-39,+Bogotá,+Colombia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:scale-105 transition"
          >
            <FaMapMarkerAlt size={35} className="text-red-600" />
            <span className="text-lg md:text-xl font-['Playfair_Display']">
              Cra 16 No. 53-39, Galerías - Bogotá
            </span>
          </a>

          <a
            href="mailto:elmundodelosglobos@hotmail.com"
            className="flex items-center gap-4 hover:scale-105 transition"
          >
            <MdEmail size={35} className="text-purple-600" />
            <span className="text-lg md:text-xl font-['Playfair_Display']">
              elmundodelosglobos@hotmail.com
            </span>
          </a>
        </div>
      </div>

      {/* Mapa aparte */}
      <div className="mt-8 w-full max-w-3xl shadow-lg rounded-2xl overflow-hidden border border-gray-200">
        <iframe
          title="Ubicación Mundo de los Globos"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.813517369387!2d-74.0720922258891!3d4.647554995324401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a504b5c2bb3%3A0xabcdef123456789!2sCra%2016%20%2353-39%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses-419!2sco!4v1690000000000!5m2!1ses-419!2sco"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Medios de pago */}
       <div className="mt-14 w-full max-w-2xl bg-gradient-to-r from-purple-100/70 via-white/50 to-purple-100/70 backdrop-blur-md rounded-2xl py-8 px-6 shadow-lg border border-purple-200/50">
        <h3 className="text-lg md:text-3xl font-semibold text-purple-800 text-center mb-8 font-['Playfair_Display'] drop-shadow-sm">
         Todos los medios de pago
        </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
          {[logoBancolombia, logoNequi, visa, masterCard,logoDavivienda,logoDaviplata ].map((img, i:number) => (
            <div key={i} className="hover:scale-110 transition-transform duration-300">
            <img src={img} alt="Nequi" className="w-16 md:w-20 h-auto drop-shadow-md" />  
          </div>
          ))}
          
          
        </div>
      </div>
    </section>
  );
};
