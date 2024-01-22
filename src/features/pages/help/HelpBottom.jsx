import help from "../../../assets/help.png";
import Button from "../../../ui/Button";
function HelpBottom() {
  return (
    <div className="w-5/6 bg-gradient-to-t from-bgGradient4 to-bgGradient3 rounded-xl py-6 px-8 mt-[60px] mb-6 flex items-center">
      <div className="w-3/5">
        <div className="flex gap-1 items-center justify-start pt-6">
          <h2 className="text-2xl  font-bold text-textColor1">
            Start Your Loan Search Today
          </h2>
        </div>
        <div className="text-[55px] py-4 font-bold text-textColor1">
          <h2>Find the Perfect Loan Solutions for Your Financial Needs</h2>
        </div>
        <Button addedClass="py-3 px-5 bg-accentColor text-xl text-white font-semibold ">
          <h3>Conatct Us</h3>
        </Button>
      </div>

      <div className="w-2/5">
        <img src={help} alt="help_image" />
      </div>
    </div>
  );
}

export default HelpBottom;
