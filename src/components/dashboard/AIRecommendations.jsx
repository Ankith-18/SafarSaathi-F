import { FiArrowRight } from "react-icons/fi";

function AIRecommendations() {
  return (
    <div className="bg-[#171C2B] rounded-2xl border border-zinc-800 p-6 h-full">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">
          AI Recommendations
        </h2>

        <button className="text-blue-400 hover:text-blue-300 text-sm">
          View All
        </button>
      </div>

      <div className="flex gap-5">

        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600"
          alt="Recommendation"
          className="w-44 h-32 object-cover rounded-xl"
        />

        <div>

          <h3 className="text-white text-lg font-semibold">
            Trekking in Himachal
          </h3>

          <p className="text-gray-400 mt-3 leading-7">
            Based on your travel history, this destination
            perfectly matches your interests.
          </p>

          <button className="text-blue-400 flex items-center gap-2 mt-5">
            View Details
            <FiArrowRight />
          </button>

        </div>

      </div>

    </div>
  );
}

export default AIRecommendations;