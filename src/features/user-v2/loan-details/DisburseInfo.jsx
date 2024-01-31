function DisburseInfo() {
  return (
    <div className="py-6 flex justify-between items-center text-start">
      <div className="w-1/3">
        <h2 className="text-textColor3 text-xs uppercase">
          total disbursement
        </h2>
        <p className="text-gray-700 text-sm  pt-2">৳ 1,500,000</p>
      </div>
      <div className="text-sm w-1/3">
        <h2 className="text-textColor3 text-xs uppercase">next disbursement</h2>
        <p className="text-gray-700 text-sm  pt-2">21/06/2024</p>
      </div>
      <div className="text-sm w-1/3">
        <h2 className="text-textColor3 text-xs uppercase">
          disbursement amount
        </h2>
        <p className="text-gray-700 text-sm  pt-2 capitalize">৳ 1,000,000</p>
      </div>
    </div>
  );
}

export default DisburseInfo;
