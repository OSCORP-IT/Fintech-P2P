function OutstandingLoan() {
  return (
    <div className="w-full flex gap-12 justify-start items-center">
      <h2 className="text-base font-semibold py-2">
        Do You Have Any Outstanding Loans?
        <span className="text-sm text-red-600">*</span>
      </h2>
      <div className=" flex gap-4 justify-start items-center text-xl  font-semibold">
        <div className="flex gap-2">
          <input type="radio" name="outloan" value="outloan_yes" checked />
          <h5>Yes</h5>
        </div>
        <div className="flex gap-2">
          <input type="radio" name="outloan" value="outloan_no" />
          <h5>No</h5>
        </div>
      </div>
    </div>
  );
}

export default OutstandingLoan;
