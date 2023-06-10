import React from "react";
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

export default function Portfolio() {
  const portfolioheader = require("./dist/img/sampleportfolio.png");
  const portfolioheader1 = require("./dist/img/trinixsystems.png");
  const aktor = require("./dist/img/imageAffiliate/aktor.png");
  const portfolioheader2 = require("./dist/img/imageGaleri/imagesquare.png");
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
              Our Portfolio
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

      {/* mainpage */}
      <main>
        {/* Opening Porfolio Social Media */}
        <section className="">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-0.5 lg:grid-cols-4 my-0.5">
            <div className="bg-yellow-200 ">
              <img src={portfolioheader1} alt="Trynix" />
            </div>
            <div className="bg-violet-200">
              <img src={portfolioheader1} alt="Trynix" />
            </div>
            <div className="bg-green-200">
              <img src={portfolioheader1} alt="Trynix" />
            </div>
            <div className="bg-blue-200 md:hidden lg:block">
              <img src={portfolioheader1} alt="Trynix" />
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
        <section className="">
          <div className=" h-full flex justify-center items-center bg-blue-200">
            <Font family="Radley">
              <div className="bg-white rounded-xl py-5 flex flex-col my-10 px-5">
                <div className="flex items-center justify-center ">
                  <h1 className="font-bold text-center text-lg my-2">
                    Ingin Kerjasama Dengan
                  </h1>
                  <LogoComponent className="w-fit h-8 mb-3" />
                </div>
                <h1 className="text-center text-sm my-3">
                  Agency Sosial Media Manajemen <br /> Puluhan Brand di Berbagai
                  Kota Telah Menggunakan Jasa kami
                </h1>
                <ButtonComponent
                  text="Hubungi Kami"
                  className=" bg-blue-600 text-white text-sm py-2 px-3 my-3"
                />
              </div>
            </Font>
          </div>
        </section>
        {/* title more portfolio */}
        <section className="py-5">
          <Font family="Radley">
            <div className="">
              <div className="text-center text-xl font-bold">
                <h1>More Portfolio</h1>
              </div>
            </div>
          </Font>
        </section>
        {/* Sosial Media Management Portfolio */}
        <section>
          <Font family="Radley">
            <div className="flex gap-2 items-center justify-center">
              <BsPencilFill />
              <h1 className="text-black">Layanan Sosial Media Manajemen</h1>
            </div>
            <div className="flex justify-center">
              <div className="h-0.5 w-1/4 rounded-full bg-black my-2"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              <div className="w-full aspect-square mb-0.5">
                <img src={portfolioheader1} alt="" />
              </div>
              <div className="w-full aspect-square mb-0.5">
                <img src={portfolioheader1} alt="" />
              </div>
              <div className="w-full aspect-square mb-0.5">
                <img src={portfolioheader1} alt="" />
              </div>
              <div className="w-full aspect-square mb-0.5">
                <img src={portfolioheader1} alt="" />
              </div>
              <div className="w-full aspect-square mb-0.5">
                <img src={portfolioheader1} alt="" />
              </div>
              <div className="w-full aspect-square mb-0.5">
                <img src={portfolioheader1} alt="" />
              </div>
              <div className="w-full aspect-square mb-0.5">
                <img src={portfolioheader1} alt="" />
              </div>
              <div className="w-full aspect-square mb-0.5">
                <img src={portfolioheader1} alt="" />
              </div>
              <div className="w-full aspect-square mb-0.5">
                <img src={portfolioheader1} alt="" />
              </div>
              <div className="w-full aspect-square mb-0.5">
                <img src={portfolioheader1} alt="" />
              </div>
              <div className="w-full aspect-square mb-0.5">
                <img src={portfolioheader1} alt="" />
              </div>
              <div className="w-full aspect-square mb-0.5">
                <img src={portfolioheader1} alt="" />
              </div>
              <div className="w-full aspect-square mb-0.5">
                <img src={portfolioheader1} alt="" />
              </div>
              <div className="w-full aspect-square mb-0.5">
                <img src={portfolioheader1} alt="" />
              </div>
              <div className="w-full aspect-square mb-0.5 hidden md:block">
                <img src={portfolioheader1} alt="" />
              </div>
            </div>
          </Font>
        </section>
        {/* button Hubungi Kami */}
        <section className="">
          <div className=" h-full flex justify-center items-center bg-blue-200">
            <Font family="Radley">
              <div className="bg-white rounded-xl py-5 flex flex-col my-10 px-5">
                <div className="flex items-center justify-center ">
                  <h1 className="font-bold text-center text-lg my-2">
                    Ingin Kerjasama Dengan
                  </h1>
                  <LogoComponent className="w-fit h-8 mb-3" />
                </div>
                <h1 className="text-center text-sm my-3">
                  Agency Sosial Media Manajemen <br /> Puluhan Brand di Berbagai
                  Kota Telah Menggunakan Jasa kami
                </h1>
                <ButtonComponent
                  text="Hubungi Kami"
                  className=" bg-blue-600 text-white text-sm py-2 px-3 my-3"
                />
              </div>
            </Font>
          </div>
        </section>
      </main>
      <FooterComponent />
      <div className="h-16 bg-zinc-400 md:hidden"></div>
    </>
  );
}
