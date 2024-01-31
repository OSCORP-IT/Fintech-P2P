import Button from "../../ui/Button";
import CircularProgressBarItem from "./CircularProgressBar";

function LoanListItem({ onOpenModal }) {
  return (
    <div className="flex justify-between text-sm items-center text-start text-gray-700 font-medium capitalize pb-2">
      <div className="w-2/12">
        <h2>personal loan</h2>
        <p className="text-[10px] text-textColor3">created: 01/01/2024</p>
      </div>
      <div className="w-2/12">
        <h2>home loan</h2>
      </div>
      <div className="w-2/12">
        <h3>৳ 2,500,000</h3>
      </div>
      <div className="w-2/12">
        <h2>22/06/2025</h2>
      </div>
      <div className="w-1/12">
        <h3>24 months</h3>
      </div>
      <div className="w-1/12">
        <div className="flex justify-center">
          <CircularProgressBarItem width={30} height={30} percent={60} />
        </div>
      </div>
      <div className=" w-2/12 flex gap-2">
        <Button
          addedClass={"px-2 py-1 bg-indigo-600 text-white text-sm capitalize"}
        >
          pending
        </Button>
        <Button
          addedClass={
            "px-2 py-1 border border-accentColor text-accentColor text-sm capitalize"
          }
          hover={"hover:bg-accentColor hover:text-white"}
          onClick={onOpenModal}
        >
          details
        </Button>
      </div>
    </div>
  );
}

export default LoanListItem;
