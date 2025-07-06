// import React, { useState } from "react";
// import LogoComponent from "./LogoComponent";
// import ButtonComponent from "./ButtonComponent";
// import Font, { Text } from "react-font";

// function CallToActionAffiliate() {
//   const [nameParticipantAffilatorMember, setNameParticipantAffilatorMember] =
//     useState("");

//   const [showForm, setShowForm] = useState("hidden");
//   const [hideButton, setHideButton] = useState("block");

//   const handleShowform = () => {
//     setShowForm("block");
//     setHideButton("hidden");
//   };

//   const handleChangeFormContact = (e: any) => {
//     setNameParticipantAffilatorMember(e.target.value);
//   };

//   const HandleClickWhatsappContact = (e: any) => {
//     e.preventDefault();
//     window.open(
//       `https://api.whatsapp.com/send/?phone=%206285735106764&text=Haloo%20kak..%20Saya%20${nameParticipantAffilatorMember}%20Mau%20konsultasi%20seputar%20affliator%20dari%20Teman%20ScaleUp%20`,
//       "_blank"
//     ) ||
//       window.location.replace(
//         `https://api.whatsapp.com/send/?phone=%206285735106764&text=Haloo%20kak..%20Saya%20${nameParticipantAffilatorMember}%20Mau%20konsultasi%20seputar%20affliator%20dari%20Teman%20ScaleUp%20`
//       );
//     setNameParticipantAffilatorMember("");
//   };
//   return (
//     <>
//       <section className="">
//         <div className=" h-full flex justify-center items-center bg-blue-200 px-2 py-2">
//           <div className="bg-white rounded-xl py-5 flex flex-col my-10 px-5 w-full md:w-1/2 lg:w-1/3">
//             <div className="flex flex-col items-center justify-center ">
//               <h1 className="font-bold text-center text-lg my-2">
//                 <Text family="Radley">Ingin Join Affiliator Dengan</Text>
//               </h1>
//               <LogoComponent className="w-fit h-8 mb-3" />
//             </div>
//             <Font family="Radley">
//               <h1 className="text-center text-sm md:text-lg my-3">
//                 Berpotensi Dapat Income Puluhan Juta
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
//               <label htmlFor="nameAffiliatorMember" className="">
//                 Nama
//               </label>{" "}
//               :
//               <input
//                 type="text"
//                 placeholder="Masukkan Nama"
//                 id="nameAffiliatorMember"
//                 name="nameAffiliatorMember"
//                 value={nameParticipantAffilatorMember}
//                 required
//                 className="mx-3 my-2 border-2"
//                 onChange={(e: any) => {
//                   handleChangeFormContact(e);
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

// export default CallToActionAffiliate;

// ============================================

import React, { useState } from "react";
import LogoComponent from "./LogoComponent";
import ButtonComponent from "./ButtonComponent";
import Font, { Text } from "react-font";

function CallToActionAffiliate() {
  const [nameParticipantAffilatorMember, setNameParticipantAffilatorMember] =
    useState("");
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => setShowForm(true);
  const handleHideForm = () => setShowForm(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Haloo kak.. Saya ${nameParticipantAffilatorMember} Mau konsultasi seputar affliator dari Teman ScaleUp`;
    window.open(
      `https://api.whatsapp.com/send/?phone=6285735106764&text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
    setNameParticipantAffilatorMember("");
    handleHideForm();
  };

  return (
    <section className="relative py-16 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
      {/* Bubble Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-yellow-300 rounded-full opacity-10 mix-blend-multiply animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-400 rounded-full opacity-15 animate-float-delay"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-yellow-400 rounded-full opacity-20 mix-blend-lighten animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-2xl mx-auto transform hover:scale-[1.01] transition-transform duration-300">
          {/* Header Section */}
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400 rounded-full opacity-10"></div>
            {/* <div className="absolute top-2 right-60 w-40 h-40 bg-white rounded-full opacity-10"></div> */}
            {/* <div className="absolute top-10 right-72 w-40 h-40 bg-white rounded-full opacity-10"></div> */}
            {/* <div className="absolute top-20 right-60 w-40 h-40 bg-white rounded-full opacity-20"></div> */}
            <div className="relative z-10 space-y-3">
              <h1 className="font-serif font-bold text-3xl text-white mb-2">
                <Text family="Radley">Ingin Join Affiliator Dengan</Text>
              </h1>

              <div className="w-24 h-1 bg-yellow-300 rounded-full mx-auto my-3"></div>

              <LogoComponent className="w-auto h-56 mx-auto text-white opacity-95" />

              <Font family="Radley">
                <p className="text-blue-100 text-lg mt-4">
                  Berpotensi Dapat Income Puluhan Juta
                </p>
              </Font>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {!showForm ? (
              <div className="text-center space-y-6">
                <p className="text-gray-600 text-lg">
                  Daftar sekarang dan mulai dapatkan komisi menarik dari setiap
                  referral Anda
                </p>
                <ButtonComponent
                  text="Mulai Bergabung Sekarang"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                  onClick={handleShowForm}
                />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <label
                    htmlFor="nameAffiliatorMember"
                    className="block text-gray-700 font-medium"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    id="nameAffiliatorMember"
                    value={nameParticipantAffilatorMember}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-black"
                    onChange={(e) =>
                      setNameParticipantAffilatorMember(e.target.value)
                    }
                  />
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
                    Konsultasi Via WA
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

export default CallToActionAffiliate;
