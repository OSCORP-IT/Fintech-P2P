import { Form } from "react-router-dom";
import { professions } from "./division";
import Steps from "./Steps";
import ProfileLayout from "./ProfileLayout";
import { FaUpload } from "react-icons/fa";
import { useState } from "react";

function Guarantor() {
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
    <ProfileLayout>
      <div className="my-4 w-full">
        <Steps />
        <Form method="POST">
          <div className="w-3/4 px-4">
            {inputSets.map((inputSet, index) => (
              <>
                <div className="text-center text-white border border-gray-300 font-semibold text-lg mt-4 bg-emeraldGreen">
                  Guarantor {index + 1}
                </div>
                <div>
                  <h2 className="text-base font-semibold py-2">
                    Guarantor Name
                    <span className="text-sm text-red-600">*</span>
                  </h2>
                  <input
                    type="text"
                    name="guarantor_name"
                    id="guarantor_name"
                    onChange={(e) =>
                      handleChange(index, "guarantorName", e.target.value)
                    }
                    placeholder="Gurantor Name"
                    className="py-3 px-4  text-xl font-normal rounded-lg w-full border border-gray-300"
                  />
                </div>
                <div>
                  <h2 className="text-base font-semibold py-2">
                    Guarantor NID<span className="text-sm text-red-600">*</span>
                  </h2>
                  <input
                    type="text"
                    name="guarantor_nid"
                    id="guarantor_nid"
                    onChange={(e) =>
                      handleChange(index, "gguarantorNid", e.target.value)
                    }
                    placeholder="Gurantor NID"
                    className="py-3 px-4  text-xl font-normal rounded-lg w-full border border-gray-300"
                  />
                </div>
                <div className="flex items-center gap-8">
                  <div className="w-1/2">
                    <h2 className="text-base font-semibold py-2">
                      Guarantor Phone
                      <span className="text-sm text-red-600">*</span>
                    </h2>
                    <input
                      type="text"
                      name="guarantor_phone"
                      id="guarantor_phone"
                      onChange={(e) =>
                        handleChange(index, "guarantorPhone", e.target.value)
                      }
                      placeholder="Guarantor Phone"
                      className="py-3 px-4  text-xl  rounded-lg w-full border border-gray-300"
                    />
                  </div>
                  <div className="w-1/2">
                    <h2 className="text-base font-semibold py-2">
                      Guarantor Profession
                      <span className="text-sm text-red-600">*</span>
                    </h2>
                    <select
                      id="guarantor_profession"
                      required
                      onChange={(e) =>
                        handleChange(
                          index,
                          "guarantorProdession",
                          e.target.value
                        )
                      }
                      className="w-full text-lg rounded-md px-4 py-3 border border-gray-300"
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
                    <h2 className="text-base font-semibold py-2">
                      Company/Organization Name
                      <span className="text-sm text-red-600">*</span>
                    </h2>
                    <input
                      type="text"
                      name="guarantor_company"
                      onChange={(e) =>
                        handleChange(index, "guaranatorCompany", e.target.value)
                      }
                      id="guarantor_company"
                      placeholder="Company/Organization"
                      className="py-3 px-4  text-xl  rounded-lg w-full border border-gray-300"
                    />
                  </div>
                  <div className="w-1/2">
                    <h2 className="text-base font-semibold py-2">
                      Designation
                      <span className="text-sm text-red-600">*</span>
                    </h2>
                    <input
                      type="text"
                      name="guarantor_designation"
                      id="guarantor_designation"
                      onChange={(e) =>
                        handleChange(
                          index,
                          "guarantorDesignation",
                          e.target.value
                        )
                      }
                      placeholder="Designation"
                      className="py-3 px-4  text-xl rounded-lg w-full border border-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-base font-semibold py-2">
                    Upload Guarantor Image
                    <span className="text-sm text-red-600">*</span>
                  </h2>
                  <div className="py-3 px-4  text-lg rounded-lg w-full border border-gray-300">
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
                className="text-lg font-medium py-2 rounded-md cursor-pointer bg-emeraldGreen text-white text-center"
              >
                Add Guarantor +
              </h2>
            </div>
            <div className="border border-x-gray-300 rounded-md px-2 py-4 my-4">
              <h2 className="bg-white text-sm font-medium mx-2 -mt-7 w-max px-1 ">
                Emergency Contact Details
              </h2>
              <div>
                <h2 className="text-base font-semibold py-2">
                  Conatact Name<span className="text-sm text-red-600">*</span>
                  <span className="text-sm text-gray-600/50">(As per NID)</span>
                </h2>
                <input
                  type="text"
                  name="emergency_name"
                  id="emergency_name"
                  className="py-3 px-4 rounded-md w-full border border-gray-300"
                  placeholder="Name"
                />
              </div>
              <div className="flex gap-8">
                <div className="w-1/2">
                  <h2 className="text-base font-semibold py-2">
                    Phone<span className="text-sm text-red-600">*</span>
                  </h2>
                  <input
                    type="text"
                    name="emergency_phone"
                    id="emergency_phone"
                    placeholder="Phone No"
                    className="py-2.5 px-4  text-xl font-normal rounded-lg w-full border border-gray-300"
                  />
                </div>
                <div className="w-1/2">
                  <h2 className="text-base font-semibold py-2">
                    Relation<span className="text-sm text-red-600">*</span>
                  </h2>
                  <input
                    type="text"
                    name="relation"
                    id="relation"
                    placeholder="Relation"
                    className="py-2.5 px-4  text-xl font-normal rounded-lg w-full border border-gray-300"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center mt-14 mb-4">
              <h1 className="px-4 py-3 bg-amberYellow rounded-lg cursor-pointer font-semibold text-lg">
                Save
              </h1>
            </div>
          </div>
        </Form>
      </div>
    </ProfileLayout>
  );
}

export default Guarantor;
