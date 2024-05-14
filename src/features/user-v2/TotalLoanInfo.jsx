import Button from "../../ui/Button";
import CircularProgressBarItem from "./CircularProgressBar";
function TotalLoanInfo() {
  return (
    <>
      <div className="flex justify-between items-center border-b-2 border-bgGradient1 py-2">
        <div>
          <h3 className="text-textColor3 text-sm capitalize">
            current monthly payment
          </h3>
          <h2 className="text-gray-700 text-xl font-semibold">৳ 45,000,000</h2>
        </div>
        <Button
          addedClass={
            "px-3 py-2 text-white font-medium bg-accentColor capitalize"
          }
        >
          pay now
        </Button>
      </div>
      <div className="py-2 flex justify-between items-center capitalize text-textColor3 text-base font-medium">
        <h3>next payment date</h3>
        <h3>February,2024</h3>
      </div>
      <div className="flex justify-center items-center py-2">
        <div className="flex flex-col justify-center items-center relative">
          <CircularProgressBarItem
            width={150}
            height={150}
            percent={70}
            text={"Paid"}
            pathColor={"#0D5152"}
            ratio={0.55}
          />
          <h2 className="absolute m-auto bottom-6 text-xl font-semibold pt-2 text-gray-700">
            ৳ 10,000,000
          </h2>
        </div>
      </div>
      <div className="py-2 flex justify-between items-center capitalize text-textColor3 text-base font-medium">
        <h3>outstanding payment</h3>
        <h3>৳ 13,500,000</h3>
      </div>
    </>
  );
}

export default TotalLoanInfo;
