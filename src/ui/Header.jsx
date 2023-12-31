import logo from "../assets/image 2.png";
import { MdArrowOutward } from "react-icons/md";

function Header() {
  return (
    <div className="fixed w-full flex justify-center z-50 bg-white shadow">
      <div className=" h-[88px]   w-5/6 flex justify-between items-center ">
        <div className="">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex justify-around flex-grow font-medium">
          <div>Home</div>
          <div>Product</div>
          <div>About Us</div>
          <div>Career</div>
          <div>Blog</div>
          <div>How It Works</div>
          <div>Contact</div>
        </div>
        <div className="flex gap-4 text-white">
          <div className="flex bg-amberYellow rounded-full justify-between items-center text-base p-1">
            <div className="rounded-full bg-emeraldGreen py-1 px-3 flex-grow">
              <p>Bn</p>
            </div>
            <div className="px-3 py-1">
              <p>En</p>
            </div>
          </div>
          <div className="flex px-3 bg-emeraldGreen items-center rounded-full">
            <p>Sign In</p>
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
