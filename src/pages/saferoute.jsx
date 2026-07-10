import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

import { FaMapMarkedAlt, FaLocationArrow } from "react-icons/fa";

function SafeRoute() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  const handleRoute = () => {
    if (!source || !destination) {
      alert("Please enter both locations.");
      return;
    }

    setShowSummary(true);
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto p-6">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-pink-600 flex items-center gap-3">
            <FaMapMarkedAlt />
            AI Safe Route
          </h1>

          <p className="text-gray-600 mt-2">
            Find the safest route instead of the shortest route.
          </p>
        </div>

        {/* Search Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="font-semibold block mb-2">
                📍 Current Location
              </label>

              <input
                type="text"
                placeholder="Enter Current Location"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 mb-5"
              />

              <label className="font-semibold block mb-2">
                🎯 Destination
              </label>

              <input
                type="text"
                placeholder="Enter Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full border rounded-lg px-4 py-3"
              />

              <button
                onClick={handleRoute}
                className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <FaLocationArrow />
                Find Safest Route
              </button>

            </div>

            {/* Google Map */}

            

          </div>

        </div>

        {showSummary && (

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-green-100 rounded-xl p-6 shadow">

              <h3 className="text-lg font-semibold">
                Safety Score
              </h3>

              <p className="text-4xl font-bold text-green-700 mt-3">
                92%
              </p>

            </div>

            <div className="bg-blue-100 rounded-xl p-6 shadow">

              <h3 className="text-lg font-semibold">
                Estimated Time
              </h3>

              <p className="text-4xl font-bold text-blue-700 mt-3">
                15 min
              </p>

            </div>

            <div className="bg-purple-100 rounded-xl p-6 shadow">

              <h3 className="text-lg font-semibold">
                Distance
              </h3>

              <p className="text-4xl font-bold text-purple-700 mt-3">
                4.2 km
              </p>

            </div>

            <div className="bg-red-100 rounded-xl p-6 shadow">

              <h3 className="text-lg font-semibold">
                Nearby Police
              </h3>

              <p className="text-4xl font-bold text-red-600 mt-3">
                2
              </p>

            </div>

            <div className="bg-yellow-100 rounded-xl p-6 shadow">

              <h3 className="text-lg font-semibold">
                Nearby Hospitals
              </h3>

              <p className="text-4xl font-bold text-yellow-600 mt-3">
                1
              </p>

            </div>

            <div className="bg-green-50 rounded-xl p-6 shadow">

              <h3 className="text-lg font-semibold">
                Route Status
              </h3>

              <p className="text-2xl font-bold text-green-700 mt-3">
                SAFE ✅
              </p>

            </div>

          </div>

        )}

      </div>
    </MainLayout>
  );
}

export default SafeRoute;