import arcoMid from "../../../../assets/img/arco.png";
import whatApp from "../../../../assets/img/whatsAppIcon.png";

export const Balloon = () => {
  const phoneNumber = "573104801054"; // Reemplaza con tu número de WhatsApp en formato internacional
  const message = encodeURIComponent("Hola! Quiero más información sobre los globos 🎈");

  return (
     <section
      className="relative w-full flex flex-col items-center justify-center -mt-4 text-center md:px-6 h-auto min-h-[60vh] md:min-h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${arcoMid})` }}
    >
      {/* Contenido principal */}
      <div className="relative z-10 max-w-2xl text-center mt-10">
        <h2 className="pt-20 md:pt-0 text-3xl 2xl:text-5xl font-extrabold drop-shadow-lg bg-gradient-to-r from-gren-800 via-gray-700 to-gray-800 bg-clip-text text-transparent font-['Cinzel']">
          El mundo de los Globos
        </h2>
       

        {/* NUEVA FRANJA DE SERVICIOS */}
     <div className="mt-6 bg-gradient-to-r from-purple-200/60 via-white/50 to-purple-200/60 px-6 py-4 rounded-2xl shadow-lg border border-purple-300/40">
     <p className="text-base md:text-2xl font-['Cinzel'] font-bold text-purple-900 drop-shadow-sm leading-relaxed">
    Globos con helio <span className="text-purple-700">100% certificado</span> · 
    <span className="text-emerald-700"> Domicilios</span> · 
    Decoración globos · 
    Bouquet de globos para toda ocasión · 
    Globos publicitarios <br />
    <span className="text-emerald-700">Alquiler de mobiliario para eventos</span>
  </p>
   </div>

       <a
  href={`https://wa.me/${phoneNumber}?text=${message}`}
  target="_blank"
  rel="noopener noreferrer"
  className="relative mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 
  font-semibold text-white text-lg rounded-2xl 
  bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 
  shadow-[0_0_15px_rgba(16,185,129,0.6)] 
  hover:shadow-[0_0_25px_rgba(16,185,129,0.9)]
  overflow-hidden transition-transform duration-300 hover:scale-105 animate-glowPulse"
>
  {/* efecto brillante que pasa */}
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-60 animate-shine" />

  {/* Ícono */}
  <img
    src={whatApp}
    alt="WhatsApp"
    className="relative z-10 w-10 h-10 animate-float bg-white rounded-full"
  />

  {/* Texto */}
  <div className="relative z-10 flex flex-col leading-tight">
    <span className=" font-light">Cotizar en</span>
    <span className="text-xl font-bold tracking-wide">WhatsApp</span>
  </div>
</a>

      </div>
    </section>
  );
};
