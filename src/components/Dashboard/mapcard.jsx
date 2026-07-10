import { FaMapMarkedAlt, FaLocationArrow } from "react-icons/fa";

function MapCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <FaMapMarkedAlt className="text-3xl text-pink-600" />
        <h2 className="text-2xl font-bold text-gray-800">
          Safe Route Navigation
        </h2>
      </div>

      {/* Map Placeholder */}
      <div className="h-80 rounded-xl bg-gray-200 flex flex-col items-center justify-center border-2 border-dashed border-gray-400">

        <FaLocationArrow className="text-5xl text-pink-600 mb-3" />

        <h3 className="text-2xl font-semibold text-gray-700">
          Google Map Placeholder
        </h3>

        <p className="text-gray-500 mt-2">
          Current Location → Destination
        </p>

      </div>

      <button
        className="mt-5 bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700 transition"
      >
        Open Full Map
      </button>

    </div>
  );
}

export default MapCard;