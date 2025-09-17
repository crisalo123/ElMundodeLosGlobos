import { useState } from "react";
import { cn } from "../lib";
import { Wrapper } from "./wrapper";
import { IoBalloonSharp } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

export function BaseLayout({
  children,
  className = "",
  mainClassName = "",
  header,
}: {
  children: React.ReactNode;
  className?: string;
  mainClassName?: string;
  header?: boolean;
}) {
 

  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (sectionId:string) => {
     const section = document.getElementById(sectionId);
     if (section) {
        section.scrollIntoView({ behavior: "smooth" });
     }
    setMenuOpen(false); // cierra menú en móvil
  };

  return (
    <div
      className={cn(
        "relative flex min-h-screen font-serif mx-2 sm:mx-5 mt-2",
        className
      )}
    >
      <div className="flex w-full flex-col">
        {/* NAVBAR */}
        {header && (
          <header className="h-20 sm:h-24 rounded-tl-xl rounded-tr-xl bg-gradient-to-r from-[#6b2fac] via-[#7338e0] to-[#6b2fac] shadow-md flex items-center justify-between px-6 sm:px-16 relative font-[Cinzel] uppercase tracking-wide">
            {/* Logo + Nombre */}
            <div className="flex items-center gap-3">
              <IoBalloonSharp className="h-10 w-10 sm:h-16 sm:w-10 text-[#FFD700]" />
              <button
                onClick={() => handleNavigate("/home")}
                className="text-white hover:text-[#FFD700] font-[Cinzel] transition-all font-semibold leading-5 text-sm sm:text-base text-left"
              >
                <span>
                  El Mundo <br />
                  de los Globos
                </span>
              </button>
            </div>

            {/* Menu Desktop */}
            <nav className="hidden sm:flex gap-10">
              <button
                onClick={() => handleNavigate("about")}
                className="text-white hover:text-[#FFD700] transition-all font-semibold"
              >
                Nosotros
              </button>
              <button
                onClick={() => handleNavigate("services")}
                className="text-white hover:text-[#FFD700] transition-all font-semibold"
              >
                Servicios
              </button>
              <button
                onClick={() => handleNavigate("contact")}
                className="text-white hover:text-[#FFD700] transition-all font-semibold"
              >
                Contacto
              </button>
            </nav>

            {/* Botón menú móvil */}
            <button
              className="sm:hidden text-white text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>

            {/* Menú móvil */}
            {menuOpen && (
              <div className="absolute top-full right-0 w-48 bg-[#6b2fac] rounded-bl-xl shadow-lg sm:hidden flex flex-col py-3 z-50">
                <button
                  onClick={() => handleNavigate("about")}
                  className="text-white hover:text-[#FFD700] py-2 px-4 text-left"
                >
                  Nosotros
                </button>
                <button
                  onClick={() => handleNavigate("services")}
                  className="text-white hover:text-[#FFD700] py-2 px-4 text-left"
                >
                  Servicios
                </button>
                <button
                  onClick={() => handleNavigate("contact")}
                  className="text-white hover:text-[#FFD700] py-2 px-4 text-left"
                >
                  Contacto
                </button>
              </div>
            )}
          </header>
        )}

        {/* CONTENIDO */}
        <Wrapper>
          <main className={cn("h-auto w-full overflow-y-auto", mainClassName)}>
            {children}
          </main>
        </Wrapper>
      </div>
    </div>
  );
}
