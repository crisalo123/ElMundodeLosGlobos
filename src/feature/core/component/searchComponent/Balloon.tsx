import arcoMid from "../../../../assets/img/arco.png";

export const Balloon = () => {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center  -mt-4 text-center md:px-6 h-auto  min-h-[60vh]  md:min-h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${arcoMid})` }}
    >
      {/* Contenido principal */}
      <div className="relative z-10 max-w-xl text-center mt-10">
        <h2
          className="pt-20 md:pt-0  text-3xl 2xl:text-5xl font-extrabold drop-shadow-lg 
          bg-gradient-to-r from-gray-800 via-gray-400 to-gray-800 
          bg-clip-text text-transparent font-['Cinzel']"
        >
          El mundo de los Globos
        </h2>

        <p className="mt-3 text-lg md:text-xl text-purple-800 font-medium drop-shadow-md font-['Playfair Display']">
          Arcos, Decoraciones y Venta de Globos
        </p>

        <button
          className="mt-6 px-6 py-3 rounded-lg 
          bg-gradient-to-r from-green-500 to-green-600 
          text-white font-semibold shadow-md hover:scale-105 transition"
        >
          Cotizar en WhatsApp
        </button>
      </div>
    </section>
  );
};
