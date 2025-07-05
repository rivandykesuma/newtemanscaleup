import React from "react";
import SosmedIconComponents from "../components/SosmedIconComponents";
import BulletCompoent from "../components/BulletCompoent";
import FixBottomMenuComponent from "../components/FixBottomMenuComponent";
import MenuComponent from "../components/MenuComponent";
import FooterComponent from "../components/FooterComponent";
import ButtonComponent from "../components/ButtonComponent";
import LogoComponent from "../components/LogoComponent";
import Font, { Text } from "react-font";
import { GrLineChart } from "react-icons/gr";
import { BsPencilFill } from "react-icons/bs";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ImageSlideShowHeaderComponents from "../components/ImageSlideShowHeaderComponents";
import ButtonOrderPaket from "../components/ButtonOrderPaket";
import NavbarMenu from "../components/NavbarMenu";

function Layanan() {
  const portfolioheader = require("./dist/img/sampleportfolio.png");
  const portfolioheader1 = require("./dist/img/trinixsystems.png");

  return (
    <>
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
                Kami Siap Bantu Scale Up Bisnismu!
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
              <div className="flex space-x-3 md:space-x-5 lg:text-3xl text-lg">
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
      <main>
        {/* Pricelist Kelola Instagram */}
        <section className="w-full py-5 flex items-center justify-center lg:my-5 fadeIn">
          <div className="grid grid-cols-1 md:w-10/12 w-fit">
            <div className="grid justify-items-center  grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 items-center w-full gap-y-5 py-5 h-fit my-1">
              <div className="">
                <LogoComponent className="w-1/2 h-auto" />
                <div className="bg-blue-200 w-fit ps-3 pe-5 py-5 rounded-r-full">
                  <Font family="Radley">
                    <h1 className="font-bold md:text-3xl">Bantu UMKM</h1>
                  </Font>
                </div>
                <div className="ps-1 ">
                  <Font family="Radley">
                    <h1 className="font-bold md:text-2xl">
                      Jasa Kelola Instagram
                    </h1>
                    {/* <h1 className="text-sm">Melalui Jasa Kelola Instagram</h1> */}
                    <div className="grid grid-cols-[10%_90%] gap-1 py-2 lg:text-2xl">
                      <div className="flex justify-center items-center">
                        <GrLineChart />
                      </div>
                      <p className="text-sm md:text-xl">
                        Ide Konten, Kalender Konten, Riset Hastag, Copywriting,
                        Caption dari kami
                      </p>
                      <div className="flex justify-center items-center">
                        <GrLineChart />
                      </div>
                      <p className="text-sm md:text-xl">
                        Posting tiap hari termasuk hari libur
                      </p>
                      <div className="flex justify-center items-center">
                        <GrLineChart />
                      </div>
                      <p className="text-sm md:text-xl">
                        Make over bio sosial media kamu
                      </p>

                      <div className="flex justify-center items-center">
                        <GrLineChart />
                      </div>
                      <p className="text-sm md:text-xl">
                        Konsultasi Branding Bisnis Kamu
                      </p>
                      <div className="flex justify-center items-center">
                        <GrLineChart />
                      </div>
                      <p className="text-sm md:text-xl">Siap Terima Beres</p>
                    </div>
                  </Font>
                </div>
              </div>
              {/* 150K */}
              <div className="w-11/12 h-full bg-lime-600  text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between">
                <Font family="Radley">
                  <div className="">
                    <div className="flex flex-col text-sm md:text-xl">
                      Paket Hemat
                    </div>
                    <div className="text-2xl md:text-5xl">
                      250K <sub className="text-base"> (IDR)</sub>
                    </div>
                    <div className="bg-white h-1 w-3/4 my-2 md:my-5 rounded-full"></div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center">
                      <BsPencilFill className="" />
                      <div className="text-sm md:text-xl">
                        Produksi Konten (Foto)
                      </div>
                    </div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center ">
                      <BsPencilFill />
                      <div className="text-sm md:text-xl">
                        Jumlah konten 9 feed (jpg) - single post
                      </div>
                    </div>
                  </div>
                </Font>
                <Font family="Radley">
                  <div className="flex flex-col items-center h-auto self-end w-full justify-center">
                    <ButtonOrderPaket paket="Paket Reguler" />
                  </div>
                </Font>
              </div>
              {/* 350K */}
              <div className="w-11/12 h-full bg-blue-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between">
                <Font family="Radley">
                  <div>
                    <div className="flex flex-col text-sm md:text-xl">
                      Paket Cermat
                    </div>
                    <div className="text-2xl md:text-5xl">
                      450K <sub className="text-base"> (IDR)</sub>
                    </div>
                    <div className="bg-white h-1 w-3/4 my-2"></div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center">
                      <BsPencilFill className="" />
                      <div className="text-sm md:text-xl">
                        Produksi Konten (Foto & Video)
                      </div>
                    </div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center ">
                      <BsPencilFill />
                      <div className="text-sm md:text-xl">
                        Jumlah konten 15 feed (7 jpg 8 video reels)
                      </div>
                    </div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center ">
                      <BsPencilFill />
                      <div className="text-sm md:text-xl">
                        Admin posting rutin 2 hari sekali
                      </div>
                    </div>
                  </div>
                </Font>
                <Font family="Radley">
                  <div className="flex w-full  justify-center">
                    <ButtonOrderPaket paket="Paket Cermat" />
                  </div>
                </Font>
              </div>
              {/* 500K */}
              <div className="w-11/12 h-full bg-violet-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between">
                <Font family="Radley">
                  <div>
                    <div className="flex flex-col text-sm md:text-xl">
                      Paket Reguler
                    </div>
                    <div className="text-2xl md:text-5xl">
                      600K <sub className="text-base"> (IDR)</sub>
                    </div>
                    <div className="bg-white h-1 w-3/4 my-2"></div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center">
                      <BsPencilFill className="" />
                      <div className="text-sm md:text-xl">
                        Produksi Konten (Foto)
                      </div>
                    </div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center ">
                      <BsPencilFill />
                      <div className="text-sm md:text-xl">
                        Jumlah konten 30 (full jpg) - 20 single post dan 10
                        carousel
                      </div>
                    </div>
                  </div>
                </Font>
                <Font family="Radley">
                  <div className="flex w-full  justify-center">
                    <ButtonOrderPaket paket="Paket Reguler" />
                  </div>
                </Font>
              </div>
              {/* 750K */}
              {/* <div className="w-11/12 h-full bg-green-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between">
                <Font family="Radley">
                  <div>
                    <div className="flex flex-col text-sm md:text-xl">
                      Paket Bussines
                    </div>
                    <div className="text-2xl md:text-5xl">
                      850K <sub className="text-base"> (IDR)</sub>
                    </div>
                    <div className="bg-white h-1 w-3/4 my-2"></div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center">
                      <BsPencilFill className="" />
                      <div className="text-sm md:text-xl">
                        Produksi Konten (Foto & Video)
                      </div>
                    </div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center ">
                      <BsPencilFill />
                      <div className="text-sm md:text-xl">
                        Jumlah konten 30 (15 jpg & 15 video reels)
                      </div>
                    </div>
                  </div>
                </Font>
                <Font family="Radley">
                  <div className="flex w-full  justify-center">
                    <ButtonOrderPaket paket="Paket Business" />
                  </div>
                </Font>
              </div> */}
              {/* 900K */}

              <div className="2xl:hidden w-11/12 h-full bg-slate-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between">
                <Font family="Radley">
                  <div>
                    <div className="flex flex-col text-sm md:text-xl">
                      Paket Platinum
                    </div>
                    <div className="text-2xl md:text-5xl">
                      850K <sub className="text-base"> (IDR)</sub>
                    </div>
                    <div className="bg-white h-1 w-3/4 my-2"></div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center">
                      <BsPencilFill className="" />
                      <div className="text-sm md:text-xl">
                        Produksi Konten (Foto & Video)
                      </div>
                    </div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center ">
                      <BsPencilFill />
                      <div className="text-sm md:text-xl">
                        Jumlah konten 30 (15 jpg & 15 video reels)
                      </div>
                    </div>
                  </div>
                </Font>
                <Font family="Radley">
                  <div className="flex w-full  justify-center">
                    <ButtonOrderPaket paket="Paket Platinum" />
                  </div>
                </Font>
              </div>
              {/* 1200K */}
              <div className="2xl:hidden w-11/12 h-full bg-red-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between md:col-span-1">
                <Font family="Radley">
                  <div>
                    <div className="flex flex-col text-sm md:text-xl">
                      Paket Gold
                    </div>
                    <div className="text-2xl md:text-5xl">
                      1.300K <sub className="text-base"> (IDR)</sub>
                    </div>
                    <div className="bg-white h-1 w-3/4 my-2"></div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center">
                      <BsPencilFill className="" />
                      <div className="text-sm md:text-xl">
                        Produksi Konten (Video)
                      </div>
                    </div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center ">
                      <BsPencilFill />
                      <div className="text-sm md:text-xl">
                        Jumlah konten 30 (Full VIDEO)
                      </div>
                    </div>
                  </div>
                </Font>
                <Font family="Radley">
                  <div className="flex w-full  justify-center">
                    <ButtonOrderPaket paket="Paket Gold" />
                  </div>
                </Font>
              </div>
              {/* Custom */}
              {/* <div className="2xl:hidden w-1/2 md:w-1/3 h-full bg-red-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between col-span-2 md:col-span-3">
                <Font family="Radley">
                  <div className="md:w-full">
                    <div className="flex flex-col text-sm md:text-xl">
                      Paket Reguler
                    </div>
                    <div className="text-2xl md:text-3xl">
                      Custom <sub className="text-base"> (IDR)</sub>
                    </div>
                    <div className="bg-white h-1 w-3/4 my-2"></div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center">
                      <BsPencilFill className="" />
                      <div className="text-sm md:text-xl">
                        20K <sub className="text-base">(IDR)</sub> - Single Post
                        (Jpg)
                      </div>
                    </div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center ">
                      <BsPencilFill />
                      <div className="text-sm md:text-xl">
                        40K <sub className="text-base">(IDR)</sub> - Video Reels
                        (Mp4)
                      </div>
                    </div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center ">
                      <BsPencilFill />
                      <div className="text-sm md:text-xl">
                        30K <sub>(IDR)</sub> - Carousel (10 slide)
                      </div>
                    </div>
                  </div>
                </Font>
                <Font family="Radley">
                  <div className="flex w-full  justify-center">
                    <ButtonComponent
                      text="Order Paket Reguler"
                      className="bg-white text-black text-sm md:text-xl py-1 px-3 my-3 w-11/12 justify-self-center"
                    />
                  </div>
                </Font>
              </div> */}
            </div>

            {/* Responsive 900K & Custom */}
            <div className="2xl:grid 2xl:grid-cols-2 hidden gap-5">
              {/* 900K */}
              <Font family="Radley">
                <div className="w-full h-full bg-green-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between items-center">
                  <div className="w-1/2">
                    <div className="flex flex-col text-sm md:text-xl">
                      Paket Bussines
                    </div>
                    <div className="text-2xl md:text-5xl">
                      850K <sub className="text-base"> (IDR)</sub>
                    </div>
                    <div className="bg-white h-1 w-3/4 my-2"></div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center">
                      <BsPencilFill className="" />
                      <div className="text-sm md:text-xl">
                        Produksi Konten (Foto & Video)
                      </div>
                    </div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center ">
                      <BsPencilFill />
                      <div className="text-sm md:text-xl">
                        Jumlah konten 30 (15 jpg & 15 video reels)
                      </div>
                    </div>
                  </div>

                  <div className="flex   justify-center w-1/2">
                    <ButtonOrderPaket paket="Paket Bussines" />
                  </div>
                </div>
              </Font>
              {/* 1200K */}
              <Font family="Radley">
                <div className="w-full h-full bg-red-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between items-center">
                  <div className="w-1/2">
                    <div className="flex flex-col text-sm md:text-xl">
                      Paket Gold
                    </div>
                    <div className="text-2xl md:text-5xl">
                      1200K <sub className="text-base"> (IDR)</sub>
                    </div>
                    <div className="bg-white h-1 w-3/4 my-2"></div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center">
                      <BsPencilFill className="" />
                      <div className="text-sm md:text-xl">
                        Produksi Konten (Foto & Video)
                      </div>
                    </div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center ">
                      <BsPencilFill />
                      <div className="text-sm md:text-xl">
                        Jumlah konten 30 (Full VIDEO)
                      </div>
                    </div>
                  </div>

                  <div className="flex   justify-center w-1/2">
                    <ButtonOrderPaket paket="Paket Gold" />
                  </div>
                </div>
              </Font>
              {/* Custom */}
              {/* <Font family="Radley">
                <div className="w-full h-full bg-red-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between items-center">
                  <div className="  w-1/2">
                    <div className="flex flex-col text-sm md:text-xl">
                      Paket Reguler
                    </div>
                    <div className="text-2xl md:text-3xl">
                      Custom <sub className="text-base"> (IDR)</sub>
                    </div>
                    <div className="bg-white h-1 w-3/4 my-2"></div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center">
                      <BsPencilFill className="" />
                      <div className="text-sm md:text-xl">
                        20K <sub>(IDR)</sub> - Single Post (Jpg)
                      </div>
                    </div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center ">
                      <BsPencilFill />
                      <div className="text-sm md:text-xl">
                        40K <sub>(IDR)</sub> - Video Reels (Mp4)
                      </div>
                    </div>
                    <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center ">
                      <BsPencilFill />
                      <div className="text-sm md:text-xl">
                        30K <sub>(IDR)</sub> - Carousel (10 slide)
                      </div>
                    </div>
                  </div>

                  <div className="flex w-1/2  justify-center">
                    <ButtonComponent
                      text="Order Paket Reguler"
                      className="bg-white text-black text-sm md:text-xl py-1 px-3 my-3 w-full justify-self-center"
                    />
                  </div>
                </div>
              </Font> */}
            </div>
          </div>
        </section>

        {/* Pricelist Groupping */}
        <section className="w-full py-5 flex items-center justify-center lg:my-5 fadeIn">
          <div className="grid grid-cols-1 xl:grid-cols-2 lg:w-10/12 gap-5">
            {/* Jasa Pembuatan LandingPage / Website UMKM */}
            {/* <div className="grid grid-cols-2">
              <div className="">
                <LogoComponent className="w-1/2 lg:w-1/3 2xl:w-1/4 h-auto" />
                <div className="bg-blue-200 w-fit ps-3 pe-5 py-5 rounded-r-full">
                  <Font family="Radley">
                    <h1 className="font-bold md:text-3xl">Bantu UMKM</h1>
                  </Font>
                </div>
                <div className="ps-1 ">
                  <Font family="Radley">
                    <h1 className="font-bold md:text-2xl">
                      Jasa Pembuatan LandingPage / Website UMKM
                    </h1>

                    <div className="h-1 w-1/2  bg-zinc-600 my-3 rounded-full"></div>
                    <h1 className="font-bold">Harga :</h1>
                    <h1 className="w-full font-bold my-1 text-4xl">
                      150K <span className="text-base">(IDR)</span>
                    </h1>
                  </Font>
                </div>
              </div>
              <div className="grid grid-cols-1 items-center w-full space-y-5 py-5 max-h-[100vh] overflow-auto my-1 justify-items-center">
                <div className=" h-full bg-zinc-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between w-full md:w-4/5">
                  <Font family="Radley">
                    <div className="">
                      <div className="flex flex-col text-sm md:text-xl">
                        Jasa Pembuatan LandingPage / Website UMKM
                      </div>
                      <div className="text-2xl md:text-5xl">
                        150K <sub className="text-base"> (IDR)</sub>
                      </div>
                      <div className="bg-white h-1 w-3/4 my-2 md:my-5 rounded-full"></div>
                      <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center">
                        <BsPencilFill className="" />
                        <div className="text-sm md:text-xl">
                          Website company profile dibuat dari Google Site
                        </div>
                      </div>
                      <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center ">
                        <BsPencilFill />
                        <div className="text-sm md:text-xl">
                          Halaman Website 1 halaman
                        </div>
                      </div>
                    </div>
                  </Font>
                  <Font family="Radley">
                    <div className="flex flex-col items-center h-auto self-end w-full justify-center">
                      <ButtonOrderPaket paket="Landing Page" />
                    </div>
                  </Font>
                </div>
              </div>
            </div> */}
            {/* Jasa Pembuatan Website Professional */}
            <div className="grid grid-cols-2">
              <div className="">
                <LogoComponent className="w-1/2 lg:w-1/3 2xl:w-1/4 h-auto" />
                <div className="bg-blue-200 w-fit ps-3 pe-5 py-5 rounded-r-full">
                  <Font family="Radley">
                    <h1 className="font-bold md:text-3xl">Bantu UMKM</h1>
                  </Font>
                </div>
                <div className="ps-1 ">
                  <Font family="Radley">
                    <h1 className="font-bold md:text-2xl">
                      Jasa Pembuatan Website Professional
                    </h1>

                    <div className="h-1 w-1/2 bg-cyan-600 my-3 rounded-full"></div>
                    <h1 className="font-bold">Harga :</h1>
                    <h1 className="w-full font-bold my-1 text-4xl">
                      1000K <span className="text-base">(IDR)</span>
                    </h1>
                  </Font>
                </div>
              </div>
              <div className="grid grid-cols-1 items-center w-full space-y-5 py-5 max-h-[100vh] overflow-auto my-1 justify-items-center">
                <div className=" h-full bg-cyan-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between w-full md:w-4/5">
                  <Font family="Radley">
                    <div className="">
                      <div className="flex flex-col text-sm md:text-xl">
                        Jasa Pembuatan Website Professional
                      </div>
                      <div className="text-2xl md:text-5xl">
                        1000K <sub className="text-base"> (IDR)</sub>
                      </div>
                      <div className="bg-white h-1 w-3/4 my-2 md:my-5 rounded-full"></div>
                      {/* <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center">
                        <BsPencilFill className="" />
                        <div className="text-sm md:text-xl">
                          Website Company Profile Static 1-2 Halaman
                        </div>
                      </div> */}
                      <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center ">
                        <BsPencilFill />
                        <div className="text-sm md:text-xl">
                          tanpa Akses Hosting
                        </div>
                      </div>
                      <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center ">
                        <BsPencilFill />
                        <div className="text-sm md:text-xl">domain .com</div>
                      </div>
                    </div>
                  </Font>
                  <Font family="Radley">
                    <div className="flex flex-col items-center h-auto self-end w-full justify-center">
                      <ButtonOrderPaket paket="Website Professional" />
                    </div>
                  </Font>
                </div>
              </div>
            </div>
            {/*  Jasa Pembuatan Logo*/}
            <div className="grid grid-cols-2">
              <div className="">
                <LogoComponent className="w-1/2 lg:w-1/3 2xl:w-1/4 h-auto" />
                <div className="bg-blue-200 w-fit ps-3 pe-5 py-5 rounded-r-full">
                  <Font family="Radley">
                    <h1 className="font-bold md:text-3xl">Bantu UMKM</h1>
                  </Font>
                </div>
                <div className="ps-1 ">
                  <Font family="Radley">
                    <h1 className="font-bold md:text-2xl">
                      Jasa Pembuatan Logo
                    </h1>

                    <div className="h-1 w-1/2 bg-amber-600 my-3 rounded-full"></div>
                    <h1 className="font-bold">Harga :</h1>
                    <h1 className="w-full font-bold my-1 text-4xl">
                      500K <span className="text-base">(IDR)</span>
                    </h1>
                  </Font>
                </div>
              </div>
              <div className="grid grid-cols-1 items-center w-full space-y-5 py-5 max-h-[100vh] overflow-auto my-1 justify-items-center">
                <div className=" h-full bg-amber-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between w-full md:w-4/5">
                  <Font family="Radley">
                    <div className="">
                      <div className="flex flex-col text-sm md:text-xl">
                        Jasa Pembuatan Logo
                      </div>
                      <div className="text-2xl md:text-5xl">
                        500K <sub className="text-base"> (IDR)</sub>
                      </div>
                      <div className="bg-white h-1 w-3/4 my-2 md:my-5 rounded-full"></div>
                      <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center">
                        <BsPencilFill className="" />
                        <div className="text-sm md:text-xl">Produksi Logo</div>
                      </div>
                      <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center ">
                        <BsPencilFill />
                        <div className="text-sm md:text-xl">
                          Revisi Sesuai Ketentuan
                        </div>
                      </div>
                    </div>
                  </Font>
                  <Font family="Radley">
                    <div className="flex flex-col items-center h-auto self-end w-full justify-center">
                      <ButtonOrderPaket paket="Pembuatan Logo" />
                    </div>
                  </Font>
                </div>
              </div>
            </div>
            {/* Upload Produk di Marketplace */}
            <div className="grid grid-cols-2">
              <div className="">
                <LogoComponent className="w-1/2 lg:w-1/3 2xl:w-1/4 h-auto" />
                <div className="bg-blue-200 w-fit ps-3 pe-5 py-5 rounded-r-full">
                  <Font family="Radley">
                    <h1 className="font-bold md:text-3xl">Bantu UMKM</h1>
                  </Font>
                </div>
                <div className="ps-1 ">
                  <Font family="Radley">
                    <h1 className="font-bold md:text-2xl">
                      Upload Produk di Marketplace
                    </h1>

                    <div className="h-1 w-1/2 bg-indigo-600 my-3 rounded-full"></div>
                    <h1 className="font-bold">Harga :</h1>
                    <h1 className="w-full font-bold my-1 text-4xl">
                      5K <span className="text-base">(IDR)</span>
                    </h1>
                  </Font>
                </div>
              </div>
              <div className="grid grid-cols-1 items-center w-full space-y-5 py-5 max-h-[100vh] overflow-auto my-1 justify-items-center">
                <div className=" h-full bg-indigo-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between w-full md:w-4/5">
                  <Font family="Radley">
                    <div className="">
                      <div className="flex flex-col text-sm md:text-xl">
                        Upload Produk di Marketplace
                      </div>
                      <div className="text-2xl md:text-5xl">
                        150K <sub className="text-base"> (IDR)</sub>
                      </div>
                      <div className="bg-white h-1 w-3/4 my-2 md:my-5 rounded-full"></div>
                      <div className="grid grid-cols-[10%_90%] gap-2 text-sm py-1 items-center">
                        <BsPencilFill className="" />
                        <div className="text-sm md:text-xl">
                          Jumlah Upload Per Produk
                        </div>
                      </div>
                    </div>
                  </Font>
                  <Font family="Radley">
                    <div className="flex flex-col items-center h-auto self-end w-full justify-center">
                      <ButtonOrderPaket paket="Upload Produk" />
                    </div>
                  </Font>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
      <div className="h-16 bg-zinc-400 md:hidden"></div>
    </>
  );
}

export default Layanan;
