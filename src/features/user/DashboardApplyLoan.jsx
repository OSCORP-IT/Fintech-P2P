import { BiCategoryAlt } from "react-icons/bi";
import personal from "../../assets/person.png";
import business from "../../assets/business.png";
import invest from "../../assets/invest.png";
import { MdArrowOutward } from "react-icons/md";
function DashboardApplyLoan() {
  return (
    <div>
      <div className="py-3 flex gap-4 justify-between items-center">
        <div className="w-1/3 h-[145px] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2)] bg-gradient-to-l from-gray-200 to-orange-50 rounded-md p-2">
          <div className="flex justify-between">
            <div className="w-2/5 relative">
              <div className="flex gap-1 items-start">
                <BiCategoryAlt className="text-2xl text-emeraldGreen pt-2" />
                <h5 className="text-emeraldGreen font-bold text-xl">
                  Personal Loans
                </h5>
              </div>
              <div className="absolute cursor-pointer bottom-2 flex bg-amberYellow rounded-full text-neutral-700 items-center gap-1 font-semibold w-max px-2 py-1.5">
                <h3>Apply Now</h3>
                <MdArrowOutward />
              </div>
            </div>

            <div className="w-3/5 flex justify-end">
              <img
                src={personal}
                alt="personal loan"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-1/3 h-[145px] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2)] bg-gradient-to-l from-gray-200 to-orange-50 rounded-md p-2">
          <div className="flex justify-between">
            <div className="w-2/5 relative">
              <div className="flex gap-1 items-start">
                <BiCategoryAlt className="text-2xl text-emeraldGreen pt-2" />
                <h5 className="text-emeraldGreen font-bold text-xl">
                  Business Loans
                </h5>
              </div>
              <div className="absolute cursor-pointer bottom-2 flex bg-amberYellow rounded-full text-neutral-700 items-center gap-1 font-semibold w-max px-2 py-1.5">
                <h3>Apply Now</h3>
                <MdArrowOutward />
              </div>
            </div>

            <div className="w-3/5 flex justify-end">
              <img
                src={business}
                alt="business loan"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-1/3 h-[145px] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2)] bg-gradient-to-l from-gray-200 to-orange-50 rounded-md p-2">
          <div className="flex justify-between">
            <div className="w-2/5 relative">
              <div className="flex gap-1 items-start">
                <BiCategoryAlt className="text-2xl text-emeraldGreen pt-2" />
                <h5 className="text-emeraldGreen font-bold text-xl">
                  Investment
                </h5>
              </div>
              <div className="absolute cursor-pointer bottom-2 flex bg-amberYellow rounded-full text-neutral-700 items-center gap-1 font-semibold w-max px-2 py-1.5">
                <h3>Apply Now</h3>
                <MdArrowOutward />
              </div>
            </div>

            <div className="w-3/5 flex justify-end">
              <img src={invest} alt="invest loan" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-2 bg-emeraldGreen py-4 px-2 flex justify-between items-center rounded-md">
        <div className="text-white">
          <h2 className="text-base font-bold">Get Your Loan</h2>
          <p className="text-sm font font-normal">
            Check your rate for free and apply for a loan with Fintech
          </p>
        </div>
        <div className="cursor-pointer bg-amberYellow rounded-md py-2 px-3 text-neutral-700 font-medium">
          Check Your Rate
        </div>
      </div>
    </div>
  );
}

export default DashboardApplyLoan;
