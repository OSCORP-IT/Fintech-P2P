import AccountSummary from "./AccountSummary";
import DashboardApplyLoan from "./DashboardApplyLoan";
import DashboardTop from "./DashboardTop";
import DoughnutChart from "./DoughnutChart";
import LoanCards from "./LoanCards";
import ProfileLayout from "./ProfileLayout";
import { FaPhoneVolume } from "react-icons/fa6";

function Dashboard() {
  return (
    <ProfileLayout menu={"dashboard"}>
      <div className="p-4 ">
        <DashboardTop />
        <DashboardApplyLoan />
        <div className="py-4 flex gap-4">
          <LoanCards />
          <div className="w-1/3">
            <AccountSummary />
            <div className="rounded-md border border-neutral-400 p-2 mt-4">
              <h2 className="text-base font-bold text-neutral-700">
                Visualization of Loan Amount
              </h2>
              <div>
                <div className="w-full">
                  <DoughnutChart />
                </div>
              </div>
            </div>
            <div className="mt-4 p-2 bg-gray-200 rounded-[5px] border border-neutral-400">
              <h2 className="text-base font-bold text-neutral-700">Support</h2>
              <div className="flex gap-3 items-center py-2">
                <div className="rounded-full bg-amberYellow p-3 text-xl">
                  <FaPhoneVolume />
                </div>
                <div>
                  <h2 className="text-neutral-700 text-base font-semibold">
                    (+88) 01XXXXXXXX
                  </h2>
                  <h2 className="text-neutral-700 text-base font-semibold">
                    (+88) 01XXXXXXXX
                  </h2>
                  <h2 className="text-neutral-400 text-sm font-semibold">
                    10 AM - 5 PM
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
}

export default Dashboard;
