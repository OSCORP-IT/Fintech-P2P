import DashboardFooter from "./DashboardFooter";
import DashboardHeader from "./DashboardHeader";
import LoanInfoCards from "./LoanInfoCards";
import LoanWallet from "./LoanWallet";
import PaymentOptions from "./PaymentOptions";
import Sidebar from "./Sidebar";
import TotalLoanInfo from "./TotalLoanInfo";
import WelcomeNote from "./WelcomeNote";

function DashboarLayout() {
  return (
    <div className="bg-backgroundMain flex items-start font-poppins">
      <Sidebar />
      <div className="w-1/5"></div>
      <div className="w-4/5 p-6">
        <DashboardHeader />
        <WelcomeNote />
        <div className="flex justify-start gap-2 h-[60%]">
          <div className="w-2/3 rounded-md  pl-2 pr-4 py-2 h-full">
            <LoanInfoCards />
            <div className="flex gap-4 justify-between py-6">
              <div className="rounded-lg bg-white cards w-2/3 pt-4 px-6">
                <TotalLoanInfo />
              </div>
              <div className="w-1/3 flex flex-col justify-between">
                <PaymentOptions />
              </div>
            </div>
          </div>
          <div className="w-1/3 py-2 flex-grow h-full">
            <div className="bg-white h-full rounded-md cards p-8">
              <LoanWallet />
              <h1 className="capitalize text-lg font-medium">transactions</h1>
              <div className="pt-4 overflow-y-scroll h-[60%] px-3">
                {[1, 2, 3, 4, 5].map((item) => (
                  <>
                    <div
                      className="pb-3 flex items-center justify-between capitalize text-gray-700"
                      key={item}
                    >
                      <div className="flex items-center gap-2">
                        <div className="h-[40px] w-[40px] rounded-full bg-gray-300 "></div>
                        <div>
                          <h2 className=" text-sm font-medium">
                            apartment Loan
                          </h2>
                          <p className=" text-xs font-medium">3rd payment</p>
                        </div>
                      </div>
                      <div>
                        <h2 className="text-sm font-medium">৳ 50,000</h2>
                        <p className="text-xs font-medium">jan,2024</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <DashboardFooter />
      </div>
    </div>
  );
}

export default DashboarLayout;
