function LoanCards() {
  return (
    <div className="w-2/3">
      <div className="bg-gradient-to-b from-gray-200 to-orange-50 rounded-md border border-neutral-400 p-2 mb-4">
        <div className="flex items-center justify-between gap-4">
          <div className="w-1/4">
            <h2 className="text-base font-bold text-neutral-700">
              Personal Loan 3
            </h2>
            <p className="text-sm text-neutral-400">#123A321</p>
          </div>
          <div className="w-2/4 text-sm">
            <h2 className=" text-neutral-400">
              Portfolio completion
              <span className="font-bold text-emeraldGreen"> 60%</span>
            </h2>
            <div className="w-full h-3 mt-2 border border-neutral-700 rounded-md">
              <div className="rounded-md w-[60%] h-full bg-gradient-to-l from-emerald-900 to-amber-300"></div>
            </div>
          </div>
          <div className="w-1/4 px-2 py-1 text-center border border-red-600 rounded-md">
            <h5 className="text-xs text-red-600 font-bold">
              Complete your portfolio and apply for loan
            </h5>
          </div>
        </div>
        <div className="my-2 bg-white border border-neutral-300 rounded-md p-2 flex justify-between text-start">
          <div>
            <h3 className="font-medium text-neutral-400 text-xs">
              Loan Amount
            </h3>
            <p className="text-base font-semibold text-neutral-700">
              ৳ 1,000,000.00
            </p>
          </div>
          <div>
            <h3 className="font-medium text-neutral-400 text-xs">
              Monthly EMI
            </h3>
            <p className="text-base font-semibold text-neutral-700">
              ৳ 29,722.00
            </p>
          </div>
          <div>
            <h3 className="font-medium text-neutral-400 text-xs">
              Loan With Interest
            </h3>
            <p className="text-base font-semibold text-neutral-700">
              ৳ 1,070,000.00
            </p>
          </div>
          <div>
            <h3 className="font-medium text-neutral-400 text-xs">Loan Term</h3>
            <p className="text-base font-semibold text-neutral-700">
              12 Months
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-gray-200 to-orange-50 rounded-md border border-neutral-400 p-2 mb-4">
        <div className="flex items-center justify-between gap-4">
          <div className="w-1/4">
            <h2 className="text-base font-bold text-neutral-700">
              Personal Loan 3
            </h2>
            <p className="text-sm text-neutral-400">#123A321</p>
          </div>
          <div className="w-2/4 text-sm"></div>
          <div className="w-1/4 px-2 text-center">
            <div className="border border-emeraldGreen text-emeraldGreen rounded-md py-0.5 font-medium cursor-pointer text-sm">
              Approved
            </div>
            <div className="bg-amberYellow rounded-md py-0.5 mt-1 text-neutral-700 font-medium cursor-pointer text-sm">
              Details
            </div>
          </div>
        </div>
        <div className="my-2 bg-white border border-neutral-300 rounded-md p-2 flex justify-between text-start">
          <div>
            <h3 className="font-medium text-neutral-400 text-xs">
              Loan Amount
            </h3>
            <p className="text-base font-semibold text-neutral-700">
              ৳ 1,000,000.00
            </p>
          </div>
          <div>
            <h3 className="font-medium text-neutral-400 text-xs">
              Monthly EMI
            </h3>
            <p className="text-base font-semibold text-neutral-700">
              ৳ 29,722.00
            </p>
          </div>
          <div>
            <h3 className="font-medium text-neutral-400 text-xs">
              Loan With Interest
            </h3>
            <p className="text-base font-semibold text-neutral-700">
              ৳ 1,070,000.00
            </p>
          </div>
          <div>
            <h3 className="font-medium text-neutral-400 text-xs">Loan Term</h3>
            <p className="text-base font-semibold text-neutral-700">
              12 Months
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanCards;
