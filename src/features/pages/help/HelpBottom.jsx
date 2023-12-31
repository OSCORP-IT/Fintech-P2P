import { BiCategoryAlt } from "react-icons/bi";
import help from "../../../assets/help.png";
import { MdArrowOutward } from "react-icons/md";
function HelpBottom() {
  return (
    <div className="w-5/6 bg-gradient-to-l from-orange-50 to-gray-200 rounded-xl py-6 mt-[60px] mb-6 flex items-center">
      <div className="w-3/5 pl-8">
        <div className="flex gap-1 items-center justify-start pt-6">
          <BiCategoryAlt className="text-xl text-emeraldGreen" />
          <h2 className="text-2xl  font-bold text-emeraldGreen">
            Start Your Loan Search Today
          </h2>
        </div>
        <div className="text-[36px] py-4 font-bold leading-none text-emeraldGreen">
          <h2>
            Find the Perfect <span className="text-amberYellow">Loan</span>{" "}
            Solutions for Your Financial Needs
          </h2>
        </div>
        <div className="flex bg-emeraldGreen py-3 px-5 rounded-3xl text-white font-semibold w-max my-4 items-center gap-2 text-lg">
          <h3>Conatct Us</h3>
          <MdArrowOutward />
        </div>
      </div>

      <div className="w-2/5">
        <img src={help} alt="help_image" />
      </div>
    </div>
  );
}

export default HelpBottom;
