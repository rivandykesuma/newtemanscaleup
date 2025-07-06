// import React, { useState } from "react";

// function ButtonOrderPaket(prop: any) {
//   const [nameClient, setNameClient] = useState("");
//   const [showForm, setShowForm] = useState("hidden");
//   const [hideButton, setHideButton] = useState("block");

//   const handleOrderForm = () => {
//     setShowForm("block");
//     setHideButton("hidden");
//   };

//   const handleChangeFormContact = (e: any) => {
//     setNameClient(e.target.value);
//   };

//   const HandleClikOrderPaket = (e: any) => {
//     e.preventDefault();
//     window.open(
//       `https://api.whatsapp.com/send/?phone=%206285735106764&text=Haloo%20kak..%20Saya%20${nameClient}%20Mau%20order%20layanan%20Teman%20ScaleUp%20${prop.paket}`,
//       "_blank"
//     ) ||
//       window.location.replace(
//         `https://api.whatsapp.com/send/?phone=%206285735106764&text=Haloo%20kak..%20Saya%20${nameClient}%20Mau%20order%20layanan%20Teman%20ScaleUp%20${prop.paket}`
//       );
//   };
//   return (
//     <>
//       <button
//         className={`rounded-xl bg-white shadow font-bold text-black py-3 px-3 ${hideButton}`}
//         onClick={handleOrderForm}
//       >
//         Order {prop.paket}
//       </button>

//       <form
//         onSubmit={(e: any) => HandleClikOrderPaket(e)}
//         className={`grid grid-cols-1 md:grid-cols-[24%_1%_75%] items-center py-3 px-1 ${showForm}`}
//       >
//         <label htmlFor="nameServiceOrder" className="font-bold ">
//           Nama <span className="md:hidden inline mx-2">:</span>
//         </label>{" "}
//         <span className="hidden md:inline">:</span>{" "}
//         <input
//           type="text"
//           placeholder="Masukkan Nama"
//           id="nameServiceOrder"
//           name="nameServiceOrder"
//           value={nameClient}
//           required
//           className="my-2 mx-2 border-2 text-black"
//           onChange={(e: any) => {
//             handleChangeFormContact(e);
//           }}
//         />
//         <input
//           type="submit"
//           className="md:col-span-3 self-items-center w-full rounded-3xl cursor-pointer bg-white text-black font-bold whitespace-pre-wrap text-sm py-2 px-3 my-3 md:text-lg"
//           value={"Pesan Melalui Whatsapp"}
//         />
//       </form>
//     </>
//   );
// }

// export default ButtonOrderPaket;

// =================================

import React, { useState } from "react";

function ButtonOrderPaket(prop: { paket: string }) {
  const [nameClient, setNameClient] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOrderForm = () => setShowForm(true);
  const handleHideForm = () => setShowForm(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const message = `Haloo kak.. Saya ${nameClient} Mau order layanan Teman ScaleUp ${prop.paket}`;
      const whatsappUrl = `https://api.whatsapp.com/send/?phone=6285735106764&text=${encodeURIComponent(
        message
      )}`;

      // Try to open in new tab, fallback to same tab
      const newWindow = window.open(whatsappUrl, "_blank");
      if (
        !newWindow ||
        newWindow.closed ||
        typeof newWindow.closed === "undefined"
      ) {
        window.location.href = whatsappUrl;
      }

      setNameClient("");
      handleHideForm();
    } catch (error) {
      console.error("Error opening WhatsApp:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      {!showForm ? (
        <button
          onClick={handleOrderForm}
          className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <span className="relative z-10">Order {prop.paket}</span>
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        </button>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-100 space-y-4"
        >
          <div className="space-y-2">
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

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={handleHideForm}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Kembali
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all flex items-center justify-center ${
                isSubmitting ? "opacity-80" : ""
              }`}
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.092 1.479 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
                </svg>
              )}
              {isSubmitting ? "Memproses..." : "Pesan Via WhatsApp"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ButtonOrderPaket;
