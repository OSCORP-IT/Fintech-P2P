import hero from "../assets/Hero.png";
import Button from "./Button";
import GradientHeader from "./GradientHeader";
import H5 from "./H5";
import P from "./P";
function Hero() {
  return (
    <div className="w-full bg-backgroundMain flex justify-center">
      <div className="w-5/6 flex items-center justify-center py-8">
        <div className="text-start w-1/2 pr-10">
          <H5>Compare and Choose the Best Loan</H5>
          <GradientHeader
            to={"l"}
            addedClass=" text-5xl laptop:text-7xl font-extrabold font-poppins "
          >
            Find the <br /> Perfect Loan <br />
            for Your Need
          </GradientHeader>
          <P addedClass={"py-6"}>
            Lorem ipsum dolor sit amet consectetur. Lacus nulla sed cras
            vulputate nulla lectus mattis interdum proin. Congue magna
            adipiscing tincidunt ut aenean.
          </P>
          <div className="flex my-4 gap-2 font-semibold">
            <Button
              addedClass={"px-4 py-3 bg-accentColor text-white"}
              arrow={true}
            >
              Check Your Rate
            </Button>
            <Button
              addedClass={"px-4 py-3 text-textColor3 border border-textColor3"}
              arrow={true}
            >
              About Us
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
