import { FaShieldAlt } from "react-icons/fa";

function SafetyCard({ score = 92, status = "SAFE" }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <FaShieldAlt className="text-green-600 text-3xl" />
        <h2 className="text-xl font-bold text-gray-800">
          Safety Score
        </h2>
      </div>

      {/* Score */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-green-600">
          {score}%
        </h1>

        <p className="mt-4 text-gray-500">
          Current Status
        </p>

        <span className="inline-block mt-3 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
          🟢 {status}
        </span>
      </div>

    </div>
  );
}

export default SafetyCard;