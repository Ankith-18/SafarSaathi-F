import {
  FiPlusCircle,
  FiUsers,
  FiMessageCircle,
  FiChevronRight,
} from "react-icons/fi";

const actions = [
  {
    title: "Create New Trip",
    icon: <FiPlusCircle />,
  },
  {
    title: "Find Travel Companions",
    icon: <FiUsers />,
  },
  {
    title: "Ask AI Assistant",
    icon: <FiMessageCircle />,
  },
];

function QuickActions() {
  return (
    <div className="bg-[#171C2B] rounded-2xl border border-zinc-800 p-6 h-full">

      <h2 className="text-xl font-semibold text-white mb-6">
        Quick Actions
      </h2>

      <div className="space-y-4">

        {actions.map((action) => (

          <button
            key={action.title}
            className="w-full bg-[#0F172A] border border-zinc-700 rounded-xl px-5 py-4 flex justify-between items-center hover:border-blue-500 transition"
          >

            <div className="flex items-center gap-4 text-white">

              <span className="text-blue-400 text-xl">
                {action.icon}
              </span>

              {action.title}

            </div>

            <FiChevronRight className="text-gray-500" />

          </button>

        ))}

      </div>

    </div>
  );
}

export default QuickActions;