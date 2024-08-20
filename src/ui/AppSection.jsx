import mobile from "../assets/mobile.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import H5 from "./H5";
import H1 from "./H1";
import P from "./P";
import H3 from "./H3";
function AppSection() {
  return (
    <div className="flex justify-center">
      <div className="flex w-5/6  justify-start items-center py-8">
        <div className="w-3/5">
          <div className="text-start">
            <H5>Download Our Apps</H5>
            <H1 addedClass={"leading-none"}>
              Get Our Apps from Easy Financial Management
            </H1>
            <P addedClass={"py-6"}>
              Lorem ipsum dolor sit amet consectetur. Lacus nulla sed cras
              vulputate nulla lectus mattis interdum proin. Congue magna
              adipiscing tincidunt ut aenean.
            </P>
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
                <h4>GET IT ON</h4>
                <H3>Google Play</H3>
              </div>
            </div>
            <div className="gap-2 text-textColor1 px-2 py-1 rounded-lg border-2 border-textColor1 flex items-center justify-center">
              <div className="text-3xl">
                <FaApple />
              </div>
              <div>
                <h4>Download On The</h4>
                <H3>App Store</H3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5 flex items-center justify-end">
          <img src={mobile} alt="mobile" />
        </div>
      </div>
    </div>
  );
}

export default AppSection;
