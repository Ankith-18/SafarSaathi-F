import { FiMapPin, FiClock, FiTrendingUp } from "react-icons/fi";

const trips = [
  {
    destination: "Goa",
    date: "22 July 2026",
    status: "Upcoming",
  },
  {
    destination: "Manali",
    date: "10 August 2026",
    status: "Planning",
  },
];

const recommendations = [
  "Visit Jaipur during winter season.",
  "Book hotels 2 weeks before your trip.",
  "Carry light luggage for hill stations.",
];

function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">

      {/* Upcoming Trips */}
      <div className="bg-[#171C2B] rounded-2xl border border-zinc-800 p-6">

        <h2 className="text-xl font-semibold text-white mb-6">
          Upcoming Trips
        </h2>

        <div className="space-y-5">
          {trips.map((trip) => (
            <div
              key={trip.destination}
              className="flex justify-between items-center border-b border-zinc-700 pb-4 last:border-none"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-3 rounded-xl">
                  <FiMapPin className="text-blue-500" size={20} />
                </div>

                <div>
                  <h3 className="text-white font-medium">
                    {trip.destination}
                  </h3>

                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <FiClock size={14} />
                    {trip.date}
                  </p>
                </div>
              </div>

              <span className="text-sm bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                {trip.status}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* AI Recommendations */}
      <div className="bg-[#171C2B] rounded-2xl border border-zinc-800 p-6">

        <h2 className="text-xl font-semibold text-white mb-6">
          AI Recommendations
        </h2>

        <div className="space-y-5">
          {recommendations.map((item, index) => (
            <div
              key={index}
              className="flex gap-4"
            >
              <div className="bg-green-500/20 p-3 rounded-xl h-fit">
                <FiTrendingUp className="text-green-500" size={18} />
              </div>

              <p className="text-gray-300">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default DashboardOverview;