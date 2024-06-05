import { FaUpload } from "react-icons/fa6";
import { professions } from "../../user/division";
import { useState } from "react";
import PortfolioInput from "./PortfolioInput";
import Button from "../../../ui/Button";

function GuarantorInfo() {
  const [inputSets, setInputSets] = useState([
    {
      guarantorName: "",
      guarantorNid: "",
      guarantorPhone: "",
      guarantorProfession: "",
      guarantorCompany: "",
      guarantorDesignation: "",
      guarantorImage: "",
    },
    {
      guarantorName: "",
      guarantorNid: "",
      guarantorPhone: "",
      guarantorProfession: "",
      guarantorCompany: "",
      guarantorDesignation: "",
      guarantorImage: "",
    },
  ]);

  const addInputSet = () => {
    setInputSets([
      ...inputSets,
      {
        guarantorName: "",
        guarantorNid: "",
        guarantorPhone: "",
        guarantorProfession: "",
        guarantorCompany: "",
        guarantorDesignation: "",
        guarantorImage: "",
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
        <>
          <div className="text-center text-white border border-gray-300 font-semibold text-lg mt-4 bg-textColor1">
            Guarantor {index + 1}
          </div>
          <div>
            <PortfolioInput
              label={"guarantor name"}
              required={true}
              type="text"
              name="guarantor_name"
              id="guarantor_name"
              onChange={(e) =>
                handleChange(index, "guarantorName", e.target.value)
              }
              placeholder="Gurantor Name"
            />
          </div>
          <div>
            <PortfolioInput
              label="Guarantor NID"
              type="text"
              name="guarantor_nid"
              id="guarantor_nid"
              required={true}
              onChange={(e) =>
                handleChange(index, "gguarantorNid", e.target.value)
              }
              placeholder="Gurantor NID"
            />
          </div>
          <div className="flex items-center gap-8">
            <div className="w-1/2">
              <PortfolioInput
                label="guarantor phone"
                type="text"
                name="guarantor_phone"
                id="guarantor_phone"
                onChange={(e) =>
                  handleChange(index, "guarantorPhone", e.target.value)
                }
                placeholder="Guarantor Phone"
                required={true}
              />
            </div>
            <div className="w-1/2 pb-2">
              <h2 className="text-sm font-semibold py-2">
                Guarantor Profession
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
                {professions.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="w-1/2">
              <PortfolioInput
                label={"company/Organization name"}
                type="text"
                name="guarantor_company"
                onChange={(e) =>
                  handleChange(index, "guaranatorCompany", e.target.value)
                }
                id="guarantor_company"
                placeholder="Company/Organization"
                required={true}
              />
            </div>
            <div className="w-1/2">
              <PortfolioInput
                label={"designation"}
                type="text"
                name="guarantor_designation"
                id="guarantor_designation"
                onChange={(e) =>
                  handleChange(index, "guarantorDesignation", e.target.value)
                }
                placeholder="Designation"
                required={true}
              />
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold py-2">
              Upload Guarantor Image
              <span className="text-xs text-red-600">*</span>
            </h2>
            <div className="py-2 px-4  text-lg rounded-lg w-full border border-gray-300">
              <div className="flex flex-col items-center justify-center">
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer flex items-center gap-4 text-gray-700/50"
                >
                  <FaUpload />
                  <p>Browse Files</p>
                </label>
                <input
                  type="file"
                  id="fileInput"
                  onChange={(e) =>
                    handleChange(index, "guarantorImage", e.target.value)
                  }
                  className="hidden"
                  accept=".jpg, .jpeg, .png, .gif"
                />
              </div>
            </div>
          </div>
        </>
      ))}

      <div className="py-4 w-1/4">
        <h2
          onClick={addInputSet}
          className="text-lg font-medium py-2 rounded-md cursor-pointer bg-textColor1 text-white text-center"
        >
          Add Guarantor +
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

export default GuarantorInfo;
