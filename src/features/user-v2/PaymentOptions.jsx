import { FaArrowRight } from "react-icons/fa6";
function PaymentOptions() {
  return (
    <>
      <div className="rounded-lg bg-accentColor w-full h-[28%] flex relative">
        <div className="w-2/3 flex gap-2 items-baseline justify-start py-2 px-4 text-white">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <h4 className="capitalize text-base font-medium">
            make a loan payment
          </h4>
        </div>
        <FaArrowRight className="absolute bottom-2 right-2 text-white text-2xl shadow-md text-end" />
      </div>
      <div className="rounded-lg bg-accentColor w-full h-[28%] flex relative">
        <div className="w-2/3 flex gap-2 items-baseline justify-start py-2 px-4 text-white">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <h4 className="capitalize text-base font-medium">Payment Method</h4>
        </div>
        <FaArrowRight className="absolute bottom-2 right-2 text-white text-2xl shadow-md text-end" />
      </div>
      <div className="rounded-lg bg-accentColor w-full h-[28%] flex relative">
        <div className="w-2/3 flex gap-2 items-baseline justify-start py-2 px-4 text-white">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <h4 className="capitalize text-base font-medium">Loan Application</h4>
        </div>
        <FaArrowRight className="absolute bottom-2 right-2 text-white text-2xl shadow-md text-end" />
      </div>
    </>
  );
}

export default PaymentOptions;
