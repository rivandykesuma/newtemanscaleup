import React from "react";
import { Link } from "react-router-dom";
import Font from "react-font";
import SosmedIconComponents from "./SosmedIconComponents";
import { ReactComponent as Logo } from "../pages/dist/img/logo.svg";

// export default function FooterComponent() {
//   return (
//     <>
//       <footer className="text-white bg-[#003cff] hidden md:block">
//         <Font family="Radley">
//           <div className="flex justify-center py-10">
//             <div className="md:w-10/12 hidden md:grid grid-cols-3  justify-items-center text-xl 2xl:text-2xl">
//               {/* Site Menu */}
//               <div className="w-3/4  flex flex-col items-center">
//                 <h1 className="font-bold underline">Site Menu:</h1>
//                 <ul>
//                   <li className="flex justify-center">
//                     <Link
//                       to="/"
//                       className="text-white"
//                       onClick={() => {
//                         window.scrollTo(0, 0);
//                       }}
//                     >
//                       Home
//                     </Link>
//                   </li>
//                   <li className="flex justify-center">
//                     <Link
//                       to="/layanan"
//                       className="text-white"
//                       onClick={() => {
//                         window.scrollTo(0, 0);
//                       }}
//                     >
//                       Layanan Kami
//                     </Link>
//                   </li>
//                   <li className="flex justify-center">
//                     <Link
//                       to="/portfolio"
//                       className="text-white"
//                       onClick={() => {
//                         window.scrollTo(0, 0);
//                       }}
//                     >
//                       Galery Kami
//                     </Link>
//                   </li>
//                   <li className="flex justify-center">
//                     <Link
//                       to="/affiliator"
//                       className="text-white"
//                       onClick={() => {
//                         window.scrollTo(0, 0);
//                       }}
//                     >
//                       Join Affiliator
//                     </Link>
//                   </li>
//                   <li className="flex justify-center">
//                     <Link
//                       to="/contact"
//                       className="text-white"
//                       onClick={() => {
//                         window.scrollTo(0, 0);
//                       }}
//                     >
//                       Hubungi Kami
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               {/* Profil */}
//               <div className="w-3/4">
//                 <h1 className="font-bold underline">Profil Kami :</h1>
//                 <div className="py-3">
//                   <Logo className="float-left  h-fit flex justify-end items-end w-16 mr-1" />
//                   <p className=" text-xl 2xl:text-2xl w-4/5 whitespace-normal">
//                     Membantu UMKM Scaleup melalui konten-konten branding &
//                     marketing
//                   </p>
//                 </div>
//                 <p className="text-lg font-bold">NIB : 2603230001576</p>
//               </div>
//               {/* alamat */}
//               <div className="w-3/4">
//                 <h1 className="underline">Telp :</h1>
//                 <h2>085735106764</h2>
//                 <h1 className="mt-3 underline">Alamat :</h1>
//                 <h2>
//                   Jl. Losari RT 4 RW 1, Mejoyolosari, Kec. Gudo, Kab. Jombang
//                 </h2>
//                 <span className="flex gap-3 my-5">
//                   <SosmedIconComponents />
//                 </span>
//               </div>
//             </div>
//           </div>
//         </Font>
//       </footer>
//     </>
//   );
// }

// =========================================================

// import React from "react";
// import { Link } from "react-router-dom";
// import Font from "react-font";
// import SosmedIconComponents from "./SosmedIconComponents";
// import { ReactComponent as Logo } from "../pages/dist/img/logo.svg";

