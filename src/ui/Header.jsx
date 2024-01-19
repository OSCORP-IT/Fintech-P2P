import { useNavigate } from "react-router-dom";
import logo from "../assets/image 2.png";
import Button from "./Button";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="fixed w-full flex justify-center z-10 bg-backgroundMain shadow">
      <div className=" h-[88px]   w-5/6 flex justify-between items-center ">
        <div className="">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex justify-around flex-grow font-medium">
          <div
            className="cursor-pointer hover:text-amberYellow"
            onClick={() => navigate("/")}
          >
            Home
          </div>
          <div
            className="cursor-pointer hover:text-amberYellow"
            onClick={() => navigate("/")}
          >
            Product
          </div>
          <div
            className="cursor-pointer hover:text-amberYellow"
            onClick={() => navigate("/about_us")}
          >
            About Us
          </div>
          <div
            className="cursor-pointer hover:text-amberYellow"
            onClick={() => navigate("/help")}
          >
            Contact Us
          </div>
        </div>
        <div className="flex gap-4 text-white">
          <div className="flex bg-amberYellow rounded-full justify-between items-center text-base p-1">
            <select
              name="language"
              id="language"
              className="bg-transparent text-textColor3 border border-textColor3 py-1 px-2 rounded-md"
            >
              <option value="">EN</option>
              <option value="">BN</option>
            </select>
          </div>
          <Button addedClass={"px-3 bg-accentColor"}>Sign In</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
