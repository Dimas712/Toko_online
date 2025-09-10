// app/pemesanan/page.jsx
"use client";

import { useState } from "react";

export default function Pemesanan({ searchParams }) {
  const jasa = searchParams?.jasa || "";

  const [formData, setFormData] = useState({
    nama: "",
    hp: "",
    alamat: "",
    keterangan: "",
    jasa,
    bayar: "cash",
  });

  const qrisImage = "/qris.jpeg"; // Simpan gambar di folder public

  const handleDownloadQRIS = () => {
    const link = document.createElement("a");
    link.href = qrisImage;
    link.download = "qris.jpeg";
    link.click();
  };

  const kirimWA = () => {
    const adminPhone = "6285716041690";
    const text = `Halo Admin, saya ingin memesan layanan:\n
    Nama: ${formData.nama}
    No HP: ${formData.hp}
    Alamat: ${formData.alamat}
    Keterangan: ${formData.keterangan}
    Jasa: ${formData.jasa}
    Metode Pembayaran: ${formData.bayar}`;

    window.open(`https://wa.me/${adminPhone}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded mt-6">
      <h2 className="text-xl font-bold mb-4">Form Pemesanan</h2>

      <input
        type="text"
        placeholder="Nama Lengkap"
        className="border p-2 w-full mb-2 rounded"
        onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
        value={formData.nama}
      />

      <input
        type="text"
        placeholder="No HP / WhatsApp"
        className="border p-2 w-full mb-2 rounded"
        onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
        value={formData.hp}
      />

      <textarea
        placeholder="Alamat Lengkap"
        className="border p-2 w-full mb-2 rounded"
        onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
        value={formData.alamat}
      />

      <textarea
        placeholder="Keterangan tambahan (opsional)"
        className="border p-2 w-full mb-2 rounded"
        onChange={(e) => setFormData({ ...formData, keterangan: e.target.value })}
        value={formData.keterangan}
      />

      <input
        type="text"
        className="border p-2 w-full mb-2 bg-gray-100 rounded"
        value={formData.jasa}
        readOnly
      />

      <label className="block mb-2 font-semibold">Metode Pembayaran</label>
      <select
        className="border p-2 w-full mb-4 rounded"
        onChange={(e) => setFormData({ ...formData, bayar: e.target.value })}
        value={formData.bayar}
      >
        <option value="cash">Cash</option>
        <option value="qris">QRIS</option>
      </select>

      {formData.bayar === "qris" && (
        <div className="text-center mb-4">
          <img src={qrisImage} alt="QRIS" className="w-48 mx-auto mb-2" />
          <button
            onClick={handleDownloadQRIS}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Download QRIS
          </button>
        </div>
      )}

      <button
        onClick={kirimWA}
        className="bg-orange-500 text-white px-4 py-2 rounded w-full hover:bg-orange-600"
      >
        Kirim Pesanan
      </button>
    </div>
  );
}
