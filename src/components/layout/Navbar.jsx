import { FaHeartbeat } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-blue-700 font-bold text-xl flex items-center gap-2">
        <FaHeartbeat /> MedAgg
      </div>
      <div className="space-x-6 text-gray-700">
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
        <a href="/join">Join Us</a>
        <a href="/investor">Become an Investor</a>
      </div>
    </nav>
  );
};

export default Navbar;
