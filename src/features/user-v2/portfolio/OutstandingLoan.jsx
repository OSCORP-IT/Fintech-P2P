import { useState } from "react";

function OutstandingLoan() {
  const [inputSets, setInputSets] = useState([
    { loan: "", type: "", amount: "", emi: "" },
  ]);
  const [oustanding, setOutstanding] = useState(true);

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
        <h2 className="text-sm font-semibold py-2">
          Do You Have Any Outstanding Loans?
          <span className="text-xs text-red-600">*</span>
        </h2>
        <div className=" flex gap-4 justify-start items-center text-base  font-medium">
          <div className="flex gap-2">
            <input
              type="radio"
              checked={oustanding === true}
              onChange={() => setOutstanding(true)}
              name="outloan"
              value="outloan_yes"
            />
            <h5>Yes</h5>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              checked={oustanding === false}
              onChange={() => setOutstanding(false)}
              name="outloan"
              value="outloan_no"
            />
            <h5>No</h5>
          </div>
        </div>
      </div>
      {oustanding && (
        <div className="border border-gray-300 p-1 rounded-md">
          <div className="flex items-center gap-2 text-center text-base font-medium">
            <div className="rounded-md py-2 bg-gray-200  w-4/12">
              Outstanding Loan
            </div>
            <div className="rounded-md py-2 bg-gray-200  w-3/12">Type</div>
            <div className="rounded-md py-2 bg-gray-200 w-3/12">Amount</div>
            <div className="rounded-md py-2 bg-gray-200 w-2/12">EMI</div>
          </div>
          {inputSets.map((inputSet, index) => (
            <>
              <div className="flex items-center gap-2 text-center text-sm mt-1">
                <div className="rounded-md py-1 flex-grow w-4/12">
                  <input
                    type="text"
                    name="outloan"
                    id="outloan"
                    placeholder="Outstanding Loan"
                    onChange={(e) =>
                      handleChange(index, "loan", e.target.value)
                    }
                    className="text-sm text-center font-normal rounded-lg w-full border border-gray-300 py-2"
                  />
                </div>
                <div className="rounded-md py-1 flex-grow w-3/12">
                  <input
                    type="text"
                    name="type"
                    id="type"
                    onChange={(e) =>
                      handleChange(index, "type", e.target.value)
                    }
                    placeholder="Type"
                    className="text-sm text-center font-normal rounded-lg w-full border border-gray-300 py-2"
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
                    className="text-sm text-center font-normal rounded-lg w-full border border-gray-300 py-2"
                  />
                </div>
                <div className="rounded-md py-1 w-2/12">
                  <input
                    type="text"
                    name="emi"
                    id="emi"
                    onChange={(e) => handleChange(index, "emi", e.target.value)}
                    placeholder="EMI"
                    className="text-sm text-center font-normal rounded-lg w-full border border-gray-300 py-2"
                  />
                </div>
              </div>
            </>
          ))}
          <div className="py-2">
            <h2
              onClick={addInputSet}
              className="text-base font-medium py-1 rounded-md cursor-pointer bg-textColor1 text-white text-center"
            >
              Add Loan +
            </h2>
          </div>
        </div>
      )}
    </>
  );
}

export default OutstandingLoan;
