// import React, { useState } from "react";
// import LogoComponent from "./LogoComponent";
// import ButtonComponent from "./ButtonComponent";
// import Font, { Text } from "react-font";

// function CallToActionWA() {
//   const [nameClient, setNameClient] = useState("");
//   const [igAccountClient, setigAccountClient] = useState("");
//   const [showForm, setShowForm] = useState("hidden");
//   const [hideButton, setHideButton] = useState("block");

//   const handleShowform = () => {
//     setShowForm("block");
//     setHideButton("hidden");
//   };

//   const handleChangeFormContact = (e: any) => {
//     setNameClient(e.target.value);
//   };

//   const handleChangeFormContactIGAccount = (e: any) => {
//     setigAccountClient(e.target.value);
//   };

//   const HandleClickWhatsappContact = (e: any) => {
//     e.preventDefault();
//     window.open(
//       `https://api.whatsapp.com/send/?phone=%206285735106764&text=Haloo%20kak..%20Saya%20${nameClient}%20Mau%20konsultasi%20seputar%20konten%20instagram%20bisnis%20saya%20${igAccountClient}`,
//       "_blank"
//     ) ||
//       window.location.replace(
//         `https://api.whatsapp.com/send/?phone=%206285735106764&text=Haloo%20kak..%20Saya%20${nameClient}%20Mau%20konsultasi%20seputar%20konten%20instagram%20bisnis%20saya%20${igAccountClient}`
//       );
//     setNameClient("");
//     setigAccountClient("");
//   };
//   return (
//     <>
//       <section className="">
//         <div className=" h-full flex justify-center items-center bg-blue-200 px-2 py-2">
//           <div className="bg-white rounded-xl py-5 flex flex-col my-10 px-5 w-full md:w-1/2 lg:w-1/3">
//             <div className="flex flex-col items-center justify-center ">
//               <h1 className="font-bold text-center text-lg my-2 ">
//                 <Text family="Radley">Ingin Konsultasi Dengan Team</Text>
//               </h1>
//               <LogoComponent className="w-fit h-8 mb-3 " />
//             </div>
//             <Font family="Radley">
//               <h1 className="text-center text-sm md:text-lg my-3">
//                 Silahkan Hubungi Kami
//               </h1>
//             </Font>
//             <ButtonComponent
//               text="Klik Disini"
//               className={` bg-blue-600 text-white text-sm py-2 px-3 my-3 md:text-lg ${hideButton}`}
//               onClick={handleShowform}
//             />
//             <form
//               onSubmit={(e: any) => HandleClickWhatsappContact(e)}
//               className={`grid grid-cols-[24%_1%_75%] items-center ${showForm}`}
//             >
//               <label htmlFor="nameServiceOrder" className="">
//                 Nama
//               </label>{" "}
//               :
//               <input
//                 type="text"
//                 placeholder="Masukkan Nama"
//                 id="nameServiceOrder"
//                 name="nameServiceOrder"
//                 value={nameClient}
//                 required
//                 className="mx-3 my-2 border-2"
//                 onChange={(e: any) => {
//                   handleChangeFormContact(e);
//                 }}
//               />
//               <label htmlFor="igAccountClient">Akun IG</label> :
//               <input
//                 type="text"
//                 placeholder="Masukkan @NamaAkunIG"
//                 value={igAccountClient}
//                 id="igAccountClient"
//                 name="igAccountClient"
//                 className="mx-3 my-2 border-2"
//                 onChange={(e: any) => {
//                   handleChangeFormContactIGAccount(e);
//                 }}
//               />
//               <input
//                 type="submit"
//                 className="col-span-3 self-items-center w-full rounded-3xl cursor-pointer bg-blue-600 text-white text-sm py-2 px-3 my-3 md:text-lg"
//                 value={"Konsultasi Via WA"}
//               />
//             </form>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default CallToActionWA;

import React, { useState } from "react";
import LogoComponent from "./LogoComponent";
import ButtonComponent from "./ButtonComponent";
import Font, { Text } from "react-font";

function CallToActionWA() {
  const [nameClient, setNameClient] = useState("");
  const [igAccountClient, setIgAccountClient] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => setShowForm(true);
  const handleHideForm = () => setShowForm(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Haloo kak.. Saya ${nameClient} Mau konsultasi seputar konten instagram bisnis saya ${igAccountClient}`;
    window.open(
      `https://api.whatsapp.com/send/?phone=6285735106764&text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
    setNameClient("");
    setIgAccountClient("");
    handleHideForm();
  };

  return (
    <section className="relative py-16 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
      {/* Bubble Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-yellow-300 rounded-full opacity-10 mix-blend-multiply"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-400 rounded-full opacity-15"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-yellow-400 rounded-full opacity-20 mix-blend-lighten"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-2xl mx-auto">
          {/* Header Section */}
          {/* <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-center">
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-bold text-2xl text-white mb-3">
                <Text family="Radley">Konsultasi Gratis dengan Tim Kami</Text>
              </h1>

              <LogoComponent className="w-fit h-8 mb-2 text-white" />
            </div>
            <Font family="Radley">
              <p className="text-blue-100 text-lg">
                Isi form berikut untuk terhubung langsung via WhatsApp
              </p>
            </Font>
          </div> */}

          <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-center rounded-t-2xl">
            {/* Dekorasi elemen organik */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400 rounded-full opacity-10 mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/5 to-transparent"></div>

            <div className="relative z-10 space-y-4">
              <div className="inline-flex flex-col items-center justify-center transform hover:scale-[1.02] transition-transform duration-300">
                <h1 className="font-serif font-bold text-3xl text-white mb-2 tracking-tight">
                  <Text
                    family="Radley"
                    className="inline-block transform hover:skew-y-1 transition-transform duration-200"
                  >
                    Konsultasi Gratis dengan Tim Kami
                  </Text>
                </h1>

                <div className="w-24 h-1 bg-yellow-300 rounded-full my-2 opacity-80"></div>
                <LogoComponent className="w-auto h-10 mb-3 text-white opacity-90 hover:opacity-100 transition-opacity" />
                <div className="w-24 h-1 bg-yellow-300 rounded-full my-1 opacity-80"></div>
              </div>

              <Font family="Radley">
                <p className="text-white text-lg max-w-2xl mx-auto leading-relaxed">
                  Isi form berikut untuk terhubung langsung via WhatsApp dengan
                  tim profesional kami
                </p>
              </Font>
            </div>

            {/* Animated dots decoration */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 bg-white rounded-full opacity-60 animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></span>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {!showForm ? (
              <div className="text-center">
                <p className="text-gray-600 mb-8 text-lg">
                  Dapatkan solusi terbaik untuk pengembangan bisnis Anda melalui
                  Instagram
                </p>
                <ButtonComponent
                  text="Mulai Konsultasi Sekarang"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                  onClick={handleShowForm}
                />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label
                    htmlFor="nameServiceOrder"
                    className="block text-gray-700 font-medium"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    id="nameServiceOrder"
                    value={nameClient}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-black"
                    onChange={(e) => setNameClient(e.target.value)}
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="igAccountClient"
                    className="block text-gray-700 font-medium"
                  >
                    Akun Instagram Bisnis
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      @
                    </span>
                    <input
                      type="text"
                      placeholder="NamaAkunIG"
                      value={igAccountClient}
                      id="igAccountClient"
                      required
                      className="w-full pl-8 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-black"
                      onChange={(e) => setIgAccountClient(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleHideForm}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Kembali
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.092 1.479 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    Kirim via WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToActionWA;
