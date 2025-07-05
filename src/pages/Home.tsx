import React from "react";
import MenuComponent from "../components/MenuComponent";
import { Link } from "react-router-dom";
import SosmedIconComponents from "../components/SosmedIconComponents";
import FixBottomMenuComponent from "../components/FixBottomMenuComponent";
import NavbarMenu from "../components/NavbarMenu";
import BulletCompoent from "../components/BulletCompoent";
import ButtonComponent from "../components/ButtonComponent";
import FooterComponent from "../components/FooterComponent";
import "./dist/style/Home.css";
import LogoComponent from "../components/LogoComponent";
import { ReactComponent as IconServiceFocus } from "./dist/img/iconHome/iconFokusLayanan.svg";
import { ReactComponent as AllService } from "./dist/img/iconHome/AllService.svg";
import { ReactComponent as Arrow } from "./dist/img/iconHome/arrow.svg";
import { ReactComponent as Goals } from "./dist/img/iconHome/goals.svg";
import { ReactComponent as Grow } from "./dist/img/iconHome/grow.svg";
import { BsPencilFill, BsPersonCheck, BsBookmarkCheck } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import { GrLineChart } from "react-icons/gr";
import Font, { Text } from "react-font";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import CallToActionWA from "../components/CallToAction";
import ImageSlideShowHeaderComponents from "../components/ImageSlideShowHeaderComponents";
import ButtonOrderPaket from "../components/ButtonOrderPaket";

