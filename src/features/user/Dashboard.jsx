import AccountSummary from "./AccountSummary";
import DashboardApplyLoan from "./DashboardApplyLoan";
import DashboardTop from "./DashboardTop";
import LoanCards from "./LoanCards";
import ProfileLayout from "./ProfileLayout";

function Dashboard() {
  return (
    <ProfileLayout>
      <div className="p-4 ">
        <DashboardTop />
        <DashboardApplyLoan />
        <div className="py-4 flex gap-4">
          <LoanCards />
          <div className="w-1/3">
            <AccountSummary />
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
}

export default Dashboard;
