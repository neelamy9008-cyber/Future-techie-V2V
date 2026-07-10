import { FaExclamationTriangle, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function ReportsCard() {

  const reports = [
    {
      id: 1,
      type: "Harassment",
      location: "Near University Gate",
      time: "10 mins ago",
      risk: "High",
      color: "bg-red-100 text-red-700"
    },
    {
      id: 2,
      type: "Poor Street Lighting",
      location: "Main Road",
      time: "30 mins ago",
      risk: "Medium",
      color: "bg-yellow-100 text-yellow-700"
    },
    {
      id: 3,
      type: "Suspicious Activity",
      location: "City Park",
      time: "1 hour ago",
      risk: "Low",
      color: "bg-green-100 text-green-700"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        🚨 Recent Community Reports
      </h2>

      <div className="space-y-4">

        {reports.map((report) => (

          <div
            key={report.id}
            className="border rounded-xl p-4 hover:shadow-md transition"
          >

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-3">

                <FaExclamationTriangle className="text-red-500 text-xl" />

                <h3 className="font-semibold">
                  {report.type}
                </h3>

              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${report.color}`}
              >
                {report.risk}
              </span>

            </div>

            <p className="flex items-center gap-2 text-gray-600 mt-3">
              <FaMapMarkerAlt />
              {report.location}
            </p>

            <p className="flex items-center gap-2 text-gray-500 mt-2">
              <FaClock />
              {report.time}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ReportsCard;