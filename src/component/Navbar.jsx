"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Tugas.In
        </Link>

        {/* Hamburger button */}
        <button
          className="md:hidden focus:outline-none"
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 font-medium">
          <Link href="/" className="hover:underline" onClick={() => setMenuOpen(false)}>Beranda</Link>
          <Link href="#layanan" className="hover:underline" onClick={() => setMenuOpen(false)}>Layanan</Link>
          <Link href="#portofolio" className="hover:underline" onClick={() => setMenuOpen(false)}>Portofolio</Link>
          <Link href="#harga" className="hover:underline" onClick={() => setMenuOpen(false)}>Harga</Link>
          <Link href="#kontak" className="hover:underline" onClick={() => setMenuOpen(false)}>Kontak</Link>
          <Link
            href="#pesan"
            className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-center"
            onClick={() => setMenuOpen(false)}
          >
            Pesan Sekarang
          </Link>
        </div>
      )}
    </nav>
  );
}
