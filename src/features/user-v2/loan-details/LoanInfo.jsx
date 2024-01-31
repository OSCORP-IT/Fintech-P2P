function LoanInfo() {
  return (
    <div className=" py-6 flex justify-between items-center text-start">
      <div className=" w-1/3">
        <h2 className="text-textColor3 text-xs uppercase">loan issue</h2>
        <p className="text-gray-700 text-sm pt-2">22/06/2023</p>
      </div>
      <div className="text-sm w-1/3">
        <h2 className="text-textColor3 text-xs uppercase">loan closing</h2>
        <p className="text-gray-700 text-sm pt-2">22/06/2025</p>
      </div>
      <div className="text-sm w-1/3">
        <h2 className="text-textColor3 text-xs uppercase">loan term</h2>
        <p className="text-gray-700 text-sm pt-2 capitalize">6 months</p>
      </div>
    </div>
  );
}

export default LoanInfo;
