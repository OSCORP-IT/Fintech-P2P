import { BiCategoryAlt } from "react-icons/bi";
import grid1 from "../assets/1.png";
import grid2 from "../assets/2.png";
import grid3 from "../assets/3.png";
import grid4 from "../assets/4.png";
function Halal() {
  return (
    <div className="w-full bg-white flex justify-center py-6">
      <div className="w-4/6 pt-10 pb-4 text-center">
        <div className="flex gap-1 items-center justify-center">
          <BiCategoryAlt className="text-xl text-emeraldGreen" />
          <h2 className="text-xl font-bold text-emeraldGreen">
            How We Are 100% Halal
          </h2>
        </div>

        <h1 className="text-[36px] font-bold text-black py-3">
          Committed to Pure Halal Standards: Our Assurance of{" "}
          <span className="text-amberYellow">100% Halal </span>
          Products
        </h1>
        <div className="flex gap-8 items-center justify-center">
          <div className="bg-gray-200 py-2 h-[250px] rounded-xl flex flex-col items-center justify-center">
            <div className="rounded-full p-2 bg-white w-max">
              <img src={grid1} alt="risk sharing" />
            </div>
            <div className="px-4">
              <h2 className="text-lg font-bold text-emeraldGreen py-2">
                Risk Sharing
              </h2>
              <p>
                Here, the suppliers of funds become investors instead of
                creditors
              </p>
            </div>
          </div>
          <div className="bg-gray-200 py-2 h-[250px] rounded-xl flex flex-col items-center justify-center">
            <div className="rounded-full p-5 bg-white w-max">
              <img src={grid2} alt="risk sharing" />
            </div>
            <div className="px-4">
              <h2 className="text-lg font-bold text-emeraldGreen py-2">
                Profit & Loss Sharing
              </h2>
              <p>
                Here, the suppliers of funds become investors instead of
                creditors
              </p>
            </div>
          </div>
          <div className="bg-gray-200 py-2 h-[250px] rounded-xl flex flex-col items-center justify-center">
            <div className="rounded-full p-2 bg-white w-max">
              <img src={grid3} alt="risk sharing" />
            </div>
            <div className="px-4">
              <h2 className="text-lg font-bold text-emeraldGreen py-2">
                Fixed Income
              </h2>
              <p>
                Here, the suppliers of funds become investors instead of
                creditors
              </p>
            </div>
          </div>
          <div className="bg-gray-200 py-2 h-[250px] rounded-xl flex flex-col items-center justify-center">
            <div className="rounded-full p-2 bg-white w-max">
              <img src={grid4} alt="risk sharing" />
            </div>
            <div className="px-4">
              <h2 className="text-lg font-bold text-emeraldGreen py-2">
                No Interest (Riba)
              </h2>
              <p>
                Here, the suppliers of funds become investors instead of
                creditors
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Halal;
