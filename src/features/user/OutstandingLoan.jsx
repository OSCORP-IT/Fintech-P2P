import { useState } from "react";

function OutstandingLoan() {
  const [inputSets, setInputSets] = useState([
    { loan: "", type: "", amount: "", emi: "" },
  ]);

  const addInputSet = () => {
    setInputSets([...inputSets, { loan: "", type: "", amount: "", emi: "" }]);
  };

  const handleChange = (index, field, value) => {
    const updatedInputSets = [...inputSets];
    updatedInputSets[index][field] = value;
    setInputSets(updatedInputSets);
  };
  return (
    <>
      <div className="w-full flex gap-12 justify-start items-center">
        <h2 className="text-base font-semibold py-2">
          Do You Have Any Outstanding Loans?
          <span className="text-sm text-red-600">*</span>
        </h2>
        <div className=" flex gap-4 justify-start items-center text-xl  font-semibold">
          <div className="flex gap-2">
            <input type="radio" name="outloan" value="outloan_yes" checked />
            <h5>Yes</h5>
          </div>
          <div className="flex gap-2">
            <input type="radio" name="outloan" value="outloan_no" />
            <h5>No</h5>
          </div>
        </div>
      </div>
      <div className="border border-gray-300 p-1 rounded-md">
        <div className="flex items-center gap-2 text-center text-lg font-medium">
          <div className="rounded-md py-2 bg-gray-200  w-4/12">
            Outstanding Loan
          </div>
          <div className="rounded-md py-2 bg-gray-200  w-3/12">Type</div>
          <div className="rounded-md py-2 bg-gray-200 w-3/12">Amount</div>
          <div className="rounded-md py-2 bg-gray-200 w-2/12">EMI</div>
        </div>
        {inputSets.map((inputSet, index) => (
          <>
            <div className="flex items-center gap-2 text-center text-base mt-1">
              <div className="rounded-md py-1 flex-grow w-4/12">
                <input
                  type="text"
                  name="outloan"
                  id="outloan"
                  placeholder="Outstanding Loan"
                  onChange={(e) => handleChange(index, "loan", e.target.value)}
                  className="text-base text-center font-normal rounded-lg w-full border border-gray-300 py-3"
                />
              </div>
              <div className="rounded-md py-1 flex-grow w-3/12">
                <input
                  type="text"
                  name="type"
                  id="type"
                  onChange={(e) => handleChange(index, "type", e.target.value)}
                  placeholder="Type"
                  className="text-base text-center font-normal rounded-lg w-full border border-gray-300 py-3"
                />
              </div>
              <div className="rounded-md py-1 w-3/12">
                <input
                  type="text"
                  name="amount"
                  onChange={(e) =>
                    handleChange(index, "amount", e.target.value)
                  }
                  id="amount"
                  placeholder="Amount"
                  className="text-base text-center font-normal rounded-lg w-full border border-gray-300 py-3"
                />
              </div>
              <div className="rounded-md py-1 w-2/12">
                <input
                  type="text"
                  name="emi"
                  id="emi"
                  onChange={(e) => handleChange(index, "emi", e.target.value)}
                  placeholder="EMI"
                  className="text-base text-center font-normal rounded-lg w-full border border-gray-300 py-3"
                />
              </div>
            </div>
          </>
        ))}
        <div className="py-2">
          <h2
            onClick={addInputSet}
            className="text-base font-medium py-1 rounded-md cursor-pointer bg-emeraldGreen text-white text-center"
          >
            Add Loan +
          </h2>
        </div>
      </div>
    </>
  );
}

export default OutstandingLoan;
