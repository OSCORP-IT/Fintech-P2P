import { SiMastercard } from "react-icons/si";
function LoanWallet() {
  return (
    <div className="bg-cyan-200 rounded-md pt-2 h-[35%] mb-2">
      <div className="bg-teal-300 rounded-md pt-2 h-full">
        <div className="relative bg-textColor1 h-full py-3 px-6 rounded-md flex flex-col gap-4 justify-between">
          <div className="absolute text-7xl uppercase bottom-0 left-1 flex justify-around w-full text-gray-500/50 font-semibold">
            <h1>l</h1>
            <h1>o</h1>
            <h1>a</h1>
            <h1>n</h1>
          </div>
          <div className="relative flex justify-between text-white font-normal">
            <h2 className="text-xl">Loan Wallet</h2>
            <SiMastercard className="text-2xl" />
          </div>
          <div className="text-white relative ">
            <h5 className="text-xs font-normal capitalize">current balance</h5>
            <h2 className="text-4xl font-medium">৳ 677,597.49</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanWallet;
