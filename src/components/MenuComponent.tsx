// import * as React from "react";
// import "./dist/MenuComponent.css";
// import { Link } from "react-router-dom";

// interface Props {
//   className?: string;
// }

// function MenuComponent(props: Props) {
//   return (
//     <>
//       <nav className="flex justify-items-center ">
//         <ul className="justify-items-center hidden md:flex ">
//           <li className="flex">
//             <Link
//               to="/"
//               className={props.className}
//               onClick={() => {
//                 window.scrollTo(0, 0);
//               }}
//             >
//               Home
//             </Link>
//           </li>
//           <li className="flex">
//             <Link
//               to="/layanan"
//               className={props.className}
//               onClick={() => {
//                 window.scrollTo(0, 0);
//               }}
//             >
//               Layanan Kami
//             </Link>
//           </li>
//           <li className="flex">
//             <Link
//               to="/portfolio"
//               className={props.className}
//               onClick={() => {
//                 window.scrollTo(0, 0);
//               }}
//             >
//               Galeri Kami
//             </Link>
//           </li>
//           <li className="flex">
//             <Link
//               to="/affiliator"
//               className={props.className}
//               onClick={() => {
//                 window.scrollTo(0, 0);
//               }}
//             >
//               Join Affiliator
//             </Link>
//           </li>
//           <li className="flex">
//             <Link
//               to="/contact"
//               className={props.className}
//               onClick={() => {
//                 window.scrollTo(0, 0);
//               }}
//             >
//               Hubungi Kami
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// }

// export default MenuComponent;

// ==================================

import * as React from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

interface Props {
  className?: string;
}

function MenuComponent(props: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Menu items data
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/layanan", label: "Layanan Kami" },
    { path: "/portfolio", label: "Galeri Kami" },
    { path: "/affiliator", label: "Join Affiliator" },
    { path: "/contact", label: "Hubungi Kami" },
  ];

  return (
    <>
      {/* Desktop Menu - Always visible on md screens and up */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`${props.className} hover:text-blue-400 transition-colors duration-300`}
                onClick={() => window.scrollTo(0, 0)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden p-2 text-2xl focus:outline-none"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu - Only visible when toggled */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={toggleMobileMenu}
        >
          <div
            className="absolute right-0 top-0 h-full w-3/4 bg-white shadow-lg p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 p-1 text-gray-600 hover:text-gray-900"
              onClick={toggleMobileMenu}
            >
              <FiX size={24} />
            </button>

            <ul className="mt-12 space-y-4">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block py-3 px-4 ${props.className} hover:bg-gray-100 rounded-lg transition-colors`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuComponent;
