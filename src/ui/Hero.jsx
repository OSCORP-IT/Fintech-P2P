import { BiCategoryAlt } from "react-icons/bi";
import hero from "../assets/Hero.png";
import { MdArrowOutward } from "react-icons/md";
function Hero() {
  return (
    <div className="w-full bg-gradient-to-l from-gray-200 to-orange-50 flex justify-center">
      <div className="w-5/6 flex items-center justify-center py-8">
        <div className="text-start">
          <div className="flex gap-1 items-center py-2">
            <BiCategoryAlt className="text-xl text-emeraldGreen" />
            <h5 className="text-emeraldGreen font-bold text-xl">
              Compare and Choose the Best Loan
            </h5>
          </div>

          <h2 className="text-[55px] font-bold leading-none">
            Find the <span className="text-amberYellow">Perfect</span> Loan{" "}
            <br />
            for Your Needs
          </h2>
          <p className="text-black text-base font-normal py-6">
            Lorem ipsum dolor sit amet consectetur. Lacus nulla sed cras
            vulputate nulla lectus mattis interdum proin. Congue magna
            adipiscing tincidunt ut aenean.
          </p>
          <div className="flex my-4 gap-2 font-semibold">
            <div className="flex bg-emeraldGreen p-3 rounded-full text-white items-center gap-2">
              <h3>Check Your Rate</h3>
              <MdArrowOutward />
            </div>
            <div className="flex border border-emeraldGreen text-emeraldGreen p-3 rounded-full items-center gap-2">
              <h3>About Us</h3>
              <MdArrowOutward />
            </div>
          </div>
        </div>
        <div>
          <img className="py-4" src={hero} alt="hero-cover" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
