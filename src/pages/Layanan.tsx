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
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Layanan() {
  const portfolioheader = require("./dist/img/sampleportfolio.png");
  const portfolioheader1 = require("./dist/img/trinixsystems.png");

  return (
    <>
      {/* Header Design */}
      <header className="relative w-full">
        {/* Navbar Menu */}
        <div className="absolute w-full flex justify-center z-50">
          <div className="flex w-11/12 md:w-10/12 lg:w-9/12 justify-items-center justify-center  md:justify-between py-0 md:py-2 ">
            <LogoComponent className="h-5 md:h-10 lg:h-15 w-auto" />
            <MenuComponent className="text-white self-center text-base lg:text-xl " />
          </div>
          <div className="fixed inset-x-0 bottom-0 md:hidden ">
            <FixBottomMenuComponent />
          </div>
        </div>
        {/* Hero Section */}
        <div className="relative flex justify-center h-[35vh] md:h-[30vh] lg:h-[100vh]">
          <div className="absolute z-50 self-center text-white w-10/12 md:w-10/12 lg:w-9/12">
            <h1 className="text-sm md:text-2xl lg:text-4xl   font-bold w-3/4 md:w-1/2 text-left mt-10">
              AGENCY SOSIAL MEDIA MENAJEMEN PULUHAN BRAND DI BERBAGAI KOTA TELAH
              MENGGUNAKAN JASA KAMI
            </h1>
            <div>
              <div className="flex my-2 lg:my-5 space-x-2 lg:space-x-10">
                <BulletCompoent />
              </div>
            </div>
            <p className="text-sm md:text-xl lg:text-2xl 2xl:text-4xl block lg:flex items-center">
              @teman.scaleup <span className="mx-5 hidden lg:flex">|</span>
              <span className="flex space-x-5 md:ml-3 ml-0 my-2 md:my-0 text-base md:text-2xl lg:text-2xl 2xl:text-3xl ">
                <SosmedIconComponents />
              </span>
            </p>
          </div>
          <div className="absolute lg:relative -z-1 bottom-0 right-0">
            <img
              src={portfolioheader}
              alt="portfolio"
              className="block lg:hidden h-28 md:h-[20vh] lg:h-[35vh] w-auto bottom-0"
            />
            <img
              src={portfolioheader1}
              alt="portfolio"
              className="hidden lg:block h-40 md:h-80 lg:h-[80vh] w-auto ml-[50vw] mt-[15vh] "
            />
          </div>
        </div>
      </header>
      <main>
        {/* Pricelist Kelola Instagram */}
        <section className="w-full py-5 flex items-center justify-center lg:my-5">
          <div className="grid grid-cols-1 md:w-10/12">
            <div className="grid justify-items-center  grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 items-center w-full gap-y-5 py-5 h-fit my-1">
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
              <div className="w-11/12 h-full bg-blue-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between">
                <Font family="Radley">
                  <div className="">
                    <div className="flex flex-col text-sm md:text-xl">
                      Paket Reguler
                    </div>
                    <div className="text-2xl md:text-5xl">
                      150K <sub className="text-base"> (IDR)</sub>
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
                    <ButtonComponent
                      text="Order Paket Reguler"
                      className="bg-white text-black text-sm md:text-xl py-1 px-3 my-3 w-11/12 justify-self-center"
                    />
                  </div>
                </Font>
              </div>
              {/* 350K */}
              <div className="w-11/12 h-full bg-blue-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between">
                <Font family="Radley">
                  <div>
                    <div className="flex flex-col text-sm md:text-xl">
                      Paket Reguler
                    </div>
                    <div className="text-2xl md:text-5xl">
                      350K <sub className="text-base"> (IDR)</sub>
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
                    <ButtonComponent
                      text="Order Paket Reguler"
                      className="bg-white text-black text-sm md:text-xl py-1 px-3 my-3 w-11/12 justify-self-center"
                    />
                  </div>
                </Font>
              </div>
              {/* 500K */}
              <div className="w-11/12 h-full bg-blue-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between">
                <Font family="Radley">
                  <div>
                    <div className="flex flex-col text-sm md:text-xl">
                      Paket Reguler
                    </div>
                    <div className="text-2xl md:text-5xl">
                      500K <sub className="text-base"> (IDR)</sub>
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
                    <ButtonComponent
                      text="Order Paket Reguler"
                      className="bg-white text-black text-sm md:text-xl py-1 px-3 my-3 w-11/12 justify-self-center"
                    />
                  </div>
                </Font>
              </div>
              {/* 750K */}
              <div className="w-11/12 h-full bg-blue-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between">
                <Font family="Radley">
                  <div>
                    <div className="flex flex-col text-sm md:text-xl">
                      Paket Reguler
                    </div>
                    <div className="text-2xl md:text-5xl">
                      750K <sub className="text-base"> (IDR)</sub>
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
                    <ButtonComponent
                      text="Order Paket Reguler"
                      className="bg-white text-black text-sm md:text-xl py-1 px-3 my-3 w-11/12 justify-self-center"
                    />
                  </div>
                </Font>
              </div>
              {/* 900K */}
              <div className="2xl:hidden w-11/12 h-full bg-blue-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between">
                <Font family="Radley">
                  <div>
                    <div className="flex flex-col text-sm md:text-xl">
                      Paket Reguler
                    </div>
                    <div className="text-2xl md:text-5xl">
                      900K <sub className="text-base"> (IDR)</sub>
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
                        Jumlah konten 30 (10 jpg & 20 video reels)
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
              </div>
              {/* Custom */}
              <div className="2xl:hidden w-1/2 md:w-1/3 h-full bg-blue-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between col-span-2 md:col-span-3">
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
              </div>
            </div>
            {/* Responsive 900K & Custom */}
            <div className="2xl:grid 2xl:grid-cols-2 hidden gap-5">
              {/* 900K */}
              <Font family="Radley">
                <div className="w-full h-full bg-blue-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between items-center">
                  <div className="w-1/2">
                    <div className="flex flex-col text-sm md:text-xl">
                      Paket Reguler
                    </div>
                    <div className="text-2xl md:text-5xl">
                      900K <sub className="text-base"> (IDR)</sub>
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
                        Jumlah konten 30 (10 jpg & 20 video reels)
                      </div>
                    </div>
                  </div>

                  <div className="flex   justify-center w-1/2">
                    <ButtonComponent
                      text="Order Paket Reguler"
                      className="bg-white text-black text-sm md:text-xl py-1 px-3 my-3 w-full justify-self-center"
                    />
                  </div>
                </div>
              </Font>
              {/* Custom */}
              <Font family="Radley">
                <div className="w-full h-full bg-blue-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between items-center">
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
              </Font>
            </div>
          </div>
        </section>

        {/* Pricelist Groupping */}
        <section className="w-full py-5 flex items-center justify-center lg:my-5">
          <div className="grid grid-cols-1 xl:grid-cols-2 lg:w-10/12 gap-5">
            {/* Jasa Pembuatan LandingPage / Website UMKM */}
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
                      Jasa Pembuatan LandingPage / Website UMKM
                    </h1>

                    <div className="h-1 w-1/2  bg-blue-600 my-3 rounded-full"></div>
                    <h1 className="font-bold">Harga :</h1>
                    <h1 className="w-full font-bold my-1 text-4xl">
                      150K <span className="text-base">(IDR)</span>
                    </h1>
                  </Font>
                </div>
              </div>
              <div className="grid grid-cols-1 items-center w-full space-y-5 py-5 max-h-[100vh] overflow-auto my-1 justify-items-center">
                <div className=" h-full bg-blue-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between w-full md:w-4/5">
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
                      <ButtonComponent
                        text="Order Landing Page"
                        className="bg-white text-black text-sm md:text-xl py-1 px-3 my-3 w-11/12 justify-self-center"
                      />
                    </div>
                  </Font>
                </div>
              </div>
            </div>
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

                    <div className="h-1 w-1/2  bg-blue-600 my-3 rounded-full"></div>
                    <h1 className="font-bold">Harga :</h1>
                    <h1 className="w-full font-bold my-1 text-4xl">
                      650K <span className="text-base">(IDR)</span>
                    </h1>
                  </Font>
                </div>
              </div>
              <div className="grid grid-cols-1 items-center w-full space-y-5 py-5 max-h-[100vh] overflow-auto my-1 justify-items-center">
                <div className=" h-full bg-blue-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between w-full md:w-4/5">
                  <Font family="Radley">
                    <div className="">
                      <div className="flex flex-col text-sm md:text-xl">
                        Jasa Pembuatan Website Professional
                      </div>
                      <div className="text-2xl md:text-5xl">
                        650K <sub className="text-base"> (IDR)</sub>
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
                      <ButtonComponent
                        text="Order Website Professional"
                        className="bg-white text-black text-sm md:text-xl py-1 px-3 my-3 w-11/12 justify-self-center"
                      />
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

                    <div className="h-1 w-1/2  bg-blue-600 my-3 rounded-full"></div>
                    <h1 className="font-bold">Harga :</h1>
                    <h1 className="w-full font-bold my-1 text-4xl">
                      100K <span className="text-base">(IDR)</span>
                    </h1>
                  </Font>
                </div>
              </div>
              <div className="grid grid-cols-1 items-center w-full space-y-5 py-5 max-h-[100vh] overflow-auto my-1 justify-items-center">
                <div className=" h-full bg-blue-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between w-full md:w-4/5">
                  <Font family="Radley">
                    <div className="">
                      <div className="flex flex-col text-sm md:text-xl">
                        Jasa Pembuatan Logo
                      </div>
                      <div className="text-2xl md:text-5xl">
                        150K <sub className="text-base"> (IDR)</sub>
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
                      <ButtonComponent
                        text="Order Pembuatan Logo"
                        className="bg-white text-black text-sm md:text-xl py-1 px-3 my-3 w-11/12 justify-self-center"
                      />
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

                    <div className="h-1 w-1/2  bg-blue-600 my-3 rounded-full"></div>
                    <h1 className="font-bold">Harga :</h1>
                    <h1 className="w-full font-bold my-1 text-4xl">
                      5K <span className="text-base">(IDR)</span>
                    </h1>
                  </Font>
                </div>
              </div>
              <div className="grid grid-cols-1 items-center w-full space-y-5 py-5 max-h-[100vh] overflow-auto my-1 justify-items-center">
                <div className=" h-full bg-blue-600 text-white shadow-md rounded-xl py-3 px-3 flex flex-col justify-between w-full md:w-4/5">
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
                      <ButtonComponent
                        text="Order Upload Produk"
                        className="bg-white text-black text-sm md:text-xl py-1 px-3 my-3 w-11/12 justify-self-center"
                      />
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
