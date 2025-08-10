"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-green2">
      <div className="mx-auto w-full max-w-screen-xl px-8 py-6">
        <div className="md:flex md:justify-between">
          {/* Logo & Deskripsi */}
          <div className="mb-6 md:mb-0 max-w-md">
            <a className="flex items-center pb-4">
              <img src="/Tugasin.jpeg" alt="Logo" className="w-[159px]" />
            </a>
            <p className="text-sm text-gray-700">
              Tugas.In adalah solusi untuk kebutuhan multimedia tugas sekolah Anda. Kami melayani pembuatan video presentasi, desain poster, animasi, dan voice over dengan kualitas profesional dan pengerjaan cepat.
            </p>
          </div>

          {/* Navigasi & Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pl-4 pr-4">
            {/* Navigasi */}
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
                Navigasi
              </h2>
              <ul className="text-black-500 font-medium space-y-2">
                <li><Link href="/" className="hover:underline">Beranda</Link></li>
                <li><Link href="/layanan" className="hover:underline">Layanan</Link></li>
                <li><Link href="#portofolio" className="hover:underline">Portofolio</Link></li>
                <li><Link href="#kontak" className="hover:underline">Kontak</Link></li>
              </ul>
            </div>

            {/* Sosial Media */}
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
                Ikuti Kami
              </h2>
              <ul className="text-black-500 font-medium space-y-2">
                <li><a href="https://www.instagram.com/tugas.innnn" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">TikTok</a></li>
              </ul>
            </div>

            {/* Kontak */}
            <div className="max-w-xs">
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
                Hubungi Kami
              </h2>
              <ul className="text-black-500 font-medium space-y-2">
                <li>
                  <p>Jl. Raya Jasinga, Pamagersari, Kec. Jasinga, Kabupaten Bogor, Jawa Barat 16670</p>
                </li>
                <li>
                  <p>Telepon: 0858-9176-6756</p>
                </li>
                <li>
                  <p>Email: tugas.inaja@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200" />

        <div className="sm:flex sm:items-center sm:justify-between text-sm text-black-500">
          <span>
            © 2025 <a className="hover:underline">Tugas.In</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
