import logo from "../../assets/image 2.png";
import { MdDashboard } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaFileCircleCheck } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { FaQuestionCircle, FaThList } from "react-icons/fa";
function Sidebar() {
  return (
    <div className="relative w-1/5 bg-white cards h-screen flex flex-col items-center p-6">
      <div className="border-b border-gray-200 w-full pb-4 flex justify-center">
        <img src={logo} alt="logo" className="object-cover " />
      </div>
      <div className="py-4 w-full ">
        <div className="mb-4 cursor-pointer flex items-center gap-2 rounded-md py-2 px-3 text-xl font-semibold bg-bgGradient4 bg-opacity-50 text-textColor1">
          <MdDashboard className="text-2xl" />
          <h3>Dashboard</h3>
        </div>
        <div className="mb-4 cursor-pointer flex items-center gap-2 rounded-md py-2 px-3 text-xl font-semibold bg-white hover:bg-opacity-50 hover:bg-bgGradient4 text-textColor3 hover:text-textColor1">
          <FaThList className="text-2xl" />
          <h3>Loans</h3>
        </div>
        <div className="mb-4 cursor-pointer flex items-center gap-2 rounded-md py-2 px-3 text-xl font-semibold bg-white hover:bg-opacity-50 hover:bg-bgGradient4 text-textColor3 hover:text-textColor1">
          <FaFileCircleCheck className="text-2xl" />
          <h3>Portfolio</h3>
        </div>
        <div className="mb-4 cursor-pointer flex items-center gap-2 rounded-md py-2 px-3 text-xl font-semibold bg-white hover:bg-opacity-50 hover:bg-bgGradient4 text-textColor3 hover:text-textColor1">
          <FaMoneyBillTransfer className="text-2xl" />
          <h3>Transaction</h3>
        </div>

        <div className=" absolute bottom-4 left-6">
          <div className="mb-4 cursor-pointer flex items-center gap-2 rounded-md py-2 px-3 text-xl font-semibold bg-white hover:bg-opacity-50 hover:bg-bgGradient4 text-textColor3 hover:text-textColor1">
            <FaQuestionCircle className="text-2xl" />
            <h3>Get Help & Support</h3>
          </div>
          <div className="mb-4 cursor-pointer flex items-center gap-2 rounded-md py-2 px-3 text-xl font-semibold bg-white hover:bg-opacity-50 hover:bg-bgGradient4 text-textColor3 hover:text-textColor1">
            <IoSettings className="text-2xl" />
            <h3>Settings</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
