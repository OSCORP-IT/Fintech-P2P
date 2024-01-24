function LoanInfoCards() {
  return (
    <div className="flex gap-4 justify-between">
      <div className="rounded-lg bg-textColor1 w-1/3 py-4 px-6">
        <div className="flex gap-2 items-center justify-start py-2">
          <div className="w-2 h-2 rounded-full bg-bgGradient1"></div>
          <h4 className="capitalize text-white text-sm font-medium">
            all loan amount
          </h4>
        </div>
        <h2 className="text-white text-xl font-semibold">৳ 45,000,000</h2>
      </div>
      <div className="rounded-lg bg-white cards w-1/3 py-4 px-6">
        <div className="flex gap-2 items-center justify-start py-2">
          <div className="w-2 h-2 rounded-full bg-accentColor"></div>
          <h4 className="capitalize text-textColor3 text-sm font-medium">
            total monthly payment
          </h4>
        </div>
        <h2 className="text-gray-700 text-xl font-semibold">৳ 500,000</h2>
      </div>
      <div className="rounded-lg bg-white cards w-1/3 py-4 px-6">
        <div className="flex gap-2 items-center justify-start py-2">
          <div className="w-2 h-2 rounded-full bg-accentColor"></div>
          <h4 className="capitalize text-textColor3 text-sm font-medium">
            total loans
          </h4>
        </div>
        <h2 className="text-gray-700 text-xl font-semibold">5 Loans</h2>
      </div>
    </div>
  );
}

export default LoanInfoCards;
