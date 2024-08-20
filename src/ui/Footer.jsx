import logo from "../assets/image 2.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Button from "./Button";
import FooterLink from "./FooterLink";
import H2 from "./H2";
import P from "./P";

function Footer() {
  const twClass =
    "border border-gray-300 rounded-md p-0.5 cursor-pointer hover:bg-gray-200";
  return (
    <>
      <div className="w-full flex justify-center items-start pt-8 pb-4">
        <div className="bg-white border-y border-y-gray-500/50 w-5/6 flex justify-between items-start py-4">
          <div className="w-1/6">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex justify-evenly items-start w-3/6 text-base uppercase">
            <div>
              <h2 className="font-bold">About Fintech</h2>
              <div className="text-textColor3 font-medium pt-2 leading-relaxed">
                <FooterLink>Home</FooterLink>
                <FooterLink>About Us</FooterLink>
                <FooterLink>FAQ</FooterLink>
                <FooterLink>Blog</FooterLink>
              </div>
            </div>
            <div>
              <h2 className="font-bold">Products</h2>
              <div className="text-textColor3 font-medium pt-2 leading-relaxed">
                <FooterLink>Business Loan</FooterLink>
                <FooterLink>Personal Loan</FooterLink>
                <FooterLink>Investment</FooterLink>
              </div>
            </div>
          </div>
          <div className="w-2/6">
            <H2 addedClass={"uppercase text-textColor1"}>
              Join Our Newsletter
            </H2>
            <P addedClass={"py-2"}>
              Tools, tips, and insights to improve your financial health.
            </P>
            <div className="flex gap-4 items-center justify-center">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-full border rounded-md border-gray-400 text-center py-2 bg-white"
              />
              <Button
                addedClass={
                  "px-3 py-2 text-white bg-accentColor uppercase font-medium"
                }
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        {/* <div className="px-[120px] flex justify-center items-center border-b border-b-amberYellow">
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
      </div> */}
        {/* <div className="font-medium py-4">
        <div className="text-center text-white">
          © 2023 <span className="text-amberYellow">Fintech Bank</span>. All
          rights reserved.
        </div>
      </div> */}
      </div>
      <div className="flex justify-center w-full">
        <div className="flex justify-between items-start w-5/6 pb-2">
          <div className="w-1/3 text-textColor3">
            © 2023 <strong>Fintech Bank.</strong> All rights reserved.
          </div>
          <div className="w-1/3 flex justify-center text-2xl items-center gap-4">
            <FaFacebookF className={`text-blue-500 ${twClass}`} />
            <FaInstagram className={`text-pink-400 ${twClass}`} />
            <FaLinkedinIn className={`text-blue-700 ${twClass}`} />
            <FaTwitter className={`text-blue-400 ${twClass}`} />
          </div>
          <div className="w-1/3 flex justify-around ite ms-center text-textColor1 text-base font-medium">
            <div className="cursor-pointer hover:text-textColor3">
              Privacy Policy
            </div>
            <div className="cursor-pointer hover:text-textColor3">
              Terms & Condition
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
