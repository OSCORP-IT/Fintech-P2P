import { MdArrowRight } from "react-icons/md";
import DashboardHeader from "./DashboardHeader";
import LoanInfoCards from "./LoanInfoCards";

import Sidebar from "./Sidebar";
import TotalLoanInfo from "./TotalLoanInfo";
import { FaArrowRight } from "react-icons/fa6";

function DashboarLayout() {
  return (
    <div className="h-screen bg-backgroundMain flex items-start font-poppins">
      <Sidebar />
      <div className="w-4/5 p-6">
        <DashboardHeader />
        <div className="pt-2 text-lg font-normal text-textColor3">
          <h2>Welcome Back! Abidur...</h2>
        </div>
        <div className="flex justify-start gap-2 ">
          <div className="w-2/3 rounded-md  pl-2 pr-4 py-2">
            <LoanInfoCards />
            <div className="flex gap-4 justify-between py-6">
              <div className="rounded-lg bg-white cards w-2/3 pt-4 px-6">
                <TotalLoanInfo />
              </div>
              <div className="w-1/3 flex flex-col justify-between">
                <div className="rounded-lg bg-accentColor w-full h-[28%] flex relative">
                  <div className="w-2/3 flex gap-2 items-baseline justify-start py-2 px-4 text-white">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <h4 className="capitalize text-base font-medium">
                      make a loan payment
                    </h4>
                  </div>
                  <FaArrowRight className="absolute bottom-2 right-2 text-white text-2xl shadow-md text-end" />
                </div>
                <div className="rounded-lg bg-accentColor w-full h-[28%] flex relative">
                  <div className="w-2/3 flex gap-2 items-baseline justify-start py-2 px-4 text-white">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <h4 className="capitalize text-base font-medium">
                      Payment Method
                    </h4>
                  </div>
                  <FaArrowRight className="absolute bottom-2 right-2 text-white text-2xl shadow-md text-end" />
                </div>
                <div className="rounded-lg bg-accentColor w-full h-[28%] flex relative">
                  <div className="w-2/3 flex gap-2 items-baseline justify-start py-2 px-4 text-white">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <h4 className="capitalize text-base font-medium">
                      Loan Application
                    </h4>
                  </div>
                  <FaArrowRight className="absolute bottom-2 right-2 text-white text-2xl shadow-md text-end" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default DashboarLayout;
