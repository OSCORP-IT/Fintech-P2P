import { GoAlertFill } from "react-icons/go";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { HiReceiptPercent } from "react-icons/hi2";
import H5 from "./H5";

const CarouselComponent = () => {
  return (
    <div className="w-full flex justify-center bg-white pb-12">
      <div className="flex gap-8 items-center justify-between w-5/6 -mt-[54px] font-poppins">
        <div className="bg-white border border-gray-200 text-textColor1 flex-grow h-[200px] rounded-xl cards flex flex-col justify-center items-center">
          <GoAlertFill className="text-3xl text-accentColor" />
          <H5>Risk Sharing</H5>
          <div className="px-4 text-center">
            <h5>
              Here, the suppliers of funds become investors instead of creditors
            </h5>
          </div>
        </div>
        <div className="bg-white border border-gray-200  text-textColor1 flex-grow h-[200px] rounded-xl cards flex flex-col justify-center items-center">
          <FaHandHoldingDollar className="text-3xl text-accentColor" />
          <H5>Profit & Loss Sharing</H5>
          <div className="px-4 text-center">
            <h5>
              Here, the suppliers of funds become investors instead of creditors
            </h5>
          </div>
        </div>
        <div className="bg-white border border-gray-200  text-textColor1 flex-grow py-2 h-[200px] rounded-xl cards flex flex-col justify-center items-center">
          <FaWallet className="text-3xl text-accentColor" />
          <H5>Fixed Income</H5>
          <div className="px-4 text-center">
            <h5>
              Here, the suppliers of funds become investors instead of creditors
            </h5>
          </div>
        </div>
        <div className="bg-white border border-gray-200  text-textColor1 flex-grow py-2 h-[200px] rounded-xl cards flex flex-col justify-center items-center">
          <HiReceiptPercent className="text-3xl text-accentColor" />
          <H5>No Interest (Riba)</H5>
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
