"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white px-6 py-3 z-50 shadow-md">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold z-50">
            Tugas.In
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 font-medium">
            <Link href="/" className="hover:underline">Beranda</Link>
            <Link href="/layanan" className="hover:underline">Layanan</Link>
            <Link href="#portofolio" className="hover:underline">Portofolio</Link>
            <Link href="#kontak" className="hover:underline">Kontak</Link>
          </div>

          {/* Desktop CTA Button - Right */}
          <div className="hidden md:block">
            <Link
              href="#pesan"
              className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md font-medium"
            >
              Pesan Sekarang
            </Link>
          </div>

          {/* Hamburger button */}
          <button
            className="md:hidden focus:outline-none z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-700 text-white z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 mt-14 flex flex-col space-y-4 font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:underline">Beranda</Link>
          <Link href="/layanan" onClick={() => setMenuOpen(false)} className="hover:underline">Layanan</Link>
          <Link href="#portofolio" onClick={() => setMenuOpen(false)} className="hover:underline">Portofolio</Link>
          <Link href="#kontak" onClick={() => setMenuOpen(false)} className="hover:underline">Kontak</Link>
          <Link
            href="#pesan"
            onClick={() => setMenuOpen(false)}
            className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-center"
          >
            Pesan Sekarang
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
