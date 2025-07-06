import React from "react";
import { Link } from "react-router-dom";
import Font from "react-font";
import SosmedIconComponents from "./SosmedIconComponents";
import { ReactComponent as Logo } from "../pages/dist/img/logo.svg";
import LogoComponent from "./LogoComponent";

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
              <div className="flex items-center gap-4 mb-4 ">
                <div className="bg-white p-2 rounded-full">
                  <LogoComponent className="w-28 h-16" />
                </div>
                <p className="font-bold h-fit ">
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