// export default function FooterComponent() {
//   return (
//     <>
//       <footer className="hidden md:block">
//         <Font family="Radley">
//           <div className="bg-[#003cff] text-white">
//             <div className="container mx-auto px-6 py-12">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {/* Site Menu - Blue Section */}
//                 <div className="bg-[#003cff] p-6 rounded-lg shadow-lg">
//                   <h1 className="text-2xl font-bold text-yellow-300 mb-6 border-b-2 border-yellow-300 pb-2">
//                     Site Menu
//                   </h1>
//                   <ul className="space-y-4">
//                     {[
//                       { path: "/", label: "Home" },
//                       { path: "/layanan", label: "Layanan Kami" },
//                       { path: "/portfolio", label: "Galery Kami" },
//                       { path: "/affiliator", label: "Join Affiliator" },
//                       { path: "/contact", label: "Hubungi Kami" },
//                     ].map((item) => (
//                       <li key={item.path}>
//                         <Link
//                           to={item.path}
//                           className="text-white hover:text-yellow-300 transition-colors duration-300 flex items-center"
//                           onClick={() => window.scrollTo(0, 0)}
//                         >
//                           <span className="mr-2">•</span>
//                           {item.label}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Profil - Yellow Section */}
//                 <div className="bg-yellow-400 text-[#003cff] p-6 rounded-lg shadow-lg">
//                   <h1 className="text-2xl font-bold mb-6 border-b-2 border-[#003cff] pb-2">
//                     Profil Kami
//                   </h1>
//                   <div className="flex items-start space-x-4 mb-4">
//                     <Logo className="w-16 h-16 flex-shrink-0" />
//                     <p className="text-lg leading-relaxed font-medium">
//                       Membantu UMKM Scaleup melalui konten-konten branding &
//                       marketing
//                     </p>
//                   </div>
//                   <div className="bg-[#003cff] text-yellow-400 px-4 py-2 rounded-lg font-bold text-center">
//                     NIB: 2603230001576
//                   </div>
//                 </div>

//                 {/* Kontak - Blue Section */}
//                 <div className="bg-[#003cff] p-6 rounded-lg shadow-lg">
//                   <h1 className="text-2xl font-bold text-yellow-300 mb-6 border-b-2 border-yellow-300 pb-2">
//                     Kontak Kami
//                   </h1>
//                   <div className="space-y-4">
//                     <div>
//                       <h2 className="font-semibold text-lg text-yellow-300">
//                         Telepon:
//                       </h2>
//                       <p className="text-lg font-medium">085735106764</p>
//                     </div>
//                     <div>
//                       <h2 className="font-semibold text-lg text-yellow-300">
//                         Alamat:
//                       </h2>
//                       <p className="text-lg leading-relaxed font-medium">
//                         Jl. Losari RT 4 RW 1, Mejoyolosari, Kec. Gudo, Kab.
//                         Jombang
//                       </p>
//                     </div>
//                     <div className="pt-2">
//                       <h2 className="font-semibold text-lg text-yellow-300 mb-3">
//                         Media Sosial:
//                       </h2>
//                       <div className="flex space-x-4 justify-center md:justify-start">
//                         <SosmedIconComponents />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Footer Bottom - Yellow Section */}
//           <div className="bg-yellow-400 text-[#003cff] py-4">
//             <div className="container mx-auto px-6 text-center font-bold">
//               <p>© {new Date().getFullYear()} All Rights Reserved</p>
//             </div>
//           </div>
//         </Font>
//       </footer>
//     </>
//   );
// }

// ========================================

