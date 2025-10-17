import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <div
      className={cn(
        "relative flex min-h-screen font-serif mx-0 md:mx-1 sm:mx-5 mt-0 md:mt-2",
        className
      )}
    >
      <div className="flex w-full flex-col">
        {/* NAVBAR */}
        {header && (
          <header
            className={cn(
              "fixed top-0 left-0 w-full  z-50 transition-all duration-500 ease-in-out",
              scrolled
                ? "backdrop-blur-md bg-primary-100 shadow-md border-b border-white/20"
                : "bg-primary-500"
            )}
          >
            <div className="h-20 sm:h-24 flex items-center justify-between px-6 sm:px-16 font-[Cinzel] uppercase tracking-wide">
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
                  <span className='mx-5 text-lg'> 20 años </span>
                </button>
              </div>

              {/* Menu Desktop */}
              <nav className="hidden sm:flex gap-10">
                <button
                  onClick={() => handleNavigate("about")}
                  className={ `text-white hover:text-[#FFD700] transition-all font-semibold`}
                >
                  Nosotros
                </button>
                <button
                  onClick={() => handleNavigate("services")}
                  className={ `text-white hover:text-[#FFD700] transition-all font-semibold`}
                >
                  Servicios
                </button>
                <button
                  onClick={() => handleNavigate("contact")}
                  className={ `text-white hover:text-[#FFD700] transition-all font-semibold`}
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
  <div
    className={cn(
      "absolute top-full right-0 w-48 rounded-bl-xl shadow-lg sm:hidden flex flex-col py-3 z-50 transition-all duration-500 ease-in-out",
      scrolled
        ? "backdrop-blur-md bg-primary-100 border border-white/20"
        : "backdrop-blur-md bg-primary-500"
    )}
  >
    <button
      onClick={() => handleNavigate("about")}
      className={ `text-white hover:text-[#FFD700] py-2 px-4 text-left transition-all`}
    >
      Nosotros
    </button>
    <button
      onClick={() => handleNavigate("services")}
      className={ `text-white hover:text-[#FFD700] py-2 px-4 text-left transition-all`}
    >
      Servicios
    </button>
    <button
      onClick={() => handleNavigate("contact")}
      className={ `text-white hover:text-[#FFD700] py-2 px-4 text-left transition-all`}
    >
      Contacto
    </button>
  </div>
)}

            </div>
          </header>
        )}

        {/* CONTENIDO */}
        <Wrapper>
          <main
            className={cn(
              "h-auto w-full overflow-y-auto pt-20 sm:pt-24", // padding para que no tape el header fijo
              mainClassName
            )}
          >
            {children}
          </main>
        </Wrapper>
      </div>
    </div>
  );
}
