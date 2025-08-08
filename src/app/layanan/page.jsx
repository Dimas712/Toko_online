"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Membuat Makalah",
    price: "Mulai dari Rp 50.000",
    image: "/makalah.jpg",
  },
  {
    id: 2,
    name: "Membuat Proposal",
    price: "Mulai dari Rp 75.000",
    image: "/proposal.jpg",
  },
  {
    id: 3,
    name: "Membuat Skripsi",
    price: "Mulai dari Rp 250.000",
    image: "/skripsi.jpg",
  },
  {
    id: 4,
    name: "Membuat CV / Lamaran",
    price: "Mulai dari Rp 20.000",
    image: "/cv.jpg",
  },
  {
    id: 5,
    name: "Jasa Ketik",
    price: "Mulai dari Rp 10.000",
    image: "/jasaketik.jpg",
  },
  {
    id: 6,
    name: "Jasa Foto Panggilan",
    price: "Mulai dari Rp 200.000",
    image: "/fotopanggilan.jpg",
  },
  {
    id: 7,
    name: "Jasa Desain",
    price: "Mulai dari Rp 50.000",
    image: "/jasadesain.jpg",
  },
  {
    id: 8,
    name: "Tugas Sekolah",
    price: "Mulai dari Rp 30.000",
    image: "/tugassekolah.jpg",
  },
  {
    id: 9,
    name: "Jasa Terjemahan",
    price: "Mulai dari Rp 50.000",
    image: "/terjemahan.jpg",
  },
  {
    id: 10,
    name: "Membuat Modul",
    price: "Mulai dari Rp 150.000",
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
              <p className="text-orange-600 font-bold">{product.price}</p>

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
