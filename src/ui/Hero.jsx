import hero from "../assets/Hero.png";
import Button from "./Button";
import GradientHeader from "./GradientHeader";
function Hero() {
  return (
    <div className="w-full bg-backgroundMain flex justify-center">
      <div className="w-5/6 flex items-center justify-center py-8">
        <div className="text-start w-1/2 pr-10">
          <h5 className=" text-textColor1 font-bold text-2xl py-2 ">
            Compare and Choose the Best Loan
          </h5>
          <GradientHeader
            to={"l"}
            addedClass="text-7xl font-extrabold font-poppins "
          >
            Find the <br /> Perfect Loan <br />
            for Your Need
          </GradientHeader>
          <p className="text-black text-lg font-normal py-6">
            Lorem ipsum dolor sit amet consectetur. Lacus nulla sed cras
            vulputate nulla lectus mattis interdum proin. Congue magna
            adipiscing tincidunt ut aenean.
          </p>
          <div className="flex my-4 gap-2 font-semibold">
            <Button addedClass={"px-2 py-3 bg-accentColor text-white"}>
              <h3>Check Your Rate</h3>
            </Button>
            <Button
              addedClass={"px-4 py-3 text-textColor3 border border-textColor3"}
            >
              <h3>About Us</h3>
            </Button>
          </div>
        </div>
        <div className="w-1/2">
          <img className="py-4 object-cover" src={hero} alt="hero-cover" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
