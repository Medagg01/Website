import Searchbar from "../layout/Searchbar";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Empowering Medical Excellence
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
        MedAgg provides innovative medical solutions, education, and healthcare services designed to improve lives and advance healthcare systems.
      </p>
      {/* Searchbar inserted below the text, in the middle of the hero section */}
      <div className="flex justify-center">
        <div className="w-full max-w-xl">
          <Searchbar />
        </div>
      </div>
      <a
        href="/services"
        className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition mt-6 inline-block"
      >
        Explore Our Services
      </a>
    </section>
  );
};

export default HeroSection;
