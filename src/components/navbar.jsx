import { FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <header className="bg-white shadow px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-pink-600">

        Dashboard

      </h1>

      <div className="flex items-center gap-6">

        <FaBell className="text-2xl cursor-pointer" />

        <FaUserCircle className="text-4xl text-pink-600 cursor-pointer" />

      </div>

    </header>
  );
}

export default Navbar;