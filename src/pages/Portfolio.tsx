import React, { useState } from "react";
import SosmedIconComponents from "../components/SosmedIconComponents";
import BulletCompoent from "../components/BulletCompoent";
import FixBottomMenuComponent from "../components/FixBottomMenuComponent";
import MenuComponent from "../components/MenuComponent";
import ButtonComponent from "../components/ButtonComponent";
import LogoComponent from "../components/LogoComponent";
import Font, { Text } from "react-font";
import { GrLineChart } from "react-icons/gr";
import { BsPencilFill } from "react-icons/bs";
import FooterComponent from "../components/FooterComponent";
import ImageSlideShowComponent from "../components/ImageSlideShowComponent";
import { portfolio } from "./DataSupport";
import CallToActionWA from "../components/CallToAction";
import ImageSlideShowHeaderComponents from "../components/ImageSlideShowHeaderComponents";
import NavbarMenu from "../components/NavbarMenu";

export default function Portfolio(props: any) {
  const portfolioheader = require("./dist/img/sampleportfolio.png");
  const portfolioheader1 = require("./dist/img/trinixsystems.png");
  const aktor = require("./dist/img/imageAffiliate/aktor.png");
  const portfolioheader2 = require("./dist/img/imageGaleri/imagesquare.png");

  const [cekOpenImage, setCekOpenImage] = useState(false);
  const [hiddenBottomMenu, setHiddenBottomMenu] = useState("block");
  const [openImage, setOpenImage] = useState("hidden");
  const [idPortfolio, setIdPortFolio] = useState(0);

  const cekOpenImage1 = !cekOpenImage;

  const HandleOpenCloseImage = (e: any) => {
    e.preventDefault();
    // console.log("test key : ", e.target.id);
    if (cekOpenImage1) {
      setOpenImage("flex");
      setHiddenBottomMenu("hidden");
      setCekOpenImage(true);
      setIdPortFolio(e.target.id);
    } else {
      setOpenImage("hidden");
      setHiddenBottomMenu("block");
      setCekOpenImage(false);
      setIdPortFolio(0);
    }
  };

  return (
    <>
      <div
        className={`w-screen h-screen fixed z-[99] flex flex-col items-center ${openImage} fadeIn`}
      >
        <h1
          onClick={HandleOpenCloseImage}
          className="absolute cursor-pointer w-fit text-center text-2xl md:text-5xl z-10 text-white font-bold mt-5 md:mt-0 "
        >
          x
        </h1>
        <ImageSlideShowComponent getValueNumber={idPortfolio} />
      </div>
      {/* Header Design */}
      <header className="relative">
        <NavbarMenu />
        {/* Hero Section */}

        <div
          className="relative md:grid md:grid-cols-2 justify-items-center flex justify-around h-[35vh] md:h-[30vh] lg:h-[100vh] overflow-hidden bg-blue-500" // Warna biru dominan
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><rect width="20" height="20" fill="%23172554"/><path d="M0 20L20 0H0V20Z" fill="%23FACC15" opacity="0.1"/></svg>\')', // Pola segitiga kecil kuning samar
            backgroundSize: "70px 70px", // Ukuran pola
          }}
        >
          {/* Memuat Tailwind CSS CDN untuk styling */}
          <script src="https://cdn.tailwindcss.com"></script>
          {/* Meta viewport untuk responsivitas */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* Memuat font Poppins dari Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* Background Bubble Layer - TIDAK DIUBAH */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-10 left-10 w-24 h-24 rounded-full border-4 border-yellow-400 bg-blue-800/30 blur-sm animate-ping"></div>
            <div className="absolute bottom-20 right-16 w-32 h-32 rounded-full border-4 border-yellow-200 bg-blue-700/40 blur-sm animate-ping"></div>
            <div className="absolute top-36 left-1/2 w-40 h-40 rounded-full border-4 border-yellow-200 bg-blue-600/20 blur-lg  transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-5 left-1/3 w-20 h-20 rounded-full border-2 border-yellow-200 bg-blue-600/20 blur-sm"></div>
            <div className="absolute top-10 right-10 w-24 h-24 rounded-full border-4 border-yellow-400 bg-blue-800/30 blur-sm animate-pulse"></div>
            <div className="absolute top-20 right-16 w-32 h-32 rounded-full border-4 border-yellow-300 bg-blue-700/40 blur-sm animate-ping"></div>
            <div className="absolute bottom-36 right-1/2 w-40 h-40 rounded-full border-4 border-yellow-500 bg-blue-700/30 blur-lg transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-5 left-1/3 w-20 h-20 rounded-full border-2 border-yellow-200 bg-blue-600/20 blur-sm animate-ping"></div>
          </div>

          {/* Konten Utama (Text, Bullet Points, Social Media) */}
          <div className="absolute md:static z-50 self-center text-white w-10/12 md:w-10/12 lg:w-9/12 p-4 md:p-0">
            {" "}
            {/* Menambah padding untuk layar kecil */}
            {/* Judul Utama yang Lebih Profesional dan Menarik */}
            <h1 className="text-sm md:text-2xl lg:text-5xl font-bold w-3/4 md:w-full text-left mt-10 font-['Poppins'] tracking-wide leading-tight">
              {/* Menggunakan warna kuning untuk penekanan pada "Terbukti!" */}
              {/* <span className="block text-yellow-300 text-xl md:text-3xl lg:text-6xl">
                Terbukti!
              </span> */}
              <span className="block mt-2 text-white md:text-3xl lg:text-5xl">
                PORTFOLIO KAMI
              </span>
            </h1>
            {/* Bagian Bullet Points */}
            <div className="flex my-4 lg:my-8 space-x-2 lg:space-x-10">
              {" "}
              {/* Menyesuaikan margin */}
              <BulletCompoent />
            </div>
            {/* Bagian Informasi Sosial Media */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8 mt-6">
              {" "}
              {/* Menyesuaikan gap dan margin-top */}
              <p className="text-sm md:text-xl lg:text-2xl 2xl:text-3xl font-medium text-yellow-200">
                {" "}
                {/* Mengubah warna teks untuk penekanan */}
                @teman.scaleup
              </p>
              <span className="hidden lg:block h-6 w-px bg-white/50"></span>
              <div className="flex space-x-3 md:space-x-5  lg:text-3xl text-lg">
                <SosmedIconComponents />
              </div>
            </div>
          </div>

          {/* Slider Images - TIDAK DIUBAH */}
          <div className="absolute -z-1 bottom-0 md:bottom-16 right-0 md:right-1/4">
            <ImageSlideShowHeaderComponents className="block md:hidden h-[30vh] md:h-[40vh] lg:h-[35vh] w-full bottom-0 right-0" />
            <ImageSlideShowHeaderComponents className="hidden md:block h-40 md:h-80 lg:h-[80vh] w-full" />
          </div>
        </div>
      </header>

      {/* mainpage */}
      <main className="fadeIn">
        {/* Opening Porfolio Social Media */}
        <section className="">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-0.5 lg:grid-cols-4 my-0.5">
            <div className="bg-yellow-200 ">
              <img
                src={`${process.env.PUBLIC_URL}/portfolio/mockup/Casade Interior.png`}
                alt="Casade Interior"
              />
            </div>

            <div className="relative bg-gradient-to-br from-green-100 via-green-200 to-yellow-50 md:hidden lg:block overflow-hidden">
              {/* SVG Pattern Layer */}
              <div
                className="absolute inset-0 opacity-10 z-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml;utf8,<svg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='20' cy='20' r='10' fill='%23FACC15'/></svg>")`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Floating Bubble Effects */}
              <div className="absolute w-32 h-32 bg-yellow-300/80 rounded-full top-10 left-5 blur-2xl animate-pulse"></div>
              <div className="absolute w-24 h-24 bg-green-400/80 rounded-full bottom-10 right-10 blur-2xl animate-pulse"></div>

              {/* Image Display */}
              <img
                src={`${process.env.PUBLIC_URL}/portfolio/mockup/Peace of Akhwat.png`}
                alt="Peace of Akhwat"
                className="relative z-10 mx-auto py-10"
              />
            </div>

            <div className="bg-violet-200">
              <img
                src={`${process.env.PUBLIC_URL}/portfolio/mockup/Helwa Beuaty care.png`}
                alt="Helwa Beuaty care"
              />
            </div>
            {/* <div className="bg-green-200">
              <img
                src={`${process.env.PUBLIC_URL}/portfolio/mockup/Peace of Akhwat.png`}
                alt="Peace of Akhwat"
              />
            </div> */}

            {/* <div className="bg-blue-200 md:hidden lg:block">
              <img
                src={`${process.env.PUBLIC_URL}/portfolio/mockup/Maedahi.png`}
                alt="Maedahi"
              />
            </div> */}
            <div className="relative bg-gradient-to-br from-blue-100 via-blue-200 to-yellow-50 md:hidden lg:block overflow-hidden">
              {/* SVG Pattern Layer */}
              <div
                className="absolute inset-0 opacity-10 z-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml;utf8,<svg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='20' cy='20' r='10' fill='%23FACC15'/></svg>")`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Floating Bubble Effects */}
              <div className="absolute w-32 h-32 bg-yellow-300/80 rounded-full top-10 left-5 blur-2xl animate-pulse"></div>
              <div className="absolute w-24 h-24 bg-blue-400/80 rounded-full bottom-10 right-10 blur-2xl animate-pulse"></div>

              {/* Image Display */}
              <img
                src={`${process.env.PUBLIC_URL}/portfolio/mockup/Maedahi.png`}
                alt="Maedahi"
                className="relative z-10 mx-auto py-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="w-full aspect-square mb-0.5">
              <img src={portfolioheader2} alt="" />
            </div>
            <div className="w-full aspect-square mb-0.5">
              <img src={portfolioheader2} alt="" />
            </div>
          </div>
        </section>

        {/* button Hubungi Kami */}
        <CallToActionWA />

        {/* title more portfolio */}
        <section className="pt-5">
          <Font family="Radley">
            <div className="text-center mb-12 lg:mb-20">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-900">
                More Portfolio
              </h1>
              <div className="flex justify-center mt-4">
                <div className="h-1 w-24 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
          </Font>
        </section>
        {/* Sosial Media Management Portfolio */}
        <section>
          <Font family="Radley">
            <div className="flex gap-3 items-center justify-center mb-6">
              <div className="p-2 bg-yellow-400 rounded-full group-hover:rotate-12 transition-transform">
                <BsPencilFill className="text-blue-900 text-lg" />
              </div>
              <h1 className="text-black text-xl md:text-2xl lg:text-3xl font-semibold">
                Layanan Sosial Media Manajemen
              </h1>
            </div>
            <div className="flex justify-center mb-8">
              <div className="h-0.5 w-1/3 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
            </div>
          </Font>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {portfolio.map((p, key) => {
              return (
                <div
                  className="w-full aspect-square mb-0.5"
                  onClick={HandleOpenCloseImage}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/portfolio/mockup/${p}`}
                    alt={p}
                    id={`${key}`}
                    className=" cursor-pointer"
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* button Hubungi Kami */}

        <CallToActionWA />
      </main>
      <FooterComponent />
      <div className="h-16 bg-zinc-400 md:hidden"></div>
    </>
  );
}
