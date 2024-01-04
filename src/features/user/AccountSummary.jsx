function AccountSummary() {
  return (
    <div className="rounded-md border border-neutral-400 p-2">
      <h2 className="text-base font-bold text-neutral-700">Account Summary</h2>
      <div className="flex justify-between text-start pt-4">
        <div className="w-3/5">
          <h5 className="text-sm text-neutral-400 font-medium">Loaned</h5>
          <p className="text-neutral-700 font-semibold text-base">
            ৳ 3,300,000
          </p>
        </div>
        <div className="w-2/5">
          <h5 className="text-sm text-neutral-400 font-medium">Loanes</h5>
          <p className="text-neutral-700 font-semibold text-base">3</p>
        </div>
      </div>
      <div className="pt-4 flex justify-between items-center text-start text-sm font-medium text-neutral-400 border-b border-neutral-400">
        <h3>Loan ID</h3>
        <h3>Next Payment</h3>
        <h3>Next Due Date</h3>
      </div>
      <div className="h-32 overflow-y-scroll">
        <div className="flex justify-between items-center text-start py-2 text-base font-semibold text-neutral-400 border-b border-neutral-400">
          <h3 className="text-neutral-700">#2233A2</h3>
          <h3 className="text-red-600">৳ 29,722.00</h3>
          <h3 className="text-neutral-700">14-02-2024</h3>
        </div>
        <div className="flex justify-between items-center text-start py-2 text-base font-semibold text-neutral-400 border-b border-neutral-400">
          <h3 className="text-neutral-700">#2233B1</h3>
          <h3 className="text-red-600">৳ 29,722.00</h3>
          <h3 className="text-neutral-700">18-02-2024</h3>
        </div>
        <div className="flex justify-between items-center text-start py-2 text-base font-semibold text-neutral-400 border-b border-neutral-400">
          <h3 className="text-neutral-700">#2233C1</h3>
          <h3 className="text-red-600">৳ 29,722.00</h3>
          <h3 className="text-neutral-700">18-02-2024</h3>
        </div>
        <div className="flex justify-between items-center text-start py-2 text-base font-semibold text-neutral-400 border-b border-neutral-400">
          <h3 className="text-neutral-700">#2233D1</h3>
          <h3 className="text-red-600">৳ 29,722.00</h3>
          <h3 className="text-neutral-700">18-02-2024</h3>
        </div>
        <div className="flex justify-between items-center text-start py-2 text-base font-semibold text-neutral-400 border-b border-neutral-400">
          <h3 className="text-neutral-700">#2233E1</h3>
          <h3 className="text-red-600">৳ 29,722.00</h3>
          <h3 className="text-neutral-700">18-02-2024</h3>
        </div>
      </div>
    </div>
  );
}

export default AccountSummary;
