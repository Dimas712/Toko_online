"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Tugas.In
        </Link>

        {/* Hamburger button */}
        <button
          className="md:hidden focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <Link href="/" className="hover:underline">Beranda</Link>
          <Link href="#layanan" className="hover:underline">Layanan</Link>
          <Link href="#portofolio" className="hover:underline">Portofolio</Link>
          <Link href="#kontak" className="hover:underline">Kontak</Link>
          <Link
            href="#pesan"
            className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md"
          >
            Pesan Sekarang
          </Link>
        </div>
      </div>

      {/* Mobile Side Menu (Left Drawer) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-700 text-white z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-4 font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:underline">Beranda</Link>
          <Link href="#layanan" onClick={() => setMenuOpen(false)} className="hover:underline">Layanan</Link>
          <Link href="#portofolio" onClick={() => setMenuOpen(false)} className="hover:underline">Portofolio</Link>
          <Link href="#harga" onClick={() => setMenuOpen(false)} className="hover:underline">Harga</Link>
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

      {/* Overlay Background */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}
