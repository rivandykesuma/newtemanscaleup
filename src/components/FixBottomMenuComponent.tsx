import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { VscDebugDisconnect } from "react-icons/vsc";
import { BsPersonUp, BsBook } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function FixBottomMenuComponent() {
  return (
    <nav className="h-16 bg-[#004AAD] py-2">
      <ul className="flex justify-around items-center ">
        <li className="flex flex-col items-center text-white">
          <Link
            to="/"
            className=""
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <BiHomeAlt className="text-white text-2xl self-center aspect-square" />
          </Link>
          <h6 className="text-sm">Home</h6>
        </li>
        <li className="flex flex-col items-center text-white">
          <Link
            to="/layanan"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <BsPersonUp className="text-2xl text-white self-center aspect-square" />
          </Link>
          <h6 className="text-sm">Layanan</h6>
        </li>
        <li className="flex flex-col items-center text-white">
          <Link
            to="/portfolio"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <BsBook className="text-2xl self-center aspect-square text-white" />
          </Link>
          <h6 className="text-sm">Portfolio</h6>
        </li>
        <li className="flex flex-col items-center text-white">
          <Link
            to="/affiliator"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <VscDebugDisconnect className="text-2xl self-center aspect-square text-white" />
          </Link>
          <h6 className="text-sm">Affiliator</h6>
        </li>
        <li className="flex flex-col items-center text-white">
          <Link
            to="/contact"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <RiCustomerService2Fill className="text-2xl self-center aspect-square text-white" />
          </Link>
          <h6 className="text-sm">Kontak</h6>
        </li>
      </ul>
    </nav>
  );
}
