import { useNavigate } from "react-router-dom";
import logo from "../assets/image 2.png";
import Button from "./Button";

const white = ["/contact", "/faq"];

function Header() {
  const navigate = useNavigate();
  const bgWhite = white.some((e) => e === window.location.pathname);
  return (
    <div
      className={`fixed w-full flex justify-center z-10 ${
        bgWhite ? "bg-white" : "bg-backgroundMain"
      }`}
    >
      <div className=" h-[88px] w-5/6 flex justify-between items-center ">
        <div className="w-3/12">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex justify-around flex-grow font-medium w-6/12 text-gray-700/80">
          <div
            className="cursor-pointer hover:text-accentColor hover:border-b hover:border-b-accentColor"
            onClick={() => navigate("/")}
          >
            Home
          </div>
          <div
            className="cursor-pointer  hover:text-accentColor hover:border-b hover:border-b-accentColor"
            onClick={() => navigate("/")}
          >
            Product
          </div>
          <div
            className="cursor-pointer  hover:text-accentColor hover:border-b hover:border-b-accentColor"
            onClick={() => navigate("/about_us")}
          >
            About Us
          </div>
          <div
            className="cursor-pointer  hover:text-accentColor hover:border-b hover:border-b-accentColor"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </div>
        </div>
        <div className="flex gap-4 justify-end text-white w-3/12">
          <div className="flex bg-amberYellow rounded-full justify-between items-center text-base">
            <select
              name="language"
              id="language"
              className="bg-transparent text-textColor3 border border-textColor3 py-2 rounded-md"
            >
              <option value="">EN</option>
              <option value="">BN</option>
            </select>
          </div>
          <Button addedClass={"px-4 py-2 bg-accentColor"} arrow={true}>
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
