"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Membuat Makalah",
    image: "/makalah.jpg",
  },
  {
    id: 2,
    name: "Membuat Proposal",
    image: "/proposal.jpg",
  },
  {
    id: 3,
    name: "Membuat Skripsi",
    image: "/skripsi.jpg",
  },
  {
    id: 4,
    name: "Membuat CV / Lamaran",
    image: "/cv.jpg",
  },
  {
    id: 5,
    name: "Jasa Ketik",
    image: "/jasaketik.jpg",
  },
  {
    id: 6,
    name: "Jasa Foto Panggilan",
    image: "/fotopanggilan.jpg",
  },
  {
    id: 7,
    name: "Jasa Desain",
    image: "/jasadesain.jpg",
  },
  {
    id: 8,
    name: "Tugas Sekolah",
    image: "/tugassekolah.jpg",
  },
  {
    id: 9,
    name: "Jasa Terjemahan",
    image: "/terjemahan.jpg",
  },
  {
    id: 10,
    name: "Pembuatan Website",
    image: "/modul.jpg",
  },
];

export default function LayananPage() {
  return (
    <div className="px-6 py-8">
      <h2 className="text-xl font-bold mb-4">Layanan Multimedia & Tugas Sekolah</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-md overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative w-full h-48">
              <Image
                src={product.image}
                alt={product.name}  
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{product.name}</h3>

              <Link href={`/layanan/${product.id}`}>
                <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full cursor-pointer">
                  Pesan Sekarang
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
