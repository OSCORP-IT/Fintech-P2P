import { useEffect, useRef } from "react";
import LoanInfo from "./loan-details/LoanInfo";
import DisburseInfo from "./loan-details/DisburseInfo";
import PaymentInfo from "./loan-details/PaymentInfo";
import InstallmentInfo from "./loan-details/InstallmentInfo";
import CircularProgressBarItem from "./CircularProgressBar";

function ModalLoan({ onModalOpen }) {
  const motherDivRef = useRef();
  const childDivRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the clicked element is outside the child div
      if (childDivRef.current && !childDivRef.current.contains(event.target)) {
        onModalOpen();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={motherDivRef}
      className="w-full h-screen fixed top-0 left-0 bg-black/60 z-50 flex justify-center items-center"
    >
      <div
        ref={childDivRef}
        className="w-3/5 h-[70%]  bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-200 from-15% to-white border-2 border-accentColor rounded-md pl-6 pr-4 py-6 flex"
      >
        <div className="w-4/6 h-full">
          <div className="flex justify-start gap-8 items-center">
            <div className="flex items-center gap-2 capitalize text-sm font-medium text-textColor3">
              <div className="h-2 w-2 bg-accentColor"></div>
              <h2>business loan</h2>
            </div>
            <div className="flex items-center gap-2 capitalize text-sm font-medium text-textColor3">
              <div className="h-2 w-2 bg-textColor1"></div>
              <h2>loan ID# 1122331</h2>
            </div>
          </div>
          <div className="pt-4 text-textColor1 text-3xl font-semibold capitalize">
            <h2>equipment purchase loan</h2>
          </div>
          <LoanInfo />
          <DisburseInfo />
          <PaymentInfo />
          <InstallmentInfo />
        </div>
        <div className="w-2/6 px-4">
          <div className="bg-accentColor p-6 rounded-md text-center capitalize text-white">
            <h5 className="text-sm font-medium">
              total loan amount from lender
            </h5>
            <h2 className=" text-3xl font-semibold pt-2">৳ 2,500,000</h2>
          </div>
          <div className="bg-textColor1 p-6 rounded-md text-center capitalize text-white my-6">
            <h5 className="text-sm font-medium">pay loan amount from lender</h5>
            <h2 className=" text-3xl font-semibold pt-2">৳ 2,600,000</h2>
          </div>
          <div className="flex flex-col justify-center items-center relative">
            <CircularProgressBarItem
              width={150}
              height={150}
              percent={70}
              text={"Paid"}
              pathColor={"#0D5152"}
              ratio={0.55}
            />
            <h2 className="absolute m-auto bottom-6 text-xl font-semibold pt-2 text-gray-700">
              ৳ 10,000,000
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalLoan;
