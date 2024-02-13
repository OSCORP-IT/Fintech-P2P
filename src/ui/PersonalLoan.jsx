import { useState } from "react";
import PerLoan from "../assets/personalLoan.png";
import Button from "./Button";

function PersonalLoan() {
  const [selectTab, setSelectTab] = useState(1);
  function handleClick(tab) {
    setSelectTab(tab);
  }
  return (
    <div className="w-full bg-white flex justify-center py-6">
      <div className="w-4/6">
        <div className="text-center font-bold text-3xl text-textColor2 py-6">
          <h2>
            We’re rewriting the rules of traditional banking, and we only win
            when our customers succeed. We’ve helped over 4 million members
            reach their goals, and we’re just getting started!
          </h2>
        </div>
        <div className="grid grid-cols-2 items-center justify-start py-8">
          <div className="">
            <img src={PerLoan} alt="personal_loan" className=" object-cover" />
          </div>
          <div>
            <div className="flex justify-between items-center py-4 font-poppins">
              <div
                className={`px-2 text-lg cursor-pointer font-semibold border-b-2 ${
                  selectTab === 1
                    ? "text-accentColor border-b-accentColor"
                    : "border-b-textColor3 text-textColor3"
                }`}
                onClick={() => handleClick(1)}
              >
                Personal Loan
              </div>
              <div
                className={`px-2 text-lg cursor-pointer font-semibold border-b-2 ${
                  selectTab === 2
                    ? "text-accentColor border-b-accentColor"
                    : "border-b-textColor3 text-textColor3"
                }`}
                onClick={() => handleClick(2)}
              >
                Auto Financing
              </div>
              <div
                className={`px-2 text-lg cursor-pointer font-semibold border-b-2 ${
                  selectTab === 3
                    ? "text-accentColor border-b-accentColor"
                    : "border-b-textColor3 text-textColor3"
                }`}
                onClick={() => handleClick(3)}
              >
                Banking
              </div>
            </div>
            {selectTab == 1 && (
              <h2 className="text-[44px] font-extrabold text-textColor1 font-poppins">
                Get up to $40,000 in just a few clicks (tab 1)
              </h2>
            )}
            {selectTab == 2 && (
              <h2 className="text-[44px] font-extrabold text-textColor1 font-poppins">
                Get up to $40,000 in just a few clicks (tab 2)
              </h2>
            )}
            {selectTab == 3 && (
              <h2 className="text-[44px] font-extrabold text-textColor1 font-poppins">
                Get up to $40,000 in just a few clicks (tab 3)
              </h2>
            )}
            <p className="text-base font-normal font-poppins py-6 text-textColor3">
              With the ability to choose a loan amount of up to $40,000,
              LendingClub offers fixed rates and a monthly repayment plan to fit
              within your budget. We understand the importance of getting the
              money you need, so we work to have funds disbursed to you quickly
              upon loan approval.
            </p>
            <Button
              addedClass={
                "px-4 py-2 bg-accentColor text-white fon-medium text-base font-poppins"
              }
              arrow={true}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalLoan;
