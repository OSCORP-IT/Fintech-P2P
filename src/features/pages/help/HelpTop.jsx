import { FaSearch } from "react-icons/fa";

function HelpTop() {
  return (
    <div className="w-5/6 flex items-center justify-between py-4 relative pl-6">
      <div className="absolute left-0 h-[60px] w-[60px]  bg-teal-100 rounded-full"></div>
      <div>
        <h2 className="relative text-[26px] font-bold text-textColor1">
          How can we help you today?
        </h2>
      </div>
      <div className="w-1/4 border border-gray-400 rounded-md">
        <div className="flex items-center justify-between rounded-md">
          <input
            type="text"
            placeholder="Search Keywords...."
            className="flex-grow py-2 text-center bg-bgGradient3 bg-opacity-50 rounded-l-md"
          />
          <div className="bg-accentColor rounded-r-md p-2 ">
            <FaSearch className="text-xl cursor-pointer font-thin text-white" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default HelpTop;
