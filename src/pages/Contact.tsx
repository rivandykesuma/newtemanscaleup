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

export default function Contact() {
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
        <div className="flex flex-col lg:flex-row justify-center mx-[10vw] items-center gap-5 lg:h-[100vh]">
          <div className="z-50 self-center text-white w-10/12 md:w-10/12 lg:w-9/12">
            <h1 className="text-sm md:text-2xl lg:text-4xl   font-bold w-3/4 md:w-1/2 text-left mt-10">
              HUBUNGI KAMI
            </h1>
            <div>
              <div className="flex my-2 lg:my-5 space-x-2 lg:space-x-10">
                <BulletCompoent />
              </div>
            </div>
            <div className="w-fit grid grid-cols-[10%_90%] items-center md:gap-y-5 text-sm md:text-2xl md:my-5">
              <BsPencilFill className="" />
              <h1 className="">
                Alamat : Jl. Losari RT 4 RW 1, Mejoyolosari, Kec. Gudo, Kab.
                Jombang
              </h1>
              <BsPencilFill />
              <h1>No HP : 081215058958</h1>
            </div>
          </div>
          <div className="">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3954.7471425450126!2d112.181967!3d-7.602472999999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb456c5ea573%3A0xb5c4a55843cb7cae!2sTeman%20Scaleup!5e0!3m2!1sid!2sus!4v1686322720046!5m2!1sid!2sus"
                loading="lazy"
                className="h-[70vw] lg:h-[70vh] aspect-square"
              ></iframe>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
