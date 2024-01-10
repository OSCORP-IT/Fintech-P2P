import { useNavigate } from "react-router-dom";
import logo from "../assets/image 2.png";
import { MdArrowOutward } from "react-icons/md";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="fixed w-full flex justify-center z-10 bg-white shadow">
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
            onClick={() => navigate("/")}
          >
            Career
          </div>
          <div
            className="cursor-pointer hover:text-amberYellow"
            onClick={() => navigate("/")}
          >
            Blog
          </div>
          <div
            className="cursor-pointer hover:text-amberYellow"
            onClick={() => navigate("/")}
          >
            How It Works
          </div>
          <div
            className="cursor-pointer hover:text-amberYellow"
            onClick={() => navigate("/help")}
          >
            Contact
          </div>
        </div>
        <div className="flex gap-4 text-white">
          <div className="flex bg-amberYellow rounded-full justify-between items-center text-base p-1">
            <div className="cursor-pointer hover:shadow rounded-full bg-emeraldGreen py-1 px-3 flex-grow">
              <p>Bn</p>
            </div>
            <div className="cursor-pointer hover:shadow px-3 py-1">
              <p>En</p>
            </div>
          </div>
          <div
            onClick={() => navigate("/join")}
            className="cursor-pointer hover:shadow flex px-3 bg-emeraldGreen items-center rounded-full"
          >
            <p>Sign In</p>
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
