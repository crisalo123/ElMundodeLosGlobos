import { FaMotorcycle } from "react-icons/fa";
import logoRappi from "@/assets/img/logorapo.png"; // 👉 guarda el logo en tu carpeta de assets

export const Domicilio = () => {
  return (
    <section className="w-full py-10 px-6 flex justify-center">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-6 bg-white shadow-lg rounded-2xl p-6">
        
        {/* Iconos */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center bg-pink-100 p-4 rounded-full shadow-md">
            <FaMotorcycle className="text-pink-600 text-5xl" />
          </div>
          <img
            src={logoRappi}
            alt="Rappi"
            className="h-12 object-contain"
          />
        </div>

        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">
            Domicilios en Bogotá y alrededores
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Llevamos tus decoraciones y arreglos de globos directamente a tu
            puerta 🚪✨. También puedes pedirnos a través de{" "}
            <span className="font-semibold text-pink-600">Rappi</span> 🛵💨.
          </p>
        </div>
      </div>
    </section>
  );
};
