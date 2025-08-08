"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const DetailProdukPage = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  // Contoh data dummy (nanti bisa diganti API)
  const products = [
    {
      id: "1",
      name: "Sepatu Sneakers Pria",
      price: "Rp 350.000",
      image: "/sepatu1.jpg",
      description:
        "Sepatu sneakers pria berkualitas tinggi, nyaman dipakai sehari-hari.",
    },
    {
      id: "2",
      name: "Sepatu Running Wanita",
      price: "Rp 420.000",
      image: "/sepatu2.jpg",
      description:
        "Sepatu running wanita ringan dan stylish, cocok untuk olahraga.",
    },
  ];

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="p-6">Produk tidak ditemukan.</div>;
  }

  const handleAddToCart = () => {
    alert(`Produk ${product.name} ditambahkan ke keranjang!`);
    // Di sini nanti panggil API keranjang
  };

  const handleBuyNow = () => {
    alert(`Membeli ${product.name} sekarang!`);
    // Di sini redirect ke checkout
    router.push("/checkout");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Gambar Produk */}
        <div className="w-full md:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="object-cover rounded"
          />
        </div>

        {/* Info Produk */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-orange-600 text-xl font-semibold mb-4">
            {product.price}
          </p>

          <p className="mb-6 text-gray-700">{product.description}</p>

          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-yellow-500 text-white py-3 rounded hover:bg-yellow-600"
            >
              Masukkan Keranjang
            </button>

            <button
              onClick={handleBuyNow}
              className="flex-1 bg-orange-500 text-white py-3 rounded hover:bg-orange-600"
            >
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProdukPage;
