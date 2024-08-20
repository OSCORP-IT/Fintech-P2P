import { useState } from "react";
import PortfolioInput from "./PortfolioInput";
import Button from "../../../ui/Button";
const personalLoanTypes = [
  "Debt Consolidation Loan",
  "Home Improvement Loan",
  "Medical Loan",
  "Wedding Loan",
  "Vacation Loan",
  "Car Loan",
  "Moving Loan",
  "Equipment Purchase Loan",
];
function ExistingLoans() {
  const [inputSets, setInputSets] = useState([
    {
      accName: "",
      financialInstitution: "",
      facilityType: "",
      amount: "",
      currentOutstanding: "",
      totalInstall: "",
      recoveredInstallment: "",
      installmentAmount: 0,
    },
  ]);

  const addInputSet = () => {
    setInputSets([
      ...inputSets,
      {
        accName: "",
        financialInstitution: "",
        facilityType: "",
        amount: "",
        currentOutstanding: "",
        totalInstall: "",
        recoveredInstallment: "",
        installmentAmount: 0,
      },
    ]);
  };

  const handleChange = (index, field, value) => {
    const updatedInputSets = [...inputSets];
    updatedInputSets[index][field] = value;
    setInputSets(updatedInputSets);
  };

  return (
    <div className="w-3/4 px-4">
      {inputSets.map((inputSet, index) => (
        <div
          className="px-4 rounded-md mb-4 border border-gray-300"
          key={index}
        >
          <div className="text-center text-white font-semibold text-lg mt-4 bg-textColor1">
            Loan - {index + 1}
          </div>
          <div>
            <PortfolioInput
              label={"account name"}
              required={true}
              type="text"
              name="acc_name"
              id="acc_name"
              onChange={(e) => handleChange(index, "accName", e.target.value)}
              placeholder="Acount Name"
            />
          </div>
          <div>
            <PortfolioInput
              label="Financial Institution"
              type="text"
              name="financialInstitution"
              id="financialInstitution"
              required={true}
              onChange={(e) =>
                handleChange(index, "financialInstitution", e.target.value)
              }
              placeholder="Financial Institution"
            />
          </div>
          <div className="flex items-center gap-8">
            <div className="w-1/2 pb-2">
              <h2 className="text-sm font-semibold py-2">
                Facility Type
                <span className="text-xs text-red-600">*</span>
              </h2>
              <select
                id="guarantor_profession"
                required
                onChange={(e) =>
                  handleChange(index, "guarantorProdession", e.target.value)
                }
                className="w-full text-base rounded-md px-4 py-2 border border-gray-300"
              >
                <option value="">--Select--</option>
                {personalLoanTypes.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/2">
              <PortfolioInput
                label="sanction amount"
                type="text"
                name="amount"
                id="amount"
                onChange={(e) => handleChange(index, "amount", e.target.value)}
                placeholder="Sanction Amount/Limit"
                required={true}
              />
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="w-1/2">
              <PortfolioInput
                label={"Current outstanding"}
                type="text"
                name="currentOutstanding"
                onChange={(e) =>
                  handleChange(index, "currentOutstanding", e.target.value)
                }
                id="currentOutstanding"
                placeholder="Current outstanding"
                required={true}
              />
            </div>
            <div className="w-1/2">
              <PortfolioInput
                label={"Total Installment"}
                type="text"
                name="totalInstallment"
                id="totalInstallment"
                onChange={(e) =>
                  handleChange(index, "totalInstallment", e.target.value)
                }
                placeholder="Total Installment"
                required={true}
              />
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="w-1/2">
              <PortfolioInput
                label={"Installment Recovered"}
                type="text"
                name="recoveredInstallment"
                onChange={(e) =>
                  handleChange(index, "recoveredInstallment", e.target.value)
                }
                id="recoveredInstallment"
                placeholder="Recovered Installment"
                required={true}
              />
            </div>
            <div className="w-1/2">
              <PortfolioInput
                label={"Installment Amount (BDT)"}
                type="text"
                name="installmentAmount"
                id="installmentAmount"
                onChange={(e) =>
                  handleChange(index, "installmentAmount", e.target.value)
                }
                placeholder="Installment Amount"
                required={true}
              />
            </div>
          </div>
        </div>
      ))}

      <div className="py-4 w-1/4">
        <h2
          onClick={addInputSet}
          className="text-lg font-medium py-2 rounded-md cursor-pointer bg-textColor1 text-white text-center"
        >
          Add More Loans +
        </h2>
      </div>
      <div className=" pt-8">
        <Button
          addedClass={
            "bg-accentColor py-2 px-6 text-white capitalize m-auto font-semibold"
          }
        >
          Finish
        </Button>
      </div>
    </div>
  );
}

export default ExistingLoans;
