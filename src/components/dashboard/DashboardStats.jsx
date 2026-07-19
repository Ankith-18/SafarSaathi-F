import { FiMapPin, FiGlobe, FiClock } from "react-icons/fi";

function DashboardStats() {
  return (
    <div className="grid grid-cols-4 gap-6">

      {/* Upcoming Trip */}
      <div className="bg-[#171C2B] rounded-2xl border border-zinc-800 overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800"
          alt="Trip"
          className="h-40 w-full object-cover"
        />

        <div className="p-5">

          <h3 className="text-white font-semibold text-lg">
            Leh-Ladakh Adventure
          </h3>

          <p className="text-gray-400 text-sm mt-2">
            May 20 - May 28, 2026
          </p>

          <p className="text-blue-400 mt-4 cursor-pointer">
            View Trip →
          </p>

        </div>

      </div>

      {/* Trips Completed */}
      <div className="bg-[#171C2B] rounded-2xl p-6 border border-zinc-800 flex flex-col justify-center">

        <FiMapPin className="text-green-500 mb-4" size={30} />

        <h2 className="text-5xl font-bold text-white">
          12
        </h2>

        <p className="text-gray-400 mt-3">
          Trips Completed
        </p>

      </div>

      {/* Countries */}
      <div className="bg-[#171C2B] rounded-2xl p-6 border border-zinc-800 flex flex-col justify-center">

        <FiGlobe className="text-blue-500 mb-4" size={30} />

        <h2 className="text-5xl font-bold text-white">
          5
        </h2>

        <p className="text-gray-400 mt-3">
          Countries Explored
        </p>

      </div>

      {/* Travel Days */}
      <div className="bg-[#171C2B] rounded-2xl p-6 border border-zinc-800 flex flex-col justify-center">

        <FiClock className="text-yellow-500 mb-4" size={30} />

        <h2 className="text-5xl font-bold text-white">
          48
        </h2>

        <p className="text-gray-400 mt-3">
          Travel Days
        </p>

      </div>

    </div>
  );
}

export default DashboardStats;