import logo from "../../assets/image 2.png";

function LoanHeader() {
  return (
    <div className="fixed w-full top-0 left-0 flex justify-center z-20 bg-white shadow">
      <div className=" h-[88px]   w-5/6 flex justify-between items-center ">
        <div className="">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex justify-around flex-grow font-medium">
          <div className="cursor-pointer hover:text-amberYellow">
            Basic Info
          </div>
        </div>
        <div className="flex justify-around flex-grow font-medium">
          <div className="cursor-pointer hover:text-amberYellow">
            Your Business
          </div>
        </div>
        <div className="flex justify-around flex-grow font-medium">
          <div className="cursor-pointer hover:text-amberYellow">Your Info</div>
        </div>
        <div className="flex justify-around flex-grow font-medium">
          <div className="cursor-pointer hover:text-amberYellow">
            Others & Final Details
          </div>
        </div>
        <div className="text-white">
          <div className="rounded-md text-base p-2 bg-emeraldGreen">
            Disclosure
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanHeader;
