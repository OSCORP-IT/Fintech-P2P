import { GoAlertFill } from "react-icons/go";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { HiReceiptPercent } from "react-icons/hi2";

const CarouselComponent = () => {
  return (
    <div className="w-full flex justify-center bg-white pb-12">
      <div className="flex gap-8 items-center justify-between w-5/6 -mt-[54px] font-poppins">
        <div className="bg-white border border-gray-200 text-textColor1 flex-grow h-[200px] rounded-xl cards flex flex-col justify-center items-center">
          <GoAlertFill className="text-3xl text-accentColor" />
          <h2 className="text-xl font-bold py-2">Risk Sharing</h2>
          <div className="px-4 text-center">
            <h5>
              Here, the suppliers of funds become investors instead of creditors
            </h5>
          </div>
        </div>
        <div className="bg-white border border-gray-200  text-textColor1 flex-grow h-[200px] rounded-xl cards flex flex-col justify-center items-center">
          <FaHandHoldingDollar className="text-3xl text-accentColor" />
          <h2 className="text-xl font-bold py-2">Profit & Loss Sharing</h2>
          <div className="px-4 text-center">
            <h5>
              Here, the suppliers of funds become investors instead of creditors
            </h5>
          </div>
        </div>
        <div className="bg-white border border-gray-200  text-textColor1 flex-grow py-2 h-[200px] rounded-xl cards flex flex-col justify-center items-center">
          <FaWallet className="text-3xl text-accentColor" />
          <h2 className="text-xl font-bold  py-2">Fixed Income</h2>
          <div className="px-4 text-center">
            <h5>
              Here, the suppliers of funds become investors instead of creditors
            </h5>
          </div>
        </div>
        <div className="bg-white border border-gray-200  text-textColor1 flex-grow py-2 h-[200px] rounded-xl cards flex flex-col justify-center items-center">
          <HiReceiptPercent className="text-3xl text-accentColor" />
          <h2 className="text-xl font-bold  py-2">No Interest (Riba)</h2>
          <div className="px-4 text-center">
            <h5>
              Here, the suppliers of funds become investors instead of creditors
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
