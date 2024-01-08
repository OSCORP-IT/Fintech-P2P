import { FaArrowTrendUp } from "react-icons/fa6";
import { BsBoxArrowRight } from "react-icons/bs";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { IoHome } from "react-icons/io5";

import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
function ProfileLayout({ children, menu }) {
  const navigate = useNavigate();
  return (
    <div className=" bg-gradient-to-l from-orange-50 to-gray-200 flex justify-center">
      <div className="w-5/6 flex gap-4 my-4">
        <div className="w-1/5">
          <div className="bg-emeraldGreen text-white rounded-md pl-4 py-4">
            <h1 className="text-xl font-semibold">Abidur Rahman</h1>
            <h5 className="pt-8 text-sm opacity-50 font-thin">ID Number</h5>
            <p className="text-xl font-semibold">123456789</p>
          </div>
          <div className="bg-emeraldGreen text-white rounded-md pl-4 mt-4 py-4 shadow-black/50 shadow-md h-">
            <h5 className="pt-2 text-sm opacity-50 font-thin">Total Invest</h5>
            <p className="text-xl font-semibold">৳ 50,075,000</p>
            <div className="flex items-center gap-10 border-b border-white/50 w-max pb-4">
              <div>
                <h5 className="pt-4 text-sm opacity-50 font-thin">
                  Total Profit
                </h5>
                <p className="text-xl font-semibold">৳ 5,000,000</p>
              </div>
              <div className="text-amberYellow ">
                <h5 className="pt-4 text-sm opacity-50 font-thin">
                  Net Income
                </h5>
                <div className="flex gap-2 items-center ">
                  <FaArrowTrendUp className="text-xl" />
                  <p className="text-xl font-semibold">10%</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-start">
                <div
                  onClick={() => navigate("/user/dashboard")}
                  className={`${
                    menu === "dashboard" ? "text-amberYellow" : ""
                  } flex gap-2 items-center py-2 w-full`}
                >
                  <IoHome className="text-xl" />
                  <p
                    className={`text-xl font-semibold cursor-pointer w-full ${
                      menu === "dashboard"
                        ? "border-r-4 border-amberYellow"
                        : ""
                    }`}
                  >
                    Dashboard
                  </p>
                </div>
                <div
                  onClick={() => navigate("/user/profile")}
                  className={`${
                    menu === "profile" ? "text-amberYellow" : ""
                  } flex gap-2 items-center py-2 w-full`}
                >
                  <CgProfile className="text-xl" />
                  <p
                    className={`text-xl font-semibold cursor-pointer w-full ${
                      menu === "profile" ? "border-r-4 border-amberYellow" : ""
                    }`}
                  >
                    User Profile
                  </p>
                </div>
                <div className="flex gap-2 items-center py-2 ">
                  <HiCurrencyBangladeshi className="text-xl" />
                  <p className="text-xl font-semibold cursor-pointer">
                    Transaction
                  </p>
                </div>
                <div className="flex gap-2 items-center py-2 ">
                  <MdOutlineSettings className="text-xl" />
                  <p className="text-xl font-semibold cursor-pointer">
                    Settings
                  </p>
                </div>
              </div>
              <div className="mt-14">
                <div className="flex gap-2 items-center py-2 text-amberYellow">
                  <BsBoxArrowRight className="text-xl" />
                  <p className="text-xl font-semibold cursor-pointer">
                    Log Out
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-4/5 bg-white shadow-md rounded-md">{children}</div>
      </div>
    </div>
  );
}

export default ProfileLayout;
