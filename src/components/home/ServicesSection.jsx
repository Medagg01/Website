const ServicesSection = () => {
  const services = [
    {
      title: "Medical Education",
      desc: "Online and offline training programs for aspiring medical professionals.",
    },
    {
      title: "Healthcare Consulting",
      desc: "Strategic support for hospitals, clinics, and healthcare startups.",
    },
    {
      title: "Technology Solutions",
      desc: "Custom tools and platforms for diagnostics, data, and patient care.",
    },
  ];

  return (
    <section className="py-16 px-6 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-12 text-blue-800">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
