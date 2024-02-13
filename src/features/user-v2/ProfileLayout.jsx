import DashboardFooter from "./DashboardFooter";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";
function ProfileLayout({ children }) {
  return (
    <div className="bg-backgroundMain flex items-start font-poppins">
      <Sidebar />
      <div className="w-1/5"></div>
      <div className="w-4/5 p-6 relative">
        <div className="h-[13%]">
          <DashboardHeader />{" "}
        </div>
        <div className="overflow-y-scroll">{children}</div>
        <div>
          <DashboardFooter />
        </div>
      </div>
    </div>
  );
}

export default ProfileLayout;
