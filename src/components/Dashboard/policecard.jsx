import { FaShieldAlt, FaMapMarkerAlt } from "react-icons/fa";

function PoliceCard() {
  return (
    <div className="bg-blue-500 rounded-2xl shadow-lg p-6 text-white hover:shadow-xl transition duration-300">

      <div className="flex items-center gap-3 mb-5">
        <FaShieldAlt className="text-4xl" />

        <h2 className="text-2xl font-bold">
          Nearby Police
        </h2>
      </div>

      <h3 className="text-xl font-semibold">
        Police Station
      </h3>

      <p className="mt-2 flex items-center gap-2">
        <FaMapMarkerAlt />
        1.2 km Away
      </p>

      <button
        className="mt-6 bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        View on Map
      </button>

    </div>
  );
}

export default PoliceCard;