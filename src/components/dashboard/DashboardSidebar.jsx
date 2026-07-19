import {
  FiGrid,
  FiMessageSquare,
  FiMap,
  FiUsers,
  FiCpu,
  FiBell,
  FiUser,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

function DashboardSidebar() {
  const menuItems = [
    { icon: <FiGrid />, label: "Dashboard", active: true },
    { icon: <FiMessageSquare />, label: "AI Assistant" },
    { icon: <FiMap />, label: "Trips" },
    { icon: <FiUsers />, label: "Companions" },
    { icon: <FiCpu />, label: "AI Memories" },
    { icon: <FiBell />, label: "Notifications" },
    { icon: <FiUser />, label: "Profile" },
    { icon: <FiSettings />, label: "Settings" },
  ];

  return (
    <aside className="w-64 bg-[#111827] border-r border-zinc-800 flex flex-col">

      {/* Logo */}

      <div className="px-6 py-6 border-b border-zinc-800">
        <h1 className="text-2xl font-bold text-white">
          Safar<span className="text-blue-500">Saathi</span>
        </h1>
      </div>

      {/* Menu */}

      <nav className="flex-1 p-4">

        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition ${
              item.active
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:bg-[#1B2435] hover:text-white"
            }`}
          >
            <span className="text-lg">{item.icon}</span>

            {item.label}
          </button>
        ))}

      </nav>

      {/* Logout */}

      <div className="p-4 border-t border-zinc-800">

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-[#1B2435] hover:text-white transition">

          <FiLogOut />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default DashboardSidebar;