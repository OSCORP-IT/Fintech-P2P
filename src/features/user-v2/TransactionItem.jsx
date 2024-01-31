import Button from "../../ui/Button";

function TransactionItem({ status, amount, type }) {
  return (
    <div className="flex justify-between text-sm items-center text-start text-gray-700 font-medium capitalize pb-2">
      <div className="w-3/12">
        <h2>home loan</h2>
        <p className="text-[10px] text-textColor3">personal loan</p>
      </div>
      <div className="w-2/12">
        <h2>2321341</h2>
      </div>
      <div className="w-2/12">
        <h3>DJS787786J9</h3>
      </div>
      <div className="w-2/12">
        <h2>22/06/2025</h2>
      </div>
      <div
        className={`w-2/12 ${
          type === "+" ? "text-textColor1" : "text-red-500"
        }`}
      >
        <h2>
          {type}৳ {amount}
        </h2>
      </div>
      <div className=" w-1/12 flex gap-2">
        <Button
          addedClass={`px-2 py-1 ${
            status === "cancelled" ? "bg-red-500" : "bg-textColor1"
          } text-white text-sm capitalize`}
        >
          {status}
        </Button>
      </div>
    </div>
  );
}

export default TransactionItem;
