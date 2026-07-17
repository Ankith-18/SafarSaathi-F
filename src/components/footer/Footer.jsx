import {
  Bot,
  Users,
  Star,
  Sparkles,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#0B0F1A] border-t border-zinc-800 py-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">

          {/* Logo */}

          <div>
            <h2 className="text-2xl font-bold text-white">
              SafarSaathi
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              Your AI Travel Companion
            </p>
          </div>

          {/* AI */}

          <div className="flex items-center gap-3">

            <Bot className="text-blue-500" />

            <div>

              <p className="text-white font-medium">
                AI-Powered
              </p>

              <p className="text-gray-400 text-sm">
                Recommendations
              </p>

            </div>

          </div>

          {/* Companion */}

          <div className="flex items-center gap-3">

            <Users className="text-purple-500" />

            <div>

              <p className="text-white font-medium">
                Smart Companion
              </p>

              <p className="text-gray-400 text-sm">
                Matching
              </p>

            </div>

          </div>

          {/* Experience */}

          <div className="flex items-center gap-3">

            <Star className="text-yellow-400" />

            <div>

              <p className="text-white font-medium">
                Personalized
              </p>

              <p className="text-gray-400 text-sm">
                Experiences
              </p>

            </div>

          </div>

          {/* Memory */}

          <div className="flex items-center gap-3">

            <Sparkles className="text-green-400" />

            <div>

              <p className="text-white font-medium">
                Memories That
              </p>

              <p className="text-gray-400 text-sm">
                Understand You
              </p>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;