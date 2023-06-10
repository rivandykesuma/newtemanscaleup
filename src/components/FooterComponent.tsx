import React from "react";
import { Link } from "react-router-dom";
import Font from "react-font";
import SosmedIconComponents from "./SosmedIconComponents";
import { ReactComponent as Logo } from "../pages/dist/img/logo.svg";

export default function FooterComponent() {
  return (
    <>
      <footer className="text-white bg-blue-700 hidden md:block">
        <Font family="Radley">
          <div className="flex justify-center py-10">
            <div className="md:w-10/12 hidden md:grid grid-cols-3  justify-items-center text-xl 2xl:text-2xl">
              {/* Site Menu */}
              <div className="w-3/4  flex flex-col items-center">
                <h1 className="font-bold underline">Site Menu:</h1>
                <ul>
                  <li className="flex justify-center">
                    <Link to="/" className="text-white">
                      Home
                    </Link>
                  </li>
                  <li className="flex justify-center">
                    <Link to="/layanan" className="text-white">
                      Layanan Kami
                    </Link>
                  </li>
                  <li className="flex justify-center">
                    <Link to="/portfolio" className="text-white">
                      Galery Kami
                    </Link>
                  </li>
                  <li className="flex justify-center">
                    <Link to="/affiliator" className="text-white">
                      Join Affiliator
                    </Link>
                  </li>
                  <li className="flex justify-center">
                    <Link to="/contact" className="text-white">
                      Hubungi Kami
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Profil */}
              <div className="w-3/4">
                <h1 className="font-bold underline">Profil Kami :</h1>
                <div className="py-3">
                  <Logo className="float-left  h-fit flex justify-end items-end w-16 mr-1" />
                  <p className=" text-xl 2xl:text-2xl w-4/5 whitespace-normal">
                    Membantu UMKM Scaleup melalui konten-konten branding &
                    marketing
                  </p>
                </div>
              </div>
              {/* alamat */}
              <div className="w-3/4">
                <h1 className="underline">Telp :</h1>
                <h2>081215058958</h2>
                <h1 className="mt-3 underline">Alamat :</h1>
                <h2>
                  Jl. Losari RT 4 RW 1, Mejoyolosari, Kec. Gudo, Kab. Jombang
                </h2>
                <span className="flex gap-3 my-5">
                  <SosmedIconComponents />
                </span>
              </div>
            </div>
          </div>
        </Font>
      </footer>
    </>
  );
}
