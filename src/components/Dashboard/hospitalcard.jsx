import { FaHospital, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function HospitalCard() {
  return (
    <div className="bg-purple-500 rounded-2xl shadow-lg p-6 text-white hover:shadow-xl transition duration-300">

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <FaHospital className="text-4xl" />

        <h2 className="text-2xl font-bold">
          Nearby Hospital
        </h2>
      </div>

      {/* Hospital Name */}
      <h3 className="text-xl font-semibold">
        Parul Sevashram Hospital
      </h3>

      {/* Distance */}
      <p className="flex items-center gap-2 mt-3">
        <FaMapMarkerAlt />
        850 m Away
      </p>

      {/* Time */}
      <p className="flex items-center gap-2 mt-2">
        <FaClock />
        Estimated Time: 3 mins
      </p>

      {/* Button */}
      <button
        className="mt-6 bg-white text-purple-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        View Hospital
      </button>

    </div>
  );
}

export default HospitalCard;