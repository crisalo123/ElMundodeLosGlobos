import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

interface Message {
  from: "user" | "bot";
  text: string;
}

const quickQuestions = [
  "🎈 ¿Hacen domicilios?",
  "🎉 ¿Qué decoraciones ofrecen?",
  "💰 ¿Cuánto cuesta un bouquet?",
];

export const ChatBox = () => {
  const [openChat, setOpenChat] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "👋 Hola, soy tu asesor virtual. ¿Qué deseas saber?" },
  ]);

  const handleQuestionClick = (q: string) => {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: q },
      {
        from: "bot",
        text: "😊 Te tenemos la respuesta, pero mejor hablamos directo en WhatsApp 👉",
      },
    ]);
  };

  return (
    <>
      {/* Contenedor botón con tooltip en hover */}
      <div className="fixed bottom-24 right-6 z-50 group flex items-center gap-2">
        {/* Tooltip - aparece solo al hacer hover */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm px-3 py-1 rounded-lg shadow-md">
          💬 Chatea <br /> con nosotros
        </div>

        {/* Botón flotante con efecto palpito */}
        <button
         type="button"
          onClick={() => setOpenChat(!openChat)}
        className="relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform animate-heartbeat"

        >
          <FaUserCircle className="text-2xl !font-extrabold w-8 h-8" />
        </button>
      </div>

      {/* Ventana de chat */}
      {openChat && (
        <div className="fixed bottom-40 right-6 w-80 h-96 bg-white rounded-xl shadow-lg flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 font-semibold">
            Asesor Virtual
          </div>

          {/* Mensajes */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                  msg.from === "bot"
                    ? "bg-gray-200 text-gray-800 self-start"
                    : "bg-purple-600 text-white self-end ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Preguntas rápidas */}
          <div className="p-2 border-t border-gray-200 bg-gray-50 space-y-2">
            <p className="text-xs text-gray-500">Preguntas rápidas:</p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleQuestionClick(q)}
                  className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-lg hover:bg-purple-200 transition"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Ir a WhatsApp */}
          <a
            href="https://wa.me/573104801054"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-green-500 text-white py-2 hover:bg-green-600 transition"
          >
            Ir a WhatsApp
          </a>
        </div>
      )}
    </>
  );
};
