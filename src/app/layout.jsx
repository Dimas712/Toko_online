// FloatingWhatsApp.jsx
// Komponen Next.js (React) untuk tombol WhatsApp mengambang menggunakan Tailwind CSS dengan avatar customer service.
// Cara pakai:
// 1. Ganti DEFAULT_PHONE dengan nomor WA customer service (format internasional tanpa +, contoh: 6281234567890).
// 2. Import dan taruh <FloatingWhatsApp /> di file layout (mis. app/layout.jsx) agar muncul di semua halaman.
// 3. Pastikan gambar customer service disimpan di folder public, misalnya /public/cs-avatar.jpg.

import React, { useState } from 'react';
import Image from 'next/image';

export default function FloatingWhatsApp({
  phone = '6285891766756',
  message = 'Halo%20Tugas.In!%20Saya%20ingin%20menanyakan%20layanan',
  size = 64
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const waUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end space-y-2">
      {showTooltip && (
        <div className="mb-1 px-3 py-2 bg-white text-gray-800 rounded-lg shadow-lg text-sm animate-fadeIn">
          Ada yang boleh saya bantu?
        </div>
      )}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Tugas.In Customer Service"
        title="Hubungi Customer Service via WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        style={{ width: size, height: size }}
      >
        <Image
          src="/Avatar.png" // simpan gambar di /public/cs-avatar.jpg
          alt="Customer Service Avatar"
          width={size}
          height={size}
          className="rounded-full border-2 border-white object-cover"
        />
      </a>
    </div>
  );
}
