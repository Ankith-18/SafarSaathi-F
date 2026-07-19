import {
  FiMapPin,
  FiUsers,
  FiMessageSquare,
  FiCalendar,
} from "react-icons/fi";

const cards = [
  {
    title: "Upcoming Trips",
    value: "03",
    icon: <FiMapPin size={28} />,
  },
  {
    title: "Travel Companions",
    value: "12",
    icon: <FiUsers size={28} />,
  },
  {
    title: "AI Chats",
    value: "58",
    icon: <FiMessageSquare size={28} />,
  },
  {
    title: "Saved Memories",
    value: "26",
    icon: <FiCalendar size={28} />,
  },
];

function DashboardCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card) => (

        <div
          key={card.title}
          className="bg-[#171C2B] rounded-2xl p-6 border border-zinc-800 hover:border-blue-500 transition"
        >
          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-400 text-sm">
                {card.title}
              </p>

              <h2 className="text-3xl font-bold text-white mt-2">
                {card.value}
              </h2>

            </div>

            <div className="text-blue-500">
              {card.icon}
            </div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default DashboardCards;