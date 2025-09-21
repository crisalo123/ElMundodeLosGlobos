import { FaMotorcycle } from "react-icons/fa";

export const Domicilio = () => {
  return (
    <section className="w-full  py-10 px-6 flex justify-center">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-6 bg-white shadow-lg rounded-2xl p-6">
        
        {/* Icono */}
        <div className="flex items-center justify-center bg-pink-100 p-4 rounded-full shadow-md">
          <FaMotorcycle className="text-pink-600 text-5xl" />
        </div>

        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">
            Domicilios en Bogotá y alrededores
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Llevamos tus decoraciones y arreglos de globos directamente a tu
            puerta 🚪✨. ¡Servicio rápido, seguro y con mucho amor!
          </p>
        </div>
      </div>
    </section>
  );
};
