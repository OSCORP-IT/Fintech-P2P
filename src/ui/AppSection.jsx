import { BiCategoryAlt } from "react-icons/bi";
import mobile from "../assets/mobile.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";
function AppSection() {
  return (
    <div className="flex w-full px-[120px] bg-gradient-to-l from-orange-50 to-gray-200 justify-start items-center py-8">
      <div className="w-3/5">
        <div className="text-start">
          <div className="flex gap-1 items-center py-2">
            <BiCategoryAlt className="text-xl text-emeraldGreen" />
            <h5 className="text-emeraldGreen font-bold text-xl">
              Download Our Apps
            </h5>
          </div>

          <h2 className="text-[42px] font-bold leading-none">
            Get Our Apps fro Easy Financial Management
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
          <div className="gap-2 px-2 py-1 rounded-lg border-2 border-emeraldGreen flex items-center justify-center">
            <div className="text-3xl">
              <FaGooglePlay />
            </div>
            <div>
              <h3>GET IT ON</h3>
              <h2 className="font-arial text-2xl font-semibold">Google Play</h2>
            </div>
          </div>
          <div className="gap-2 px-2 py-1 rounded-lg border-2 border-emeraldGreen flex items-center justify-center">
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
      <div className="w-2/5">
        <img src={mobile} alt="mobile" />
      </div>
    </div>
  );
}

export default AppSection;
