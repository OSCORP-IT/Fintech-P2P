import CircularProgressbar from "../CircularProgressBar";
function PortfolioStepDisplay({ step, percent, label }) {
  return (
    <>
      <div className="flex items-center gap-4">
        <CircularProgressbar
          width={80}
          height={80}
          percent={percent}
          text={`(${step}/6)`}
          pathColor={"#F3F4F8"}
        />
        <h2 className="text-xl text-accentColor capitalize font-semibold">
          {label}
        </h2>
      </div>
      <div className="mt-6 bg-gray-100 rounded-md text-lg font-semibold capitalize">
        <h2
          className={`${
            step === 1 ? "text-white bg-textColor1" : "text-textColor3"
          } py-2 pl-4 rounded-md`}
        >
          basic information
        </h2>
        <h2
          className={`${
            step === 2 ? "text-white bg-textColor1" : "text-textColor3"
          } py-2 pl-4 rounded-md`}
        >
          professional information
        </h2>
        <h2
          className={`${
            step === 3 ? "text-white bg-textColor1" : "text-textColor3"
          } py-2 pl-4 rounded-md`}
        >
          uploads documents
        </h2>
        <h2
          className={`${
            step === 4 ? "text-white bg-textColor1" : "text-textColor3"
          } py-2 pl-4 rounded-md`}
        >
          bank details
        </h2>
        <h2
          className={`${
            step === 5 ? "text-white bg-textColor1" : "text-textColor3"
          } py-2 pl-4 rounded-md`}
        >
          guarantor information
        </h2>
        <h2
          className={`${
            step === 6 ? "text-white bg-textColor1" : "text-textColor3"
          } py-2 pl-4 rounded-md`}
        >
          existing loans
        </h2>
      </div>
    </>
  );
}

export default PortfolioStepDisplay;
