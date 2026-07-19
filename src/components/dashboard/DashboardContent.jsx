import DashboardHeader from "./DashboardHeader";
import GreetingSection from "./GreetingSection";
import DashboardStats from "./DashboardStats";
import AIRecommendations from "./AIRecommendations";
import QuickActions from "./QuickActions";

function DashboardContent() {
  return (
    <main className="flex-1 bg-[#0B1020] min-h-screen">

      <DashboardHeader />

      <div className="p-8">

        <GreetingSection />

        <DashboardStats />
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

      <div className="xl:col-span-2">
        <AIRecommendations />
      </div>

      <QuickActions />

    </div>

      </div>

    </main>
  );
}

export default DashboardContent;