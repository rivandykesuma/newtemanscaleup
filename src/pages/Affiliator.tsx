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

export default function Affiliator() {
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
              MAU DAPAT INCOME PULUHAN JUTA MELALUI PROGRAM AFFILIATOR
            </h1>
            <div>
              <div className="flex my-2 lg:my-5 space-x-2 lg:space-x-10">
                <BulletCompoent />
              </div>
            </div>
            <div className="w-fit grid grid-cols-[10%_90%] items-center md:gap-y-5 text-sm md:text-2xl md:my-5">
              <BsPencilFill className="" />
              <h1 className="">Kerja Dimana Saja</h1>
              <BsPencilFill />
              <h1>Modal HP/Laptop + Kuota</h1>
              <BsPencilFill />
              <h1>Dijamin halal dan berkah</h1>
              <BsPencilFill />
              <h1>Bisa berpeluang bisa Dapat Passive Income berjuta - juta</h1>
            </div>
          </div>
          <div className="absolute lg:absolute -z-1 bottom-0 right-0">
            <img
              src={aktor}
              alt="portfolio"
              className="block lg:hidden h-48 md:h-[25vh] lg:h-[35vh] w-auto md:mr-[3vh] bottom-0"
            />
            <img
              src={aktor}
              alt="portfolio"
              className="hidden lg:block h-40 md:h-80 lg:h-[80vh] w-auto ml-[50vw] mr-[15vh] bottom-0 "
            />
          </div>
        </div>
      </header>
      <main>
        {/* list commision */}
        <section>
          <div className="w-full flex justify-center items-center">
            <div className="w-full md:w-10/12 lg:w-8/12  grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-5 items-center justify-items-center">
              <div>
                <Text family="Radley" className="my-5 text-center font-bold">
                  PERHITUNGAN KOMISI
                </Text>
                <table className="text-center border border-separate py-2 px-2 border-spacing-1">
                  <thead>
                    <tr>
                      <th className="py-2 px-2 border bg-slate-200">
                        Nama Paket
                      </th>
                      <th className="py-2 px-2 border bg-slate-200">Harga</th>
                      <th className="py-2 px-2 border bg-slate-200">
                        Komisi (15%)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-2 border bg-slate-100">Hemat</td>
                      <td className="py-2 px-2 border bg-slate-100">150.000</td>
                      <td className="py-2 px-2 border bg-slate-100">22.500</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 border bg-slate-100">Cermat</td>
                      <td className="py-2 px-2 border bg-slate-100">350.000</td>
                      <td className="py-2 px-2 border bg-slate-100">52.500</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 border bg-slate-100">Reguler</td>
                      <td className="py-2 px-2 border bg-slate-100">500.000</td>
                      <td className="py-2 px-2 border bg-slate-100">75.000</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 border bg-slate-100">
                        Business
                      </td>
                      <td className="py-2 px-2 border bg-slate-100">750.000</td>
                      <td className="py-2 px-2 border bg-slate-100">112.500</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 border bg-slate-100">
                        Platinum
                      </td>
                      <td className="py-2 px-2 border bg-slate-100">900.000</td>
                      <td className="py-2 px-2 border bg-slate-100">135.000</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 border bg-slate-100">
                        Exclusive
                      </td>
                      <td className="py-2 px-2 border bg-slate-100">
                        1.200.000
                      </td>
                      <td className="py-2 px-2 border bg-slate-100">180.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Potensi Perhitungan */}
              <div className="flex flex-col w-11/12">
                <h1 className="text-center font-bold">
                  Simulasi Perhitungan Penjualan Per bulan <br /> Paket Reguler
                </h1>
                <table className="table-auto text-left my-3">
                  <tbody>
                    <tr className="border-b border-t border-slate-400">
                      <th className="bg-blue-100 px-3">Harga</th>
                      <td className="text-right bg-blue-50 px-3">500.000</td>
                    </tr>
                    <tr>
                      <th className="bg-blue-100 px-3">Jumlah Penjualan</th>
                      <td className="text-right bg-blue-50 px-3">60 Client</td>
                    </tr>
                    <tr className="border-b border-t border-slate-400">
                      <th className="bg-blue-100 px-3">Omset</th>
                      <td className="text-right bg-blue-50 px-3">30.000.000</td>
                    </tr>
                    <tr className="border-b border-slate-400">
                      <th className="bg-blue-100 px-3">Potensi Keuntungan</th>
                      <td className="text-right bg-blue-50 px-3">4.500.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        {/* Youtube */}
        <section>
          <div className="flex items-center justify-center my-5">
            <iframe
              className="w-11/12 h-[25vh] lg:h-[65vh] 2xl:h-[100vh]"
              src="https://www.youtube.com/embed/cMmAv5pwn68"
              title="Cara Mudah Jadi Affiliator"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </section>
        {/* button Hubungi Kami */}
        <section className="">
          <div className=" h-full flex justify-center items-center bg-blue-200">
            <Font family="Radley">
              <div className="bg-white rounded-xl py-5 flex flex-col my-10 px-5">
                <div className="flex items-center justify-center ">
                  <h1 className="font-bold text-center text-lg my-2">
                    Join Affiliator Dengan
                  </h1>
                  <LogoComponent className="w-fit h-8 mb-3" />
                </div>
                <h1 className="text-center text-sm">
                  Berpotensi Dapat Income Puluhan Juta
                </h1>
                <ButtonComponent
                  text="Klik Disini"
                  className=" bg-blue-600 text-white text-sm py-2 px-3 mt-3"
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
