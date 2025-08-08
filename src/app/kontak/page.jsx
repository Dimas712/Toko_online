export default function Contact() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#gradient-contact)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="gradient-contact">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>

          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Hubungi Kami
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              Ada pertanyaan atau ingin bekerja sama? Silakan kirim pesan melalui formulir atau kontak kami secara langsung.
            </p>
            <div className="mt-10">
              <p className="text-sm text-gray-400">
                📞 Telepon: <a href="tel:+6281234567890" className="hover:text-white">+62 812-3456-7890</a>
              </p>
              <p className="mt-2 text-sm text-gray-400">
                ✉️ Email: <a href="mailto:info@perusahaanku.com" className="hover:text-white">info@perusahaanku.com</a>
              </p>
              <p className="mt-2 text-sm text-gray-400">
                🏢 Alamat: Jl. Contoh No. 123, Jakarta
              </p>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0 w-full">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-0 bg-white/10 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-0 bg-white/10 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-0 bg-white/10 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-white py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
