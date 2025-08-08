// components/SKCarousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { FreeMode, Scrollbar, Autoplay } from "swiper/modules";

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

export default function Carousel() {
  return (
    <div className="w-full px-4 py-6">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        freeMode={true}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Scrollbar, Autoplay]}
        className="mySwiper"
      >
        {dataSK.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="!w-fit"
          >
            <div className="bg-gray-700 text-white rounded-full px-6 py-3 font-semibold text-center shadow whitespace-nowrap">
              {item}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
