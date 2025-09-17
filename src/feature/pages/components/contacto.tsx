import { FaInstagram, FaFacebookF, FaMapMarkerAlt } from "react-icons/fa";
import logoNequi from '@/assets/img/mediosPago/nequi.png';
import logoDaviplata from '@/assets/img/mediosPago/daviplata.png';

export const Contacto = () => {
  return (
   <section id="contact" className="flex flex-col justify-center items-center py-5 px-6 ">
  
  {/* Redes sociales */}
  <div className="flex flex-col items-center gap-6">
    <h2 className="text-lg md:text-4xl font-bold text-purple-700 mb-2 font-['Cinzel']">
      Síguenos en nuestras redes sociales
    </h2>
    <div className="flex gap-8 text-blue-800">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition">
        <FaInstagram size={40} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition">
        <FaFacebookF size={40} />
      </a>
      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition">
        <FaMapMarkerAlt size={40} />
      </a>
    </div>
  </div>

  {/* Medios de pago */}
  <div className="mt-14 w-full max-w-md">
    <h3 className="text-lg md:text-3xl font-semibold text-purple-700 text-center mb-6 font-['Playfair Display']">
      Nuestros medios de pago
    </h3>
    <div className="flex justify-center gap-12">
      <div className="flex flex-col items-center hover:scale-110 transition">
        <img src={logoNequi} alt="Nequi" className="w-20 h-auto" />
        <span className="text-base mt-2 font-medium text-gray-700 font-['Playfair Display']">Nequi</span>
      </div>
      <div className="flex flex-col items-center hover:scale-110 transition">
        <img src={logoDaviplata} alt="Daviplata" className="w-20 h-auto" />
        <span className="text-base mt-2 font-medium text-gray-700 font-['Playfair Display']">Daviplata</span>
      </div>
    </div>
  </div>
</section>

  );
};
