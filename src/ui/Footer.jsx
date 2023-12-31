import footerLogo from "../assets/Footer-logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-emeraldGreen">
      <div className="px-[120px] flex justify-center items-center border-b border-b-amberYellow">
        <div className="cursor-pointer">
          <img src={footerLogo} alt="footer-logo" />
        </div>
        <div className="flex flex-grow justify-around text-white">
          <div className="cursor-pointer">Privacy Policy</div>
          <div className="cursor-pointer">Terms & Condition</div>
          <div className="cursor-pointer">Resource Center</div>
          <div className="cursor-pointer">Agreement</div>
          <div className="cursor-pointer">Safety & Privacy</div>
        </div>
        <div className="flex text-emeraldGreen gap-2">
          <div className="cursor-pointer bg-amberYellow rounded-full p-2 text-base">
            <FaFacebookF />
          </div>
          <div className="cursor-pointer bg-amberYellow rounded-full p-2 text-base">
            <FaInstagram />
          </div>
          <div className="cursor-pointer bg-amberYellow rounded-full p-2 text-base">
            <FaLinkedinIn />
          </div>
          <div className="cursor-pointer bg-amberYellow rounded-full p-2 text-base">
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="font-medium py-4">
        <div className="text-center text-white">
          © 2023 <span className="text-amberYellow">Fintech Bank</span>. All
          rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
