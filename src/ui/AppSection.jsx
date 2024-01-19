import mobile from "../assets/mobile.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";
function AppSection() {
  return (
    <div className="flex justify-center bg-backgroundMain">
      <div className="flex w-5/6  justify-start items-center py-8">
        <div className="w-3/5">
          <div className="text-start">
            <h5 className=" text-textColor2  font-bold text-xl py-2 font-poppins">
              Download Our Apps
            </h5>
            <h2 className="text-[42px] font-bold leading-none font-poppins text-textColor1">
              Get Our Apps from Easy Financial Management
            </h2>
            <p className="text-black text-base font-normal py-6">
              Lorem ipsum dolor sit amet consectetur. Lacus nulla sed cras
              vulputate nulla lectus mattis interdum proin. Congue magna
              adipiscing tincidunt ut aenean.
            </p>
          </div>
          <ul className="flex gap-20 pt-2 font-medium list-disc pl-4">
            <li>Quick Loan Application</li>
            <li>Secure & Private</li>
          </ul>
          <ul className="flex gap-[84px] pt-3 font-medium list-disc pl-4">
            <li>User Friendly Interface</li>
            <li>Stay Tuned</li>
          </ul>
          <div className="flex gap-8 text-emeraldGreen py-8">
            <div className="gap-2 text-textColor1 px-2 py-1 rounded-lg border-2 border-textColor1 flex items-center justify-center">
              <div className="text-3xl">
                <FaGooglePlay />
              </div>
              <div>
                <h3>GET IT ON</h3>
                <h2 className="font-arial text-2xl font-semibold">
                  Google Play
                </h2>
              </div>
            </div>
            <div className="gap-2 text-textColor1 px-2 py-1 rounded-lg border-2 border-textColor1 flex items-center justify-center">
              <div className="text-3xl">
                <FaApple />
              </div>
              <div>
                <h3>Download On The</h3>
                <h2 className="font-sans text-2xl font-semibold">App Store</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5 ">
          <img src={mobile} alt="mobile" />
        </div>
      </div>
    </div>
  );
}

export default AppSection;