// import React from "react";
// import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <footer className="hidden md:block relative overflow-hidden bg-[#003cff] bg-opacity-90 text-white">
      {/* Background dengan Bubble Dinamis */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Bubble besar kuning */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-yellow-400 rounded-full opacity-20 mix-blend-overlay"></div>
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-yellow-400 rounded-full opacity-20 mix-blend-overlay"></div>

        {/* Bubble medium biru muda */}
        <div className="absolute left-10 top-1/4 w-40 h-40 bg-yellow-300 rounded-full opacity-30"></div>

        {/* Bubble kecil kuning */}
        <div className="absolute right-72 bottom-1/4 w-56 h-56 bg-yellow-400 rounded-full opacity-20 mix-blend-lighten"></div>
        <div className="absolute left-72 bottom-1/4 w-56 h-56 bg-yellow-400 rounded-full opacity-20 mix-blend-lighten"></div>

        {/* Bubble cluster kiri bawah */}
        <div className="absolute -left-10 -bottom-10 w-60 h-60">
          <div className="absolute left-0 bottom-0 w-20 h-20 bg-yellow-400 rounded-full opacity-15"></div>
          <div className="absolute left-16 bottom-8 w-12 h-12 bg-blue-200 rounded-full opacity-20"></div>
          <div className="absolute left-8 bottom-24 w-16 h-16 bg-yellow-300 rounded-full opacity-10"></div>
        </div>

        {/* Bubble cluster kanan atas */}
        <div className="absolute -right-10 -top-10 w-72 h-72">
          <div className="absolute right-10 top-10 w-24 h-24 bg-blue-400 rounded-full opacity-10"></div>
          <div className="absolute right-0 top-24 w-16 h-16 bg-yellow-300 rounded-full opacity-15 mix-blend-lighten"></div>
          <div className="absolute right-24 top-0 w-20 h-20 bg-blue-300 rounded-full opacity-10"></div>
        </div>

        {/* Bubble cluster kanan atas */}
        <div className="absolute -left-10 -top-10 w-72 h-72">
          <div className="absolute right-10 top-10 w-24 h-24 bg-blue-400 rounded-full opacity-10"></div>
          <div className="absolute left-0 top-24 w-16 h-16 bg-yellow-300 rounded-full opacity-15 mix-blend-lighten"></div>
          <div className="absolute right-24 top-0 w-20 h-20 bg-blue-300 rounded-full opacity-10"></div>
        </div>

        {/* Pola geometris subtle */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==')]"></div>
      </div>

      {/* Konten Footer */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Menu Section */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl">
              <h3 className="text-yellow-300 font-bold text-3xl mb-6 pb-2 border-b border-yellow-300/30">
                Menu
              </h3>
              <ul className="space-y-3 text-lg">
                {[
                  { label: "Home", link: "/" },
                  { label: "Layanan Kami", link: "/layanan" },
                  { label: "Galery Kami", link: "/portfolio" },
                  { label: "Join Affiliator", link: "/affiliator" },
                  { label: "Hubungi Kami", link: "/contact" },
                ].map(({ label, link }) => (
                  <li key={label}>
                    <Link
                      to={link}
                      className="block text-white hover:text-yellow-300 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Profile Section */}
            <div className="bg-yellow-400/90 p-8 rounded-2xl shadow-xl text-blue-900">
              <h3 className="font-bold text-xl mb-6 pb-2 border-b border-blue-900/20">
                Profil Kami
              </h3>
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-white p-2 rounded-full">
                  <Logo className="w-12 h-12" />
                </div>
                <p className="font-medium">
                  Membantu UMKM Scaleup melalui konten-konten branding &
                  marketing
                </p>
              </div>
              <div className="bg-blue-900 text-yellow-300 px-4 py-2 rounded-lg font-bold text-center">
                NIB: 2603230001576
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl">
              <h3 className="text-yellow-300 font-bold text-3xl mb-6 pb-2 border-b border-yellow-300/30">
                Kontak
              </h3>
              <div className="space-y-4 text-lg">
                <div>
                  <h4 className="font-semibold text-yellow-300">Telepon:</h4>
                  <p>085735106764</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-300">Alamat:</h4>
                  <p>
                    Jl. Losari RT 4 RW 1, Mejoyolosari, Kec. Gudo, Kab. Jombang
                  </p>
                </div>
                <div className="pt-4 font-bold">
                  <h4 className="font-semibold text-yellow-300 mb-3">
                    Media Sosial:
                  </h4>
                  <div className="flex gap-4 text-2xl">
                    <SosmedIconComponents />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="font-bold text-lg">
            © {new Date().getFullYear()} All Rights Reserved by Teman Scaleup
          </p>
          <p className="text-sm mt-2">Professional Digital Solutions</p>
        </div>
      </div>
    </footer>
  );
}
