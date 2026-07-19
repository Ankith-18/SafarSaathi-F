import { FiBell, FiSettings, FiSearch } from "react-icons/fi";

function DashboardHeader() {
  return (
    <header className="h-24 border-b border-zinc-800 bg-[#0B1020] flex items-center justify-end px-10">

      <div className="flex items-center gap-10">

        {/* Search */}
        <div className="relative">
          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            size={20}
          />

          <input
            type="text"
            placeholder="Search anything..."
            className="w-80 h-14 bg-[#171C2B] border border-zinc-700 rounded-xl pl-12 pr-4 text-white outline-none focus:border-blue-500"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-7">

          <button className="text-gray-400 hover:text-white transition">
            <FiBell size={22} />
          </button>

          <button className="text-gray-400 hover:text-white transition">
            <FiSettings size={22} />
          </button>

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile"
            className="w-11 h-11 rounded-full border-2 border-blue-500 object-cover cursor-pointer"
          />

        </div>

      </div>

    </header>
  );
}

export default DashboardHeader;