export default function Home() {
  const portfolioheader = require("./dist/img/sampleportfolio.png");
  const portfolioheader1 = require("./dist/img/trinixsystems.png");
  const graphinstagram = require("./dist/img/imageHome/graphinstagram.png");
  const imageconfuse = require("./dist/img/imageHome/image.png");
  const portfolio = [
    "Berkah Cahaya Tangguh.png",
    "Adora.png",
    "Helwa Beuaty care.png",
    "Peace of Akhwat.png",
    "Maedahi.png",
    "Casade Interior.png",
    "esteamewaofficial.png",
    "Gulzar_travel.png",
    "bitmebite (2).png",
    "Yana Taste.png",
    "Kambing Palembang.png",
    "Workshop Advertising.png",
    "Dan.deo (1).png",
    "Tahu Logi.png",
    "Endul By New Hope.png",
    "Dwarna.png",
    "Bank Sampah Bina Mandiri Surabaya.png",
    "Omah Catering.png",
    "cocogeneral.id.png",
    "ptsaka.png",
    "Stikes RS Anwarmedika.png",
    "Shoperior.png",
    "Deli Catering Sby.png",
    "Sub Jersey.png",
    "Syza Simply (1).png",
    "elbarokihealth.png",
    "Hafizh_Aqiqah.png",
    "elbarokijayacatering.png",
    "Umroh Ghifany.png",
    "Anara.png",
    "Sewa BBQ.png",
    "Tahu Walik Bu Jaim.png",
    "Janji Madu.png",
    "Qausa.id.png",
    "MM Workshop.png",
    "Sagoqu.png",
    "Trigger Berkarya.png",
    "Azzam MPASI.png",
    "Omah_resto.png",
    "Sub Academy.png",
    "Sarae.png",
    "Wahana (1).png",
    "lovely.beauty.png",
    "Top Max.png",
    "Trinixsystems.png",
    "Tungku_utinanti.png",
    "Jempoly kriuk.png",
    "Akun Bareng Store.png",
    "Safron.png",
    "Genduts Bomboloni.png",
    "Esj Property.png",
    "Herbalito.png",
    "Bimbel Privat.png",
    "Cucian Coin Laundry.png",
    "Jaket Online.png",
    "Sehati_homecare.png",
    "Aktaco.id.png",
    "Campingin.png",
    "Onic Kitchen.png",
    "gambang.png",
    "Inpack Solution.png",
    "Toko Amalya.png",
    "Jadahtempe.png",
    "Es Teh Prima.png",
  ];
  const clients = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
    "12.png",
    "13.png",
    "14.png",
    "15.png",
    "16.png",
    "17.png",
    "18.png",
    "19.png",
    "20.png",
    "21.png",
    "22.png",
    "23.png",
    "24.png",
    "25.png",
    "26.png",
    "27.png",
    "28.png",
    "29.png",
    "30.png",
    "31.png",
    "32.png",
    "33.png",
    "34.png",
    "35.png",
    "36.png",
    "37.png",
    "38.png",
    "39.png",
    "40.png",
    "41.png",
    "42.png",
    "43.png",
    "44.png",
    "45.png",
    "46.png",
    "47.png",
    "48.png",
    "49.png",
    "50.png",
    "51.png",
    "52.png",
    "53.png",
    "54.png",
    "55.png",
    "56.png",
    "57.png",
    "58.png",
    "59.png",
    "60.png",
    "61.png",
    "62.png",
    "63.png",
    "64.png",
  ];

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
              <span className="block text-yellow-300 text-xl md:text-3xl lg:text-6xl">
                Terbukti!
              </span>
              <span className="block mt-2 text-white md:text-3xl lg:text-5xl">
                Ratusan Brand & Industri telah mempercayakan konten pada kami
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
              <div className="flex space-x-3 md:space-x-5  lg:text-3xl text-lg">
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
      {/* main  */}
      <main className="w-full flex justify-center flex-col fadeIn">
        {/* Service Focus */}
        <section className=" w-full flex flex-col py-10 self-center lg:h-[100vh] justify-evenly bg-blue-50">
          <IconServiceFocus className="mt-5 mb-5 h-32 md:h-44 aspect-square self-center" />
          <Text
            family="Radley"
            className="text-center text-3xl md:text-6xl my-3 font-bold"
          >
            Fokus Layanan Kami
          </Text>
          <Text
            family="Questrial"
            className="text-center text-xl md:text-4xl  w-1/2 self-center my-5"
          >
            Membantu UMKM Scaleup melalui konten-konten branding & marketing
          </Text>
          <div className="w-11/12 md:w-10/12 lg:w-8/12 grid grid-cols-[40%_20%_40%] self-center justify-items-center items-center my-5">
            <p>
              <Text
                family="Poppins"
                className="text-[#E8A700] font-extrabold md:text-xl 2xl:text-3xl text-center"
              >
                Apapun Bisnismu?
              </Text>
            </p>
            <div>
              <AllService className="h-16 aspect-square" />
            </div>
            <p>
              <Text
                family="Poppins"
                className="text-[#004AAD] text-center font-extrabold md:text-xl 2xl:text-3xl"
              >
                Kami yang Beresin Kontennya
              </Text>
            </p>
          </div>
        </section>

        {/* Statistic Instagram */}
        <section className="w-11/12 md:w-10/12 lg:w-9/12 flex flex-col lg:grid grid-cols-[40%_60%] lg:gap-5 justify-items-center lg:py-10 self-center py-10 space-y-5">
          <div className="flex flex-col justify-center items-center">
            <Text
              family="Radley"
              className="text-center py-3 text-3xl md:text-4xl 2xl:text-6xl font-extrabold"
            >
              Tahukah Anda?
            </Text>

            <Text family="Radley" className="text-center text-2xl md:text-4xl">
              DATA PENGGUNA INSTAGRAM DI INDONESIA
            </Text>
          </div>
          <a
            href={graphinstagram}
            className="my-3 w-3/4 aspect-square self-center"
          >
            <img src={graphinstagram} alt="Graph Instagram" />
          </a>
        </section>
        {/* Hikmah Grafik */}
        <section className="w-11/12 md:w-10/12 lg:w-9/12 flex flex-col lg:py-10 self-center py-5">
          <Text
            family="Radley"
            className="text-center py-3 text-3xl md:text-4xl lg:text-5xl font-extrabold"
          >
            Apa Yang Didapat Dari Grafik?
          </Text>

          <div className="grid grid-cols-[20%_80%] gap-5 my-3 lg:my-10 justify-items-center w-3/4 items-center self-center space-y-5">
            <Grow className="h-10 w-auto" />
            <Text family="poppins" className="md:text-2xl lg:text-3xl">
              pengguna instagram semakin bertambah, mayoritas usia 18-34 tahun
              sekitar 68,3% atau setara 71.151.662
            </Text>

            <Goals className="h-10 w-auto" />
            <Text family="poppins" className="md:text-2xl lg:text-3xl">
              sangat potensial ketika brand anda menjangkau pengguna instagram
              yang mayoritas mereka mengaksesnya rata-rata 3 jam sehari.
            </Text>
          </div>
        </section>
        {/* Manfaat menggunakan Instagram */}
        <section className="w-full bg-yellow-50 flex flex-col justify-evenly py-10 lg:-h-[100vh] 2xl:h-[100vh]">
          <Text
            family="Radley"
            className="text-center py-3 text-3xl md:text-4xl 2xl:text-6xl font-extrabold w-9/12 md:w-10/12 lg:w-9/12 self-center"
          >
            Manfaat Bisnis / Brand Terkelola Baik di Instagram
          </Text>
          <div className="w-9/12 md:w-10/12 lg:w-8/12 grid grid-cols-2 md:grid-cols-4 py-3 lg:py-10 gap-5 lg:gap-10 justify-items-center items-center self-center">
            <div className="w-full h-full flex flex-col justify-start items-center">
              <IconServiceFocus className="h-16 my-3 w-auto" />
              <h3 className="text-center my-2 md:text-xl ">
                <Text family="Poppins">
                  Meningkatkan Interaksi Pengguna Dengan Konten Brand
                  (Engagement)
                </Text>
              </h3>
            </div>
            <div className="w-full h-full flex flex-col justify-start items-center">
              <IconServiceFocus className="h-16 my-3 w-auto" />
              <h3 className="text-center my-2 md:text-xl ">
                <Text family="Poppins">
                  Meningkatkan Kesadaran Brand Terhadap Pengguna Social Media
                </Text>
                (Brand Awareness)
              </h3>
            </div>
            <div className="w-full h-full flex flex-col justify-start items-center">
              <IconServiceFocus className="h-16 my-3 w-auto" />
              <h3 className="text-center my-2 md:text-xl ">
                <Text family="Poppins">Jangkauan Lebih Luas</Text>
              </h3>
            </div>
            <div className="w-full  flex flex-col justify-center items-center">
              <IconServiceFocus className="h-16 my-3 w-auto" />
              <h3 className="text-center my-2 md:text-xl ">
                <Text family="Poppins">
                  Meningkatkan Brand Image Kepada Pengguna Social Media
                </Text>
              </h3>
            </div>
            <div className="w-full h-full flex flex-col justify-start items-center">
              <IconServiceFocus className="h-16 my-3 w-auto" />
              <h3 className="text-center my-2 md:text-xl ">
                <Text family="Poppins">
                  Memperluas Jangkauan Demografis Dengan Strategi Tertentu
                </Text>
              </h3>
            </div>
            <div className="w-full h-full flex flex-col justify-start items-center">
              <IconServiceFocus className="h-16 my-3 w-auto" />
              <h3 className="text-center my-2 md:text-xl ">
                <Text family="Poppins">
                  Dapat Meningkatkan Konversi Untuk Pembelian Atau Pendaftaran
                  Terhadap Brand
                </Text>
              </h3>
            </div>
            <div className="w-full h-full flex flex-col justify-start items-center">
              <IconServiceFocus className="h-16 my-3 w-auto " />
              <h3 className="text-center my-2 w-3/4 md:text-xl ">
                <Text family="Poppins">Meningkatkan Kepercayaan Konsumen</Text>
              </h3>
            </div>
            <div className="w-full h-full flex flex-col justify-start items-center">
              <IconServiceFocus className="h-16 my-3 w-auto " />
              <h3 className="text-center my-2 w-3/4 md:text-xl ">
                <Text family="Poppins">Dapat Mengikuti Trend Konsumen</Text>
              </h3>
            </div>
          </div>
        </section>
        {/* Kebingungan pengelolaan instagram */}
        <section className="w-11/12 md:w-10/12 lg:w-9/12 flex flex-col py-10 self-center space-y-10">
          <div className="flex justify-center items-center gap-5 md:gap-10">
            <img
              src={imageconfuse}
              alt="Bingung Mulai darimana?"
              className="w-1/4 aspect-square"
            />
            <Text family="Radley" className="text-lg md:text-4xl lg:w-1/2">
              Bingung Mulai darimana Membangun Akun Bisnis di Instagram?
            </Text>
          </div>
          <div className="grid grid-cols-[40%_20%_40%] md:grid-cols-3 justify-items-center items-center my-5 mt-5">
            <LogoComponent className="h-12 md:h-32" />
            <Arrow className="h-5 md:h-10 lg:h-15" />
            <Text
              family="Radley"
              className="font-bold text-sm md:text-2xl lg:text-3xl"
            >
              Puluhan Brand Unit Usaha dan Industri Telah Memakai Jasa Kami
            </Text>
          </div>
        </section>
        {/* Client Kami */}
        <section className="w-full bg-blue-50 py-5 flex justify-center -h-[20vh] lg:-h-[30vh]">
          <div className="w-11/12 md:w-10/12 lg:w-9/12 flex flex-col space-y-3 justify-around h-full lg:py-10 self-center">
            <Text
              family="Radley"
              className=" text-center text-lg md:text-4xl font-bold"
            >
              Client Kami
            </Text>
            <div className="flex flex-row flex-nowrap overflow-x-scroll overflow-y-hidden space-x-5 lg:space-x-7 mx-5  items-center h-fit snap-x ">
              {clients.map((client) => {
                return (
                  <div className="h-16 md:h-28 2xl:40 aspect-square snap-center ">
                    <img
                      src={`${process.env.PUBLIC_URL}/logo_client/${client}`}
                      alt={client}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="w-full md:w-10/12 lg:w-9/12 flex flex-col lg:py-10 self-center my-5 lg:h-[100vh] justify-around">
          <Font family="Radley">
            <h1 className="text-center py-3 text-3xl md:text-4xl 2xl:text-6xl font-extrabold self-center flex justify-center items-end ">
              Portfolio
              <span className="">
                <LogoComponent className="h-12 2xl:h-20 inline mb-1" />
              </span>
            </h1>
          </Font>
          <div className="hidden md:block w-11/12">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={3}
              autoplay={{
                delay: 3000,
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                // clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              {portfolio.map((p) => {
                return (
                  <SwiperSlide>
                    <img
                      src={`${process.env.PUBLIC_URL}/portfolio/mockup/${p}`}
                      alt="slide_image"
                    />
                  </SwiperSlide>
                );
              })}

              <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                  <BsPersonCheck />
                </div>
                <div className="swiper-button-next slider-arrow">
                  <BsPersonCheck />
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
          <div className=" md:hidden w-11/12">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 10,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                // clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              {portfolio.map((p) => {
                return (
                  <SwiperSlide>
                    <img
                      src={`${process.env.PUBLIC_URL}/portfolio/mockup/${p}`}
                      alt="slide_image"
                    />
                  </SwiperSlide>
                );
              })}

              <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                  <BsPersonCheck />
                </div>
                <div className="swiper-button-next slider-arrow">
                  <BsPersonCheck />
                </div>
                <div className="swiper-pagination hidden"></div>
              </div>
            </Swiper>
          </div>
        </section>
        {/* Jawaban masalah */}
        <section className="w-11/12 md:w-10/12 lg:w-8/12 flex flex-col lg:py-10 self-center my-5 space-y-5 md:space-y-10 lg:space-y-20 justify-center items-center ">
          <Font family="Radley">
            <div className="flex justify-center">
              <h1 className="text-center py-3 text-2xl md:text-4xl 2xl:text-6xl font-extrabold w-3/4">
                UMKM tidak perlu pusing soal content branding & marketing
              </h1>
            </div>
          </Font>
          <div className="grid grid-cols-1 md:grid-cols-[40%_60%] justify-items-center">
            <div className="flex justify-center items-center w-full">
              <Font family="Radley">
                <h1 className=" py-3 text-xl md:text-4xl  font-extrabold flex justify-center md:justify-end items-end flex-wrap">
                  biarkan
                  <span className="inline">
                    <LogoComponent className="h-10 md:h-12 inline" />
                  </span>
                  yang mengerjakan
                </h1>
              </Font>
            </div>
            <div className="flex flex-col  space-y-3">
              <div className=" grid grid-cols-[20%_80%] justify-items-center items-center">
                <BsBookmarkCheck className="h-8 w-auto  " />
                <h1 className="text-lg md:text-2xl w-full">
                  Riset & Merencanakan Materi Konten
                </h1>
              </div>
              <div className="grid grid-cols-[20%_80%] justify-items-center items-center">
                <BsBookmarkCheck className="h-8 w-auto" />
                <h1 className="text-lg md:text-2xl  w-full">
                  Membuat konten sosial media kreatif, menarik dan update
                </h1>
              </div>
              <div className="grid grid-cols-[20%_80%] justify-items-center items-center">
                <BsBookmarkCheck className="h-8 w-auto" />
                <h1 className="text-lg md:text-2xl  w-full">
                  Memastikan sosial mediamu aktif dan menaikkan traffic
                </h1>
              </div>
            </div>
          </div>
        </section>
        {/* 8 Alasan */}
        <section className="w-11/12 md:w-10/12 lg:w-8/12 flex flex-col lg:py-10 self-center space-y-10 my-5">
          <Font family="Radley">
            <h1 className="text-center py-3 text-2xl md:text-4xl lg:text-5xl  font-extrabold self-center flex justify-center items-end ">
              8 Alasan Kenapa Perlu MEMAKAI Jasa Sosial Media Managemen
            </h1>
          </Font>
          <div className="flex flex-col  space-y-5 my-5">
            <div className="grid grid-cols-[20%_80%] justify-items-start items-center">
              <MdEditNote className="h-8 md:h-14 w-auto inline justify-self-center" />
              <h1 className="text-lg md:text-2xl inline">
                kamu BISA FOKUS meningkatkan jualan & mengelola bisnis, urusan
                konten biar kami yang kerjakan
              </h1>
            </div>
            <div className="grid grid-cols-[20%_80%] justify-items-start items-center">
              <MdEditNote className="h-8 md:h-14 w-auto inline justify-self-center" />
              <h1 className="text-lg md:text-2xl ">
                kamu tak perlu lagi mikirin Ide & desain konten
              </h1>
            </div>
            <div className="grid grid-cols-[20%_80%] justify-items-start items-center">
              <MdEditNote className="h-8 md:h-14 w-auto inline justify-self-center" />
              <h1 className="text-lg md:text-2xl ">
                kamu tak perlu lagi Hire Designer dan Admin
              </h1>
            </div>
            <div className="grid grid-cols-[20%_80%] justify-items-start items-center">
              <MdEditNote className="h-8 md:h-14 w-auto inline justify-self-center" />
              <h1 className="text-lg md:text-2xl ">
                kamu tak perlu lagi Mikirin Gaji bulanan tim yang menguras
                kantong
              </h1>
            </div>
            <div className="grid grid-cols-[20%_80%] justify-items-start items-center">
              <MdEditNote className="h-8 md:h-14 w-auto inline justify-self-center" />
              <h1 className="text-lg md:text-2xl ">
                Dengan menggunakan Jasa @teman.scaleup, kamu bisa hemat budget,
                efektif dan efisien.
              </h1>
            </div>
            <div className="grid grid-cols-[20%_80%] justify-items-start items-center">
              <MdEditNote className="h-8 md:h-14 w-auto inline justify-self-center" />
              <h1 className="text-lg md:text-2xl ">
                Harga yang di tawarkan juga variatif, bisa menyesuaikan
                kebutuhan dan tahap bisnismu
              </h1>
            </div>
            <div className="grid grid-cols-[20%_80%] justify-items-start items-center">
              <MdEditNote className="h-8 md:h-14 w-auto inline justify-self-center" />
              <h1 className="text-lg md:text-2xl  flex">
                Banyak Bonusnya ( Free Riset Hashtag, Free Make Over Bio Sosial
                Media , Free Copywriting Caption dan masih banyak lainnya)
              </h1>
            </div>
            <div className="grid grid-cols-[20%_80%] justify-items-start items-center">
              <MdEditNote className="h-8 md:h-14 w-auto inline justify-self-center" />
              <h1 className="text-lg md:text-2xl ">
                Nggak cuma bikin konten, kami juga siap jadi teman curhat bisnis
                Anda. Layanan ramah dan bisa jadi teman brainstrorming ide
                konten untuk bisnis Anda. Nikmati layanan Konsultasi Gratis
              </h1>
            </div>
          </div>
        </section>
        {/* Harga Start From */}
        <section className="w-11/12 md:w-10/12 lg:w-9/12 flex flex-col lg:py-10 self-center justify-center items-center my-5">
          <Font family="Radley">
            <h1 className="text-center py-3 text-2xl md:text-4xl 2xl:text-6xl font-extrabold self-center flex justify-center items-end ">
              Harga Mulai dari:
            </h1>
            <h2 className="text-3xl text-center">
              <s>Rp 400.000</s>
            </h2>
            <h1 className="text-6xl md:text-8xl text-center text-blue-700">
              Rp 250K
            </h1>
          </Font>
        </section>
        {/* CTA Order */}
        {/* <section className="">
          <div className=" h-full flex justify-center items-center bg-blue-200">
            <div className="bg-white rounded-xl py-5 flex flex-col my-10 px-5 w-3/4 md:w-1/4">
              <div className="flex items-center justify-center ">
                <h1 className="font-bold text-center text-lg my-2">
                  <Text family="Radley">Ingin Kerjasama Dengan</Text>
                </h1>
                <LogoComponent className="w-fit h-8 mb-3" />
              </div>
              <Font family="Radley">
                <h1 className="text-center text-sm md:text-lg my-3">
                  Harga Berubah Sewaktu - waktu <br /> Segera Hubungi Kami
                </h1>
              </Font>
              <ButtonComponent
                text="Klik Disini"
                className=" bg-blue-600 text-white text-sm py-2 px-3 my-3 md:text-lg"
              />
            </div>
          </div>
        </section> */}
        <CallToActionWA />
        {/* Pricelist */}
        <section className=" w-full bg-yellow-50 flex justify-center">
          <div className="w-11/12 md:w-11/12 lg:w-10/12 flex flex-col lg:py-10 self-center justify-center items-center my-5">
            <Font family="Radley">
              <h1 className="text-center py-3 text-2xl md:text-4xl 2xl:text-6xl font-extrabold self-center flex justify-center items-end ">
                Price List
              </h1>
            </Font>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  py-3 lg:py-10 gap-5 justify-items-center items-start self-center">
              {/* Pricelist per paket 150K */}
              <div className="w-full flex flex-col justify-center items-center h-full">
                <div className="w-full bg-lime-600 text-white py-5 px-5 rounded-3xl space-y-3 flex flex-col justify-between shadow-md h-full">
                  <div>
                    <Text family="Radley">Paket Hemat</Text>
                    <Font family="Radley">
                      <h1 className="text-6xl">
                        250K <span className="text-lg">(IDR)</span>
                      </h1>
                    </Font>
                    <div className="w-1/2 h-1 bg-white my-5 rounded-full"></div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center ">
                      <div className="inline text-white">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        kamu tinggal <b> TERIMA BERES AJA! </b>
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Posting <b>SETIAP HARI</b> termasuk hari <b>LIBUR</b>
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Ide Konten & Materi Konten dari kami
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">Copywriting Konten & Caption</h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Hashtag yang teriset dan relate di setiap konten
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        1 konten = 1 design + copywriting + caption & hashtag
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Total jatah konten{" "}
                        <b className="text-black underline text-xl px-2 rounded-2xl bg-opacity-90 font-bold">
                          9 Konten Gambar (Jpg)
                        </b>
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Setiap hari keluar atau posting 1 konten
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Bisa Request konsep / referensi tone warna
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        <b className="text-black underline text-xl px-2 rounded-2xl bg-opacity-90 font-bold">
                          Free
                        </b>{" "}
                        : Make over bio
                      </h1>
                    </div>
                  </div>
                  <div className="my-5 self-center py-5">
                    <ButtonOrderPaket paket="Paket Hemat" />
                  </div>
                </div>
              </div>

              {/* Pricelist per paket 350K*/}
              <div className="w-full flex flex-col justify-center items-center h-full ">
                <div className="w-full bg-blue-600 text-white py-5 px-5 rounded-3xl space-y-3 flex flex-col justify-between shadow-md h-full">
                  <div>
                    <Text family="Radley">Paket Cermat</Text>
                    <Font family="Radley">
                      <h1 className="text-6xl">
                        450K <span className="text-lg">(IDR)</span>
                      </h1>
                    </Font>
                    <div className="w-1/2 h-1 bg-white my-5 rounded-full"></div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        kamu tinggal <b>TERIMA BERES AJA!</b>
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Posting <b>SETIAP HARI</b>termasuk hari <b> LIBUR </b>
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Ide Konten & Materi Konten dari kami
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">Copywriting Konten & Caption</h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Hashtag yang teriset dan relate di setiap konten
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        1 konten = 1 design + copywriting + caption & hashtag
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Total jatah konten{" "}
                        <b className="text-black underline text-xl px-2 rounded-2xl bg-opacity-90 font-bold">
                          {" "}
                          15 Konten terdiri dari 8 video reels dan 7 konten
                          gambar (.jpeg){" "}
                        </b>
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Setiap hari keluar atau posting 1 konten (di jam prime
                        time)
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Bisa Request konsep / referensi tone warna
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        <b className="text-black underline text-xl px-2 rounded-2xl bg-opacity-90 font-bold">
                          Free
                        </b>{" "}
                        : Make over bio
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        <b className="text-black underline text-xl px-2 rounded-2xl bg-opacity-90 font-bold">
                          Free
                        </b>{" "}
                        : Multiple Link Bio Iinstagram
                      </h1>
                    </div>
                  </div>
                  <div className="my-5 self-center py-5">
                    <ButtonOrderPaket paket="Paket Cermat" />
                  </div>
                </div>
              </div>

              {/* Pricelist per paket 500K*/}
              <div className="w-full flex flex-col justify-center items-center h-full ">
                <div className="w-full bg-violet-600 text-white py-5 px-5 rounded-3xl space-y-3 flex flex-col justify-between shadow-md h-full">
                  <div>
                    <Text family="Radley">Paket Reguler</Text>
                    <Font family="Radley">
                      <h1 className="text-6xl">
                        600K <span className="text-lg">(IDR)</span>
                      </h1>
                    </Font>
                    <div className="w-1/2 h-1 bg-white my-5 rounded-full"></div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        kamu tinggal <b>TERIMA BERES AJA!</b>
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Posting <b>SETIAP HARI</b>termasuk hari <b> LIBUR </b>
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Ide Konten & Materi Konten dari kami
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">Copywriting Konten & Caption</h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Hashtag yang teriset dan relate di setiap konten
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        1 konten = 1 design + copywriting + caption & hashtag
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Total jatah konten{" "}
                        <b className="text-black underline text-xl px-2 rounded-2xl bg-opacity-90 font-bold">
                          {" "}
                          30 Konten terdiri dari full gambar (jpg){" "}
                        </b>
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Setiap hari keluar atau posting 1 konten (di jam prime
                        time)
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Bisa Request konsep / referensi tone warna
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        <b className="text-black underline text-xl px-2 rounded-2xl bg-opacity-90 font-bold">
                          Free
                        </b>{" "}
                        : Make over bio
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        <b className="text-black underline text-xl px-2 rounded-2xl bg-opacity-90 font-bold">
                          Free
                        </b>{" "}
                        : Multiple Link Bio Iinstagram
                      </h1>
                    </div>
                  </div>
                  <div className="my-5 self-center py-5">
                    <ButtonOrderPaket paket="Paket Reguler" />
                  </div>
                </div>
              </div>

              {/* Pricelist per paket 750K*/}
              <div className="w-full flex flex-col justify-center items-center h-full  ">
                <div className="w-full bg-green-600 text-white py-5 px-5 rounded-3xl space-y-3 flex flex-col justify-between shadow-md h-full">
                  <div>
                    <Text family="Radley">Paket Business</Text>
                    <Font family="Radley">
                      <h1 className="text-6xl">
                        850K <span className="text-lg">(IDR)</span>
                      </h1>
                    </Font>
                    <div className="w-1/2 h-1 bg-white my-5 rounded-full"></div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        kamu tinggal <b> TERIMA BERES AJA!</b>
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Posting <b>SETIAP HARI</b> termasuk hari <b>LIBUR</b>
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Ide Konten & Materi Konten dari kami
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">Copywriting Konten & Caption</h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Hashtag yang teriset dan relate di setiap konten
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        1 konten = 1 design + copywriting + caption & hashtag
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Total jatah{" "}
                        <b className="text-black underline text-xl px-2 rounded-2xl bg-opacity-90 font-bold">
                          {" "}
                          30 Konten terdiri dari 15 konten Gambar (Jpg), 15
                          konten VIDEO REELS
                        </b>
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Setiap hari keluar atau posting 1 konten (jam prime
                        time)
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Bisa Request konsep / referensi tone warna
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        4 Icon Sorotan untuk highlight story
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        {" "}
                        <b className="text-black underline text-xl px-2 rounded-2xl bg-opacity-90 font-bold">
                          Free
                        </b>{" "}
                        : Make over bio
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        <b className="text-black underline text-xl px-2 rounded-2xl bg-opacity-90 font-bold">
                          {" "}
                          Free{" "}
                        </b>{" "}
                        : Multiple Link Bio Iinstagram
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        {" "}
                        <b className="text-black underline text-xl px-2 rounded-2xl bg-opacity-90 font-bold">
                          Free
                        </b>{" "}
                        : Balas Komentar Postingan
                      </h1>
                    </div>
                  </div>
                  <div className="my-5 self-center py-5">
                    <ButtonOrderPaket paket="Paket Business" />
                  </div>
                </div>
              </div>

              {/* Pricelist per paket 900K*/}
              {/* <div className="w-full flex flex-col justify-center items-center h-full">
                <div className="w-full bg-slate-700 text-white py-5 px-5 rounded-3xl space-y-3 flex flex-col justify-between shadow-md h-full">
                  <div>
                    <Text family="Radley">Paket Platinum</Text>
                    <Font family="Radley">
                      <h1 className="text-6xl">
                        900K <span className="text-lg">(IDR)</span>
                      </h1>
                    </Font>
                    <div className="w-1/2 h-1 bg-white my-5 rounded-full"></div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        kamu tinggal <b> TERIMA BERES AJA!</b>
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Posting <b> SETIAP HARI </b> termasuk hari{" "}
                        <b> LIBUR </b>
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Ide Konten & Materi Konten dari kami
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">Copywriting Konten & Caption</h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Hashtag yang teriset dan relate di setiap konten
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        1 konten = 1 design + copywriting + caption & hashtag
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Total jatah <b> konten 30</b> Konten terdiri dari
                        <b className="text-yellow-500 ml-2">
                          10 Gambar Jpg & 20 Video
                        </b>
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Setiap hari keluar atau posting 1 konten (jam prime
                        time)
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Bisa Request konsep / referensi tone warna
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        4 Icon Sorotan untuk highlight story
                      </h1>
                    </div>

                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        <b className="text-black underline text-xl px-2 rounded-2xl bg-opacity-90 font-bold"> Free</b> : Make over bio
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        <b className="text-black underline text-xl px-2 rounded-2xl bg-opacity-90 font-bold"> Free</b> : Multiple Link
                        Bio Instagram
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        <b className="text-black underline text-xl px-2 rounded-2xl bg-opacity-90 font-bold"> Free</b> : Balas
                        Komentar Postingan
                      </h1>
                    </div>
                  </div>
                  <div className="my-5 self-center py-5">
                    <ButtonOrderPaket paket="Paket Platinum" />
                  </div>
                </div>
              </div> */}

              {/* Pricelist per paket 1200K*/}
              <div className="w-full flex flex-col justify-center items-center h-full  ">
                <div className="w-full bg-red-700 text-white py-5 px-5 rounded-3xl space-y-3 flex flex-col justify-between shadow-md h-full">
                  <div>
                    <Text family="Radley">Paket Exclusive</Text>
                    <Font family="Radley">
                      <h1 className="text-6xl">
                        1300K <span className="text-lg">(IDR)</span>
                      </h1>
                    </Font>
                    <div className="w-1/2 h-1 bg-white my-5 rounded-full"></div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        kamu tinggal <b> TERIMA BERES AJA!</b>
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Posting <b> SETIAP HARI </b> termasuk hari{" "}
                        <b> LIBUR </b>
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Ide Konten & Materi Konten dari kami
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">Copywriting Konten & Caption</h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Hashtag yang teriset dan relate di setiap konten
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        1 konten = 1 design + copywriting + caption & hashtag
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Total jatah konten
                        <b className="text-yellow-500 ml-1">
                          30 Konten terdiri dari Full VIDEO
                        </b>
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Setiap hari keluar atau posting 1 konten (jam prime
                        time)
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        Bisa Request konsep / referensi tone warna
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        4 Icon Sorotan untuk highlight story
                      </h1>
                    </div>

                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        <b className="text-black underline text-xl px-2 rounded-2xl bg-opacity-90 font-bold">
                          {" "}
                          Free
                        </b>{" "}
                        : Make over bio
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        <b className="text-black underline text-xl px-2 rounded-2xl bg-opacity-90 font-bold">
                          {" "}
                          Free
                        </b>{" "}
                        : Multiple Link Bio Instagram
                      </h1>
                    </div>
                    <div className="grid grid-cols-[10%_90%] justify-items-start items-center">
                      <div className="inline">
                        <BsPencilFill />
                      </div>
                      <h1 className="inline">
                        <b className="text-black underline text-xl px-2 rounded-2xl bg-opacity-90 font-bold">
                          {" "}
                          Free
                        </b>{" "}
                        : Balas Komentar Postingan
                      </h1>
                    </div>
                  </div>
                  <div className="my-5 self-center py-5">
                    <ButtonOrderPaket paket="Paket Exclusive" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Review Hasil */}
        <section className="w-11/12 md:w-10/12 flex flex-col lg:py-10 self-center justify-center items-center my-5">
          <Font family="Radley">
            <h1 className="my-5 text-center py-3 text-2xl md:text-4xl 2xl:text-6xl font-extrabold self-center flex justify-center items-end ">
              Review Hasil Optimasi Instagram
            </h1>
          </Font>
          <div className="flex flex-col gap-3">
            {/* part Video Review */}
            <div className="flex flex-col md:grid grid-cols-2 justify-center md:justify-end items-center text-left gap-5">
              <div className="flex flex-col items-center md:items-end">
                <iframe
                  src="https://www.youtube.com/embed/wzx7NbkOmok"
                  allow="fullscreen"
                  title="Review Optimasi Instagram @bimbelprivat.palu selama 12 Hari"
                  className="w-70 lg:w-[45vw] xl:w-[40vw] h- h-40 lg:h-[35vh] xl:h-[45vh]"
                ></iframe>
                <h1 className="text-center my-3 md:hidden w-3/4">
                  <Text family="poppins" className="font-bold ">
                    Review Optimasi Instagram @bimbelprivat.palu Selama 12 Hari
                  </Text>
                </h1>
              </div>
              <Font family="Poppins">
                <h1 className="font-bold hidden md:flex justify-start items-center md:text-2xl">
                  By
                  <span className="">
                    <LogoComponent className="h-16 inline mb-1" />
                  </span>
                </h1>
                <h1 className="text-left hidden md:inline  lg:text-2xl font-bold">
                  Review Optimasi Instagram @bimbelprivat.palu selama 12 Hari
                </h1>
              </Font>
            </div>
            {/* part Video Review */}
            <div className="flex flex-col md:grid grid-cols-2 justify-center md:justify-end items-center text-right gap-5">
              <Font family="Poppins">
                <h1 className="font-bold hidden md:flex justify-end items-center md:text-2xl">
                  By
                  <span className="">
                    <LogoComponent className="h-16 inline mb-1" />
                  </span>
                </h1>
                <h1 className="hidden md:inline  lg:text-2xl font-bold">
                  Review 30 Hari Bersama Akun IG @kambing_palembang
                </h1>
              </Font>
              <div className="flex flex-col items-center md:items-start">
                <iframe
                  src="https://www.youtube.com/embed/-IIMvcKUlss"
                  allow="fullscreen"
                  title="Review 30 Hari bersama akun IG @kambing_palembang"
                  className="w-70 lg:w-[45vw] xl:w-[40vw] h- h-40 lg:h-[35vh] xl:h-[45vh]"
                ></iframe>
                <h1 className="text-center my-3 md:hidden w-3/4">
                  <Text family="poppins" className="font-bold ">
                    Review 30 Hari Bersama Bersama Akun IG @kambing_palembang
                  </Text>
                </h1>
              </div>
            </div>
            {/* part Video Review */}
            <div className="flex flex-col md:grid grid-cols-2 justify-center md:justify-end items-center text-left gap-5">
              <div className="flex flex-col items-center md:items-end">
                <iframe
                  src="https://www.youtube.com/embed/UNZDx5VjDR0"
                  allow="fullscreen"
                  title="Review 30 hari bersama @Sehati.Homecare"
                  className="w-70 lg:w-[45vw] xl:w-[40vw] h- h-40 lg:h-[35vh] xl:h-[45vh]"
                ></iframe>
                <h1 className="text-center my-3 md:hidden w-3/4">
                  <Text family="poppins" className="font-bold ">
                    Review 30 Hari Bersama @Sehati.Homecare
                  </Text>
                </h1>
              </div>
              <Font family="poppins">
                <h1 className="font-bold hidden md:flex justify-start items-center md:text-2xl">
                  By
                  <span className="">
                    <LogoComponent className="h-16 inline mb-1" />
                  </span>
                </h1>
                <h1 className="text-left hidden md:inline  lg:text-2xl font-bold">
                  Review 30 Hari Bersama @Sehati.Homecare
                </h1>
              </Font>
            </div>
            {/* part Video Review */}
            <div className="flex flex-col md:grid grid-cols-2 justify-center md:justify-end items-center text-right gap-5">
              <Font family="Poppins">
                <h1 className="font-bold hidden md:flex justify-end items-center md:text-2xl">
                  By
                  <span className="">
                    <LogoComponent className="h-16 inline mb-1" />
                  </span>
                </h1>
                <h1 className="hidden md:inline  font-bold md:text-2xl">
                  Review 60 Hari Bersama @gulzar_travel
                </h1>
              </Font>
              <div className="flex flex-col items-center md:items-start">
                <iframe
                  src="https://www.youtube.com/embed/AVeSq1dkfb0"
                  allow="fullscreen"
                  title="Review 60 Hari bersama @gulzar_travel"
                  className="w-70 lg:w-[45vw] xl:w-[40vw] h- h-40 lg:h-[35vh] xl:h-[45vh]"
                ></iframe>
                <h1 className="text-center my-3 md:hidden w-3/4">
                  <Text family="poppins" className="font-bold ">
                    Review 60 Hari Bersama @gulzar_travel
                  </Text>
                </h1>
              </div>
            </div>
          </div>
        </section>
        {/* Varian Layanan */}
        <section className="w-11/12 md:w-10/12 lg:w-9/12 grid grid-cols-1 md:grid-cols-2 justify-center gap-5 lg:py-10 self-center my-5">
          <div className=" flex flex-col justify-center items-center">
            <h1 className="pt-3 text-xl md:text-2xl 2xl:text-3xl font-extrabold   flex items-end justify-center">
              <span className="inline">
                <LogoComponent className="inline h-10 md:h-12 2xl:h-15 " />
              </span>
              juga memberikan
            </h1>
            <h1 className="text-xl md:text-2xl 2xl:text-3xl   font-extrabold  flex text-center">
              berbagai Layanan untuk membangun brand atau usaha Anda
            </h1>
          </div>
          <div className="my-10 flex flex-col space-y-5">
            <div className="grid grid-cols-[10%_90%] items-center gap-6 rounded-r-full bg-amber-600 text-white py-3 px-3">
              <BsPersonCheck className="h-10 w-auto" />
              <Text family="Raleway" className="text-xl">
                Jasa Desain Logo
              </Text>
            </div>
            <div className="grid grid-cols-[10%_90%] items-center gap-6 rounded-r-full bg-zinc-600 text-white py-3 px-3">
              <BsPersonCheck className="h-10 w-auto" />
              <Text family="Raleway" className="text-xl">
                Jasa Pembuatan LandingPage / Website UMKM
              </Text>
            </div>
            <div className="grid grid-cols-[10%_90%] items-center gap-6 rounded-r-full bg-cyan-600 text-white py-3 px-3">
              <BsPersonCheck className="h-10 w-auto" />
              <Text family="Raleway" className="text-xl">
                Jasa Pembuatan Website Professional
              </Text>
            </div>
            <div className="grid grid-cols-[10%_90%] items-center gap-6 rounded-r-full bg-indigo-600 text-white py-3 px-3">
              <BsPersonCheck className="h-10 w-auto" />
              <Text family="Raleway" className="text-xl">
                Jasa Upload Produk Marketplace
              </Text>
            </div>
          </div>
        </section>
        {/* CTA Order */}
        {/* <section className="">
          <div className=" h-full flex justify-center items-center bg-blue-200 px-2 py-2">
            <div className="bg-white rounded-xl py-5 flex flex-col my-10 px-5 w-full md:w-1/4">
              <div className="flex items-center justify-center ">
                <h1 className="font-bold text-center text-lg my-2">
                  <Text family="Radley">Ingin Kerjasama Dengan</Text>
                </h1>
                <LogoComponent className="w-fit h-8 mb-3" />
              </div>
              <Font family="Radley">
                <h1 className="text-center text-sm md:text-lg my-3">
                  Harga Berubah Sewaktu - waktu <br /> Segera Hubungi Kami
                </h1>
              </Font>
              <ButtonComponent
                text="Klik Disini"
                className=" bg-blue-600 text-white text-sm py-2 px-3 my-3 md:text-lg"
              />
            </div>
          </div>
        </section> */}
        <CallToActionWA />
      </main>
      <FooterComponent />
      <div className="h-16 bg-zinc-400 md:hidden"></div>
    </>
  );
}
