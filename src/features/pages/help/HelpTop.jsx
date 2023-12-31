import { FaSearch } from "react-icons/fa";

function HelpTop() {
  return (
    <div className="w-5/6 flex items-center justify-between py-4 relative pl-6">
      <div className="absolute left-0 h-[60px] w-[60px] bg-amberYellow rounded-full"></div>
      <div>
        <h2 className="relative text-[26px] font-bold text-zinc-700">
          How can we help you today?
        </h2>
      </div>
      <div className="w-1/4">
        <div className="flex items-center justify-between gap-2 border border-stone-300 bg-gray-200/50 py-1 px-1 rounded-md">
          <input
            type="text"
            placeholder="Search Keywords...."
            className="flex-grow py-1.5 text-center bg-gray-200/50 rounded-md"
          />
          <FaSearch className="text-xl cursor-pointer font-thin" />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default HelpTop;
