import { useState, useEffect } from "react";
import LogoComponent from "./LogoComponent";
import MenuComponent from "./MenuComponent";
import FixBottomMenuComponent from "./FixBottomMenuComponent";

function NavbarMenu() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <div
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-blue-700 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex w-full justify-between items-center py-3 md:py-4">
            {/* Logo */}
            <LogoComponent className="h-8 md:h-12 lg:h-20 w-auto" />

            {/* Desktop Menu - Hidden on mobile */}
            <div className="hidden md:block">
              <MenuComponent
                className={`${
                  scrolled ? "text-white" : "text-white"
                } hover:text-yellow-300 transition-colors text-lg`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Menu - Only shows on mobile */}
      <div className="md:hidden fixed inset-x-0 bottom-0 z-50">
        <FixBottomMenuComponent />
      </div>
    </>
  );
}

export default NavbarMenu;
