// components/SKCarousel.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";

const dataSK = [
  "Makalah",
  "Proposal",
  "Skripsi",
  "CV/Lamaran",
  "Jasa Ketik",
  "Jasa Foto Panggilan",
  "Desain",
  "Tugas Sekolah",
  "Jasa Terjemahan",
  "Pembuatan Website",
];

// Bagi dua bagian
const half = Math.ceil(dataSK.length / 2);
const topRow = [...dataSK.slice(0, half)];
const bottomRow = [...dataSK.slice(half)];

// Duplikasikan item agar looping smooth
const duplicateItems = (items) => [...items, ...items];

const CarouselRow = ({ items, reverse = false }) => (
  <Swiper
    slidesPerView={"auto"}
    spaceBetween={16}
    freeMode={true}
    loop={true}
    speed={6000}
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: reverse,
    }}
    modules={[FreeMode, Autoplay]}
    allowTouchMove={false}
    className="w-full"
  >
    {duplicateItems(items).map((item, idx) => (
      <SwiperSlide key={idx} className="!w-fit">
        <div className="bg-gray-700 text-white rounded-full px-6 py-3 font-semibold text-center shadow whitespace-nowrap">
          {item}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);


export default function Carousel() {
  return (
    <div className="w-full px-4 py-6 space-y-4">
      {/* Atas: ke kiri */}
      <CarouselRow items={topRow} reverse={true} />

      {/* Bawah: ke kanan */}
      <CarouselRow items={bottomRow} reverse={false} />
    </div>
  );
}


