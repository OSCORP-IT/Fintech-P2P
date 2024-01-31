function InstallmentInfo() {
  return (
    <div className=" py-6 flex justify-between items-center text-start">
      <div className=" w-1/3">
        <h2 className="text-textColor3 uppercase text-xs">total installment</h2>
        <p className="text-gray-700 pt-2 text-sm">24</p>
      </div>
      <div className="text-sm w-1/3">
        <h2 className="text-textColor3 uppercase text-xs">installment paid</h2>
        <p className="text-gray-700 pt-2 text-sm">09</p>
      </div>
      <div className="text-sm w-1/3"></div>
    </div>
  );
}

export default InstallmentInfo;
