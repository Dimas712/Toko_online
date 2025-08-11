import React from 'react';

export default function FloatingWhatsApp({
  phone = '6285891766756',
  message = 'Halo%20Tugas.In!%20Saya%20ingin%20menanyakan%20layanan',
  size = 56
}) {
  const waUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp Tugas.In Customer Service"
      title="Hubungi Customer Service via WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex items-center justify-center rounded-full shadow-lg bg-[#25D366] hover:scale-110 transition-transform duration-300"
      style={{ width: size, height: size }}
    >
      {/* WhatsApp SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        width={size * 0.6}
        height={size * 0.6}
      >
        <path d="M20.52 3.48A11.86 11.86 0 0012.01.25C6.12.25 1.12 5.26 1.12 11.15c0 1.96.5 3.88 1.45 5.58L.06 23.2l6.73-1.78a11.9 11.9 0 005.22 1.09h.01c5.89 0 10.9-4.99 10.9-11.15 0-2.99-1.16-5.78-3.37-7.88zM12 20.7h-.01c-1.64 0-3.25-.33-4.71-.98l-.34-.15-3.99 1.06 1.07-3.87-.22-.4a8.92 8.92 0 01-1.36-4.5c0-4.95 4.11-8.96 9.18-8.96 2.45 0 4.75.95 6.48 2.68a9.1 9.1 0 012.7 6.28c0 5.05-4.12 9.16-9.33 9.16z" />
        <path d="M17.57 14.23c-.33-.17-1.98-.98-2.29-1.09-.31-.11-.54-.17-.77.17-.23.33-.9 1.09-1.1 1.31-.2.23-.4.26-.73.09-.33-.17-1.4-.52-2.66-1.64-1-.87-1.67-1.93-1.86-2.26-.19-.33-.02-.5.14-.67.14-.14.33-.37.5-.56.17-.19.23-.33.33-.55.1-.2 0-.39-.05-.56-.05-.17-.77-1.86-1.06-2.55-.28-.66-.57-.57-.78-.58l-.66-.01c-.22 0-.57.08-.87.39-.3.31-1.14 1.11-1.14 2.72 0 1.61 1.17 3.17 1.33 3.39.16.22 2.29 3.5 5.55 4.92 3.26 1.43 3.26.95 3.84.89.58-.06 1.88-.76 2.14-1.49.26-.73.26-1.35.18-1.49-.08-.14-.31-.22-.64-.39z" />
      </svg>
    </a>
  );
}
