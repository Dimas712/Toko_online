"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [keyword, setKeyword] = useState("");

  return (
    <nav className="bg-blue-500 text-white px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        Buitenzorg Shoes
      </Link>

      {/* Search Bar */}
      <div className="flex flex-1 mx-6">
        <input
          type="text"
          placeholder="Cari produk disini"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full px-4 py-2 rounded-l-md text-black focus:outline-none"
        />
        <button className="bg-orange-600 px-4 py-2 rounded-r-md hover:bg-orange-700">
          Cari
        </button>
      </div>

      {/* Menu Right */}
      <div className="flex items-center space-x-4">
        <Link href="/keranjang" className="hover:underline">
          Keranjang
        </Link>
        <Link href="/akun" className="hover:underline">
          Login
        </Link>
      </div>
    </nav>
  );
}
