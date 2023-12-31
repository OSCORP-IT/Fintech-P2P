import PerLoan from "../assets/PersonalLoan.png";
function PersonalLoan() {
  return (
    <div className="w-full bg-white flex justify-center py-6">
      <div className="w-4/6">
        <div className="text-center font-bold text-xl text-emeraldGreen py-6">
          <h2>
            We’re rewriting the rules of traditional banking, and we only win
            when our customers succeed. We’ve helped over 4 million members
            reach their goals, and we’re just getting started!
          </h2>
        </div>
        <div className="flex justify-center gap-3">
          <div className=" text-white text-base font-semibold bg-gradient-to-l from-emerald-900 to-amber-400 px-5 py-1.5 rounded-lg">
            Personal Loan
          </div>
          <div className="px-5 py-1.5 rounded-lg border border-slate-400 text-base font-semibold text-slate-400">
            Auto Refinancing
          </div>
          <div className="px-5 py-1.5 rounded-lg border border-slate-400 text-base font-semibold text-slate-400">
            Banking
          </div>
        </div>
        <div className="grid grid-cols-2 items-center justify-center py-8">
          <div>
            <img src={PerLoan} alt="personal_loan" />
          </div>
          <div>
            <h2 className="text-[36px] font-semibold">
              Get up to <span className="text-amberYellow">$40,000</span> in
              just a few clicks
            </h2>
            <p className="text-sm py-2">
              With the ability to choose a loan amount of up to $40,000,
              LendingClub offers fixed rates and a monthly repayment plan to fit
              within your budget. We understand the importance of getting the
              money you need, so we work to have funds disbursed to you quickly
              upon loan approval.
            </p>
            <div className="my-8 text-white font-bold bg-amberYellow w-max px-5 py-2">
              <p>Learn More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalLoan;
