"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Sepatu Sneakers Pria",
    price: "Rp 350.000",
    image: "/sepatu1.jpg",
  },
  {
    id: 2,
    name: "Sepatu Running Wanita",
    price: "Rp 420.000",
    image: "/sepatu2.jpg",
  },
  {
    id: 3,
    name: "Sepatu Casual Anak",
    price: "Rp 280.000",
    image: "/sepatu3.jpg",
  },
  {
    id: 4,
    name: "Sepatu Formal Pria",
    price: "Rp 500.000",
    image: "/sepatu4.jpg",
  },
];

export default function ProductList() {
  return (
    <div className="px-6 py-8">
      <h2 className="text-xl font-bold mb-4">Produk Sepatu</h2>
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
              <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full cursor-pointer">
                Beli
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
