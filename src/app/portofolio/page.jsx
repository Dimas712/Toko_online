import React from "react";

const Portofolio = () => {
  const projects = [
    {
      id: 1,
      title: "Hay Pictures",
      description: "Jasa Penyedia Layanan Undangan Digital.",
      image: "/gambar1.jpg",
    },
    {
      id: 2,
      title: "Desain Komik",
      description: "Membuat desain komik kreatif dan menarik untuk media cetak maupun digital, sesuai kebutuhan dan gaya yang diinginkan.",
      image: "/Komik.jpeg",
    },
    {
      id: 3,
      title: "CV/Lamaran",
      description: "Membuat desain CV dan surat lamaran yang profesional, menarik, dan sesuai dengan bidang pekerjaan yang dilamar.",
      image: "/CV.jpeg",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Portofolio Kami</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
