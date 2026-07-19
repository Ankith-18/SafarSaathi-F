import DashboardSidebar from "../../components/dashboard/DashboardSidebar";
import DashboardContent from "../../components/dashboard/DashboardContent";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] flex">
      <DashboardSidebar />

      <DashboardContent />
    </div>
  );
}

export default Dashboard;