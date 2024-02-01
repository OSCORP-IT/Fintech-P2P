import { useState } from "react";
import { divisions } from "../../user/division";
import { Datepicker } from "flowbite-react";
import Button from "../../../ui/Button";
import PortfolioInput from "./PortfolioInput";
function BasicInfo() {
  //   const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleDivisionChange = (e) => {
    const selectedDivisionName = e.target.value;
    setSelectedDivision(selectedDivisionName);
    setSelectedDistrict(""); // Reset the selected district when the division changes
  };
  const handleDistrictChange = (e) => {
    const selectedDistrictName = e.target.value;
    setSelectedDistrict(selectedDistrictName);
  };
  return (
    <div className="w-3/4 px-4 overflow-y-scroll">
      <div>
        <PortfolioInput
          label={"your name"}
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          bg={"bg-gray-200"}
          required={true}
          defaultValue="Abidur Rahman"
          nid={true}
        />
      </div>
      <div className="w-full">
        <h2 className="text-sm font-semibold py-2">
          Date of Birth<span className="text-xs text-red-600">*</span>
          <span className="text-xs text-gray-600/50">(According to NID)</span>
        </h2>
        <div className="w-full">
          <Datepicker weekStart={7} className="rounded-md w-full" />
        </div>
      </div>
      <div>
        <PortfolioInput
          type="text"
          label={"present address"}
          name="address"
          required={true}
          id="address"
          placeholder="Present Address"
          className="w-full rounded-md px-4 py-2 border border-gray-300"
        />
      </div>
      <div className="flex gap-6">
        <div className="w-1/2">
          <h2 className="text-sm font-semibold py-2">
            Select Divison<span className="text-xs text-red-600">*</span>
          </h2>
          <select
            id="division"
            required
            onChange={handleDivisionChange}
            value={selectedDivision}
            className="w-full rounded-md px-4 py-2 border border-gray-300"
          >
            <option value="">--Select--</option>
            {divisions.divisions.map((division) => (
              <option key={division.id} value={division.name}>
                {division.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/2">
          <h2 className="text-sm font-semibold py-2">
            Select District<span className="text-xs text-red-600">*</span>
          </h2>
          <select
            id="district"
            required
            onChange={handleDistrictChange}
            value={selectedDistrict}
            disabled={!selectedDivision}
            className="w-full rounded-md px-4 py-2 border border-gray-300"
          >
            <option value="">--Select--</option>
            {selectedDivision &&
              divisions.divisions
                .find((division) => division.name === selectedDivision)
                ?.districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
          </select>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="w-1/2">
          <PortfolioInput
            label={"national identification (NID)"}
            type="text"
            name="NID"
            required={true}
            id="NID"
            placeholder="National ID"
            className="w-full rounded-md px-4 py-2 border border-gray-300"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-sm font-semibold py-2">
            Gender<span className="text-xs text-red-600">*</span>
          </h2>
          <div className="flex gap-4 text-base justify-between items-center font-medium">
            <div className="flex gap-2">
              <input type="radio" name="gender" value="male" />
              <h5>Male</h5>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="gender" value="female" />
              <h5>Female</h5>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="gender" value="others" />
              <h5>Others</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="w-1/2">
          <h2 className="text-sm font-semibold py-2">
            Marital Status<span className="text-xs text-red-600">*</span>
          </h2>
          <div className="flex gap-4 text-base justify-between items-center font-medium">
            <div className="flex gap-2">
              <input type="radio" name="gender" value="male" />
              <h5>Married</h5>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="gender" value="female" />
              <h5>Unmarried</h5>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <PortfolioInput
            label={"number of children"}
            type="number"
            name="children"
            id="children"
            placeholder="0"
            className="w-full rounded-md px-4 py-2 border border-gray-300"
          />
        </div>
      </div>
      <div className="pt-8 flex justify-center items-center">
        <Button addedClass={"bg-accentColor py-2 px-6 text-white capitalize"}>
          save & next
        </Button>
      </div>
    </div>
  );
}

export default BasicInfo;
