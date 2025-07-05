import React from "react";
import SosmedIconComponents from "../components/SosmedIconComponents";
// import BulletCompoent from "../components/BulletCompoent";
import FixBottomMenuComponent from "../components/FixBottomMenuComponent";
import MenuComponent from "../components/MenuComponent";
import ButtonComponent from "../components/ButtonComponent";
import LogoComponent from "../components/LogoComponent";
import Font, { Text } from "react-font";
import { GrLineChart } from "react-icons/gr";
import { BsPencilFill } from "react-icons/bs";
import NavbarMenu from "../components/NavbarMenu";

const BulletCompoent = () => (
  <ul className="list-none p-0 m-0">
    <li className="flex items-center mb-2">
      <span className="text-yellow-400 mr-2 text-xl">●</span>
      <p className="text-white text-lg">Layanan Konsultasi Profesional</p>
    </li>
    <li className="flex items-center mb-2">
      <span className="text-yellow-400 mr-2 text-xl">●</span>
      <p className="text-white text-lg">Solusi Bisnis Inovatif</p>
    </li>
    <li className="flex items-center">
      <span className="text-yellow-400 mr-2 text-xl">●</span>
      <p className="text-white text-lg">Pendekatan Berorientasi Hasil</p>
    </li>
  </ul>
);

export default function Contact() {
  const portfolioheader = require("./dist/img/sampleportfolio.png");
  const portfolioheader1 = require("./dist/img/trinixsystems.png");
  const aktor = require("./dist/img/imageAffiliate/aktor.png");
  const portfolioheader2 = require("./dist/img/imageGaleri/imagesquare.png");
  return (
    <>
      {/* Memuat Tailwind CSS CDN untuk styling */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Meta viewport untuk responsivitas */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Memuat font Poppins dari Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Header Design (Bagian Konten Utama) */}
      <section
        className="relative w-screen min-h-screen bg-[#002060] flex flex-col" // Warna biru gelap utama
        style={{
          // Pola titik-titik halus untuk memberikan tekstur
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      >
        {/* Garis aksen kuning di atas */}
        <div className="h-2 w-full bg-[#fff714] rounded-b-full absolute top-0 left-0 z-10"></div>

        {/* Navbar Menu - Ditempatkan di bagian paling atas */}

        <NavbarMenu />

        {/* Hero Section - Konten Utama Contact Us */}
        <div className="flex flex-col lg:flex-row justify-center items-center flex-grow pt-24 pb-20 lg:pt-32 lg:pb-10 px-4 md:px-8 lg:px-16 text-white gap-8 lg:gap-16">
          {/* Bagian Informasi Kontak */}
          <div className="z-20 w-full lg:w-5/12 max-w-lg bg-blue-800/20 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-blue-700">
            {" "}
            {/* Kotak informasi dengan sedikit transparansi */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-6 font-['Poppins'] leading-tight">
              HUBUNGI KAMI
            </h1>
            <p className="text-lg md:text-xl mb-4 text-white/90">
              Kami siap membantu Anda membangun merek yang kuat dan
              berkelanjutan. Jangan ragu untuk menghubungi kami!
            </p>
            <div className="flex flex-col gap-4 md:gap-6 my-6">
              {/* Bullet Points */}
              <BulletCompoent />{" "}
              {/* Asumsi BulletComponent merender list item yang sesuai */}
            </div>
            <div className="w-full grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-5 text-base md:text-xl my-6">
              {/* Mengganti BsPencilFill dengan SVG inline */}
              <svg
                className="text-yellow-400 text-2xl md:text-3xl mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
              </svg>
              <p className="">
                Jl. Losari RT 4 RW 1, Mejoyolosari, Kec. Gudo, Kab. Jombang,
                Jawa Timur
              </p>
              {/* Mengganti BsPencilFill dengan SVG inline */}
              <svg
                className="text-yellow-400 text-2xl md:text-3xl mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
              </svg>
              <p className="">
                No HP:{" "}
                <a
                  href="tel:+6285735106764"
                  className="underline hover:text-yellow-400 transition-colors"
                >
                  085735106764
                </a>
              </p>
            </div>
            {/* Tombol CTA (WhatsApp) */}
            {/* <div className="mt-8">
              <ButtonComponent className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-lg text-lg transition-all shadow-md hover:shadow-xl">
                Hubungi Kami Via WhatsApp
              </ButtonComponent>
            </div> */}
            {/* Ikon Sosial Media */}
            <div className="flex my-6 space-x-4 md:space-x-6 text-2xl md:text-4xl">
              <SosmedIconComponents />{" "}
              {/* Asumsi SosmedIconComponents merender ikon-ikon */}
            </div>
          </div>

          {/* Bagian Peta */}
          <div className="z-20 w-full lg:w-7/12 max-w-2xl bg-blue-800/20 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-blue-700">
            {" "}
            {/* Kotak peta dengan sedikit transparansi */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.5186000780287!2d112.23419037466542!3d-7.525547692484399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78377b0c3f0b2f%3A0x6d8b3c6e7f7b3c6e!2sLosari%2C%20Mejoyolosari%2C%20Kec.%20Gudo%2C%20Kabupaten%20Jombang%2C%20Jawa%20Timur!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" // Contoh URL Google Maps embed
              width="100%"
              height="450" // Tinggi peta disesuaikan
              style={{ border: 0 }}
              // allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg border-4 border-[#fff714] shadow-lg" // Menambahkan rounded dan border kuning
              title="Lokasi Teman Scaleup" // Judul untuk aksesibilitas
            ></iframe>
          </div>
        </div>

        {/* Bottom Fixed Menu (untuk Mobile) */}
        <div className="fixed inset-x-0 bottom-0 md:hidden border-t-4 border-[#fff714] bg-[#002060] z-50">
          {" "}
          {/* Menambahkan background color agar tidak transparan */}
          <FixBottomMenuComponent />
        </div>
      </section>
    </>
  );
}
